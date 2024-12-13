// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     // menu.clickList.toggle('#menu-btn');
//     menu.clickList.toggle('fa-times');
//     navbar.clickList.toggle('active');
// }
// window.onscroll = () =>{
//     // menu.clickList.toggle('#menu-btn');
//     menu.clickList.remove('fa-times');
//     navbar.clickList.remove('active');
// }



const menuButton = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menuButton.onclick = () => {
  navbar.classList.toggle('active');
  menuButton.classList.toggle('fa-times');
};
// Add a click event listener to the document
document.addEventListener("click", (event) => {
  // Check if the clicked element is NOT part of the navbar and NOT the menu button
  if (!navbar.contains(event.target) && event.target !== menuButton) {
    navbar.classList.remove('active');
    menuButton.classList.remove('fa-times');
  }
});









// hide and show for btn =================================================


function toggleHide() {
  let pera = document.getElementById('pera');
  let btn = document.getElementById('btn');
  if (pera.style.display === 'none') {
    pera.style.display = 'block';
    btn.innerText = 'go-back';
  }
  else {
    pera.style.display = 'none';
    btn.innerText = 'learn-more';
  }
}



function toggle1() {
  let care1 = document.getElementById('care1');
  if (care1.style.display === 'none') {
    care1.style.display = 'block';
  }
  else {
    care1.style.display = 'none';
  }
}

function toggle2() {
  let care2 = document.getElementById('care2');
  if (care2.style.display === 'none') {
    care2.style.display = 'block';
  }
  else {
    care2.style.display = 'none';
  }
}

function toggle3() {
  let care3 = document.getElementById('care3');
  if (care3.style.display === 'none') {
    care3.style.display = 'block';
  }
  else {
    care3.style.display = 'none';
  }
}
function toggle4() {
  let care4 = document.getElementById('care4');
  if (care4.style.display === 'none') {
    care4.style.display = 'block';
  }
  else {
    care4.style.display = 'none';
  }
}
function toggle5() {
  let care5 = document.getElementById('care5');
  if (care5.style.display === 'none') {
    care5.style.display = 'block';
  }
  else {
    care5.style.display = 'none';
  }
}
function toggle6() {
  let care6 = document.getElementById('care6');
  if (care6.style.display === 'none') {
    care6.style.display = 'block';
  }
  else {
    care6.style.display = 'none';
  }
}



// for blogs button js here ==============================================

function hideme() {
  let hideme = document.getElementById('hideme');
  if (hideme.style.display === 'none') {
    hideme.style.display = 'block';
    document.querySelector("#hideme").classList.toggle('fa-times');
  }
  else {
    hideme.style.display = 'none';
  }
}

function hideme1() {
  let hideme1 = document.getElementById('hideme1');
  if (hideme1.style.display === 'none') {
    hideme1.style.display = 'block';
    document.querySelector("#hideme1").classList.toggle('fa-times');
  }
  else {
    hideme1.style.display = 'none';
  }
}

function hideme2() {
  let hideme2 = document.getElementById('hideme2');
  if (hideme2.style.display === 'none') {
    hideme2.style.display = 'block';
    document.querySelector("#hideme2").classList.toggle('fa-times');
  }
  else {
    hideme2.style.display = 'none';
  }
}






// contact form clicked from the department js is here =======================

function toggleComplaintSuggestion() {
  // Find the heading element by its id
  const heading = document.getElementById("complaintSuggestionHeading");

  // Toggle its visibility
  if (heading.style.display === "none") {
    heading.style.display = "block"; // Display the heading
  } else {
    heading.style.display = "none"; // Hide the heading
  }
}

// the alrt message from the booking section is here =======================





// auto selection of the doctor in the booking form js is here ================================

// Define a JavaScript object to store doctors for each department
var doctorsByDepartment = {
  cardiology: ["Dr zareena shah", "Dr hareen", "Dr arham", "Dr sahil"],
  dermatology: ["Dr. SOPHIA MITCHELL", "Dr. DAVID WILSON", "Dr. MICHAEL LEE", "Dr. LISA PATEL"],
  neorology: ["Dr. MARKE LEE", "Dr. JHON SELMAN", "Dr. DAVID LEE", "Dr. LOE PATEL"],
  nephrology: ["Dr. SONIA SHAH", "Dr. ZONI KHAN", "Dr. SANIA ALI", "Dr. annie"],
  orthopad: ["Dr. MARIA RODRIGUEZ", "Dr. JAMES SMITH", "Dr.  LISA CHEN", "Dr.  EMILY TURNER"],
  psychology: ["Dr.  JAMES SMITH", "Dr. MARIA RODRIGUEZ", "Dr.  LISA CHEN", "Dr. EMILY TURNER"],
};

// Function to update the list of doctors based on the selected department
function updateDoctors() {
  var departmentSelect = document.getElementById("department");
  var doctorSelect = document.getElementById("doctor");
  var selectedDepartment = departmentSelect.value;

  // Clear the current options in the doctor select
  doctorSelect.innerHTML = "";

  // Populate the doctor select with options based on the selected department
  var doctors = doctorsByDepartment[selectedDepartment];
  for (var i = 0; i < doctors.length; i++) {
    var option = document.createElement("option");
    option.value = doctors[i];
    option.text = doctors[i];
    doctorSelect.appendChild(option);
  }
}

// Attach the updateDoctors function to the department select's change event
document.getElementById("department").addEventListener("change", updateDoctors);

// Initially populate the doctor select based on the default selected department
updateDoctors();








