vi /etc/systemd/system/portfolio.service

'''
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
'''


vi /etc/nginx/sites-available/wajoudnoorani.com

'''
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
'''
