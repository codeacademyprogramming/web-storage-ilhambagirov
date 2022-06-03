document.addEventListener('DOMContentLoaded',()=>{
    const cards = document.querySelectorAll(".card");
    let selectedCars = [];
    cards.forEach(card=>{
        const icon = card.querySelector(".icon svg");
        icon.addEventListener('click',()=>{
            let storedCars = localStorage.getItem("storedCars");
            let haveOrNot=false;
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
                const cardid = card.getAttribute("id");
                haveOrNot = storedCars.some((selectedCar)=>{
                    return cardid===selectedCar.id;
                });
            }

            if (haveOrNot) {
                const cardid = card.getAttribute("id");
                selectedCars=[];
                storedCars.forEach((car)=>{
                    if(cardid!==car.id){
                        selectedCars.push(JSON.stringify(car));
                    }
                })
                console.log(selectedCars)
                
                localStorage.setItem("storedCars",selectedCars.toString());
            }else{
                const cardid = card.getAttribute("id");
                const obj={};
                const productPrice = card.querySelector(".price").textContent;
                const productName = card.querySelector(".card-title").textContent;
                const productYear = card.querySelector(".card-text").textContent;
                const productaddress = card.querySelector(".card-address").textContent;
                const productImgUrl = card.querySelector("img").src;
                const productSalon = card.querySelector(".status").textContent;
                obj.id=cardid;
                obj.price=productPrice;
                obj.name=productName;
                obj.year=productYear;
                obj.address=productaddress;
                obj.imgUrl=productImgUrl;
                obj.salon=productSalon;

                console.log(obj)

                selectedCars.push(JSON.stringify(obj));
                localStorage.setItem("storedCars",selectedCars.toString());
            }
        })
    })

})