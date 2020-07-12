const dwellingType = document.getElementById("type"),
  livingArea = document.getElementById("area"),
  timeFrame = document.getElementById("timeframe"),
  editBtn = document.querySelector(".card-edit button"),
  editSection = document.querySelector(".edit"),
  editDefaultValues = document.querySelectorAll(".edit-item__select-default"),
  editOptions = document.querySelectorAll(".edit-item__select-options"),
  editOptionItems = document.querySelectorAll(".edit-item__select-option"),
  editNum = document.querySelector(`input[type='number']`),
  cancelBtn = document.querySelector(".cta__light"),
  submitBtn = document.querySelector(".cta__main"),
  closeSectionBtn = document.querySelector(".edit-close button");

const showEdit = () => {
  editSection.style.display = "block";
};

const hideEdit = () => {
  editSection.style.display = "none";
};

const submitForm = () => {
  dwellingType.innerHTML = editDefaultValues[0].innerText;
  timeFrame.innerHTML = editDefaultValues[1].innerText;
  livingArea.innerHTML = `${editNum.value} m<sup>2</sup>`;
  hideEdit();
};

function updateDefault() {
  this.parentElement.previousElementSibling.children[0].innerHTML = this.innerHTML;
  editOptions.forEach((option) => option.classList.remove("is-open"));
  this.parentElement.previousElementSibling.lastElementChild.classList.toggle(
    "rotate"
  );
}

function showMenu() {
  this.nextElementSibling.classList.toggle("is-open");
  this.lastElementChild.classList.toggle("rotate");
}

editBtn.addEventListener("click", showEdit);
cancelBtn.addEventListener("click", hideEdit);
closeSectionBtn.addEventListener("click", hideEdit);
submitBtn.addEventListener("click", submitForm);

editDefaultValues.forEach((dropDown) =>
  dropDown.addEventListener("click", showMenu)
);

editOptionItems.forEach((optionItem) =>
  optionItem.addEventListener("click", updateDefault)
);
/**
 * **GOALS**
 * User should be able to:
 *  click on pen btn which will then show the edit section which should be at display none from the css initially (done)
 *  when section comes up,
 *    user should have the ability to click on the edit select default or drop down button (done)
 *      As a result, the options should then display (done) and the drop down button should rotate (done)
 *      User should then be able to click on any of the select options and the value they click should be updated as the "default value" (done)
 *    user should also be able to enter a NUMBER in the living area input (only a number or form won't submit)
 *    user also has the ability to click on save button which will then update the values on the read section and close/hide the edit section (done)
 *    user can also cancel their edit which does not update anything but only close the section (done)
 *    user also can click on close btn to close/hide section (done)
 */
