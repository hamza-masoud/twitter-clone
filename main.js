let tweets = [];
function addNewTweet() {
    const {username, content} = document.forms[0];
    if (username.value === "" || content.value === "")return;
    tweets.push({
        author : username.value,
        content : content.value,
    });
    console.table(tweets);
    let tweetsElement = document.getElementById("tweets");
    const newTweet = document.createElement("div");
    newTweet.className = "tweet";
    // and give it some content
    // username
    let usernameSpan = document.createElement("div");
    const date = new Date();
    const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMonth()}:${date.getSeconds()}`;
    usernameSpan.innerHTML = '<div class="tweet-username"><div class="user-image"><i class="fa-solid fa-user"></i></div>' + `<div class="username-date"><span>${username.value}</span> <span class="date">${dateString}</span></div></div>`;
    newTweet.append(usernameSpan);

    // content
    let contentParagraph = document.createElement("p");
    contentParagraph.innerText = content.value;
    newTweet.append(contentParagraph);
    //buttons
    let buttons = document.createElement("div");
    buttons.innerHTML = `<button class="like" onclick="like()">like</button><button class="retweet" onclick="retweet()">retweet</button>`;
    newTweet.append(buttons);
    tweetsElement.insertBefore(newTweet, tweetsElement.firstChild);

    document.forms[0].reset();

    return false;
}

function retweet() {

}

function like() {

}