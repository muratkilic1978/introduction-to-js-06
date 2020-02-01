// referenc til attributten class - answer
const outputAnswer = document.querySelector(".answer");

function evaluatePension() {
    // Undgår deafult hændelse
    event.preventDefault();
  
    /*let birthDate = myForm.elements['bday'].value;*/
    let birthDate = document.getElementById("example-date-input").value;
    
    if (birthDate >= '1950-01-01' && birthDate <= '1954-06-30') {
        outputAnswer.textContent = "Din pensionsalder er 65 ½ år";  
    } 
         
    else if (birthDate >= '1954-07-01' && birthDate <= '1954-12-31') 
    {
        outputAnswer.textContent = "Din pensionsalder er 66 år";
    } 
    else if (birthDate >= '1955-01-01' && birthDate <= '1955-06-30') 
        {
            outputAnswer.textContent = "Din pensionsalder er 66 ½ år";
        }
    else if (birthDate >= '1955-07-01' && birthDate <= '1962-12-31')
        {
            outputAnswer.textContent = "Din pensionsalder er 67 år";
        }
    else if (birthDate >= '1963-01-01' && birthDate <= '1966-12-31') 
        {
            outputAnswer.textContent = "Din pensionsalder er 68 år";
        }
    else if (birthDate >= '1967-01-01' && birthDate <= '1970-12-31') 
        {
            outputAnswer.textContent = "Din pensionsalder er 69 år";
        }
    else if (birthDate >= '1971-01-01' && birthDate <= '1974-12-31') 
        {
            outputAnswer.textContent = "Din pensionsalder er 70 år";
        }
    else if (birthDate >= '1975-01-01' && birthDate <= '1978-12-31') 
        {
            outputAnswer.textContent = "Din pensionsalder er 71 år";
        }
    else 
        {
            outputAnswer.textContent = "Din pensionsalder er 72 år";
        }
        
    console.log(birthDate);
  
}
