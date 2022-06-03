document.addEventListener("DOMContentLoaded",()=>{
    const createZone = document.querySelector(".chosenrow");
    let storedCars = localStorage.getItem("storedCars");

    if (storedCars) {
        let newStoredCars=[];
        storedCars = storedCars.split("},");
        storedCars.forEach((product,index)=>{

            if(index!==storedCars.length-1){
                newStoredCars.push(JSON.parse(product+"}"));
            } 
            else{
                newStoredCars.push(JSON.parse(product));
            }
        })
        storedCars=newStoredCars;
    }

    console.log(storedCars)

    storedCars.forEach(car=>{
        const col3 = document.createElement("div");
        col3.classList.add("col-3");
        const card = document.createElement("div");
        card.classList.add("card");
        card.id=car.id
        const productImg = document.createElement("img");
        productImg.setAttribute("src",`${car.imgUrl}`);
        const productPrice = document.createElement("div");
        productPrice.classList.add("price");
        productPrice.innerText=`${car.price}`;
        const productstatus = document.createElement("div");
        productstatus.classList.add("status");
        productstatus.innerText=`${car.salon}`;
        const cardBody = document.createElement("card-body");
        const productName = document.createElement("h5")
        productName.classList.add("card-title");
        productName.innerText=`${car.name}`;
        const productYear = document.createElement("p")
        productYear.classList.add("card-text");
        productYear.innerText=`${car.year}`;
        const productAddress = document.createElement("p")
        productAddress.classList.add("card-address");
        productAddress.innerText=`${car.address}`;
        const productCart = document.createElement("a")
        productCart.classList.add("btn",'btn-primary');
        productCart.innerText='Learn more';


        cardBody.append(productName);
        cardBody.append(productYear);
        cardBody.append(productAddress);
        cardBody.append(productCart);
        card.append(productImg)
        card.append(productPrice)
        card.append(productstatus)
        card.append(cardBody)
        col3.append(card)

        createZone.append(col3)



    })





})