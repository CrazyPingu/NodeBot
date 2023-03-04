# Getting Started

Create a new file in the root called _config.json_ that will have this content:

```json
{
	"token": "your-token-goes-here",
	"clientId": "your-client-id-goes-here",
}
```

Install FFMPEG

Modify the file _node_modules/@discordjs/voice/dist/index.js_ around line 1362.
It will have to be like this:
```javascript
  addStatePacket(packet) {
    this.packets.state = packet;
    this.configureNetworking();	// Add this line
    if (typeof packet.self_deaf !== "undefined")
      this.joinConfig.selfDeaf = packet.self_deaf;
    if (typeof packet.self_mute !== "undefined")
      this.joinConfig.selfMute = packet.self_mute;
    if (packet.channel_id)
      this.joinConfig.channelId = packet.channel_id;
  }
```