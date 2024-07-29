let quantity_images =0;
let quantity_email =0;
let email1 = $('#email').val();
let collection_pictures=document.querySelector('.collection-pictures'); //The location which is used to store the collections
let select = document.querySelector('#select');
let usedEmailAddress = [];
let usedImage =[];
let readyForLinking =0; //Prevents an error created when switching collections before adding an image to the page
let add_email_to_list =0;
let add_image_to_list =0;
option_active = document.querySelector('option:checked'); //Keeps track of the current selected option


function validateForm(){
    //Below regex is used to validate emails
    let regex = new RegExp(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/);
    let email1 = $('#email').val(); //Takes an input from the text box with the id 'email'
    let test1= regex.test(email1); //Checks if the email entered follows one of the regular expressions specified above
                                   //If it does, test1 will be assigned to true. If not, it will be assigned to false
    function addEmail(){
      quantity_email+=1;
      console.log(usedEmailAddress.length);
      if (usedEmailAddress.length == 0){
        usedEmailAddress.push(email1);
        console.log(usedEmailAddress);
        select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
        collection_pictures.innerHTML += `<div id="div-${quantity_email}"></div>`;
      }
      else{
        for(i=0;i<usedEmailAddress.length;i++){
          if (usedEmailAddress[i] == email1){
              alert('You have already added this email as a collection');
              add_email_to_list =0;
              break;
          }
          else{
            add_email_to_list +=1;
          }
        }
        if (add_email_to_list >=1){
          usedEmailAddress.push(email1);
          select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
          collection_pictures.innerHTML += `<div id="div-${quantity_email}"></div>`;
          add_email_to_list =0;
        }
      }
      
      //select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
      //collection_pictures.innerHTML += `<div id="div-${quantity_email}"></div>`;
      //Directly adds the new HTML code to the first select tag (there is only one which is used for choosing the selection)
    }
    
    if (email1=== ''){
      //$('#required-email').css('display','block'); //Code for the red text warning message, currently disabled
      alert('Please enter your email address: this is required.');
      
    }
    else{
      if (test1 === true){
        alert('Email address validated');
        addEmail(); //Adds the email only when the email is valid
      }
      else {
        alert('Invalid email.');
      }
    }
    
    
    
  }

let img_select= document.querySelector('img');
let add_image= document.querySelector('#add-image');
function newImage(){
  image_rand ="https://picsum.photos/500/500?random=" + new Date().getTime(); //Random image generator
  img_select.src= image_rand;
  
}
add_image.addEventListener('click',()=>{
  let email_collect= document.querySelector(`#div-${quantity_email}`);
  if (option_active.textContent !== "Select"){ 
    quantity_images+=1;
    if (usedImage.length == 0){
      usedImage.push(image_rand);
      email_collect.innerHTML +=`<p class="test-text">${option_active.textContent}<img class="email-${option_active.textContent}" src=${image_rand}></p>`;
      console.log(usedImage);
      readyForLinking+=1; 
    }
    else{
      for(i=0;i<usedImage.length;i++){
        if (usedImage[i] == image_rand){
            if (option_active.textContent === option_linked[i].textContent){
              alert('You have already added this image to a collection');
              add_image_to_list =0;
              break;
            }
            else{
              add_image_to_list +=1;
            }
        }
        else{
          add_image_to_list +=1;
        }
      }
      if (add_image_to_list >=1){
        usedImage.push(image_rand);
        email_collect.innerHTML +=`<p class="test-text">${option_active.textContent}<img class="email-${option_active.textContent}" src=${image_rand}></p>`;
        add_image_to_list =0;
      }
    }
    
    //readyForLinking+=1; 

  }
  else{ //If you haven't selected a collection (the contents of the button are the default Select), this message will show
    alert('A collection has not been selected yet');
  }
});

let collection_deleter_one = document.querySelector('#delete-one');
  collection_deleter_one.addEventListener('click',()=>{ 
    if (option_active.textContent !== "Select"){
    option_active.remove(); //Removes the current option from the select menu and changes to default option
    $('p').css('display','none'); //Hides all images inside <p> tags until another collection is selected
   }                              //<p> are targeted instead of <img> to prevent the hiding of the image in the top box
   else{ //You are not allowed to delete the default "Select" option, so you will be shown this message if you try to delete it
    alert('Please select the collection you would like to delete');
   }
});

let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`;
  select.innerHTML += `<option>Select</option>`;
  $('p').remove(); //Removes all images contained inside <p> tags 
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
