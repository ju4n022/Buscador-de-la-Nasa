let itemsArray = [];


let URL = 'https://images-api.nasa.gov/search?q=' + localStorage.getItem("buscar");
document.getElementById("btnBuscar").addEventListener('click', () => {
    let URL = 'https://images-api.nasa.gov/search?q=' + document.getElementById('inputBuscar').value;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            itemsArray = data.collection.items;
            console.log(itemsArray);


            showItems(itemsArray);
        });
})

function srchBox() {
    localStorage.setItem("buscar", document.getElementById('inputBuscar').value);
}
document.getElementById("btnBuscar").addEventListener('click', srchBox)

function showItems(array) {
    let toHTML = "";

    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (element.links === undefined) {
            continue
        }

        toHTML += ` <div class="card" style = "width: 15rem;">

<img class "card-img-top" src= "${element.links[0].href}" alt= "Card image cap" >

<div class= "card-body">
<h5 class=""card-title"> ${element.data[0].title}</h5>
<p class="card-text">${element.data[0].description} </p>
</div>

</div>
`
        document.getElementById("contenedor").innerHTML = toHTML;



    }
}



























































