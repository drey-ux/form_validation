// const submitBtn = document.getElementById('submit-btn');

// const validate = (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name');
//     const emailAddress = document.getElementById('email');
//     const password = document.getElementById('password');
//     const tel = document.getElementById('tel')
//     if (name.value === "") {
//       alert("Please enter your name.");
//       name.focus();
//       return false;
//     }
//     if (emailAddress.value === "") {
//       alert("Please enter your email address.");
//       emailAddress.focus();
//       return false;
//     }
//     if (tel.value === "") {
//         alert("Please enter your phone number.");
//         tel.focus();
//         return false;
//     } else if (tel.value.length < 15) {
//         alert("Phone number must be 14 digits and must include +");
//     }
//     if (password.value === "") {
//         alert("Password field cannot be left blank.");
//         password.focus();
//         return false;
//     } else if (password.value.length <= 6) {
//         alert("Password must be more than 6 characters")
//     }
    
//     return true;
//   }
  
//   function passwordCheck(password) {
//     const getPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
//     return getPassword.test(password);
//   }


// submitBtn.addEventListener('click', validate);

function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value; 

    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");   

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
      

    //For Name
    if (name==null || name==""){  
      alert("Name field is required");  
      return false;  
      
    }else if(!regName.test(name)){
        alert('Please enter your full name (first & last name).');
        return false;
    }

    //For Email Address
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    } 

    //For Password
    else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
    } 

    //For Phone Number
    else if(tel.value=="") {
        alert("Please enter your phone number");
        return false;
    } else if(tel.value.length < 15) {
        alert("Phone number should start with + and contain 14 digits after +");
        return false;
    } 
    //Success
    else {
        alert("Information Validation Successful");
        return true;
    }
}