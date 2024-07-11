let quantity_images =0;
let quantity_email =0;
let email1 = $('#email').val();
let collection_pictures=document.querySelector('.collection-pictures');
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
        addEmail();
        //alert('Email address validated.');
      }
      else {
        alert('Invalid email.');
      }
    }
    const select = document.querySelector('#select');
    function addEmail(){
      console.log(option_active);
      quantity_email+=1;
      select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
      collection_pictures.innerHTML += `<div id="email-${quantity_email}"></div>`;
      console.log(option_active);
      //Directly adds the new HTML code to the first select tag (there is only one which is used for choosing the selection)
    }
    
  }

let img_select= document.querySelector('img');
console.log(img_select);
let add_image= document.querySelector('#add-image');
function newImage(){
  let image_rand ="https://picsum.photos/500/500?random=" + new Date().getTime();
  img_select.src= image_rand;
  add_image.addEventListener('click',()=>{
    console.log(option_active.textContent);
    if (option_active.textContent === "Select"){
      quantity_images+=1;
      //let collection_pictures=document.querySelector('.collection-pictures');
      email_collect= document.querySelector(`#email-${quantity_email}`);
      console.log(email_collect);
      email_collect.innerHTML +=`<img id=email-${quantity_images} src=${image_rand}>`;
    }
    else{
      alert('A collection has not been selected yet');
    }
  });
}

// if (!assignedImages[email].includes(currentImage)) {
//   assignedImages[email].push(currentImage);
//   localStorage.setItem('assignedImages', JSON.stringify(assignedImages));
//   loadAssignedImages();
//   emailError.hide(); 
// } else {
//   emailError.text('This image is already assigned to this email.');
//   emailError.show();
// }



let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`;
  select.innerHTML += `<option>Select</option>`;
  
});


let option_active = document.querySelector('option:checked');
console.log(option_active);

function swapCollection(){
//select.addEventListener('change',()=>{
  alert('state change detected');
  let option_active = document.querySelector('option:checked');
  console.log(option_active);
  $(`${email}`).css('display','none');
  let collection_deleter_one = document.querySelector('#delete-one');
  collection_deleter_one.addEventListener('click',()=>{
    console.log(option_active); 
    option_active.remove();
    console.log(option_active);

  });
}
//});






//Need to change collection when a different collection is selected
//Prevent email duplication
//Need to improve css styling 

