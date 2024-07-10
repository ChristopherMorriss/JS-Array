let quantity =0;
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

let img_select= document.querySelector('img');
console.log(img_select);
function newImage(){
  let image_rand ="https://picsum.photos/500/500?random=" + new Date().getTime();
  img_select.src= image_rand;
  let add_image= document.querySelector('#add-image');
  add_image.addEventListener('click',()=>{
    quantity+=1;
    let collection_pictures=document.querySelector('.collection-pictures');
    collection_pictures.innerHTML =`<div><img id=image-${quantity} src=${image_rand}></div>`;
    //collection_pictures.appendChild(img_select);
    
    // COLLECTION.innerHTML =
		// 				`<img id="img-${selected_collection.length}" src="${IMG.src}" />` 
  });
}


// function addImage(){ //The function kind of works, but it displays the object code instead of the image itself
  
//   let collection_pictures=document.querySelector('.collection-pictures');
  
//   collection_pictures.appendChild(img_select);
//   newImage();
//   //console.log(img_select);
//   //<img id="img-${j}" src="${selected_collection[j]}" />
//   } 



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
  let collection_deleter_one = document.querySelector('#delete-one');
  collection_deleter_one.addEventListener('click',()=>{
    console.log(option_active); 
    option_active.remove();
    console.log(option_active);

  });
  
});




//Need to fix add image error 
//Need to assign image to the relevant collection
//Need to improve css styling 

