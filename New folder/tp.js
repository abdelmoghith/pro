let firstname = document.getElementById("first");
let lastname = document.getElementById("last");
let phone = document.getElementById("phone");
let mail = document.getElementById("mail");
let adresse = document.getElementById("adress");
let town = document.getElementById("town");
let codepost = document.getElementById("codepost");
let procode = document.getElementById("procode");
let gender_male = document.getElementById("male");
// let gender_female= document.getElementById("female");

let button = document.querySelector("button");
function update() {
  let select = document.querySelector("select");
  let valuex = select.options[select.selectedIndex].value;
  fieldy.textContent = valuex;
}
update();

let erreur = document.getElementById("erreur");

// let classname = document.getElementsByClassName("firstname");
// let classname2 = document.getElementsByClassName("lastname");
// let email = document.getElementsByClassName("email");
// let classephone = document.getElementsByClassName("phone");
// let classadresse = document.getElementsByClassName("adresse");
// let classtown = document.getElementsByClassName("town");
// let codepostal = document.getElementsByClassName("codepostal");
// let classeprocode = document.getElementsByClassName("procode");

let field1 = document.getElementById("field1");
let field2 = document.getElementById("field2");
let field3 = document.getElementById("field3");
let field4 = document.getElementById("field4");
let field5 = document.getElementById("field5");
let field6 = document.getElementById("field6");
let field7 = document.getElementById("field7");
let field8 = document.getElementById("field8");
let gender = document.getElementById("fieldx");
let grade = document.getElementById("fieldy");

button.onclick = function () {
  if (firstname.value == "") {
    let p1 = document.getElementById("p1");
    firstname.style.borderColor = "red";
    p1.style.display = "inline";
  } else {
    firstname.style.borderColor = "green";
    p1.style.display = "none";
  }

  if (lastname.value == "") {
    lastname.style.borderColor = "red";
    let p2 = document.getElementById("p2");
    p2.style.display = "inline";
  } else {
    lastname.style.borderColor = "green";
    p2.style.display = "none";
  }

  if (phone.value == "") {
    let p3 = document.getElementById("p3");
    p3.style.display = "inline";
    phone.style.borderColor = "red";
  } else {
    phone.style.borderColor = "green";
    p3.style.display = "none";
  }
  if (mail.value == "") {
    mail.style.borderColor = "red";
    let p4 = document.getElementById("p4");
    p4.style.display = "inline";
  } else {
    mail.style.borderColor = "green";
    p4.style.display = "none";
  }
  if (adresse.value == "") {
    adresse.style.borderColor = "red";
    let p5 = document.getElementById("p5");
    p5.style.display = "inline";
  } else {
    adresse.style.borderColor = "green";
    p5.style.display = "none";
  }
  if (town.value == "") {
    town.style.borderColor = "red";
    let p6 = document.getElementById("p6");
    p6.style.display = "inline";
  } else {
    town.style.borderColor = "green";
    p6.style.display = "none";
  }
  if (codepost.value == "") {
    codepost.style.borderColor = "red";
    let p7 = document.getElementById("p7");
    p7.style.display = "inline";
  } else {
    codepost.style.borderColor = "green";
    p7.style.display = "none";
  }
  if (procode.value == "") {
    let p8 = document.getElementById("p8");
    p8.style.display = "inline";
    procode.style.borderColor = "red";
  } else {
    procode.style.borderColor = "green";
    p8.style.display = "none";
  }

  if (
    procode.value !== "" &&
    town.value !== "" &&
    codepost.value !== "" &&
    adresse.value !== "" &&
    mail.value !== "" &&
    phone.value !== "" &&
    lastname.value !== "" &&
    firstname.value !== ""
  ) {
    field1.textContent = firstname.value;
    field2.textContent = lastname.value;
    field3.textContent = phone.value;
    field4.textContent = mail.value;
    field5.textContent = adresse.value;
    field6.textContent = codepost.value;
    field7.textContent = town.value;
    field8.textContent = procode.value;
    update();
    erreur.style.display = "none";
    if (gender_male.checked === true) {
      fieldx.textContent = "male";
    } else {
      fieldx.textContent = "female";
    }
  } else {
    erreur.style.display = "inline";
  }
};
