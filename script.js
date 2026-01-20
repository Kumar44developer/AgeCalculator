function calculateAge(){
    
const today = new Date();

const birthdateInput = document.getElementById("birthdate").value;
const birthdateParts = birthdateInput.split("-");   
const birthDay = birthdateParts[0];
const birthMonth = birthdateParts[1] - 1; 
const birthYear = birthdateParts[2];

const birthDate = new Date(birthYear,birthMonth,birthDay);

console.log(birthdateInput);
