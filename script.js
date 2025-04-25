
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Modal Functions
  function openModal() {
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Form Validation is done
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    alert("Message sent successfully!");
    this.reset();
  });
  