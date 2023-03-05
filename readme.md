# Getting Started

Create a new file in the root called _config.json_ that will have this content:

```json
{
	"token": "your-token-goes-here",
	"clientId": "your-client-id-goes-here",
}
```

Install FFMPEG

Modify the file _node_modules/@discordjs/voice/dist/index.js_ commenting out the line 280.
It will have to be like this:
```javascript
  constructor(remote, debug = false) {
    super();
    this.socket = (0, import_node_dgram.createSocket)("udp4");
    this.socket.on("error", (error) => this.emit("error", error));
    this.socket.on("message", (buffer) => this.onMessage(buffer));
    this.socket.on("close", () => this.emit("close"));
    this.remote = remote;
    this.keepAlives = [];
    this.keepAliveBuffer = import_node_buffer2.Buffer.alloc(8);
    // this.keepAliveInterval = setInterval(() => this.keepAlive(), KEEP_ALIVE_INTERVAL);
    setImmediate(() => this.keepAlive());
    this.debug = debug ? (message) => this.emit("debug", message) : null;
  }
```