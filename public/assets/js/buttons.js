const elements = document.getElementsByClassName('optionBtn');

const myFunction = function () {
  const attribute = this.getAttribute('id');

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
    document.getElementById('btnContainer').classList.add('hideButton');
    consequenceText(response.consequence);

    // get all info needed to update character's current event
    const charEl = document.getElementsByClassName("charId")
    const charId = charEl[0].id
    const newEnc = response.nextEncounter;
    updateCharEncounter(charId, newEnc)


    document.getElementById('nextEnc').addEventListener('click', () => {
      // console.log(`next encounter is ${response.nextEncounter}`);

      window.location = `/encounters/${response.nextEncounter}/${charId}`;
    });
  });
}

// updates character with next encounter
function updateCharEncounter(charId, encId) {
  console.log("Updating Char... ID: ", charId, " encId: ", encId)
  $.ajax({
    url: `/api/characters/${charId}/${encId}`,
    method: 'PUT'
  }).then(() => {
    console.log("Character updated...")
  })
}

// generate next button that will grab the next encounter from db



// render the next encounters

// fetch State

