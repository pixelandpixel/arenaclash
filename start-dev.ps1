$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectDir
Start-Process -NoNewWindow -FilePath "npx" -ArgumentList "next dev"
