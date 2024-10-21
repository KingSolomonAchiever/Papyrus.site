


const candleOnHoverEffect = document.getElementById("navBarGreeting1");
const candleHoverEffect  = document.getElementById("candleCategoryContainer");




let hide;

// Show the dropdown when hovering over the nav item
candleOnHoverEffect.addEventListener("mouseover", () => {
  clearTimeout(hide); // Cancel any pending hide action
  candleHoverEffect.style.display = "flex";    
});

// Delay hiding the dropdown when not hovering over the nav item
candleOnHoverEffect.addEventListener("mouseout", () => {
  hide = setTimeout(() => {
    candleHoverEffect.style.display = 'none';
  }, 200); // Delay for 100 milliseconds
});

// Keep the dropdown visible when hovering over it
// candleHoverEffect.addEventListener("mouseover", () => {
//   clearTimeout(hide); // Cancel any pending hide action
//   candleHoverEffect.style.display = "flex";
// });

// // Delay hiding the dropdown when not hovering over it
// candleHoverEffect.addEventListener("mouseout", () => {
//   hide = setTimeout(() => {
//     candleHoverEffect.style.display = 'none';
//   }, 200); // Delay for 100 milliseconds
// });











const giftHoverEffect = document.getElementById("giftPackagingContainer");
const onMouseOverShowEffect = document.getElementById('navBarGreeting1');


let hideTimeoutHover;

// Show the dropdown when hovering over the nav item
onMouseOverShowEffect.addEventListener("mouseover", () => {
  clearTimeout(hideTimeoutHover); // Cancel any pending hide action
  giftHoverEffect.style.display = "flex";    
});

// Delay hiding the dropdown when not hovering over the nav item
onMouseOverShowEffect.addEventListener("mouseout", () => {
  hideTimeoutHover = setTimeout(() => {
    giftHoverEffect.style.display = 'none';
  }, 200); // Delay for 100 milliseconds
});

// Keep the dropdown visible when hovering over it
giftHoverEffect.addEventListener("mouseover", () => {
  clearTimeout(hideTimeoutHover); // Cancel any pending hide action
  giftHoverEffect.style.display = "flex";
});

// Delay hiding the dropdown when not hovering over it
giftHoverEffect.addEventListener("mouseout", () => {
  hideTimeoutHover = setTimeout(() => {
    giftHoverEffect.style.display = 'none';
  }, 200); // Delay for 100 milliseconds
});




















  const navHoverEffect = document.getElementById("navBarGreeting");
  const displayHoverEffect = document.getElementById('generalHoverContainer');


let hideTimeout;

// Show the dropdown when hovering over the nav item
navHoverEffect.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout); // Cancel any pending hide action
    displayHoverEffect.style.display = "flex";
});

// Delay hiding the dropdown when not hovering over the nav item
navHoverEffect.addEventListener("mouseout", () => {
    hideTimeout = setTimeout(() => {
        displayHoverEffect.style.display = 'none';
    }, 100); // Delay for 200 milliseconds
});

// Keep the dropdown visible when hovering over it
displayHoverEffect.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout); // Cancel any pending hide action
    displayHoverEffect.style.display = "flex";
});

// Delay hiding the dropdown when not hovering over it
displayHoverEffect.addEventListener("mouseout", () => {
    hideTimeout = setTimeout(() => {
        displayHoverEffect.style.display = 'none';
    }, 100); // Delay for 200 milliseconds
});




const papyruscelebration = document.getElementById('celebrationNav');
const papyrusDropDown = document.getElementById("celebrationNavDropDown");

papyruscelebration.addEventListener("mouseover", () => {
    papyrusDropDown.style.display = 'block'; 
});

papyruscelebration.addEventListener("mouseout", () => {
    if (!papyrusDropDown.matches(':hover')) {
        papyrusDropDown.style.display = "none";
    }
});

papyrusDropDown.addEventListener("mouseover", () => {
    papyrusDropDown.style.display = 'block'; 
});

papyrusDropDown.addEventListener("mouseout", () => {
    papyrusDropDown.style.display = "none";  
});

// Lifestyle Dropdown
const papyruslifestyle = document.getElementById("LifestyleNav");
const papyrusLifestyleDropDown = document.getElementById("LifestyleNavDropDown");

papyruslifestyle.addEventListener("mouseover", () => {
    papyrusLifestyleDropDown.style.display = 'block'; 
});

papyruslifestyle.addEventListener("mouseout", () => {
    if (!papyrusLifestyleDropDown.matches(':hover')) {
        papyrusLifestyleDropDown.style.display = "none";
    }
});

papyrusLifestyleDropDown.addEventListener("mouseover", () => {
    papyrusLifestyleDropDown.style.display = 'block'; 
});

papyrusLifestyleDropDown.addEventListener("mouseout", () => {
    papyrusLifestyleDropDown.style.display = "none";  
});

// About Dropdown
const papyrusAbout = document.getElementById("AboutNav");
const papyrusAboutDropDown = document.getElementById('AboutDropdown');

papyrusAbout.addEventListener("mouseover", () => {
    papyrusAboutDropDown.style.display = 'block'; 
});

papyrusAbout.addEventListener("mouseout", () => {
    if (!papyrusAboutDropDown.matches(':hover')) {
        papyrusAboutDropDown.style.display = "none";  
    }
});

papyrusAboutDropDown.addEventListener("mouseover", () => {
    papyrusAboutDropDown.style.display = 'block'; 
});

papyrusAboutDropDown.addEventListener("mouseout", () => {
    papyrusAboutDropDown.style.display = "none";  
});

let currentIndex = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    // Wrap around if the index is out of range
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Move the track to the correct position
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;
}




// let currentIndex = 0;

function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    // Wrap around if the index is out of range
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Move the track to the correct position
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;

    // Update the active dot
    updateDots();
}

function goToSlide(index) {
    const track = document.querySelector('.carousel-track');
    currentIndex = index;


    function autoSlide() {
        setInterval(() => moveSlide(1), 5000);
    }




    // Move the track to the correct position
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;

    // Update the active dot
    updateDots();
}

// Initialize the active dot
updateDots();



document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("IconCart1");
    const searchInput = document.getElementById("searchInput");

    // Toggle the 'active' class on the search input when the search icon is clicked
    searchIcon.addEventListener("click", function () {
        searchInput.classList.toggle("active");
        // Optionally focus on the input when it is shown
        if (searchInput.classList.contains("active")) {
            searchInput.focus();
        }
    });
});






function toggleMenu() {
    var navLinks = document.getElementById("navLinksSubHeading");
    navLinks.classList.toggle("active");
}




// Function to toggle the visibility of the My Account section
function toggleMyAccount() {
    var myAccountSection = document.getElementById("MyAccountSection");
    myAccountSection.classList.toggle("visible");
}

// Function to toggle password visibility
function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function closeMyAccount() {
    var myAccountSection = document.getElementById("MyAccountSection");
    myAccountSection.classList.remove("visible");
}
