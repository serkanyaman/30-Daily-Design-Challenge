const labels = document.querySelectorAll("[data-label]");
const cards = document.querySelectorAll("[data-card]");
labels.forEach((label) => {
  let labelDataInner = label.dataset.label;
  label.addEventListener("click", () => {
    cards.forEach((card) => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
        card.classList.add("disabled");
      }
      let cardDataInner = card.dataset.card;
      if (labelDataInner == cardDataInner) {
        console.log(card);

        card.classList.remove("disabled");
        card.classList.add("active");
      }
      if(labelDataInner === 'all'){
        card.classList.add('active')
    }
    });
  });
});
