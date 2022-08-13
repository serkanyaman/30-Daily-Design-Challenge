const orderCounter = document.getElementById("product-piece");
const orderMinus = document.querySelector(".minus-piece");
const orderAdd = document.querySelector(".add-piece");
const productSingularPrice = document.querySelector('.vat-cost');
const productTotalPrice = document.querySelector(".nok-price");
const promotionToggler = document.querySelector('.gift-card-promotion');
const promotionBar = document.querySelector('.gift-card-box')
let order = 1;

orderMinus.addEventListener("click", () => {
  order <= 0 ? (order = 0) : order--;
  orderCounter.value = order;
  productPriceCalculator()
});

orderAdd.addEventListener("click", () => {
  order++;
  orderCounter.value = order;
  productPriceCalculator()
});

orderCounter.addEventListener('input',()=>{
        if(orderCounter.value <= 0){
            orderCounter.value=0
        }
        order = orderCounter.value
    productPriceCalculator()
})


const productPriceCalculator = () => {
    let refreshPrice = productSingularPrice.innerHTML*orderCounter.value;
    productTotalPrice.innerHTML = refreshPrice
};

promotionToggler.addEventListener('click',()=>{
    promotionBar.classList.toggle('active')
    if (promotionBar.classList.contains('active')) {
        promotionToggler.style.color = "#fd7f59";
    }else{
        promotionToggler.style.color = "#4378FF";
    }
})