let quantity_images =0;
let quantity_email =0;
let email1 = $('#email').val();
let collection_pictures=document.querySelector('.collection-pictures'); //The location which is used to store the collections
let select = document.querySelector('#select');
let usedEmailAddress = [];
let usedImage =[];
let collectionGroup =[];
let readyForLinking =0; //Prevents an error created when switching collections before adding an image to the page
let add_email_to_list =0;
let add_image_to_list =0;
let add_collection_to_list =0;
let image_alert =0;
let override =0;
option_active = document.querySelector('option:checked'); //Keeps track of the current selected option
option_linked=document.querySelectorAll('.test-text'); 
function validateForm(){
    //Below regex is used to validate emails
    let regex = new RegExp(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/);
    let email1 = $('#email').val(); //Takes an input from the text box with the id 'email'
    let test1= regex.test(email1); //Checks if the email entered follows one of the regular expressions specified above
                                   //If it does, test1 will be assigned to true. If not, it will be assigned to false
    function addEmail(){
      if (usedEmailAddress.length == 0){//If there are no emails in the usedEmailAddress array
        quantity_email+=1;
        usedEmailAddress.push(email1);
        select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
        collection_pictures.innerHTML += `<div id="div-${quantity_email}"><span>${email1}</span></div>`;
        alert('Email address validated');
      }
      else{
        for(i=0;i<usedEmailAddress.length;i++){ 
          if (usedEmailAddress[i] == email1){ //Checks if the input is already in the list
              alert('You have already added this email as a collection');
              add_email_to_list =0;
              break;
          }
          else{
            add_email_to_list +=1;
          }
        }
        if (add_email_to_list >=1){
          quantity_email+=1;
          usedEmailAddress.push(email1);
          select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; 
          collection_pictures.innerHTML += `<div id="div-${quantity_email}"><span>${email1}</span></div>`; 
          //Directly adds the new HTML code to the first select tag (there is only one which is used for choosing the selection)
          add_email_to_list =0; 
          alert('Email address validated'); //Alert added here instead of where the validation occurs to prevent user confusion
          //email_collect2 does the same thing as email_collect but written in a different way for a different purpose
          let email_collect2= document.querySelectorAll("[id^='div-']"); 
          console.log(email_collect2.length);
          for (p=0; p<email_collect2.length; p++){
            alert(`collection add number: ${add_collection_to_list}`);
            if (collectionGroup.length === 0){
              console.log(email_collect2[p]);
              collectionGroup.push(email_collect2[p]);
              console.log(collectionGroup);
              console.log(collectionGroup[0]);
            }
            else{
              add_collection_to_list =1;
              console.log(p);
              console.log(collectionGroup.length);
              if (collectionGroup.length !=(p)){ //Removes the collection divs previously created to prevent issues with duplicates
                collectionGroup=[];
              }
              
              

            }
        
  
            alert(`collection add number: ${add_collection_to_list}`);
            if (add_collection_to_list == 1){
              if (override != 1){
                collectionGroup.push(email_collect2[p]);
                console.log(collectionGroup);
                add_collection_to_list=0;
              }
              else{
                override=0;
              }
            }
          }
          

        }
      }
    }
    
    if (email1=== ''){
      //$('#required-email').css('display','block'); //Code for the red text warning message, currently disabled
      alert('Please enter your email address: this is required.');
      
    }
    else{
      if (test1 === true){
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
  console.log(option_active.textContent);
  if (option_active.textContent !== "Select"){ 
    quantity_images+=1;
    if (usedImage.length == 0){
      if (option_active.textContent !== "Select"){ 
        usedImage.push(image_rand);
        email_collect.innerHTML +=`<p class="test-text"><img class="${option_active.textContent}" src=${image_rand}></p>`;
        readyForLinking+=1;
      }
      else{
        alert('A collection has not been selected yet');
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
          option_linked=document.querySelectorAll('.test-text');
          option_image=document.querySelectorAll('p img');
          for(let k=0; k<option_linked.length; k++){
            if(option_active.textContent === option_image[k].className){ //Checks if image belongs to the option active select
              if(option_image[k].src== image_rand){ //Checks if it is already exists
                add_image_to_list=0;
                break;
              }
              else{
                add_image_to_list=1;
              }
            }
            else{
              add_image_to_list=1; 
            }
          }
          alert(`add image to list value: ${add_image_to_list}`);
          if (add_image_to_list >=1){
            usedImage.push(image_rand);
            email_collect.innerHTML +=`<p class="test-text"><img class="${option_active.textContent}" src=${image_rand}></p>`;
            console.log(email_collect.textContent);
            add_image_to_list =0;
          }
          else if (image_alert==1){
            alert('Image already exists in this collection');
          }
        }
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
    for(o=1;o<select.length;o+=1){
      if (option_active.textContent == email_collect2[o].textContent){ 
        //if (collectionGroup[o].textContent)
        usedEmailAddress.pop(option_active.textContent); 
        option_active.remove();//Removes the current option from the select menu and changes to default option
        quantity_email-=1;
      }
      // let email_collect=document.querySelector(`#div-${o}`);
      // console.log(option_active.textContent);
      // console.log(email_collect.textContent);
      // if(option_active.textContent === email_collect.textContent){
      //     usedEmailAddress.pop(option_active.textContent); 
      //     option_active.remove();//Removes the current option from the select menu and changes to default option
      //     email_collect.remove();
      //     quantity_email-=1;
      //   }
      }
    }                              
    else{ //You are not allowed to delete the default "Select" option, so you will be shown this message if you try to delete it
      alert('Please select the collection you would like to delete');
    }
});

let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`;
  select.innerHTML += `<option>Select</option>`;
  //Sets the arrays to empty because everything is deleted, so there are no images or email addresses that are unusable
  usedImage = []; 
  usedEmailAddress =[];
  // $('p').remove(); //Removes all images contained inside <p> tags 
  for(l=0;l<quantity_email;l+=0){ //The loop itself doesn't increment, the quantity email number decrements instead
    $(`#div-${quantity_email}`).remove(); //Removes the collections divs but requires that there is no number gap
    quantity_email-=1; //
  }
});

function swapCollection(){ //When the select option is changed, this code is executed
  option_active = document.querySelector('option:checked'); //Query selector for the selected option
  //$(`${email1}`).css('display','none'); 
  if (readyForLinking > 0){ //Used to prevent errors which occur before adding an image to a collection
    option_linked=document.querySelectorAll('.test-text'); //Targets all the <p> targets on the page
    option_image=document.querySelectorAll('p img'); //Targets all the images inside <p> tags
    for (let i=0; i<option_linked.length; i++){
        console.log(option_image[i].className);
        if (option_active.textContent === option_image[i].className){
          option_linked[i].style.display ='block';
          //Shows the images belonging to the div which shares its class name with the active select option
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
Consistent and professional looking colour scheme
*/

/*Other:
Smaller Pictures
Input text clear 
Fix delete button issue which causes console errors
*/