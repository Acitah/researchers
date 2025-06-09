document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".member-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => {
        if (c !== card) {
          card.classList.toggle("expanded");
         
        }
      });

        
    });
  });
});
