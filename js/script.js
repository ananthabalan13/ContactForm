const formEle = document.getElementById("form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const message = document.getElementById("message")
const checkBox = document.getElementById("checkBox")
const checkboxDiv = document.querySelector(".checkboxDiv")
const queryType = document.querySelector(".queryinputs")
const toastMessage = document.querySelector(".tostMessage")

// console.log(toastMessage);
// console.log(fName);
// console.log(lName);
// console.log(email);

formEle.addEventListener("submit", validateInputs);

function validateInputs(e) {
  e.preventDefault();

  let isValid =true

  const queryTypeVal = document.querySelector(
    "input[name='queryType']:checked"
  )?.value;

  const fNameVal = fName.value
  const lNameVal = lName.value
  const emailVal = email.value
  const messageVal = message.value
  const checkBoxVal = checkBox.checked

  // console.log("fname>>>>>",fNameVal);
  // console.log("lNmae>>>>>",lNameVal);
  // console.log("emailVal>>>>>",emailVal);
  // console.log("queryTypeVal>>>>>>",queryTypeVal);
  // console.log("messageVal>>>>",messageVal);
  // console.log("checkboxval>>>>",checkBoxVal);

  if (!fNameVal) {
    setError(fName , "First Name is required")
    isValid=false
  }
  else{
    setSuccess(fName , "")
  }
  if (!lNameVal) {
    setError(lName , "Last Name is required")
    isValid=false
  }
  else{
    setSuccess(lName , "")
  }
  if (!emailVal) {
    setError(email , "Email is required")
    isValid=false
  }
  else if (!validateEmail(emailVal)) {
    setError( email , "Enter a valid email")
    isValid=false
  }
  else{
    setSuccess(email , "")
  }
  if (queryTypeVal === undefined) {
    setError(queryType , "Query Type is required")
    isValid=false
  }  
  else {
    setSuccess(queryType , "")
  }
  if (!messageVal) {
    setError(message , 'Message is required')
    isValid=false
  }
  else{
    setSuccess(message , "")
  }
  if (!checkBoxVal) {
    setError(checkboxDiv , "To submit this form , please consent to being contacted")
    isValid=false
  }
  else{
    setSuccess(checkboxDiv ,"")
  }

  if (isValid) {
      toastMessage.style.display ="block"
      setTimeout(()=>{
        toastMessage.style.display ="none"
        formEle.reset()
      },1500)
  }

}
function setError(element , message) {
    // console.log(element , message);
    const parentElement = element.parentElement
    // console.log(parentElement);
    const errorEle = parentElement.querySelector(".errorMessage")
    // console.log(errorEle);
    parentElement.classList.add("error")
    errorEle.textContent = message
    
}
function setSuccess(element , message){
    const parentElement = element.parentElement
    const errorEle = parentElement.querySelector(".errorMessage")
    errorEle.textContent = message
    parentElement.classList.remove("error")
}
const validateEmail = (email) => {
  return String(email)
  .toLowerCase()
  .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};