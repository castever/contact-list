QUnit.test("add contact increases model by one", function(assert) {

  window.model = []; //test model

  addContact("Benjamin Franklin");

  assert.ok(model.length == 1, "Passed!");
});

QUnit.test("add contact with name Benjamin Franklin adds contact with same name", function(assert) {

  window.model = []; //test model

  addContact("Benjamin Franklin");

  assert.ok(model[0].name == "Benjamin Franklin", "Passed!");
});