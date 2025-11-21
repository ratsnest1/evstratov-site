@echo off
cd /d "E:\evstratov_site"
echo Server starting...
echo Open: http://localhost:8000
echo iPhone: http://192.168.31.251:8000
python -m http.server 8000
pause