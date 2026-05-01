<<<<<<< HEAD
<div align="center">

# 👨‍💻 Wajoud H Noorani — Personal Portfolio

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wajoud-noorani-7b6054118/)

> *"Some people want it to happen, some wish it would happen, others make it happen."* — Michael Jordan

A modern, responsive personal portfolio showcasing my journey as a **Data Scientist** — featuring projects in Machine Learning, Deep Learning, NLP, and Computer Vision, built with a sleek dark glassmorphism design.

</div>

---

## ✨ Features

- 🌙 **Dark Glassmorphism UI** — modern, premium aesthetic
- 📱 **Fully Responsive** — optimized for all screen sizes
- ⚡ **FastAPI Backend** — lightweight and blazing fast
- 🗂️ **Portfolio Filtering** — filter projects by category
- 📬 **Contact Integration** — Gmail API powered contact form
- ☁️ **AWS Ready** — deployed via Mangum adapter

---

## 🗂️ Project Highlights

| Project | Domain | Description |
|---|---|---|
| 🚗 Smart Lane Change Detection AI | Computer Vision | AI system for detecting lane changes |
| 🧠 NextGenNLP | NLP | Next-generation NLP pipelines |
| 👁️ VisionAIExplore | Computer Vision | Exploring vision AI techniques |
| 🤖 MLInnovateHub | Machine Learning | Collection of ML innovations |
| 🌐 DeepLearningSphere | Deep Learning | Deep learning experiments & models |
| 🐍 PythonProjectsHub | Python | General Python project collection |
| 🍃 MongoDB Blog | Database | MongoDB concepts and walkthroughs |
| 📊 Discrete Distributions | Statistics | Statistical distribution visualizations |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | FastAPI, Python, Uvicorn, Mangum |
| **Frontend** | HTML5, CSS3, Bootstrap 5, JavaScript |
| **Templating** | Jinja2 |
| **Email** | Gmail API (Google OAuth2) |
| **Cloud** | AWS Lambda (via Mangum) |
| **UI Libraries** | Swiper.js, Isotope, GLightbox, Boxicons |

---

## 🚀 Getting Started

### Prerequisites
- Python **3.9+**
- `pip` package manager

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/wajoud/my_portfolio.git
cd my_portfolio
```

### 2️⃣ Create a Virtual Environment
=======
# 🚀 Portfolio Deployment Guide

**Domain:** wajoudnoorani.com  
**Stack:** FastAPI + Gunicorn + Nginx + SSL (Let's Encrypt)  
**Server:** Ubuntu (AWS EC2)

---

## 📦 1️⃣ Server Setup

### Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### Install Required Packages

```bash
sudo apt install nginx python3-pip python3-venv -y
sudo apt install certbot python3-certbot-nginx -y
```

---

## 📁 2️⃣ Project Setup

```bash
cd ~
git clone <your-repo-url>
cd my_portfolio
```

### Create Virtual Environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
pip install gunicorn uvicorn
```

---

## 🧪 3️⃣ Test Application Locally

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Test:

```bash
curl http://localhost:8000
```

If working → Stop the server with `Ctrl+C`.

---

## ⚙️ 4️⃣ Create Systemd Service

Create service file:

```bash
sudo nano /etc/systemd/system/portfolio.service
```

Paste:

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

### Reload & Start Service

```bash
sudo systemctl daemon-reload
sudo systemctl start portfolio.service
sudo systemctl enable portfolio.service
sudo systemctl status portfolio.service
```

---

## 🌐 5️⃣ Configure Nginx Reverse Proxy

Create config file:

```bash
sudo nano /etc/nginx/sites-available/wajoudnoorani.com
```

Add:

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

### Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/wajoudnoorani.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔥 6️⃣ Configure Firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
sudo ufw status
```

---

## 🔐 7️⃣ Setup SSL (HTTPS)

```bash
sudo certbot --nginx -d wajoudnoorani.com -d www.wajoudnoorani.com
```

### Verify configuration:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Test HTTPS:

```bash
curl -I https://wajoudnoorani.com
```

---

## 📊 8️⃣ Important Debug Commands

### Check App Service
>>>>>>> 34b03caf31877a3f4371dadff326abcdc4a80014

```bash
python3 -m venv .venv
source .venv/bin/activate        # macOS / Linux
# .venv\Scripts\activate         # Windows
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the Development Server

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

🌐 Open your browser and visit: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

## 📡 Production / Service Management

If you're running the portfolio as a `systemd` service on a Linux server:

```bash
# Check service status
sudo systemctl status portfolio.service

# Restart the service
sudo systemctl restart portfolio.service
<<<<<<< HEAD

# Stop the service
sudo systemctl stop portfolio.service
```

---

## 📁 Project Structure

```
my_portfolio/
├── main.py                  # FastAPI app & routes
├── requirements.txt         # Python dependencies
└── app/
    ├── templates/           # Jinja2 HTML templates
    │   ├── index.html
    │   └── portfolio-*.html
    └── assets/
        ├── css/
        │   ├── style.css    # Base styles
        │   └── modern.css   # Dark theme overrides
        ├── js/
        │   └── main.js      # Frontend logic
        └── img/             # Images & portfolio media
```

---
=======
sudo systemctl stop portfolio.service
sudo systemctl start portfolio.service
```

### View App Logs
>>>>>>> 34b03caf31877a3f4371dadff326abcdc4a80014

```bash
sudo journalctl -u portfolio.service -f
```

<<<<<<< HEAD
<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Wajoud_H_Noorani-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wajoud-noorani-7b6054118/)
[![GitHub](https://img.shields.io/badge/GitHub-wajoud-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wajoud)
[![Twitter](https://img.shields.io/badge/Twitter-WajoudNoorani-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/WajoudNoorani)
[![Email](https://img.shields.io/badge/Email-wajoudnoorani59@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wajoudnoorani59@gmail.com)

</div>

---

<div align="center">

© 2024 **Wajoud H Noorani** · All Rights Reserved

*Thank you for visiting! Your feedback and connections are always welcome.* 🙌

</div>
=======
### Check Nginx

```bash
sudo systemctl status nginx
sudo nginx -t
```

### View Nginx Logs

```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Check Ports

```bash
lsof -i :8000
sudo netstat -tulpn | grep -E ':80|:443'
```

---

## 🏗 Final Architecture

```
Browser
   ↓
HTTPS (443)
   ↓
Nginx (Reverse Proxy)
   ↓
Gunicorn (Process Manager)
   ↓
Uvicorn Workers (ASGI)
   ↓
FastAPI Application
```

---

## 🚀 Deployment Update Flow

Whenever new code is pushed:

```bash
cd ~/my_portfolio
git pull
source .venv/bin/activate
pip install -r requirements.txt   # only if dependencies changed
sudo systemctl restart portfolio.service
```

---

## 🛡 Production Notes

- **Application** runs internally on `127.0.0.1:8000`
- **Nginx** handles all public traffic (static files, SSL termination, reverse proxy)
- **SSL certificates** managed by Certbot (auto-renewal enabled)
- **Service** auto-starts on server reboot
- **Gunicorn** manages worker processes with Uvicorn workers for ASGI compatibility
- **Systemd** ensures reliability with auto-restart on failure
- **Firewall** configured to only allow necessary ports (80, 443, SSH)

---

## 🎯 Result

This setup provides:

- ✅ Production-ready FastAPI deployment
- ✅ Reverse proxy via Nginx
- ✅ HTTPS enabled (Let's Encrypt)
- ✅ Background service management via systemd
- ✅ Proper firewall configuration
- ✅ Secure and scalable architecture
- ✅ Automatic SSL renewal

---

## 👨‍💻 Maintained by

**Wajoud Noorani**
>>>>>>> 34b03caf31877a3f4371dadff326abcdc4a80014
