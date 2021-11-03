let city = [
    {
     title: "Paris",
     photo: "./paris.jpeg",
     content: "lorem pour ça",
     alt: "paris",
     like: false
     },
     {
     title: "NY",
     photo: "https://cdn.getyourguide.com/img/location/533597d7653a9.jpeg/88.jpg",
     content: "lorem pour ça...",
     like: "thumb_up",
     alt: "NY"
     }
 ]
 console.log(city[1].title+'\n'+city[0].title)
 /*for(let i = 0; i < city.length; i++){
     console.log(city[i].title+' '+city[i].photo+' '+city[i].like);
 }*/
 console.table(city)
 /*city.forEach((el, key) => {
     console.log(key+' '+el.title)
 });*/
 let ref = document.querySelector("aside")
 let ellist = document.createElement("ul")
 ref.appendChild(ellist)
 let liste = document.querySelector("aside ul")

 for(data of city){
    console.log(data.title)
liste.innerHTML += `<li>${data.title}</li>
                    <li><img src="${data.photo}" alt="${data.alt}"></li>
                    <li>${data.content}</li>
                    `;
}
