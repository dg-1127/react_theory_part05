const time = document.createElement("h1");
setInterval(() => {
  time.innerText = new Date().toLocaleTimeString();
}, 1000);
document.body.appendChild(time);
