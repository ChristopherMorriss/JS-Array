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
let image_alert =0;
option_active = document.querySelector('option:checked'); //Keeps track of the current selected option
option_linked=document.querySelectorAll('.test-text'); 
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
        collection_pictures.innerHTML += `<div id="div-${quantity_email}"><span>${email1}</span></div>`;
      }
      else{
        for(i=0;i<usedEmailAddress.length;i++){
          if (usedEmailAddress[i] == email1){
              alert('You have already added this email as a collection');
              add_email_to_list =0;
              quantity_email-=1;
              break;
          }
          else{
            add_email_to_list +=1;
          }
        }
        if (add_email_to_list >=1){
          usedEmailAddress.push(email1);
          select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
          collection_pictures.innerHTML += `<div id="div-${quantity_email}"><span>${email1}</span></div>`; 
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
  //console.log(email_collect.textContent);
  if (option_active.textContent !== "Select"){ 
    quantity_images+=1;
    if (usedImage.length == 0){
      if (option_active.textContent !== "Select"){ 
        usedImage.push(image_rand);
        email_collect.innerHTML +=`<p class="test-text"><img class="${option_active.textContent}" src=${image_rand}></p>`;
        //console.log(usedImage); <span>${option_active.textContent}</span> for above
        readyForLinking+=1;
      }
      else{
        alert('Image already exists in this collection');
      }       
    }
    else{
      for(m=1;m<select.length;m+=1){
        console.log(select[m]);
        let email_collect= document.querySelector(`#div-${m}`);
        console.log(email_collect);
        console.log(m);
        console.log(option_active.textContent);
        console.log(email_collect.textContent); 
        if(option_active.textContent === email_collect.textContent){ //Assigns the image to the div linked with the email address
          //email_collect.innerHTML +=`<p class="test-text"><img class="${option_active.textContent}" src=${image_rand}></p>`;
          option_linked=document.querySelectorAll('.test-text');
          option_image=document.querySelectorAll('p img');
          console.log(option_linked[0]);
          for(let k=0; k<option_linked.length; k++){
            console.log(option_active.textContent);
            console.log(option_image[k].className);
            if(option_active.textContent === option_image[k].className){
              for(let j=0;j<usedImage.length;j++){ 
                console.log(usedImage[j]);
                console.log(image_rand);
                if (usedImage[j] == image_rand){
                  add_image_to_list=0;
                  image_alert=1;
                    
                }
                else{
                    add_image_to_list +=1;
                }
        
                  
              }
            }
            else{
                add_image_to_list +=1;
            }
          }
          if (add_image_to_list >=1){
            usedImage.push(image_rand);
            email_collect.innerHTML +=`<p class="test-text"><img class="${option_active.textContent}" src=${image_rand}></p>`;
            console.log(email_collect.textContent);//<span>${option_active.textContent}</span>
            add_image_to_list =0;
          }
          else if (image_alert==1){
            alert('Image already exists in this collection');
          }
        }
        // option_linked=document.querySelectorAll('.test-text'); 
        // for(let k=0; k<option_linked.length; k++){
        //   console.log(option_active.textContent);
        //   console.log(option_linked[k].textContent);
        //   if(option_active.textContent === option_linked[k].textContent){
        //     for(let j=0;j<usedImage.length;j++){ //j<usedImage.length
        //       //console.log(usedImage[j]);
        //       //console.log(image_rand);
        //       if (usedImage[j] == image_rand){
        //           add_image_to_list=0;
        //           image_alert=1;
                  
        //       }
        //       else{
        //           add_image_to_list +=1;
        //       }
      
                
        //       }
        //   }
        //   else{
        //       add_image_to_list +=1;
        //   }
        // }
        // if (add_image_to_list >=1){
        //   usedImage.push(image_rand);
        //   email_collect.innerHTML +=`<p class="test-text"><span>${option_active.textContent}</span><img class="email-${option_active.textContent}" src=${image_rand}></p>`;
        //   add_image_to_list =0;
        // }
        // else if (image_alert==1){
        //   alert('Image already exists in this collection');
        // }
    // else{
    //   for(let j=0;j<usedImage.length;j++){ //j<usedImage.length
    //     if (usedImage[j] == image_rand){
    //       option_linked=document.querySelectorAll('.test-text'); 
    //       for(let k=0; k<option_linked.length; k++){
    //         console.log(option_active.textContent);
    //         console.log(option_linked[k].textContent);
    //         if(option_active.textContent === option_linked[k].textContent){
    //           alert('images already exists in this collection');
    //           add_image_to_list=0;
    //           //image_alert=1;
    //         }
    //         else{
    //           add_image_to_list +=1;
    //         }

    //       }
    //     }
    //     else{
    //       add_image_to_list +=1;
    //     }
    //   }
    //   if (add_image_to_list >=1){
    //     usedImage.push(image_rand);
    //     email_collect.innerHTML +=`<p class="test-text">${option_active.textContent}<img class="email-${option_active.textContent}" src=${image_rand}></p>`;
    //     add_image_to_list =0;
    //   }
      // /*else if (image_alert ==1){
      //   alert('Image already exists in this collection');
      // } */
    }
    
    

    }
  }
  else{ //If you haven't selected a collection (the contents of the button are the default Select), this message will show
    alert('A collection has not been selected yet');
  }
});

let collection_deleter_one = document.querySelector('#delete-one');
  collection_deleter_one.addEventListener('click',()=>{ 
    if (option_active.textContent !== "Select"){
      usedEmailAddress.pop(option_active.textContent); 
      option_active.remove();//Removes the current option from the select menu and changes to default option
      $('p').css('display','none'); //Hides all images inside <p> tags until another collection is selected
      quantity_email-=1;//<p> are targeted instead of <img> to prevent the hiding of the image in the top box
    }                              
    else{ //You are not allowed to delete the default "Select" option, so you will be shown this message if you try to delete it
      alert('Please select the collection you would like to delete');
    }
});

let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`;
  select.innerHTML += `<option>Select</option>`;
  usedImage = [];
  usedEmailAddress =[];
  $('p').remove(); //Removes all images contained inside <p> tags 
  for(l=0;l<quantity_email;l+=0){ //The loop itself doesn't increment, the quantity email number decrements instead
    $(`#div-${quantity_email}`).remove();
    quantity_email-=1;
  }
});

function swapCollection(){
  //alert('state change detected');
  option_active = document.querySelector('option:checked');
  $(`${email1}`).css('display','none');
  if (readyForLinking > 0){
    option_linked=document.querySelectorAll('.test-text'); 
    option_image=document.querySelectorAll('p img');
    for (let i=0; i<option_linked.length; i++){
        console.log(option_image[i].className);
        if (option_active.textContent === option_image[i].className){
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
Page is responsive

JS Tasks to complete:
The same image cannot be assigned to the same email 
Consistent and professional looking colour scheme
*/

/*Other:
Smaller Pictures
Input text clear 
Fix delete button issue where you can add to a deleted collection
Fix image validation issues
*/