function scrollToTop() {
  // Scroll to the top of the page
  window.scrollTo({
      top: 0,
      behavior: "smooth" // You can change this to "auto" for instant scrolling
  });
}
scrollToTop();
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
'<a href="/contact us.html">Contact Us</a>'+
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

//Js Code for slider
//Js code for first button
function change1(){
  //img change
  let img1=document.getElementById("img1");
  img1.src="/profile pic3.avif" ;
  let img2=document.getElementById("img2");
  img2.src="/profile-pic1.avif" ;
let img3=document.getElementById("img3");
  img3.src= "/profile pic2.avif" ;
//review change
  let para1=document.getElementById("para1");
  para1.innerHTML='Really impressed with their fragrance (Amber Oud), people who prefer Attar should try it. Such a vibrant and strong smell of Oud.'
   let para2=document.getElementById("para2");
para2.innerHTML="I love a scent that can make memories come aliveWaooo !!! what an amazing perfume with a premium packaging delivered gift by this  Scents N Stories"
  let para3=document.getElementById("para3");
  para3.innerHTML="Just received my parcel today and this is the best impression I've ever smelt. Projection and lasting is out of this world."
//inline para change
  let inline1=document.getElementById("inline1");
  inline1.innerHTML=""
  let inline2=document.getElementById("inline2");
  inline2.innerHTML=""
  let inline3=document.getElementById("inline3");
  inline3.innerHTML=""
//name change
  let name1=document.getElementById("name1");
  name1.innerHTML="Shohaib Tariq"
  let name2=document.getElementById("name2");
name2.innerHTML="Maryam Asad"
let name3=document.getElementById("name3");
name3.innerHTML="Ali Muhammad"
//info change
  let info1i=document.getElementById("info1");
  info1i.innerHTML="Amber Oud"
  let info2i=document.getElementById("info2");
info2i.innerHTML="Inferno"
  let info3i=document.getElementById("info3");
 info3i.innerHTML="Umeed" 
//styling change
 let position=document.getElementById("Box");
 position.style.height="95%"
position.style.border="2px solid rgba(44, 43, 43, 0.151)"
position.style.boxShadow="0 4px 8px rgba(128, 128, 128, 1);"
console.log(Box.classList.add("add"))
let circle=document.getElementById("circle");
circle.style.top="70px"
  }
  //Js code for second  button
  function change2(){
    //img chnage
    let img1=document.getElementById("img1");
    img1.src="/profile pic2.avif" ;
    let img2=document.getElementById("img2");
    img2.src="/profile pic3.avif" ;
  let img3=document.getElementById("img3");
    img3.src=  "/profile-pic1.avif" ;
//review change
    let para1=document.getElementById("para1");
  para1.innerHTML="Just received my parcel today and this is the best impression I've ever smelt. Projection and lasting isout of this world. "  
   let para2=document.getElementById("para2");
para2.innerHTML="Really impressed with their fragrance (Amber Oud), people who prefer Attar should try it. Such a vibrant and strong smell of Oud "
  let para3=document.getElementById("para3");
  para3.innerHTML=" I love a scent that can make memories come aliveWaooo !!! what an amazing perfume with a premium packaging delivered gift by this  Scents N Stories"

//inline para chnage
  let inline1=document.getElementById("inline1");
  inline1.innerHTML=""
  let inline2=document.getElementById("inline2");
  inline2.innerHTML=""
  let inline3=document.getElementById("inline3");
  inline3.innerHTML=""
//name change
  let name1=document.getElementById("name1");
  name1.innerHTML="Ali Muhammad"
  let name2=document.getElementById("name2");
name2.innerHTML="Shohaib Tariq"
let name3=document.getElementById("name3");
name3.innerHTML="Maryam Asad"
//info change
let info1=document.getElementById("info1");
info1.innerHTML="Umeed" 
let info2=document.getElementById("info2");
info2.innerHTML="Amber Oud"
let info3=document.getElementById("info3");
info3.innerHTML="Inferno"
//styling change
let position=document.getElementById("Box");
 position.style.height="95%"
position.style.border="2px solid rgba(44, 43, 43, 0.151)"
position.style.boxShadow="0 4px 8px rgba(128, 128, 128, 1);"
console.log(Box.classList.add("add"))
let circle=document.getElementById("circle");
circle.style.top="20px"

 }
//Js code for third button
 function change3(){
  //image change
  let img1=document.getElementById("img1");
    img1.src="/profile-pic1.avif" ;
    let img2=document.getElementById("img2");
    img2.src= "/profile pic2.avif";
  let img3=document.getElementById("img3");
    img3.src= "/profile pic3.avif"  ;
//review change
    let para1=document.getElementById("para1");
    para1.innerHTML= " I love a scent that can make memories come aliveWaooo !!! what an amazing perfume with a premium packaging delivered gift by this  Scents N Stories"
     let para2=document.getElementById("para2");
  para2.innerHTML="Just received my parcel today and this is the best impression I've ever smelt. Projection and lasting is out of this world" 
    let para3=document.getElementById("para3");
    para3.innerHTML="Really impressed with their fragrance (Amber Oud), people who prefer Attar should try it. Such good vibrant and strong smell of Oud. "
  
  //inline para change
    let inline1=document.getElementById("inline1");
    inline1.innerHTML=""
    let inline2=document.getElementById("inline2");
    inline2.innerHTML= ""
    let inline3=document.getElementById("inline3");
    inline3.innerHTML=""
  //name change
    let name1=document.getElementById("name1");
    name1.innerHTML="Maryam Asad"
    let name2=document.getElementById("name2");
  name2.innerHTML="Ali Muhammad"
  let name3=document.getElementById("name3");
  name3.innerHTML="Shohaib Tariq"
  //info change
  let info1=document.getElementById("info1");
  info1.innerHTML="Inferno"
  let info2=document.getElementById("info2");
  info2.innerHTML="Umeed" 
  let info3=document.getElementById("info3");
  info3.innerHTML="Amber Oud"
//styking change
  let position=document.getElementById("Box");
 position.style.height="95%"
position.style.border="2px solid rgba(44, 43, 43, 0.151)"
position.style.boxShadow="0 4px 8px rgba(128, 128, 128, 1);"
console.log(Box.classList.add("add"))
let circle=document.getElementById("circle");
circle.style.top="40px"
circle.style.right="430px"
   }
  
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


//  function getParameterByName(name, url) {
//   if (!url) url = window.location.href;
//   name = name.replace(/[\[\]]/g, "\\$&");
//   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//       results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return '';
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

// // Get the username from the URL
// var username = getParameterByName('username');

// // Display the username on the page
// if (username) {
//   document.getElementById("account").innerHTML += '<p>Welcome, ' + username + '!</p>';
// } else {
//   document.getElementById("account").innerHTML += '<p>No username found in the URL.</p>';
// }


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var username = getParameterByName('username');

if (username) {
  document.getElementById("account").innerHTML = '<p> ' + username + '</p>';
 
 account.classList.add("user")

}

 
function getCartCount() {
  // Retrieve the cart count from local storage
  var count = localStorage.getItem('name');
  // If count exists in local storage, update the cart count display
  if (count !== null) {
    document.getElementById("account").innerHTML=count;
  }
}

// Call getCartCount function when the page loads to display the cart count
window.onload = function() {
  getCartCount();
};