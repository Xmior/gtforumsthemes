// Forum bağlantılarını tanımla
const href = document.querySelectorAll("td.cell-forum > div.forum-wrapper > div > a");
const hrefTarget = document.querySelectorAll("td.cell-forum");

for (let index = 0; index < hrefTarget.length; index++) {
    if (href[index]) { // null kontrolü
        hrefTarget[index].setAttribute("onclick", "window.location='" + href[index].href + "'");
    }
}

// Konu bağlantılarını tanımla
const topicLink = document.querySelectorAll(".topic-item .topic-wrapper .topic-title");
const topicTarget = document.querySelectorAll(".cell-topic");

for (let index = 0; index < topicTarget.length; index++) {
    if (topicLink[index]) { // null kontrolü
        topicTarget[index].setAttribute("onclick", "window.location='" + topicLink[index].href + "'");
    }
}
