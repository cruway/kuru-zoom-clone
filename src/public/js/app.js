const socket = new WebSocket(`ws:/${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to Browser");
});

socket.addEventListener("message", (message) => {
    console.log("Just got this: ", message, " from the Server");
});

socket.addEventListener("close", () => {
    console.log("Connected from Server ❌");
});