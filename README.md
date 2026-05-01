<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:38bdf8,100:818cf8&height=200&section=header&text=Wajoud%20H%20Noorani&fontSize=50&fontColor=ffffff&fontAlignY=38&desc=Data%20Scientist%20%7C%20ML%20Engineer&descAlignY=58&descSize=20" width="100%"/>

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/wajoud-noorani-7b6054118/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?flat-square&logo=github)](https://github.com/wajoud)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?flat-square&logo=twitter)](https://twitter.com/WajoudNoorani)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?flat-square&logo=gmail)](mailto:wajoudnoorani59@gmail.com)
[![Website](https://img.shields.io/badge/Live%20Site-wajoudnoorani.com-38bdf8?flat-square&logo=google-chrome&logoColor=white)](https://wajoudnoorani.com)

> *"Some people want it to happen, some wish it would happen, others make it happen."*
> — **Michael Jordan**

A modern, responsive personal portfolio built with **FastAPI** and a sleek dark glassmorphism design — showcasing projects in Machine Learning, Deep Learning, NLP, and Computer Vision.

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌙 **Dark Glassmorphism UI** | Modern premium aesthetic with blur effects |
| 📱 **Fully Responsive** | Optimized for all screen sizes |
| ⚡ **FastAPI Backend** | Lightweight, blazing-fast Python API |
| 🗂️ **Portfolio Filtering** | Filter projects by category with Isotope.js |
| 📬 **Gmail Integration** | Contact form powered by Gmail API + OAuth2 |
| ☁️ **AWS Production** | Deployed via Nginx + Gunicorn + EC2 |
| 🔐 **HTTPS Secured** | SSL via Let's Encrypt / Certbot |

---

## 🗂️ Project Highlights

| # | Project | Domain | Description |
|---|---|---|---|
| 1 | 🚗 [Smart Lane Change Detection AI](https://wajoudnoorani.com/Smart-Lane-Change-Detection-AI) | Computer Vision | AI system for detecting lane changes |
| 2 | 🧠 [NextGenNLP](https://wajoudnoorani.com/NextGenNLP) | NLP | Next-generation NLP pipelines |
| 3 | 👁️ [VisionAIExplore](https://wajoudnoorani.com/VisionAIExplore) | Computer Vision | Exploring vision AI techniques |
| 4 | 🤖 [MLInnovateHub](https://wajoudnoorani.com/MLInnovateHub) | Machine Learning | Collection of ML innovations |
| 5 | 🌐 [DeepLearningSphere](https://wajoudnoorani.com/DeepLearningSphere) | Deep Learning | Deep learning experiments & models |
| 6 | 🐍 [PythonProjectsHub](https://wajoudnoorani.com/PythonProjectsHub) | Python | General Python project collection |
| 7 | 🍃 [MongoDB](https://wajoudnoorani.com/MongoDB) | Database | MongoDB concepts and walkthroughs |
| 8 | 📊 [Discrete Distributions](https://wajoudnoorani.com/Discrete-Distributions) | Statistics | Statistical distribution visualizations |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | FastAPI · Python · Uvicorn · Gunicorn · Mangum |
| **Frontend** | HTML5 · CSS3 · Bootstrap 5 · JavaScript |
| **Templating** | Jinja2 |
| **Email** | Gmail API · Google OAuth2 |
| **Cloud** | AWS EC2 · AWS Lambda (via Mangum) |
| **Proxy / SSL** | Nginx · Certbot · Let's Encrypt |
| **UI Libraries** | Swiper.js · Isotope · GLightbox · Boxicons |

---

## 📁 Project Structure

```
my_portfolio/
├── main.py                  # FastAPI app & all routes
├── requirements.txt         # Python dependencies
└── app/
    ├── templates/           # Jinja2 HTML templates
    │   ├── index.html       # Main portfolio page
    │   └── portfolio-*.html # Individual project pages
    └── assets/
        ├── css/
        │   ├── style.css    # Base styles (Bootstrap theme)
        │   └── modern.css   # Dark glassmorphism overrides
        ├── js/
        │   └── main.js      # Frontend logic & interactions
        └── img/             # Images & portfolio media
```

---

## 💻 Local Development

### Prerequisites

- Python **3.9+**
- `pip` package manager
- Git

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/wajoud/my_portfolio.git
cd my_portfolio
```

### 2️⃣ Create a Virtual Environment

```bash
python3 -m venv .venv
source .venv/bin/activate        # macOS / Linux
# .venv\Scripts\activate         # Windows
```

### 3️⃣ Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 4️⃣ Run the Development Server

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

🌐 Open your browser at: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

## ☁️ Production Deployment — Ubuntu + AWS EC2

### 📦 Step 1 · Server Setup

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx python3-pip python3-venv -y
sudo apt install certbot python3-certbot-nginx -y
```

---

### 📁 Step 2 · Project Setup on Server

```bash
cd ~
git clone https://github.com/wajoud/my_portfolio.git
cd my_portfolio
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
pip install gunicorn uvicorn
```

---

### 🧪 Step 3 · Test the App on Server

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
curl http://localhost:8000
# ✅ If working → Stop with Ctrl+C
```

---

### ⚙️ Step 4 · Create Systemd Service

```bash
sudo nano /etc/systemd/system/portfolio.service
```

Paste the following configuration:

```ini
[Unit]
Description=Portfolio FastAPI App
After=network.target

[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/my_portfolio
ExecStart=/home/ubuntu/my_portfolio/.venv/bin/gunicorn \
          -w 2 \
          -k uvicorn.workers.UvicornWorker \
          -b 127.0.0.1:8000 \
          main:app
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl start portfolio.service
sudo systemctl enable portfolio.service
sudo systemctl status portfolio.service
```

---

### 🌐 Step 5 · Configure Nginx Reverse Proxy

```bash
sudo nano /etc/nginx/sites-available/wajoudnoorani.com
```

Paste the following:

```nginx
server {
    listen 80;
    server_name wajoudnoorani.com www.wajoudnoorani.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/wajoudnoorani.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

### 🔥 Step 6 · Configure Firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
sudo ufw status
```

---

### 🔐 Step 7 · Setup SSL (HTTPS via Let's Encrypt)

```bash
sudo certbot --nginx -d wajoudnoorani.com -d www.wajoudnoorani.com
sudo nginx -t
sudo systemctl reload nginx
# Verify HTTPS is working
curl -I https://wajoudnoorani.com
```

---

## 📡 Service Management

```bash
sudo systemctl status portfolio.service    # Check status
sudo systemctl restart portfolio.service   # Restart
sudo systemctl stop portfolio.service      # Stop
sudo systemctl start portfolio.service     # Start
```

---

## 🔍 Debugging & Logs

```bash
# App logs (live)
sudo journalctl -u portfolio.service -f

# Nginx status & config test
sudo systemctl status nginx
sudo nginx -t

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Check ports in use
lsof -i :8000
sudo netstat -tulpn | grep -E ':80|:443'
```

---

## 🔄 Deployment Update Flow

```bash
cd ~/my_portfolio
git pull
source .venv/bin/activate
pip install -r requirements.txt      # only if dependencies changed
sudo systemctl restart portfolio.service
```

---

## 🏗️ Architecture Overview

```
                  ┌─────────────┐
                  │   Browser   │
                  └──────┬──────┘
                         │ HTTPS (443)
                  ┌──────▼──────┐
                  │    Nginx    │  ← Reverse Proxy + SSL
                  └──────┬──────┘
                         │ HTTP (127.0.0.1:8000)
                  ┌──────▼──────┐
                  │  Gunicorn   │  ← Process Manager
                  └──────┬──────┘
                         │
                  ┌──────▼──────┐
                  │   Uvicorn   │  ← ASGI Workers
                  └──────┬──────┘
                         │
                  ┌──────▼──────┐
                  │   FastAPI   │  ← Application
                  └─────────────┘
```

---

## 🛡️ Production Checklist

- ✅ Application runs internally on `127.0.0.1:8000` (not publicly exposed)
- ✅ Nginx handles all public traffic with SSL termination
- ✅ SSL certificates managed by Certbot with auto-renewal
- ✅ Service auto-starts on server reboot via systemd
- ✅ Gunicorn manages worker processes with Uvicorn for ASGI
- ✅ Systemd ensures reliability with auto-restart on failure
- ✅ Firewall allows only ports 80, 443, and SSH

---

## 🌐 Connect with Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Wajoud_H_Noorani-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wajoud-noorani-7b6054118/)
[![GitHub](https://img.shields.io/badge/GitHub-wajoud-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wajoud)
[![Twitter](https://img.shields.io/badge/Twitter-WajoudNoorani-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/WajoudNoorani)
[![Email](https://img.shields.io/badge/Email-wajoudnoorani59@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wajoudnoorani59@gmail.com)

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:818cf8,100:38bdf8&height=120&section=footer" width="100%"/>

*© 2024 **Wajoud H Noorani** · All Rights Reserved · Thank you for visiting! 🙌*

</div>
