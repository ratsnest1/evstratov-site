@echo off
echo Starting web server in E:\evstratov_site
cd /d "E:\evstratov_site"
python -m http.server 8000
pause