 function showSection(sectionId) {
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active-section');
      });
      document.getElementById(sectionId).classList.add('active-section');
    }

      document.addEventListener('scroll', () => {
    const contact = document.querySelector('.contact-section');
    const rect = contact.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      contact.classList.add('floating');
    }
  });

   // Auto-tab OTP inputs
  document.querySelectorAll('.otp-input').forEach((input, index, inputs) => {
    input.addEventListener('keyup', (e) => {
      if (e.key >= '0' && e.key <= '9' && inputs[index + 1]) {
        inputs[index + 1].focus();
      } else if (e.key === 'Backspace' && inputs[index - 1]) {
        inputs[index - 1].focus();
      }
    });
  });  