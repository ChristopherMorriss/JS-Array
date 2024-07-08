function validateForm(){
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    //Above regex is used to try and validate all possible email addresses
    let email1 = $('#email').val();
    let test1= regex.test(email1); //Checks if the email entered follows one of the regular expressions specified above
                                   //If it does, test1 will be assigned to true. If not, it will be assigned to false
    
    if (email1=== ''){
      //$('#required-email').css('display','block'); //Code for the red text warning message, currently disabled
      alert('Please enter your email address: this is required.');
      
    }
    else{
      if (test1 === true){
        alert('Email address validated.');
      }
      else {
        alert('Invalid email.');
      }
    }
    addEmail();
  }
  let change=0;
  var image_rand = document.querySelector("#random-img");
  let image_btn = document.querySelector('#new-image');
  image_btn.addEventListener('click',()=>{ //Only generates a single new image after pressing the button, need to fix this
    change += 1;
    alert('button pressed');
    if (change >= 0){
      image_rand="https://picsum.photos/500/500";
      $('#random-img').attr('src', image_rand + '?random=' + new Date().getTime()); 
      //The above line is used because simply setting image_rand.src to the photo path only works once
    }
  });

function addImage(){
  //image_rand.append('collection name')
}

function addEmail(){
  alert('function called')
  let email2 = JSON.parse(localStorage.getItem("email1"));
  select.innerHTML += `<option id ="${email2}" value="${email2}">${email2}</option>`;
}


