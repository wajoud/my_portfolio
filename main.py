import base64, os
from email.message import EmailMessage

#for aws
from mangum import Mangum

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request as gg_Request
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, PlainTextResponse, FileResponse, RedirectResponse
from fastapi import Form, Request

MAIN_DIRECTORY = os.path.dirname(os.path.abspath(__file__))
TITLE = 'Portfolio'
CONTACTS = 'wajoudnoorani59@gmail.com'
URL_DOC = "/redoc"
URL_SWAGGER = "/docs"

templates = Jinja2Templates("app/templates")

app = FastAPI(
    title = TITLE,
    contacts = CONTACTS,
    redoc_url = URL_DOC,
    docs_url = URL_SWAGGER
)

handler = Mangum(app)

# Mount static assets
# 1. Mount legacy images for testimonials/backgrounds
app.mount("/assets/img", StaticFiles(directory="app/assets/img"), name="legacy_img")

# 2. Mount Vite built assets if they exist, otherwise fallback to legacy assets
dist_assets_path = os.path.join(MAIN_DIRECTORY, "portfolio", "dist", "assets")
if os.path.exists(dist_assets_path):
    app.mount("/assets", StaticFiles(directory=dist_assets_path), name="assets")
else:
    app.mount("/assets", StaticFiles(directory="app/assets"), name="assets")

@app.get("/", response_class=HTMLResponse)
def serve_home(request: Request):
    dist_index_path = os.path.join(MAIN_DIRECTORY, "portfolio", "dist", "index.html")
    if os.path.exists(dist_index_path):
        return FileResponse(dist_index_path)
    return templates.TemplateResponse("index.html", context={'request': request})


# All Portfolio section redirects (redirects to main page to keep visitor in modern React app layout)
@app.get("/Smart-Lane-Change-Detection-AI")
def portfolio_Smart_Lane_Change_Detection():
    return RedirectResponse(url="/#projects")

@app.get("/MongoDB")
def portfolio_mongodb():
    return RedirectResponse(url="/#projects")

@app.get("/Discrete-Distributions")
def portfolio_discrete_distributions():
    return RedirectResponse(url="/#projects")

@app.get("/PythonProjectsHub")
def portfolio_PythonProjectsHub():
    return RedirectResponse(url="/#projects")

@app.get("/NextGenNLP")
def portfolio_NextGenNLP():
    return RedirectResponse(url="/#projects")

@app.get("/VisionAIExplore")
def portfolio_VisionAIExplore():
    return RedirectResponse(url="/#projects")

@app.get("/MLInnovateHub")
def portfolio_MLInnovateHub():
    return RedirectResponse(url="/#projects")

@app.get("/DeepLearningSphere")
def portfolio_DeepLearningSphere():
    return RedirectResponse(url="/#projects")




@app.post("/contact", response_class=PlainTextResponse)
def send_email(
    email: str = Form(),
    message: str = Form(),
    subject: str = Form(),
    name: str = Form()
    ) -> str:

    SCOPES = ['https://www.googleapis.com/auth/gmail.insert']
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.

    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', scopes=SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds = creds.refresh(gg_Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    try:
        service = build('gmail', 'v1', credentials=creds)
        msg = EmailMessage()

        msg.set_content(message)

        msg['To'] = 'wajoudnoorani59@gmail.com'
        msg['From'] = email
        msg['Subject'] = subject

        # encoded message
        encoded_message = base64.urlsafe_b64encode(msg.as_bytes()) \
            .decode()

        create_message = {
            'raw': encoded_message,
            'labelIds': ['INBOX', 'UNREAD']
        }
        # pylint: disable=E1101
        service.users().messages().insert(userId="me", body=create_message).execute()
        response = 'OK'
    except HttpError as error:
        response = error
    return response

@app.get('/info')
async def about() -> dict[str, str]:
    """Give information about the API.

    Returns:
        Dict[str, str]: With shape :
    `
    {"app_title": <TITLE>, "app_contacts": <CONTACTS>, "api_url_doc": <URL_DOC>, "api_url_swagger": <URL_SWAGGER>}
    `
    """
    return {
        "app_title": TITLE,
        "app_contacts": CONTACTS,
        "api_url_doc": URL_DOC,
        "api_url_swagger": URL_SWAGGER
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
