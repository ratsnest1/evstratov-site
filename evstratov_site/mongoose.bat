@echo off
cd /d "E:\evstratov_site"
echo Starting Mongoose Web Server...
echo Open http://localhost:8000 on computer
echo Open http://192.168.31.251:8000 on iPhone
echo Press Ctrl+C to stop
mongoose.exe -listening_ports 8000
pause