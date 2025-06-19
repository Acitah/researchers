
function toggleInfo(clickedCard) {
    
    const allCards = document.querySelectorAll('.member-card');
  
    allCards.forEach(card => {
        if (card !== clickedCard) {
            card.classList.remove('active');
        }
    });

    clickedCard.classList.toggle('active');
}
