1. 构建前端

    ```javascript
    cd D:\Archive\Project\octopus\web; cmd /c "set PATH=D:\Archive\Project\octopus\.local\node;%PATH%&& pnpm run build"
    ```

2. 复制前端构建产物
   ```javascript
   cd D:\Archive\Project\octopus; New-Item -ItemType Directory -Path "static\out" -Force; Copy-Item -Path "web\out\*" -Destination "static\out\" -Recurse -Force; Get-ChildItem "static\out" | Select-Object Name
   ```
3. 启动服务
    ```javascript
   cd D:\Archive\Project\octopus; cmd /c "set PATH=D:\Archive\Project\octopus\.local\node;D:\Archive\Project\octopus\.local\go\bin;%PATH%&& set GOROOT=D:\Archive\Project\octopus\.local\go&& set GOPROXY=https://goproxy.cn,direct&& go run main.go start"
   ```