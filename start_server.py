import http.server
import socketserver
import webbrowser


# 设置端口
PORT = 8000


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加CORS头，允许iframe加载
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()


print(f"启动本地服务器在端口 {PORT}...")
print(f"请访问: http://localhost:{PORT}")
print("按 Ctrl+C 停止服务器")

# 创建服务器
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    # 自动在默认浏览器中打开网页
    webbrowser.open(f'http://localhost:{PORT}')
    # 启动服务器
    httpd.serve_forever() 