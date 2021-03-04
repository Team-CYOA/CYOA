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
    const stateChange = response.stateChange;
    const charEl = document.getElementsByClassName("charId")
    const charId = charEl[0].id
    const newEnc = response.nextEncounter;

    if (response.nextEncounter < 0) {
      document.getElementById('endButton').classList.remove('hideButton');

      // here we will add activeChar to pastChar via ajax, then delete from activeChar
      addToPastChar(charId)
    }
    

    
    updateCharEncounter(charId, newEnc, stateChange)

    document.getElementById('nextEnc').addEventListener('click', () => {
      // console.log(`next encounter is ${response.nextEncounter}`);

      window.location = `/encounters/${response.nextEncounter}/${charId}`;
    });
  });
}

// updates character with next encounter
function updateCharEncounter(charId, encId, stateChange) {
  console.log("Updating Char... ID: ", charId, " encId: ", encId)
  $.ajax({
    url: `/api/characters/${charId}/${encId}`,
    method: 'PUT',
    data: {sc: `${stateChange}`},
  }).then(() => {
    console.log("Character updated...")
  })
}

function addToPastChar(charId){
  $.ajax({
    url: `/api/pastcharacters/${charId}`,
    method: 'POST'
  }).then(() => {
    console.log("Character placed in hall of heroes...")
    deleteFromActiveChar(charId);
  })
}

function deleteFromActiveChar(charId){
  $.ajax({
    url: `/api/characters/${charId}`,
    method: 'DELETE'
  }).then(() => {
    console.log("Character removed from active duty...")
  })
}

// generate next button that will grab the next encounter from db

// render the next encounters

// fetch State

