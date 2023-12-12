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

// Update shortcut to value of textbox
async function updateShortcut() {
  await browser.commands.update({
    name: sidebarToggle,
    shortcut: document.querySelector("#shortcut").value,
  });
}

// Reset shortcut and update textbox
async function resetShortcut() {
  await browser.commands.reset(sidebarToggle);
  updateUI();
}

// Update UI on page load
document.addEventListener("DOMContentLoaded", updateUI);

// Act on update and reset buttons
document.querySelector("#update").addEventListener("click", updateShortcut);
document.querySelector("#reset").addEventListener("click", resetShortcut);
