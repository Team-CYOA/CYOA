const elements = document.getElementsByClassName('button');

const myFunction = function () {
  const attribute = this.getAttribute('id');
  console.log(attribute);
};

Array.from(elements).forEach((element) => {
  element.addEventListener('click', myFunction);
});
