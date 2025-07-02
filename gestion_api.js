//reading data (GET)
function getProducts() {
    
    fetch('http://localhost:3000/products', {
        method: 'GET'
    })
    .then(response => {
        console.log('response', response)
        console.log('response.json', response.json)
        return response.json
    })
    .then(data => {
        console.log("available products: ",data)
    })
    .catch(error => {
        console.log("error getting products: ", error)
    })
}

getProducts()

//Create new data (POST)

function addProducts(){
    const newProduct = {
        name:"none",
        price:100
    }

    fetch('http://localhost:3000/products',{
        method: 'POST',
        body:JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then (data => console.log("Added product !",data))
    .catch(error => console.error("error when adding product",error));  
}


// Update data (PUT)

function updateProduct(){

    const update = {
        name:"proof",
        price:200}

    fetch('http://localhost:3000/products/1',{
    method : 'PUT',
    body:JSON.stringify(update)
    })
    .then(response => response.json())
    .then(data => console.log("successfully updated product !",data))
    .catch(error => console.log("Error, product not update!",error))
}
updateProduct()

//data deletion (DELETE)
function deleteProduct (){



    fetch('http://localhost:300/products/2f50',{
    method: 'DELETE',
    body:JSON.stringify(deleteProduct)
    })
    .then(() => console.log("Deleted product"))
    .catch(error => console.log("Error undeleted",error))
}





