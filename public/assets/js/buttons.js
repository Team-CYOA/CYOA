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


      // get characterID
      const charEl = document.getElementsByClassName("charId")
      console.log(charEl)
      const charId = charEl[0].id
      console.log(charId)


      window.location = `/encounters/${response.nextEncounter}/${charId}`;
    });
  });
}

// generate next button that will grab the next encounter from db

function updateCharEncounter() {
  $.ajax({
    url: ,
    method: 'UPDATE'
  }).then((res) => {
    console.log("Character updated...")
  })
}


// render the next encounters

// fetch State

