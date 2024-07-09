let email1 = $('#email').val();
function validateForm(){
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    //Above regex is used to try and validate all possible email addresses
    //let email1 = $('#email').val();
    let email1 = $('#email').val();
    //alert(email1);
    let test1= regex.test(email1); //Checks if the email entered follows one of the regular expressions specified above
                                   //If it does, test1 will be assigned to true. If not, it will be assigned to false
    
    if (email1=== ''){
      //$('#required-email').css('display','block'); //Code for the red text warning message, currently disabled
      alert('Please enter your email address: this is required.');
      
    }
    else{
      if (test1 === true){
        //alert('Email address validated.');
      }
      else {
        alert('Invalid email.');
      }
    }
    const select = document.querySelector('#select');
    function addEmail(){
    select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
    //Directly adds the new HTML code to the first select tag (there is only one which is used for choosing the selection)
    }
    addEmail();
  }

  //var image_rand = document.querySelector("#random-img");
let image_btn = document.querySelector('#new-image');
image_btn.addEventListener('click',()=>{ //Only generates a single new image after pressing the button, need to fix this
  //alert('button pressed');
  let image_rand="https://picsum.photos/500/500";
  $('#random-img').attr('src', image_rand + '?random=' + new Date().getTime()); 
  //The above line is used because simply setting image_rand.src to the photo path only works once
    
  });
// function addImage(){
//     $('.img-collection').append(image_rand);
//   } 

let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`;
  select.innerHTML += `<option>Select</option>`;
});

let option_active = document.querySelector('option:last-child');
select.addEventListener('change',()=>{
  //alert(select.selectedOptions);
  //alert(option_active);
  //select.remove(option_active);
  //alert('state changed');
  
});

let collection_deleter_one = document.querySelector('#delete-one');
collection_deleter_one.addEventListener('click',()=>{
  option_active.remove();
  //select.remove(selectedOptions);
  //select.remove(option_active); //Currently only wants to delete the top option
  //option_active.remove();

});


