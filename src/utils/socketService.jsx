import { initializeConnect } from "react-redux/es/components/connect";
import io from "socket.io-client";
const SOCKET_URL = "http://localhost:9000";

class WSService {
  initializeSocket = async () => {
    try {
      this.socket = io(SOCKET_URL, {
        transports: ["websocket"],
      });

      console.log("initializing socket", this.socket);

      this.socket.on("connect", (data) => {
        console.log("===== socket conneted =====");
      });

      this.socket.on("disconnect", (data) => {
        console.log("===== socket disconneted =====");
      });

      this.socket.on("error", (data) => {
        console.log("socket error", data);
      });
    } catch (error) {
      console.log("socket is not initialized", error);
    }
  };

  emit(event, data = {}) {
    this.socket.emit(event, data);
  }
  on(event, cb) {
    this.socket.on(event, cb);
  }
  removeListener(listenerName) {
    this.socket.removeListener(listenerName);
  }
}

const socketServices = new WSService();

export default socketServices;
