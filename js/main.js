let quantity_images =0;
let quantity_email =0;
let email1 = $('#email').val();
let collection_pictures=document.querySelector('.collection-pictures');
let select = document.querySelector('#select');
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
      console.log(option_active);
      quantity_email+=1;
      console.log(email1);
      select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
      collection_pictures.innerHTML += `<div id="div-${quantity_email}"></div>`;
      console.log(option_active);
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
console.log(img_select);
let add_image= document.querySelector('#add-image');
function newImage(){
  image_rand ="https://picsum.photos/500/500?random=" + new Date().getTime();
  img_select.src= image_rand;
  console.log(image_rand);
  
}
add_image.addEventListener('click',()=>{
  console.log(option_active.textContent);
  if (option_active.textContent !== "Select"){
    quantity_images+=1;
    let email_collect= document.querySelector(`#div-${quantity_email}`);
    console.log(image_rand);
    console.log(email_collect);
    email_collect.innerHTML +=`<img id=email-${quantity_images} src=${image_rand}>`;
    newImage();

  }
  else{
    alert('A collection has not been selected yet');
  }
});



let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`;
  select.innerHTML += `<option>Select</option>`;
  
});


option_active = document.querySelector('option:checked');
console.log(option_active);

function swapCollection(){
//select.addEventListener('change',()=>{
  alert('state change detected');
  option_active = document.querySelector('option:checked');
  console.log(option_active);
  $(`${email1}`).css('display','none');
  let collection_deleter_one = document.querySelector('#delete-one');
  collection_deleter_one.addEventListener('click',()=>{
    console.log(option_active); 
    option_active.remove();
    console.log(option_active);

  });
}
//});

newImage();




/*JS Feedback points completed
Submission passes HTML validator - https://validator.w3.org/
Email input is correctly validated



*/

//test