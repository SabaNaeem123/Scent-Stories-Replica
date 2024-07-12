const text=document.querySelector(".animated-text").children,
textLen=text.length;
let index=0;
const textInTimer=3000,
textOutTimer=2800;

function animateText() {
for(let i=0; i<textLen; i++){
  text[i].classList.remove("text-in","text-out");  
}
text[index].classList.add("text-in");

setTimeout(function(){
  text[index].classList.add("text-out");              
},textOutTimer)

setTimeout(function(){
  if(index == textLen-1){
    index=0;
  }
  else{
    index++;
  }
    animateText();
},textInTimer); 
}        
window.onload=animateText;

//dropdowms
const shopContent = document.querySelector('.shop-content');
const contactContent = document.querySelector('.dropdown-content');
const dropdownIcon = document.querySelector('.dropdown-icon');

dropdownIcon.addEventListener('click', () => {
  if (shopContent.style.display === 'none') {
    // Display Shop content
    shopContent.style.display = 'block';
    // Change icon to cross
    dropdownIcon.innerHTML = '&#10006;';
  } else {
    // Hide Shop content
    shopContent.style.display = 'none';
    // Change icon to dropdown
    dropdownIcon.innerHTML = '&#9660;';
  }
});

const DropdownIcon = document.querySelector('.i');
DropdownIcon.addEventListener('click', () => {
  if (contactContent.style.display === 'none') {
    // Display Shop content
    contactContent.style.display = 'block';
    // Change icon to cross
    DropdownIcon.innerHTML = '&#10006;';
  } else {
    // Hide Shop content
    contactContent.style.display = 'none';
    // Change icon to dropdown
    DropdownIcon.innerHTML = '&#9660;';
  }
});


function showElement(element) {
element.style.opacity = 1;
}

function hideElement(element) {
element.style.opacity = 0;
}

var elements = document.querySelectorAll('.elem');
for (var i = 0; i < elements.length; i++) {
  elements[i].onmouseover = function() { showElement(this); };
  elements[i].onmouseout = function() { hideElement(this); };
}




function showDropdown() {
var dropdownContent=document.getElementById("contactsDropdown");
dropdownContent.style.color="black"
dropdownContent.innerHTML = 
'<a href="#">Contact Us</a>'+
'<a href="#">Our Outlets</a>'+
'<a href="#">FAQs</a>'+
'<a href="#">Join our Facebook Group</a>'+
'<a href="#">Track Your Order</a>';
}

document.addEventListener("DOMContentLoaded", function(){
var originalCart=document.getElementById("original-cart");
var newCart=document.getElementById("new-cart");
var closeCart=document.getElementById("close-cart-icon");

originalCart.addEventListener("click", function() {
originalCart.classList.add("hidden");
newCart.classList.remove("hidden");
originalCart.style.display="none";
});

closeCart.addEventListener("click", function() {
newCart.classList.add("hidden");
originalCart.classList.remove("hidden");
originalCart.style.display="flex";
})
})


//Subscribing JS
document.getElementById("form").addEventListener('submit', function(event){
  event.preventDefault();
  const input=document.getElementById("input").value;
 alert(`Hi ${input}!
Scent N Stories wants to send notifications.`)
  const resultDiv=document.getElementById('result');
  resultDiv.innerHTML=`
  <p>Thanks For Subscribing! </p>`;
  console.log(result.classList.add("result"))
  let change=document.getElementById("form")
  change.style.display="none"
});


   //JS for first pop-up

   //Open popup
   function openPopup() {
    var Overlay = document.getElementById('Overlay');
    var popup = document.querySelector('.popup1');

    Overlay.style.display = 'flex';
    setTimeout(function() {
        Overlay.style.opacity = '1';
        popup.style.opacity = '1';
        popup.style.transform = 'scale(1)';
    }, 10);
    let cross=document.getElementById("cross")
 console.log(cross.classList.add("cross"))
 let close=document.getElementById("close");
close.classList.add("close")

}
//Close Popup
function closePopup() {
    var Overlay = document.getElementById('Overlay');
    var popup = document.querySelector('.popup1');
 
    Overlay.style.opacity = '0';
    popup.style.opacity = '0';
    popup.style.transform = 'scale(0.7)';
    let cross=document.getElementById("cross")
    console.log(cross.classList.remove("cross"))
    let close=document.getElementById("close");
   close.classList.remove("close")
   
    setTimeout(function() {
        Overlay.style.display = 'none';
        let cross=document.getElementById("cross")
        console.log(cross.classList.remove("cross"))
        let close=document.getElementById("close");
       close.classList.remove("close")
    }, 300);
   
}

