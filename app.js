const div = document.querySelector(".meta")


axios("https://fakestoreapi.com/products")
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML+=`<div class ="items">
        <h3 id ="you"> ${item.title}</h3> 
        <img width = "250px" src =${item.image}>
        <h3 id ="we">PRICE:</h3> <h5>${item.price}$<h5>
        <h3 id ="we">Description:</h3><p class ="p1">${item.description}</p>
        <div class ="d-flex justify-content-end"><button class ="btn btn-dark Cart" on-click ="">Add To Cart</button><b><hr class ="hr"></b></div>`
    })
})

.catch((err)=>{
    console.log(err)
})










