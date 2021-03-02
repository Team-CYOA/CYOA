const elements = document.getElementsByClassName('button');

const myFunction = async function () {
  const attribute = this.getAttribute('id');
  const stateChange = this.getAttribute('stateChange');
  await updateState(stateChange);
  console.log(attribute);
  ajaxOptions(attribute);
};

Array.from(elements).forEach((element) => {
  element.addEventListener('click', myFunction);
});

function ajaxOptions(optId) {
  $.ajax({
    url: `/api/options/${optId}`,
    method: 'GET',
  }).then((response) => {
    console.log(response);
    document.getElementById('btnContainer').classList.add('hideButton');
    consequenceText(response.consequence);
  });
}

const updateState = (stateChange) => {
  console.log("updating:", stateChange);

}


// build function to hide buttons
// generate next button that will grab the next encounter from db
// render the next encounters

// fetch State
// disable buttons until text is rendered