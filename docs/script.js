document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close');
  
    document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', () => {
        modalTitle.textContent = button.dataset.title;
        modalContent.textContent = button.dataset.content;
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Form validation
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (name && email && message) {
          formMessage.textContent = 'Message sent successfully!';
          formMessage.style.color = 'green';
          form.reset();
        } else {
          formMessage.textContent = 'Please fill out all fields.';
          formMessage.style.color = 'red';
        }
      });
    }
  });
