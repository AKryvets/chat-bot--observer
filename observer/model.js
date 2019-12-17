const news = document.getElementById("news");
const addNews = document.getElementById("addNews");
const newsList = document.getElementById("newsList");
const subscriber = document.getElementById("subscriber");
const addSubscriber = document.getElementById("addSubscriber");
const subscriberList = document.getElementById("subscriberList");

class News {
    constructor() {
        this.news = "";
        this.subscribers = [];
    }

    sendNews(text) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.subscribers.map(item => {
            item.sendMessage(this);
        })
    }
    addSubscriber(observer){
        this.subscribers.push(observer);
    }
}

class Observer{
    constructor(name){
        this.name = name;
    }
    sendMessage(object){
        console.log("i get message  - "  + object.news + " - my name - " + this.name );
    }
}