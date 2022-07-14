// Ahora voy a comentar algo

const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const btnHome = document.getElementById('pills-home-tab')
const btnProducts = document.getElementById('pills-profile-tab')
const sectionHome = document.getElementById('section-home')



// document.addEventListener('DOMContentLoaded', () => {
    
//     fetch("../src/data/stock.json")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(x => {
//             let example = document.createElement('div');
//             example.innerHTML = `
//             <span>${x.id}</span>
//             <img src=${x.img}>
//             `
//             items.appendChild(example);
//         })
//     })
// })






const pintarCards = data => {
    data.forEach(producto => {
        templateCard.uerySelector('h5').textContent = producto.nam
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}