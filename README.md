themes.zip includes most of the weather renders for website with undone theme.css

I gave up coding this project bcs I'm soooooo noob for that. Feel free to try make it work!

How is that code works

Popup UI (popup.html):

The popup.html file contains the HTML structure for the popup window that appears when the extension icon is clicked.
It includes a header (h1) for the title and a button (Apply) for applying the selected theme. There is also a div (theme-grid) that will hold the theme buttons.
Styling (popup.css):

You can style the popup using popup.css to ensure that it looks good and the buttons are visible. Although you haven't provided that code here, it's where you can manage the appearance of your popup.
Theme List (popup.js):

In popup.js, an array named themes is defined, where each object contains the name of the theme and its associated image.
The selectedTheme variable is initialized to keep track of which theme is currently selected by the user.
Dynamic Theme Button Creation:

The code iterates through the themes array to create a button for each theme dynamically.
Each button (themeBtn) is given a background image, corresponding to the theme image, and a label showing the theme's name.
Selecting a Theme:

When a user clicks on a theme button, the selectedTheme variable is updated to the selected theme’s image.
The active theme button is visually distinguished (e.g., with a different border color) to indicate which theme is currently selected.
Applying the Theme:

When the Apply button is clicked, the following happens:
The selected theme is saved in Chrome's storage using chrome.storage.sync.set().
A message is sent to the content script (content.js) using chrome.tabs.sendMessage(), informing it about the selected theme.
The active tab is then reloaded with chrome.tabs.reload() to apply the new theme.
Content Script (content.js):

This script listens for messages from the popup. When a message with the selected theme is received, it creates a new <link> element for the theme's CSS file and appends it to the document's head.
This effectively changes the website’s styles to the selected theme when the page reloads.
How It All Comes Together
When you click on the extension icon:
The popup appears, displaying all available themes.
You can select a theme by clicking on its button.
After selecting, you click the Apply button to save your choice and refresh the current webpage, applying the selected theme’s styles.
This structure allows you to change the appearance of the website easily based on user preferences. If you have any specific parts you want to delve deeper into, let me know!
