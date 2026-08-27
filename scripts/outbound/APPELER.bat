@echo off
title Progesti Outbound
cd /d "%~dp0"
echo.
echo  ========================================
echo   PROGESTI OUTBOUND - Session d'appels
echo  ========================================
echo.
python --version >nul 2>&1
if errorlevel 1 (
    echo ERREUR: Python non installe. Telechargez-le sur python.org
    pause
    exit /b 1
)
pip install -r requirements.txt -q
python prospects.py call
pause
