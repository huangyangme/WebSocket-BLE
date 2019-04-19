# WebSocket-BLE

WebSocket bluetooth serve

通过 Node server 搜索和连接蓝牙设备，并将获取到的蓝牙数据通过 WebSocket 发送出去。


## 安装（Installation）

```
npm install
```

## 本地运行 Node Serve（Running Serve on local）

```bash
npm start
```

网页建立 WebSocket 连接，请求地址 `http:localhost:8001`

本项目用到：

- [node-bluetooth](https://github.com/song940/node-bluetooth),Bluetooth serial port communication for Node.js.
- [ws](https://github.com/websockets/ws), a Node.js WebSocket library.