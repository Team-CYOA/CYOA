const elements = document.getElementsByClassName('button');

const myFunction = function () {
  const attribute = this.getAttribute('id');
  console.log(attribute);

  //Erik's Addition
  ajaxOptions(attribute)

};

Array.from(elements).forEach((element) => {
  element.addEventListener('click', myFunction);
});



// Erik's Additions

function ajaxOptions(optId){
  $.ajax({
    url: `/api/options/${optId}`,
    method: "GET"
}).then(function(response){    

  console.log(response)
  consequenceText(response.consequence)
})
}