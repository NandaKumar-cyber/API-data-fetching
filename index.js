fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedData) => {
    // console.log(completedData);
    // console.log(completedData[2].title)
    // document.getElementById("root").innerHTML = completedData[2].title
    let data1 = ""
    completedData.map((x) => {
        data1 += `
<div class="card">
    <h1 class="title">${x.title}</h1>
    <img src=${x.image} alt="card-image" class="img"/>
    <p>Description</p>
    <p class="category">${x.category}</p>
    <p class="price">${x.price}</p>
</div>`
    })
    document.getElementById("cards").innerHTML = data1;
}).catch((error) => {
    console.log(error);
});