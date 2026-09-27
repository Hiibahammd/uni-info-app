@echo off
title Starting UniCompass PK - Undergraduate Admissions App
echo ========================================================
echo   UniCompass PK - Undergraduate Admissions App
echo ========================================================
echo.
echo Starting local web server on port 3000...
echo.

start "" http://localhost:3000

py -m http.server 3000
if %ERRORLEVEL% NEQ 0 (
    echo Python command 'py' not found, trying 'python'...
    start "" http://localhost:3000
    python -m http.server 3000
)

pause
