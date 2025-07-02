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
        console.log("✅ Productos disponibles:", data);
    })
    .catch(error => {
        console.error("❌ Error al obtener productos:", error.message);
    });
}

getProducts();

// CREATE - Agregar producto (POST)
function addProduct(product) {
    if (!isValidProduct(product)) {
        console.error("❌ Producto inválido. Asegúrate de incluir un nombre (string) y precio (número positivo).");
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
    .then(data => console.log("✅ Producto agregado:", data))
    .catch(error => console.error("❌ Error al agregar producto:", error.message));
}

// Uso: addProduct({ name: "Nuevo", price: 50 });

// UPDATE - Actualizar producto (PUT)
function updateProduct(id, updateData) {
    if (!id || typeof id !== 'number') {
        console.error("❌ ID inválido para actualización.");
        return;
    }

    if (!isValidProduct(updateData)) {
        console.error("❌ Datos inválidos para actualización.");
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
    .then(data => console.log(`✅ Producto con ID ${id} actualizado:`, data))
    .catch(error => console.error("❌ Error al actualizar producto:", error.message));
}

// Uso: updateProduct(1, { name: "Modificado", price: 123 });

// DELETE - Eliminar producto (DELETE)
function deleteProduct(id) {
    if (!id || typeof id !== 'number') {
        console.error("❌ ID inválido para eliminar.");
        return;
    }

    fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        console.log(`✅ Producto con ID ${id} eliminado.`);
    })
    .catch(error => console.error("❌ Error al eliminar producto:", error.message));
}

// Uso: deleteProduct(1);
