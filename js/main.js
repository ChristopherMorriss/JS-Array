let quantity_email =0; //Used to keep track of the amount of current existing emails
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
let not_same =0;
option_active = document.querySelector('option:checked'); //Keeps track of the current selected option
option_linked=document.querySelectorAll('.test-text');

function changeSelect(){
  let forceSelect = document.querySelector('option'); //The default 'Select' option is always the first option
  option_active = forceSelect; 
   $('p').css('display','none'); //Added to make the images related to the previous collection hide 
  //Forces the option_active to be 'Select' so that the user cannot add images after adding or removing a collection
  //When a collection is added or deleted, the select menu changes to 'Select' but the value is the new or deleted option
}



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
        select.innerHTML += `<option id="${email1}" value="${email1}">${email1}</option>`; //Creates a new option for the select menu
        collection_pictures.innerHTML += `<div id="div-${quantity_email}"><span>${email1}</span></div>`; //Creates a new collection
        let email_collect = document.querySelectorAll("[id^='div-']");
        collectionGroup.push(email_collect[0]);
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
          let email_collect= document.querySelectorAll("[id^='div-']"); 
          for(t=1;t<quantity_email;t+=1){
            not_same=0; //Resets the value
            for(u=0;u<email_collect.length;u+=1){
              if (email_collect[u].id !== `div-${t}`){ 
                //If none of the collections have an id of "div-t" then the new collection will have an id of "div-t"
                not_same+=1; 
                if (not_same == email_collect.length){ 
                  email_collect[u].remove(); //Remove the option (but doesn't remove it from the collect list if not redefined below)
                  collection_pictures.innerHTML += `<div id="div-${t}"><span>${email1}</span></div>`;
                  email_collect= document.querySelectorAll("[id^='div-']"); //Redefined otherwise the new div is ignored
                  break;
                }
              }
              
            }
          }
  
          add_email_to_list =0; 
          alert('Email address validated'); //Alert added here instead of where the validation occurs because duplicates are not valid
          //email_collect does the same thing as email_collect but written in a different way for a different purpose
          changeSelect();
          //let email_collect= document.querySelectorAll("[id^='div-']"); 
          for (p=0; p<email_collect.length; p++){
            if (collectionGroup.length === 0){ //If there are no existing collections, there are no duplicates
              collectionGroup.push(email_collect[p]); //Therefore, the collection is added to the array without any other checks
            }
            else{
              add_collection_to_list =1;
              if (collectionGroup.length !=(p)){ //Removes the collection divs previously created to prevent issues with duplicates
                collectionGroup=[];
              }
              
              

            }
        
            
            if (add_collection_to_list == 1){ 
              collectionGroup.push(email_collect[p]); //Adds each collection to the collection group
              add_collection_to_list=0;
              
              
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
        alert('Invalid email. Please enter the email address in the correct format (example: test@test.com)');
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
  let email_collect= document.querySelectorAll(("[id^='div-']"));
  if (option_active.textContent !== "Select"){ 
    if (usedImage.length == 0){
      for (m=1;m<select.length;m+=1){ //m starts at 1 to skip the default "Select" option which is fixed at position 0
        if (option_active.textContent === email_collect[m-1].textContent){ 
          usedImage.push(image_rand); 
          email_collect[m-1].innerHTML +=`<p class="test-text"><img class="${option_active.textContent}" src=${image_rand}></p>`;
          readyForLinking+=1;
      }
    }  
    }
    else{
      for(m=1;m<select.length;m+=1){ 
        let email_collect= document.querySelectorAll(("[id^='div-']"));
        if(option_active.textContent === email_collect[m-1].textContent){ //Assigns the image to the div linked with the email address
          option_linked=document.querySelectorAll('.test-text');
          option_image=document.querySelectorAll('p img');
          for(let k=0; k<option_linked.length; k++){
            if(option_active.textContent === option_image[k].className){ //Checks which images belong to the active collection
              if(option_image[k].src== image_rand){ //Checks if image in collection is the current image displayed at the top
                image_alert=1; //Triggers a warning message outside of the loop, to prevent it being output multiple times
                add_image_to_list=0; //Prevents the image from being added to the collection
                break; //Since the image exists, the loop is stopped to prevent further loops from adding the duplicate image
              }
              else{
                add_image_to_list=1;
              }
            }
            else{
              add_image_to_list=1; 
            }
          }
          if (add_image_to_list >=1){
            usedImage.push(image_rand);
            email_collect[m-1].innerHTML +=`<p class="test-text"><img class="${option_active.textContent}" src=${image_rand}></p>`;
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
    for(o=0;o<collectionGroup.length;o+=1){ 
      if (option_active.textContent == collectionGroup[o].textContent){ 
        let email_collect= document.querySelectorAll("[id^='div-']"); 
        for (r=0;r<email_collect.length;r+=1){
          if (collectionGroup[o].textContent == email_collect[r].textContent){ 
            delete usedEmailAddress[r]; 
            usedEmailAddress=usedEmailAddress.filter(n=>n); //Removes the empty elements which appear after removing an array item
            option_active.remove(); //Removes the current option from the select menu and changes to default option
            delete collectionGroup[o]; 
            email_collect[r].remove(); //Removes the collection from the html code
            quantity_email-=1; 
            collectionGroup= collectionGroup.filter(n=>n); 
            changeSelect(); 
            break; //Ends the loop, preventing the deletion of the collections that come after the deleted option

          }
        }
       }
      }
    }                              
    else{ //You are not allowed to delete the default "Select" option, so you will be shown this message if you try to delete it
      alert('Please select the collection you would like to delete');
    }
});

let collection_deleter_all = document.querySelector('#delete-all');
collection_deleter_all.addEventListener('click',()=>{
  select.innerHTML -= `<option id="${email1}" value="${email1}">${email1}</option>`; //Deletes every option
  select.innerHTML += `<option>Select</option>`; //Adds default option
  //Sets the arrays to empty because everything is deleted, so there are no images or email addresses that are unusable
  usedImage = []; 
  usedEmailAddress =[];
  collectionGroup= [];
  let email_collect= document.querySelectorAll("[id^='div-']"); 
  for (s=0;s<email_collect.length;s+=1){
    email_collect[s].remove(); //Removes each collection
  }
  quantity_email=0; //Resets the email quantity to 0 
  changeSelect();
});

function swapCollection(){ //When the select option is changed, this code is executed
  option_active = document.querySelector('option:checked'); //Query selector for the selected option 
  if (readyForLinking > 0){ //Used to prevent errors which occur before adding an image to a collection
    option_linked=document.querySelectorAll('.test-text'); //Targets all the <p> targets on the page
    option_image=document.querySelectorAll('p img'); //Targets all the images inside <p> tags
    for (let i=0; i<option_linked.length; i++){
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



newImage(); //Generates a new image which replaces the seeded image







