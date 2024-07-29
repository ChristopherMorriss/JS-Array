let quantity_images =0;
let quantity_email =0;
let email1 = $('#email').val();
let collection_pictures=document.querySelector('.collection-pictures');
let select = document.querySelector('#select');
let readyForLinking =0;
option_active = document.querySelector('option:checked');


function validateForm(){
    //let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    //Above regex is used to try and validate all possible email addresses
    let regex = new RegExp(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/);
    //let email1 = $('#email').val();
    let email1 = $('#email').val();
    //alert(email1);
    let test1= regex.test(email1); //Checks if the email entered follows one of the regular expressions specified above
                                   //If it does, test1 will be assigned to true. If not, it will be assigned to false
    function addEmail(){
      quantity_email+=1;
      // for(i=0;i<email1.length;i++){
      //   if (email_collect[i].textContent === )
      // }
      select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
      collection_pictures.innerHTML += `<div id="div-${quantity_email}"></div>`;
    //Directly adds the new HTML code to the first select tag (there is only one which is used for choosing the selection)
    }
    
    if (email1=== ''){
      //$('#required-email').css('display','block'); //Code for the red text warning message, currently disabled
      alert('Please enter your email address: this is required.');
      
    }
    else{
      if (test1 === true){
        alert('Email address validated.');
        addEmail();
      }
      else {
        alert('Invalid email.');
      }
    }
    
    
    
  }

let img_select= document.querySelector('img');
let add_image= document.querySelector('#add-image');
function newImage(){
  image_rand ="https://picsum.photos/500/500?random=" + new Date().getTime();
  img_select.src= image_rand;
  
}
add_image.addEventListener('click',()=>{
  if (option_active.textContent !== "Select"){
    quantity_images+=1;
    let email_collect= document.querySelector(`#div-${quantity_email}`);
    email_collect.innerHTML +=`<p class="test-text">${option_active.textContent}<img class="email-${option_active.textContent}" src=${image_rand}></p>`;
    readyForLinking+=1;
    //newImage();

  }
  else{
    alert('A collection has not been selected yet');
  }
});

let collection_deleter_one = document.querySelector('#delete-one');
  collection_deleter_one.addEventListener('click',()=>{ 
    if (option_active.textContent !== "Select"){
    option_active.remove();
    $('p').css('display','none');
   }
   else{
    alert('Please select the collection you would like to delete');
   }
});

let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`;
  select.innerHTML += `<option>Select</option>`;
  $('p').remove();
});



function swapCollection(){
  alert('state change detected');
  option_active = document.querySelector('option:checked');
  $(`${email1}`).css('display','none');
  if (readyForLinking > 0){
    option_linked=document.querySelectorAll('.test-text'); 
    for (let i=0; i<option_linked.length; i++){
      if (option_active.textContent === option_linked[i].textContent){
        option_linked[i].style.display ='block';
      }
      else{
        option_linked[i].style.display ='none';
      }
    }
  }
}


newImage();





/*
JS Feedback points completed:

Submission passes HTML validator - https://validator.w3.org/
Email input is correctly validated
Clear and useful validation message displayed to user
The new image can be assigned to a valid email
Assigned images are displayed clearly with the email it has been assigned to
Email is only show once for all images assigned, not once for each image
The same image can be assigned to multiple emails 
Hover styles for button and clickables
If other inputs are present, confirm these are correctly validated

JS Tasks to complete:
The same image cannot be assigned to the same email 
Consistent and professional looking colour scheme
Page is responsive
*/
