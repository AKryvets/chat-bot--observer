const WebSocket = require("ws");

const server = new WebSocket.Server({port: 3000});

let lastMessageTime = false;

server.on("connection", ws => {
    ws.on("message", message => {
        lastMessageTime = new Date();
        message = message.toLowerCase();
        server.clients.forEach(client => {
            setTimeout(() => {
                if ((new Date()) - lastMessageTime > 14500) {
                    ws.send("Ты тут?");
                    setTimeout(() => {
                        if ((new Date()) - lastMessageTime > 29500) {
                            ws.send("через 3 секунды я уйду");
                            for (let i = 1; i <= 3; i++)
                                setTimeout(() => {
                                    if ((new Date()) - lastMessageTime > 30000 + 1000 * 1) {
                                        if (i < 3)
                                            ws.send(i);
                                        else {
                                            ws.send(i + " я ушел!");
                                            ws.close();
                                        }
                                    }
                                }, 1000*i);
                        }
                    }, 15000);
                }
            }, 15000);

            if (client.readyState === WebSocket.OPEN) {
                if (message == "привет") {
                    client.send("привет");
                    return;
                }
                if (message == "как дела?") {
                    client.send("отлично, я же бот");
                    return;
                }
                if (message == "который час?") {
                    const time = new Date();
                    client.send("Поточное время - " + time.getHours() + "." + time.getMinutes());
                    return;
                }
                if (message == "как тебя зовут?") {
                        client.send("Меня зовут бот Андрей");
                    return;
                }
                if (message == "пока") {
                        client.send("до свидания");
                    return;
                }
                ws.send("поищи сдесь = http://google.com");
            }
        });
    });
    lastMessageTime = (new Date()).getTime();
});