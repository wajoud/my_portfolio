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
from fastapi.responses import HTMLResponse, PlainTextResponse, FileResponse , RedirectResponse
from fastapi import Form, Request

MAIN_DIRECTORY = os.path.dirname(os.path.abspath(__file__))
TITLE = 'Portfolio'
CONTACTS = 'wajoudnoorani59@gmail.com'
URL_DOC = "/redoc"
URL_SWAGGER = "/docs"

templates = Jinja2Templates("/Users/wajoud/Desktop/Rough Work/websit/fast_api_basics/portfolio/app/templates")

app = FastAPI(
    title = TITLE,
    contacts = CONTACTS,
    redoc_url = URL_DOC,
    docs_url = URL_SWAGGER
)

handler = Mangum(app)

app.mount("/assets", StaticFiles(directory="/Users/wajoud/Desktop/Rough Work/websit/fast_api_basics/portfolio/app/assets"), name="assets")

@app.get("/", response_class=HTMLResponse)
def serve_home(request: Request):
    return templates.TemplateResponse("index.html", context={'request': request})

@app.get("/golf-booking-app", response_class=HTMLResponse)
def portfolio_golf(request: Request):
    return templates.TemplateResponse("portfolio-golf-booking-app.html", context={'request': request})

@app.get("/mastermind", response_class=HTMLResponse)
def portfolio_mastermind(request: Request):
    return templates.TemplateResponse("portfolio-mastermind.html", context={'request': request})
   
@app.get("/daily-coding-problem", response_class=HTMLResponse)
def portfolio_dcp(request: Request):
    return templates.TemplateResponse("portfolio-daily-coding-problem.html", context={'request': request})

@app.get("/euromillions-api", response_class=HTMLResponse)
def portfolio_euromillions(request: Request):
    return templates.TemplateResponse("portfolio-euromillions-api.html", context={'request': request})

@app.get("/homer-bot", response_class=HTMLResponse)
def portfolio_homerbot(request: Request):
    return templates.TemplateResponse("portfolio-homer-bot.html", context={'request': request})

@app.get("/homer-bot-paper", response_class=FileResponse)
def download_paper(request: Request):
    return os.path.join(MAIN_DIRECTORY, "assets", "file", "PFE.pdf")


@app.get("/asian-hornet", response_class=HTMLResponse)
def portfolio_hornet(request: Request):
    return templates.TemplateResponse("portfolio-asian-hornet.html", context={'request': request})

@app.get("/surfrider", response_class=HTMLResponse)
def portfolio_surfrider(request: Request):
    return templates.TemplateResponse("portfolio-surfrider.html", context={'request': request})

@app.get("/everimpact", response_class=HTMLResponse)
def portfolio_surfrider(request: Request):
    return templates.TemplateResponse("portfolio-everimpact.html", context={'request': request})

@app.get("/everimpact-presentation", response_class=FileResponse)
def download_paper(request: Request):
    return os.path.join(MAIN_DIRECTORY, "assets", "file", "everimpact.pdf")

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
            'raw': encoded_message
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
