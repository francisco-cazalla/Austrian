document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
  
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle('show-answer');
      });
    });
  });
  
