function calculateAge(){
    
const today = new Date();

const birthdateInput = document.getElementById("birthdate").value;
const birthdateParts = birthdateInput.split("-");   
const birthDay = birthdateParts[0];

