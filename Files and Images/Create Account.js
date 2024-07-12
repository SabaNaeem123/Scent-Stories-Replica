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


 



//login JS

document.getElementById("contactForm").addEventListener('submit', function(event) {
  event.preventDefault();
                      // Get the entered password
                      
                      document.getElementById("passwordError").innerHTML="";
                      document.getElementById("passwordError").classList.add("error");
                    
                      document.getElementById("confirmPasswordError").innerHTML=""
                      document.getElementById("confirmPasswordError").classList.add("error");

                      const password = document.getElementById("password").value;
                      const confirmPassword = document.getElementById("confirmPassword").value;
                  
             if (password.length < 8) {
              document.getElementById("passwordError").innerHTML += ` <span class="material-symbols-outlined">
              warning
              </span> Password must be at least 8 characters long`;
              return;
          }
          if (password.length > 25) {
            document.getElementById("passwordError").innerHTML += `  <span class="material-symbols-outlined">
            warning
            </span>Password length must be less than of 26 characters long `;
            return;
        }
        if (!/\d/.test(password)) {
          document.getElementById("passwordError").innerHTML += ` <span class="material-symbols-outlined">
          warning
          </span> Password must contain at least one numerical digit`;
          return;
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.getElementById("passwordError").innerHTML += ` <span class="material-symbols-outlined">
        warning
        </span> Password must contain at least one special character`;
        return;
    }
    if (!/[a-zA-Z]/.test(password)) {
      document.getElementById("passwordError").innerHTML += ` <span class="material-symbols-outlined">
      warning
      </span> Password must contain at least one alphabet character`;
      return;
  }
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerHTML += ` <span class="material-symbols-outlined">
    warning
    </span> The entered passwords do not match. Please ensure your passwords are identical.`;
    return;
}
            else {
              scrollToTop();
              document.getElementById("loader").style.visibility="visible"
            var durationInMilliseconds = 500; 
            setTimeout(function(){
             document.getElementById('contactForm').reset()
            }, durationInMilliseconds)
             loader.classList.add("loader")
             loader.classList.remove("load")
             setTimeout(function(){
              const resultDiv=document.getElementById('Answer');
              resultDiv.style.display="block";
              document.getElementById("yes").style.visibility="visible"
              yes.classList.add("yes")
              yes.classList.remove("load")
              document.getElementById("contactForm").style.display="none"
              document.getElementById("h1").style.display="none";
              document.getElementById("loader").style.display="none"
              resultDiv.innerHTML=`"Account created successfully! Ready to explore your account."`
              Answer.classList.add("Answer")
             },3000)
             createAccount();
            
            }     
           
    });
    function createAccount() {
      var username = document.getElementById('first').value;
      // Set the link directly in the button
      document.getElementById('yes').onclick = function () {
          window.location.href = 'website_index .html?username=' + encodeURIComponent(username);
      };
  }

  function border1(){
    document.getElementById("first").style.border="3px solid black"
  }
  function remove1(){
    document.getElementById("first").style.border=" 2px solid rgba(190, 190, 190, 0.795)"
  }

  function border2(){
    document.getElementById("lastName").style.border="3px solid black"
  }
  function remove2(){
    document.getElementById("lastName").style.border=" 2px solid rgba(190, 190, 190, 0.795)"
  }

  function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth" // You can change this to "auto" for instant scrolling
    });
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
    document.getElementById("account").innerHTML = "ACCOUNT";
  } 
   else {
    
  } {
    document.getElementById("account").innerHTML = "ACCOUNT";
  } 
}
function scrollToTop() {
  // Scroll to the top of the page
  window.scrollTo({
      top: 0,
      behavior: "smooth" // You can change this to "auto" for instant scrolling
  });
}

// Call getCartCount function when the page loads to display the cart count
window.onload = function() {
getNmae();
getCartCount();
scrollToTop();
};