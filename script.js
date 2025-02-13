document.getElementById('leadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let country = document.getElementById('country').value.trim();
  let message = document.getElementById('formMessage');

  if (name === "" || email === "" || phone === "" || country === "") {
      alert("All fields are required.");
      return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter a valid email.");
      return;
  }

  if (!/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
  }

  message.classList.remove("hidden");
  this.reset();
});
