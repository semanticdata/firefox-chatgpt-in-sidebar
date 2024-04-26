const sidebarToggle = "_execute_sidebar_action";

// Update UI and set value of textbox
async function updateUI() {
  let commands = await browser.commands.getAll();
  for (command of commands) {
    if (command.name === sidebarToggle) {
      document.querySelector("#shortcut").value = command.shortcut;
    }
  }
}

// Adds Sidebar Toggle Button
function openSidebar() {
  browser.sidebarAction.toggle();
}

browser.browserAction.onClicked.addListener(openSidebar);
document.addEventListener("DOMContentLoaded", updateUI);
