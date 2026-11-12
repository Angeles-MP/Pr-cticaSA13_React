const URL_API = "http://localhost:3000/api/users";


export async function obtenerProductos()
{
    const response = await fetch(URL_API);  
    if (!response.ok)
        {
            throw new Error("Error al cargar la data");            
        }
    
    return await response.json();   
}

export async function guardarProducto(producto) {    
    const respuesta = await fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    if (!respuesta.ok) {
        const errorServidor = await respuesta.text();
        console.error("MOTIVO EXACTO DEL SERVIDOR (POST):", respuesta.status, errorServidor);
        throw new Error(errorServidor || "Error al registrar");
    }

    return await respuesta.json();
}


export async function borrarProducto(id)
{
    const response = await fetch(`${URL_API}/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });  
    if (!response.ok)
        {
            throw new Error("Error al eliminar el producto");            
        }
    
    return await response.json();   
}

export async function actualizarProducto(id, producto) {    
    const respuesta = await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    if (!respuesta.ok) {
        const errorServidor = await respuesta.text();
        console.error("MOTIVO EXACTO DEL SERVIDOR (PUT):", respuesta.status, errorServidor);
        throw new Error(errorServidor || "Error al actualizar");
    }

    return await respuesta.json();
}