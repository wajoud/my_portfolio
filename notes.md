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
