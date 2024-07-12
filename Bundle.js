function scrollToTop() {
  // Scroll to the top of the page
  window.scrollTo({
      top: 0,
      behavior: "smooth" // You can change this to "auto" for instant scrolling
  });
}
scrollToTop()
resetCart();
document.getElementById("sub-main").style.display="none"
document.getElementById("none").style.display="none"
setTimeout(function(){
  document.getElementById("sub-main").style.display="block"
},2000)
setTimeout(function(){
  document.getElementById("none").style.display="block"
  document.getElementById("sub-main").style.display="none"
},6000)

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



 function openCart() {
  resetCartPopup();
  var Overlay = document.getElementById('Overlay!');
  var popup = document.querySelector('.popupg');

  Overlay.style.display = 'flex';
  setTimeout(function() {
      Overlay.style.opacity = '1';
      popup.style.opacity = '1';
      popup.style.transform = 'scale(1)';
  }, 10);

}
//Close Popup
function closeCart() {
  var Overlay = document.getElementById('Overlay!');
  var popup = document.querySelector('.popupg');

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

 

document.getElementById("thank").style.display="none"
document.getElementById("detail").style.display="none"
document.getElementById("detail2").style.display="none"
document.getElementById("Confirm").style.display="none"
function details(){
  document.getElementById("cart").style.display="none"
  document.getElementById("detail").style.display="block"
document.getElementById("detail2").style.display="block"
  let detail1=document.getElementById("detail")
detail1.src="detail1.jpg"
  let detail2=document.getElementById("detail2")
  detail2.src="detail2.jpg"
  document.getElementById("height").style.height="530px"
  document.getElementById("Confirm").style.display="block"
 let confirm= document.getElementById("Confirm")
  confirm.classList.add("confirm")
  document.getElementById("thank").style.display="none"
}

function confirm(){
  document.getElementById("height").style.height="270px"
  document.getElementById("detail").style.display="none"
document.getElementById("detail2").style.display="none"
document.getElementById("Confirm").style.display="none"
  document.getElementById("thank").style.display="block"
 let thank=document.getElementById("thank")
 thank.src="/thanks for shopping.png" 
 thank.style.marginTop="30px"
 thank.style.marginLeft="100px"
 thank.style.width="60%"
}

// let CartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;

// // Update the cart count display
// document.getElementById("cart-dropdown").innerHTML=`<p>Your cart has ${CartCount} item`

// function addToCart() {
//     CartCount++;
//     // Update the cart count display
//     document.getElementById("cart-dropdown").innerHTML=`<p>Your cart has ${CartCount} item`
//     // Update the cart count in local storage
//     localStorage.setItem('cartCount', CartCount);
// }
function updateCartCount(count) {
  document.getElementById("cart-dropdown").innerHTML=`<p>Your cart has currently ${count} item`
  // Store the cart count in local storage
  localStorage.setItem('cartCount', count);
}

// Function to retrieve cart count from local storage
function getCartCount() {
  // Retrieve the cart count from local storage
  var count = localStorage.getItem('cartCount');
  // If count exists in local storage, update the cart count display
  if (count !== null) {
      updateCartCount(parseInt(count));
  }
}

// Call getCartCount function when the page loads to display the cart count
window.onload = function() {
  getCartCount();
};

// Function to add to cart
function addToCart() {
  // Increment the cart count
  var count = localStorage.getItem('cartCount');
  if (count === null) {
      count = 0;
  } else {
      count = parseInt(count);
  }
  count++;
  // Update the cart count display
  updateCartCount(count);
}
function resetCart() {
count = 0;
  document.getElementById("cart-dropdown").innerHTML=`<p>Your cart has ${count} item`
  localStorage.setItem('cartCount' ,count);
}

function resetCartPopup() {
  document.getElementById("thank").style.display = "none"; // Hide the thank you message
    document.getElementById("cart").style.display = "block"; // Show the form
    document.getElementById("Confirm").style.display = "block"; // Show the Confirm Order button
    document.getElementById("height").style.height="480px"
    document.getElementById("Confirm").style.display="none"
    document.getElementById("cart").reset();
    removeBorder();
}

function addBorder(){
let border=  document.getElementById("border1");
border.classList.add("border")
}

function removeBorder(){
  let border=  document.getElementById("border1");
border.classList.remove("border")
}

function AddBorder(){
  let border2=  document.getElementById("border2");
  border2.classList.add("Border")
  }
  
  function RemoveBorder(){
    let border2=  document.getElementById("border2");
  border2.classList.remove("Border")
  }
  function getCartCount() {
    // Retrieve the cart count from local storage
    var count = localStorage.getItem('name');
    // If count exists in local storage, update the cart count display
    if (count !== null) {
      document.getElementById("account").innerHTML=count;
    }
    if (count===null) {
      document.getElementById("account").innerHTML = "ACCOUNT";
    } 
     else {
      
    } {
      document.getElementById("account").innerHTML = "ACCOUNT";
    } 
  }
  // Call getCartCount function when the page loads to display the cart count
  window.onload = function() {
    getCartCount();
  };