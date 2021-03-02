const elements = document.getElementsByClassName('optionBtn');

const myFunction = function () {
  const attribute = this.getAttribute('id');
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
    document.getElementById('nextEnc').addEventListener('click', () => {
      // console.log(`next encounter is ${response.nextEncounter}`);
      window.location = `/encounters/${response.nextEncounter}`;
    });
  });
}

// generate next button that will grab the next encounter from db

// render the next encounters

// fetch State
