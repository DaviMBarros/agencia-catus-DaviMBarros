import { products } from "./database.js";

function renderCards(array) {

    const containerProduct = document.querySelector(".container_products")
    const iconLeft = document.querySelector(".style_icon")
    const iconRigth = document.querySelector(".style_icon")

    array.forEach(item => {
        const createCard = document.createElement("li")
        const createImg = document.createElement("img")
        const createTitle = document.createElement("p")
        const createDiscount = document.createElement("p")
        const createPrice = document.createElement("p")
        const createSpanPayment = document.createElement("span")
        const createFeesPayment = document.createElement("span")
        const createPayment = document.createElement("p")
        const createButton = document.createElement("button")

        createTitle.className = "style_title"
        createDiscount.className = "style_discount"
        createPrice.className = "style_price"
        
        createImg.src = item.img
        createTitle.innerHTML = item.title
        createDiscount.innerHTML = item.discount
        createSpanPayment.innerHTML = "5x"
        createFeesPayment.innerHTML = "sem juros"
        createPrice.innerHTML = Number(item.price).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
        createPayment.innerHTML = `
            <span class="style_font">${createSpanPayment.innerHTML}</span> 
            de ${Number(item.payment).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})} 
            <span class="style_font">${createFeesPayment.innerText}</span>
        `
        createButton.innerHTML = "Adicionar ao carrinho"

        containerProduct.append(iconLeft, createCard, iconRigth)
        createCard.append(createImg, createTitle, createDiscount, createPrice, createPayment, createButton)
    });
}

renderCards(products)