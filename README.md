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

```bash
sudo systemctl status portfolio.service
sudo systemctl restart portfolio.service
sudo systemctl stop portfolio.service
sudo systemctl start portfolio.service
```

### View App Logs

```bash
sudo journalctl -u portfolio.service -f
```

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
