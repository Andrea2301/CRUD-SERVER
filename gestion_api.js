// Validación básica de producto
function isValidProduct(product) {
    if (!product || typeof product !== 'object') return false;
    if (!product.name || typeof product.name !== 'string') return false;
    if (!product.price || typeof product.price !== 'number' || product.price < 0) return false;
    return true;
}

// READ - Obtener productos (GET)
function getProducts() {
    fetch('http://localhost:3000/products', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
    })
    .then(data => {
        console.log("Aviable Products:", data);
    })
    .catch(error => {
        console.error(" Error getting produts:", error.message);
    });
}

getProducts();

// CREATE - Agregar producto (POST)
function addProduct(product) {
    if (!isValidProduct(product)) {
        console.error("Invalid product. Make sure to include a name (string) and price (positive number).");
        return;
    }

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
    })
    .then(data => console.log("Added product:", data))
    .catch(error => console.error("Error when adding product:", error.message));
}

// Uso: addProduct({ name: "Nuevo", price: 50 });

// UPDATE - Actualizar producto (PUT)
function updateProduct(id, updateData) {
    if (!id || typeof id !== 'number') {
        console.error("Invalid ID for update.");
        return;
    }

    if (!isValidProduct(updateData)) {
        console.error("Invalid data for update.");
        return;
    }

    fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
    })
    .then(data => console.log(` Product with ID ${id} uptade!:`, data))
    .catch(error => console.error("Error updating:", error.message));
}

// Uso: updateProduct(1, { name: "Modificado", price: 123 });

// DELETE - Eliminar producto (DELETE)
function deleteProduct(id) {
    if (!id || typeof id !== 'number') {
        console.error(" Invalid Id for delete.");
        return;
    }

    fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        console.log(` Product with ID ${id} delete.`);
    })
    .catch(error => console.error(" Error when deleting:", error.message));
}
// Uso: deleteProduct(1);
