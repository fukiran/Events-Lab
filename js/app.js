document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);
 
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  
  const newListItem = document.createElement('li');
  newListItem.textContent = `${this.title.value} ${this.author.value} ${this.category.value}`;

  const list = document.querySelector('#reading-list');
  list.appendChild(newListItem);
  
  document.querySelector("#new-item-form").reset();
};