//JS for second popup

//open popup
function OpenPopup() {
  var Overlay = document.getElementById('Overlay.');
  var popup = document.querySelector('.popup2');

  Overlay.style.display = 'flex';
  setTimeout(function() {
      Overlay.style.opacity = '1';
      popup.style.opacity = '1';
      popup.style.transform = 'scale(1)';
  }, 10);
  let cross=document.getElementById("Cross")
 console.log(cross.classList.add("cross"))
 let close=document.getElementById("Close");
close.classList.add(".start")
let xyz=document.getElementById("xyz")
xyz.style.visibility="visible"
xyz.style.position="relative"
xyz.style.bottom="40px"
}

//close popup
function ClosePopup() {
  var Overlay = document.getElementById('Overlay.');
  var popup = document.querySelector('.popup2');

  Overlay.style.opacity = '0';
  popup.style.opacity = '0';
  popup.style.transform = 'scale(0.7)';
  let cross=document.getElementById("Cross")
  console.log(cross.classList.remove("cross"))
  let close=document.getElementById("Close");
 close.classList.remove("close")
  setTimeout(function() {
      Overlay.style.display = 'none';
      let cross=document.getElementById("Cross")
      console.log(cross.classList.remove("cross"))
      let close=document.getElementById("Close");
     close.classList.remove("close")
     let xyz=document.getElementById("xyz")
xyz.style.visibility="hidden"
  }, 300);
}
function submitForm() {
  // Clear the form fields
  document.getElementById("Messageform").reset();
}
//Js for displaying message in popup
document.getElementById("submit").addEventListener('click', function(event) {
  event.preventDefault();
  let music=new Audio("button-124476.mp3");
  music.play();
  const input = document.getElementById("inputMessage").value;
  const resultDiv = document.getElementById('Message');
  resultDiv.innerHTML = `<p>${input}</p>`;
  resultDiv.classList.add("message");
  let setting = document.getElementById("inputMessage");
  setting.style.marginTop = "280px";
  currentDate= new Date();
  let time=document.getElementById("time")
  time.innerHTML=`<p> ${currentDate.toLocaleString()}</p>`;
  let display=document.getElementById("time")
  time.classList.add("time")
submitForm()
  setTimeout(function() {
    // Get the element where you want to display the text
    var displayArea = document.getElementById("reply");
    
    // Set the text content
    reply.classList.add("reply")
    displayArea.textContent = "Thanks for contacting us! We will respond you as soon as possible";
    let setting = document.getElementById("inputMessage");
  setting.style.marginTop = "200px";
  let music=new Audio("notification.mp3");
  music.play();
}, 3000); // 3000 milliseconds = 6 seconds

 });


 
//contact us js
document.getElementById("contactForm").addEventListener('submit', function(event){
  event.preventDefault();
  const resultDiv=document.getElementById('answer');
  resultDiv.innerHTML=`
  <p><ul><li>Thanks for contacting us. We'll get back to you as soon as possible.</ul></li> </p>`;
  console.log(resultDiv.classList.add("answer"))
 document.getElementById('contactForm').reset()
});

function border(){
  document.getElementById("Name").style.border="3px solid black"
}
function remove(){
  document.getElementById("Name").style.border=" 2px solid rgba(190, 190, 190, 0.795)"
}

function getCartCount() {
  // Retrieve the cart count from local storage
  var count = localStorage.getItem('cartCount');
  // If count exists in local storage, update the cart count display
  if (count !== null) {
    document.getElementById("cart-dropdown").innerHTML=`<p>Your cart has ${count} item`
    count++;
  }
  if (count ===0) {
    document.getElementById("cart-dropdown").innerHTML=`<p>Your cart has  ${count} item`
  }
}

// Call getCartCount function when the page loads to display the cart count

function getNmae() {
  // Retrieve the cart count from local storage
  var count = localStorage.getItem('name');
  // If count exists in local storage, update the cart count display
  if (count !== null) {
    document.getElementById("account").innerHTML=count;
  }
  if (count===null) {
    document.getElementById("account").innerHTML = "";
  } 
   else {
    document.getElementById("account").innerHTML = "ACCOUNT";
  } 
   
  
}

// Call getCartCount function when the page loads to display the cart count
window.onload = function() {
getNmae();
getCartCount();
};