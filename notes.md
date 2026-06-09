vi /etc/systemd/system/portfolio.service

```bash
[Unit]
Description=Gunicorn instance to serve application
After=network.target

[Service]
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu/my_portfolio
Environment="PATH=/home/ubuntu/my_portfolio/.venv/bin"
ExecStart=/home/ubuntu/my_portfolio/.venv/bin/gunicorn -w 1 -k uvicorn.workers.UvicornWorker main:app

[Install]
WantedBy=multi-user.target
```


vi /etc/nginx/sites-available/wajoudnoorani.com

```bash
server {
    listen 80;
    server_name wajoudnoorani.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash

Need to chang in cloudflyer ip public - this chnage everytime we restart the ec2

sudo systemctl status nginx
sudo systemctl status portfolio.service

```

## Deployment / Update Flow on EC2

Since `credentials.json` and `token.json` are ignored by git, transfer them manually from your local machine to the server:

```bash
# 1. From local machine, copy credentials & tokens:
scp credentials.json token.json ubuntu@wajoudnoorani.com:/home/ubuntu/my_portfolio/

# 2. SSH into your EC2 server:
ssh ubuntu@wajoudnoorani.com

# 3. Pull latest code changes:
cd ~/my_portfolio
git pull

# 4. Rebuild the frontend assets:
cd portfolio
npm run build
cd ..

# 5. Restart the backend service:
sudo systemctl restart portfolio.service
sudo systemctl status portfolio.service
```
