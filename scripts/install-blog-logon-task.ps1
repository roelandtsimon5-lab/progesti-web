# Install Windows Task Scheduler job: run blog prompt on user logon (Tue/Thu gated in script).
# Run once in PowerShell:  cd web; .\scripts\install-blog-logon-task.ps1

$ErrorActionPreference = "Stop"

$ScriptPath = Join-Path $PSScriptRoot "blog-on-logon.ps1"
if (-not (Test-Path $ScriptPath)) {
  throw "Missing $ScriptPath"
}

$TaskName = "Progesti-Blog-OnLogon"
$Action = New-ScheduledTaskAction `
  -Execute "powershell.exe" `
  -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$ScriptPath`""

$Trigger = New-ScheduledTaskTrigger -AtLogOn -User $env:USERNAME
$Settings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -StartWhenAvailable `
  -ExecutionTimeLimit (New-TimeSpan -Minutes 10)

Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false -ErrorAction SilentlyContinue
Register-ScheduledTask `
  -TaskName $TaskName `
  -Action $Action `
  -Trigger $Trigger `
  -Settings $Settings `
  -Description "PROGESTI: ouvre le prompt blog Cursor les mardis/jeudis au demarrage session." `
  | Out-Null

Write-Host "OK - tache planifiee '$TaskName' creee (au logon)."
Write-Host "Test immediat:  powershell -File `"$ScriptPath`" -Force"
Write-Host "Logs:  $env:LOCALAPPDATA\ProgestiBlog\log.txt"
Write-Host "Desinstaller:  Unregister-ScheduledTask -TaskName $TaskName -Confirm:`$false"
