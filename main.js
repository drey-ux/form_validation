const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const emailAddress = document.getElementById('email');
    const password = document.getElementById('password');
    const tel = document.getElementById('tel')
    if (name.value === "") {
      alert("Please enter your name.");
      name.focus();
      return false;
    }
    if (emailAddress.value === "") {
      alert("Please enter your email address.");
      emailAddress.focus();
      return false;
    }
    if (tel.value === "") {
        alert("Please enter your phone number.");
        tel.focus();
        return false;
    } else if (tel.value.length < 15) {
        alert("Phone number must be 14 digits and must include +")
    }
    if (password.value === "") {
        alert("Password field cannot be left blank.");
        password.focus();
        return false;
    } else if (password.value.length <= 6) {
        alert("Password must be more than 6 characters")
    }
    
    return true;
  }
  



submitBtn.addEventListener('click', validate);