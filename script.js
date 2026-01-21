function calculateAge(){
    
const today = new Date();

const birthdateInput = document.getElementById("birthdate").value;
const birthdateParts = birthdateInput.split("-");   
const birthDay = birthdateParts[0];
const birthMonth = birthdateParts[1] - 1; 
const birthYear = birthdateParts[2];

const birthDate = new Date(birthYear,birthMonth,birthDay);

console.log(birthdateInput);
console.log(birthdateParts);
console.log(birthDay);
console.log(birthMonth);
console.log(birthYear);

const isValidDate = (date) =>{
    return(
        Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)  
    );
};

if(!isValidDate(birthDate)){
alert("Invalid Date Format: Please Enter a valid date in DD-MM-YYYY format.");
    return;
    }


