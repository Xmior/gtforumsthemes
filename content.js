chrome.storage.sync.get("selectedTheme", function(data) {
    if (data.selectedTheme) {
        const existingLink = document.querySelector("link[rel='stylesheet']");
        if (existingLink) {
            existingLink.href = data.selectedTheme;
        } else {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = data.selectedTheme;
            document.head.appendChild(link);
        }
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.theme) {
        const existingLink = document.querySelector("link[rel='stylesheet']");
        if (existingLink) {
            existingLink.href = request.theme;
        } else {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = request.theme;
            document.head.appendChild(link);
        }
        sendResponse({ status: "success" });
    }
});
