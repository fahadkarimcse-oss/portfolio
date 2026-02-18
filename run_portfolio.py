import http.server
import socketserver
import webbrowser
import os
import threading
import time

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving portfolio at http://localhost:{PORT}")
        httpd.serve_forever()

if __name__ == "__main__":
    # Start the server in a separate thread
    threading.Thread(target=start_server, daemon=True).start()
    
    # Give the server a small moment to start
    time.sleep(1)
    
    # Open the browser
    print("Opening your portfolio in the browser...")
    webbrowser.open(f"http://localhost:{PORT}")
    
    # Keep the main thread alive to keep the server running
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nStopping server...")
