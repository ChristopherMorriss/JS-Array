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
let img_select= document.querySelector('img');
console.log(img_select);
function addImage(){ //The function kind of works, but it displays the object code instead of the image itself
  //alert('button pressed')
  let collection_pictures=document.querySelector('.collection-pictures');
  collection_pictures.innerHTML += `${img_select}`;
  //console.log(img_select);

  } 

let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`;
  select.innerHTML += `<option>Select</option>`;
});

var option_active = document.querySelector('option:checked');

console.log(option_active);
select.addEventListener('change',()=>{
  var option_active = document.querySelector('option:checked');
  console.log(option_active);
  //option_active.remove();
  //select.remove(option_active);
  
  
});

let collection_deleter_one = document.querySelector('#delete-one');
collection_deleter_one.addEventListener('click',()=>{
  console.log(option_active); //Always considered to be 'select'
  option_active.remove();
  console.log(option_active);

});


