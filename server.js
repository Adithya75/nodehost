import http from "http";
import app from "./src/app.js";

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("servere is running on 3000");
});
