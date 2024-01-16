const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const addressInput = document.getElementById("address");

const saveButton = document.getElementsByTagName("form")[0];
const resetButton = document.getElementsByTagName("button")[1];
const rowEventi = document.getElementsByClassName("row")[1];

let arrayEventi = [];

class formLog {
  constructor(_name, _surname, _email, _password, _address) {
    this.name = _name;
    this.surname = _surname;
    this.email = _email;
    this.password = _password;
    this.address = _address;
  }
}

const svuotaForm = function () {
  nameInput.value = "";
  surnameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  addressInput.value = "";
};

const svuotaRow = () => {
  rowEventi.innerHTML = "";
};

const generatore = () => {
  svuotaRow();
  arrayEventi.forEach((e) => {
    const nuovaCol = document.createElement("div");
    nuovaCol.classList.add("col");
    nuovaCol.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${e.name} ${e.surname}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
    rowEventi.appendChild(nuovaCol);
    svuotaForm();
  });
};

saveButton.addEventListener("submit", (e) => {
  e.preventDefault();
  const saveButtonUno = new formLog(
    nameInput.value,
    surnameInput.value,
    emailInput.value,
    passwordInput.value,
    addressInput.value
  );
  console.log(saveButtonUno);
  arrayEventi.push(saveButtonUno);
  localStorage.setItem("arrayEventi", JSON.stringify(arrayEventi));
  svuotaForm();
  generatore();
});

resetButton.addEventListener("click", (e) => {
  const eventsAsString = localStorage.getItem("arrayEventi");
  const arrayOfExistingEvents = JSON.parse(eventsAsString);
  arrayOfExistingEvents.splice(e, 1);
  localStorage.setItem("arrayEventi", JSON.stringify(arrayOfExistingEvents));
});

// questo serve per verificare se ci sono già eventi salvati in memoria
if (localStorage.getItem("arrayEventi")) {
  const stringaDiEventi = localStorage.getItem("arrayEventi");
  const arrayEsistenteEventi = JSON.parse(stringaDiEventi);
  arrayEventi = arrayEsistenteEventi;
  generatore();
}
