import { products } from "./database.js";

function renderCards(array) {

    const containerProduct = document.querySelector(".container_products")

    array.forEach(item => {
        const createCard = document.createElement("li")
        const createImg = document.createElement("img")
        const createTitle = document.createElement("p")
        const createDiscount = document.createElement("p")
        const createPrice = document.createElement("p")
        const createPayment = document.createElement("p")
        const createButton = document.createElement("button")

        createImg.src = item.img
        createTitle.innerHTML = item.title
        createDiscount.innerHTML = item.discount
        createPrice.innerHTML = item.price
        createPayment.innerHTML = item.payment
        createButton.innerHTML = "Adicionar ao carrinho"

        containerProduct.append(createCard)
        createCard.append(createImg, createTitle, createDiscount, createPrice, createPayment, createButton)

    });
}

renderCards(products)