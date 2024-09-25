chrome.storage.sync.get("selectedTheme", function(data) {
    if (data.selectedTheme) {
        const existingLink = document.querySelector("link[rel='stylesheet']");
        if (existingLink) {
            existingLink.href = data.selectedTheme; // Seçilen tema CSS dosyasının yolu
        } else {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = data.selectedTheme; // Seçilen tema CSS dosyasının yolu
            document.head.appendChild(link);
        }
    }
});

// Dinle, eğer popup.js'den bir mesaj alırsak
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.theme) {
        const existingLink = document.querySelector("link[rel='stylesheet']");
        if (existingLink) {
            existingLink.href = request.theme; // Seçilen tema CSS dosyasının yolu
        } else {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = request.theme; // Seçilen tema CSS dosyasının yolu
            document.head.appendChild(link);
        }
        sendResponse({ status: "success" });
    }
});
