document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.member-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Collapse other cards
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('expanded');
        }
      });

      // Toggle the clicked one
      card.classList.toggle('expanded');
    });
  });
});
