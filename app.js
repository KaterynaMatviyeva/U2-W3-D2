//prendiamo il form e sul form submit
const localStorageKey = "users-name";

const input = document.getElementById("name");
const btnSave = document.getElementById("save");
const btnCancel = document.getElementById("cancel");
const form = document.querySelector("form");

const handleSubmit = function (e) {
  e.preventDefault();
  const inputContent = input.value;
  const clickedButton = e.submitter;

  if (clickedButton.id === "save") {
    localStorage.setItem(localStorageKey, inputContent);
    input.value = "";
  } else if (clickedButton.id === "cancel") {
    input.value = "";
    localStorage.removeItem(localStorageKey);
  }
};

form.addEventListener("submit", handleSubmit);
// const save = function () {
//   const inputContent = input.value;
//   localStorage.setItem(localStorageKey, value);
//   genereteUsersList();
// };
// const cancel = function () {
//   input.value = "";
//   localStorage.removeItem(localStorageKey);
// };

// const genereteUsersList = function () {};

// btnSave.addEventListener("click", save);
// btnCancel.addEventListener("click", cancel);
