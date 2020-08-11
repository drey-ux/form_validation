function validateform() {  
    var name=document.myform.name.value;  
    var password=document.myform.password.value; 

    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");   

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;

    var error = 0;
    
    document.getElementById('email_error').innerHTML = '';  
    document.getElementById('password_error').innerHTML = '';
    document.getElementById('phone_error').innerHTML = '';
    
    
    
    //For Name
    document.getElementById('name_error').innerHTML = '';
    if (name==null || name==""){  
      //alert("Name field is required");  
      //return false; 
      error++;
      document.getElementById('name_error').innerHTML = 'Name field is required';
      
      
    }else if(!regName.test(name)){
        //alert('Please enter your full name (first & last name).');
        //return false;
        error++;
        document.getElementById('name_error').innerHTML = 'Please enter your full name (first & last name).';
    }

    //For Email Address
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        //alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        //return false;
        error++;
        document.getElementById('email_error').innerHTML = 'Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition';
    } 

    //For Password
    else if(password.length < 6) {  
      //alert("Password must be at least 6 characters long.");  
      //return false; 
      error++;
      document.getElementById('password_error').innerHTML = 'Password must be at least 6 characters long';
    } 

    //For Phone Number
    else if(tel.value=="") {
        //alert("Please enter your phone number");
        //return false;
        error++;
        document.getElementById('phone_error').innerHTML = 'Please enter your phone number';
    } else if(tel.value.length < 15) {
        //alert("Phone number should start with + and contain 14 digits after +");
        //return false;
        error++;
        document.getElementById('phone_error').innerHTML = 'Phone number should start with + and contain 14 digits after +';
    } 
    //Success
    // else {
    //     alert("Information Validation Successful");
    //     return true;
    // }
    if(error>0) {
        return false;
    }
    alert("Information Validation Successful");
    return true;
}