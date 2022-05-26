
const pw = document.getElementById('password');
const pwC = document.getElementById('confirm-password');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const tel = document.getElementById('phonenumber');
const pwError = document.getElementById('password-error');
const pwCError = document.getElementById('confirm-password-error');
const firstnameError = document.getElementById('first-name-error');
const lastnameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const telError = document.getElementById('tel-error');

firstname.addEventListener('input', () => {
    if (firstname.value === '') {
        firstnameError.textContent = 'Please type in your first name.';
    } else {
        firstnameError.textContent = '';
    }
}); 

lastname.addEventListener("input", () => {
    if (lastname.value === '') {
        lastnameError.textContent = 'Please type in your last name';
    } else {
        lastnameError.textContent = '';
    }
}); 

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email address, example: user@example.com';
    } else {
        emailError.textContent = '';
    }
}); 

tel.addEventListener("input", () => {
    if (tel.validity.patternMismatch) {
        telError.textContent = 'Please enter in a 10 digit phone number';
    } else {
        telError.textContent = '';
    }     
}); 

pw.addEventListener("input", () => {
    if (pw.validity.patternMismatch){
        const currentValue = pw.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = '';
        if (regExpCap.test(currentValue)){
          result += '';
        } else {
          result += `Missing at least 1 capital letter. `;
          result += '\n';
        }
        
        
        if (regExpDig.test(currentValue)){
          result += '';
        } else {
          result += 'Missing at least 1 number. ';
          result += '\n';
        }
        
        if (currentValue.length < 9){
          result += 'Password must be at least 8 characters. '
          result += '\n';
        } else {
          result += '';
        }

        console.log(result);
        pwError.textContent = result;

  
      } else {
        pwError.textContent = '';
      }
    });
  
pwC.addEventListener("input", () => {
    if (pwC.value !== pw.value) {
        pwCError.textContent = 'Passwords do not match';
    } else {
        pwCError.textContent = '';
    }
}); 