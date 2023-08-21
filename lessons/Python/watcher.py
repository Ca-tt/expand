import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import subprocess

class MyHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.is_directory:
            return
        if event.src_path.endswith(".py"):  # Change this to the appropriate file extension
            # print(f"Detected change in {event.src_path}")
            subprocess.run(["python", event.src_path], shell=True)

event_handler = MyHandler()
observer = Observer()
path = "."  # Specify the directory you want to watch

observer.schedule(event_handler, path, recursive=True)
observer.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()

observer.join()
