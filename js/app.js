/*
  app.js
*/

/*
  clears the contact list UI
*/
function clearContactListUI() {
  var element = document.getElementById("contact-list");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
  builds the contact list from the model
  adds each contact to the #contact-list
*/
function buildContactListUI() {
  var listUI = document.getElementById('contact-list');

  var count = model.length;
  for (i = 0; i < count; i++) {
    var li = document.createElement('li');
    var text = document.createTextNode(model[i].name);
    li.appendChild(text);
    listUI.appendChild(li);
  }
}

/**
  refreshes the contact list with the model
  keeping the model and the UI in synch
*/
function refreshContactListUI() {
  clearContactListUI();
  buildContactListUI();
}

function addContact(name) {
  model.push({
    name: name
  });
}