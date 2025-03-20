// Hardcoded user credentials (for demo only)
// For simplicity, the demo uses a single valid credential.
// In a real app, you would store and validate multiple user accounts securely.
const validUsername = "user";
const validPassword = "password";

let isLoggedIn = false;
let cartCount = 0;

// Modal elements for Login
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const loginClose = document.querySelector(".login-close");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

// Modal elements for Sign Up
const signupModal = document.getElementById("signupModal");
const signupBtn = document.getElementById("signupBtn");
const signupClose = document.querySelector(".signup-close");
const signupForm = document.getElementById("signupForm");
const signupError = document.getElementById("signupError");

// Other elements
const welcomeMessage = document.getElementById("welcomeMessage");
const cartBtn = document.getElementById("cartBtn");
const cartCountElem = document.getElementById("cartCount");

// Open Login modal
loginBtn.onclick = () => {
  loginModal.style.display = "block";
};

// Open Sign Up modal
signupBtn.onclick = () => {
  signupModal.style.display = "block";
};

// Close modals when clicking on close spans
loginClose.onclick = () => {
  loginModal.style.display = "none";
  loginError.style.display = "none";
};
signupClose.onclick = () => {
  signupModal.style.display = "none";
  signupError.style.display = "none";
};

// Close modals when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
    loginError.style.display = "none";
  }
  if (event.target == signupModal) {
    signupModal.style.display = "none";
    signupError.style.display = "none";
  }
};

// Handle Login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === validUsername && password === validPassword) {
    isLoggedIn = true;
    welcomeMessage.textContent = "Welcome, " + username + "!";
    loginModal.style.display = "none";
    loginBtn.style.display = "none"; // Hide login button after successful login
    signupBtn.style.display = "none"; // Hide sign up button after successful login
  } else {
    loginError.style.display = "block";
  }
});

// Handle Sign Up form submission (demo: simply check if passwords match and then log the user in)
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUsername = document.getElementById("newUsername").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (newPassword !== confirmPassword) {
    signupError.style.display = "block";
  } else {
    // In a real app, here you would send the new credentials to the backend
    isLoggedIn = true;
    welcomeMessage.textContent = "Welcome, " + newUsername + "!";
    signupModal.style.display = "none";
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
  }
});

// Function to add product to cart
function addToCart(productName) {
  if (!isLoggedIn) {
    alert("Please log in or sign up to add " + productName + " to your cart.");
  } else {
    cartCount++;
    updateCartCount();
    alert(productName + " has been added to your cart.");
  }
}

// Update cart count display
function updateCartCount() {
  cartCountElem.textContent = cartCount;
}
