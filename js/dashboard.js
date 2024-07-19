document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content loaded successfully!");
})

//#region variables
const btnAddContact = document.querySelector('.addContactBtn');
const btnNav = document.querySelector('.profileMenu');
const contactAddBtn = document.querySelector('.btnAddContact');
const btnEditContact = document.querySelector('.btnEditContact');
const editContactBtn = document.querySelector('.editContactBtn');

const searchContact = document.querySelector('.busqueda');
const h2 = document.querySelector('h2');


const content = {
  addContactMenu : document.querySelector('.addContactMenu'),
  menuHam : document.querySelector('.menuProfile'),
}

const btnMenuH = {
  infoCuenta : document.querySelector('.aboutMe'),
  settings : document.querySelector('.configuracion'),
  logOut : document.querySelector('.LogOutt')
};

const inputAddContact = {
  nombre : document.getElementById('name'),
  phone : document.getElementById('surname'), // i have the id 'surname' 'cause, i put it then of the work in the design
  mail : document.getElementById('mail'),
  adress : document.getElementById('adress'),
}

const divContactos = document.querySelector('.contactos');


//#region verify

const API_KEY = "https://localhost:7226/api/Contacto";
function verifyContent(){

  if(divContactos.textContent.trim().length > 0){
    console.log("tiene contenido");
    h2.style.display = "none";
  } else {
    console.log("no tiene contenido");
    h2.style.display = "block";
  }
}

getContacts();
verifyContent();


function verifyContent(){

  if(divContactos.textContent.trim().length > 0){
    console.log("tiene contenido");
    h2.style.display = "none";
  } else {
    console.log("no tiene contenido");
    h2.style.display = "block";
  }
}


function getContacts(){

  fetch(API_KEY)
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
    // Limpiar el contenedor antes de agregar nuevas cartas
    divContactos.innerHTML = '';
    data.forEach(contact => {
      
        createContactCard(contact.nombre, contact.mail, contact.telefono, contact.direccion, contact.id);
    });
  
  })
}





//this function create a cart with the contact informacion
//#region showcontact

function createContactCard(nombre, mail, telefono, direccion, id) {
  let card = document.createElement('div');
  card.className = 'contact-card';

  let contactName = document.createElement('h3');
  contactName.textContent = nombre;
  
  let contactNumber = document.createElement('p');
  contactNumber.textContent = `Number: ${telefono}`;

  let contactEmail = document.createElement('p');
  contactEmail.textContent = `Email: ${mail}`;

  let contactAdress = document.createElement('p');
  contactEmail.textContent = `Adress: ${direccion}`;

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete contact';

  console.log(id);
  deleteButton.addEventListener('click', () => {
    deleteContact(id, card);
  });

  let editButton = document.createElement('button');
  editButton.className = 'edit-button';
  editButton.textContent = '✎';
  editButton.addEventListener('click', function() {
    // Lógica para editar el contacto
    editContact(nombre, mail, telefono, direccion, id);
  });
  

  // editButton.addEventListener("click", closeEditContact);
  

  card.appendChild(contactName);
  card.appendChild(contactNumber);
  card.appendChild(contactEmail);
  card.appendChild(contactAdress);
  card.appendChild(deleteButton);
  card.appendChild(editButton);


  divContactos.appendChild(card);

  verifyContent();
  
}




function openMenuHam(){
  content.menuHam.style.display = "block"
  content.addContactMenu.style.display = "none";

  btnNav.removeEventListener("click", openMenuHam);
  btnNav.addEventListener("click", closeMenuHam);
};
btnNav.addEventListener("click", openMenuHam);

function closeMenuHam(){
  content.addContactMenu.style.display = "none";
  content.menuHam.style.display = "none"

  btnNav.removeEventListener("click", closeMenuHam);
  btnNav.addEventListener("click", openMenuHam);
};


function openAddContactMenu(){
  console.log("menu contact open"); 
  content.addContactMenu.style.display = "block";
  h2.style.display = "none";
  contactAddBtn.innerHTML = "AddContact";
  divContactos.style.display = "none";

  btnAddContact.removeEventListener("click", openAddContactMenu);
  btnAddContact.addEventListener("click", closeAddContactMenu);
};

function closeAddContactMenu(){
  console.log("menu contact close"); 
  content.addContactMenu.style.display = "none";
  divContactos.style.display = "block";
  verifyContent();
  getContacts();
  

  btnAddContact.removeEventListener("click", closeAddContactMenu);
  btnAddContact.addEventListener("click", openAddContactMenu);
}

btnAddContact.addEventListener("click", openAddContactMenu);


// #region CRUDapi

function addContact(){

  const id = () => id
  let mail = inputAddContact.mail.value;
  let nombre = inputAddContact.nombre.value;
  let phone = inputAddContact.phone.value;
  let adress = inputAddContact.adress.value;

  const data = {
    "id" : id,
    "nombre" : nombre,
    "mail" : mail,
    "telefono" : phone,
    "direccion" : adress
  }

  if(mail == "" || nombre  == ""|| phone == "" || adress == ""){
    swal({
      title: "ERROR!",
      text: "there can be no empty fields \n Please try again",
      icon: "warning",
    })
    .then(res => {
      closeAddContactMenu();
    })
  }
  fetch(API_KEY, {
    method: "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  })
  .then(data => {
    console.log("success", data)
    swal({
      title: "SUCCESS!",
      text: "the contact have been created",
      icon: "success",
    })
    .then(res => {
      closeAddContactMenu();
    })
  })
}

contactAddBtn.addEventListener("click", addContact);

function editContact(name, phone, email, adress, id){

  content.addContactMenu.style.display = "block";
  divContactos.style.display = "none";
  btnAddContact.style.display = "none";
  btnEditContact.style.display = "block";
  editContactBtn.style.display = "block";
  contactAddBtn.style.display = "none";

  // form for edit 

  const data = {
    "id" : id,
    "nombre" : name,
    "telefono" : phone,
    "mail" : email,
    "direccion" : adress
  }


  email = inputAddContact.mail.value;
  name = inputAddContact.nombre.value;
  phone = inputAddContact.phone.value;
  adress = inputAddContact.adress.value;



  btnEditContact.addEventListener("click", () => {

    if(name == "" || phone == "" || email == "" || adress == ""){
      swal({
        title: "ERROR!",
        text: "there can be no empty fields \n Please try again",
        icon: "warning",
      })
      .then(res => {
        window.location = "./dashboard.html";
      })
    } else {
      fetch(API_KEY, {
        method : "PUT",
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(data => {
        console.log("success", data);
        swal({
          title: "SUCCESS!",
          text: "the contact have been edited",
          icon: "success",
        })
        .then(res => {
          window.location = "./dashboard.html";
        })
      })
    }
  })
}

editContactBtn.addEventListener("click", () => {
  window.location = "./dashboard.html";
})

function deleteContact(id, card){
  const URL =  `https://localhost:7226/api/Contacto?Id=${id}` // URL for delete method in the API
  

  fetch(URL, {
    method: "DELETE",
    headers : {
      'Content-Type' : 'application/json'
    },
  })
  .then(res => {
    console.log(res.status); // i needed to verificate the status code
    card.remove();

    verifyContent();
  });
}




//#region LOGOUT
btnMenuH.logOut.addEventListener("click", () => {
    swal({
        title: "Are you sure?",
        text: "Are you sure you want leave the page?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("OK, so good bye, we hope to see you again!", {
            icon: "success",
          }).then(res => {
            window.location = "/index.html";
          });
        } else {
          swal("we back baby!")
          .then(res => {
            closeMenuHam();
          })
        }
      });
});








