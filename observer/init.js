const newsObject =  new News();

addNews.addEventListener("click", () => {
    newsList.innerHTML = news.value;
    newsObject.sendNews(news.value);
    news.value = null;
});

addSubscriber.addEventListener("click", () => {
    subscriberList.innerText += subscriber.value + "\n";
    const observer =  new Observer(subscriber.value);
    newsObject.addSubscriber(observer);
    subscriber.value = null;
});

