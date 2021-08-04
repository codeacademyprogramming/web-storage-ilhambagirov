let likedspans = [...document.querySelectorAll('.card .icon svg')]
let cars = []
likedspans.forEach(likedspan => {
    likedspan.onclick = function (event) {
        likedspan.classList.toggle('customsvg')
        let cardObj = {
            id: event.target.parentElement.parentElement.id,
            image: event.target.parentElement.nextElementSibling.src,
            price: event.target.parentElement.parentElement.children[2].innerText,
            status: event.target.parentElement.parentElement.children[3].innerText,
            model: event.target.parentElement.parentElement.children[4].children[0].innerText,
            info: event.target.parentElement.parentElement.children[4].children[1].innerText,
            address: event.target.parentElement.parentElement.children[4].children[2].innerText,
            learn: event.target.parentElement.parentElement.children[4].children[3].innerText
        }

        addItemToChosen(cardObj)
    }
})

// function addItemToChosen(obj){
//     localStorage.setItem('card',JSON.stringify(obj))
// }

function addItemToChosen(obj) {
    let chosencar=localStorage.getItem('card')
    if (chosencar==null) {
        cars.push(JSON.stringify(obj))
    }else{
        cars.forEach(chosen =>{
            if (chosen.id!==obj.id) {
                console.log(chosen.id)
                console.log(obj.id)
                  cars.push(JSON.stringify(obj))
            }
            }) 
    }
        
           
        
    localStorage.setItem('card', cars.toString())
    console.log(cars)

}
