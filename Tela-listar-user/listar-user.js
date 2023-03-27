var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



document.addEventListener('DOMContentLoaded', function() {
    const redBox = document.querySelector('.box.red');
    redBox.style.display = 'none';
  });
  
  const buttons = document.querySelectorAll('.button-change');
  const blueBox = document.querySelector('.table_docente');
  const redBox = document.querySelector('.table_admin');
  
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      buttons.forEach((button) => {
        button.classList.remove('active');
      });
      this.classList.add('active');
      const color = this.getAttribute('data-color');
      if (color === 'orange') {
        blueBox.style.display = 'block';
        redBox.style.display = 'none';
      } else if (color === 'gray') {
        blueBox.style.display = 'none';
        redBox.style.display = 'block';
      }
    });
  });
  

// ========================================================================

// modais

var modalUser = document.querySelector(".modal-cad-user");
var open_modalUser = document.querySelector(".open_modalUser");
var closeButtonUser = document.querySelector(".close-button-user");
var changeOpacidad = document.querySelector(".navega-color");


// essa function é pura gambiarra, mas sem tempo irmão
function backgroundChange(){
  changeOpacidad.classList.remove("navega-change")
}

function toggleModalUser() {
    modalUser.classList.toggle("show-modal");
    changeOpacidad.classList.add("navega-change")

}

function windowOnClick(event) {
    if (event.target === modalUser) {
        toggleModalUser();
        changeOpacidad.classList.remove("navega-change")
    }
}

open_modalUser.addEventListener("click", toggleModalUser);
closeButtonUser.addEventListener("click", toggleModalUser);
closeButtonUser.addEventListener("click", backgroundChange);
window.addEventListener("click", windowOnClick);


//Modal 2 -- editar

var modalEdit = document.querySelector(".modal-edit-user");
var open_modal_edit = document.querySelector(".open_modal-Edit");
var closeButton_edit = document.querySelector(".close-button-edit");

function toggleModalEdit() {
    modalEdit.classList.toggle("show-modal-edit");
    changeOpacidad.classList.add("navega-change")
}

function windowOnClick2(event) {
    if (event.target === modalEdit) {
        toggleModalEdit();
        changeOpacidad.classList.remove("navega-change")
    }
}

open_modal_edit.addEventListener("click", toggleModalEdit);
closeButton_edit.addEventListener("click", toggleModalEdit);
closeButton_edit.addEventListener("click", backgroundChange)
window.addEventListener("click", windowOnClick2);


const icone = document.querySelector('.icone');
const menu = document.querySelector('.menu');

icone.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  menu.classList.toggle('aberto');
});



