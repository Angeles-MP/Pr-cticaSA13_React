import { useEffect, useState } from "react";
import { obtenerProductos, guardarProducto, borrarProducto, actualizarProducto } from "../services/productService";
import CardProducto from "./CardProductos";
import FormularioProducto from "./FormularioProducto";

const estadoInicial = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    roleId: "",
    status: ""
};

export default function CatalogoProductos() {    
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(estadoInicial);

    async function listar() {
        try {
            const resultado = await obtenerProductos();
            console.log("Respuesta del servidor al listar:", resultado); 

            const lista = Array.isArray(resultado) 
                ? resultado 
                : (resultado?.data || resultado?.users || []);
                
            setProductos(lista);
        } catch (error) {
            console.error("Error al listar:", error);
            setProductos([]);
        }
    }

   async function agregarProducto(producto) {
    try {
        const productoFormateado = {
            ...producto,
            roleId: Number(producto.roleId)
        };

        if (productoFormateado.id > 0) {    
            await actualizarProducto(productoFormateado.id, productoFormateado);
        } else {
            const { id, ...nuevoProducto } = productoFormateado;
            await guardarProducto(nuevoProducto);
        }      
        setProductoEditar(estadoInicial);
        await listar();           
    } catch (error) {
        console.error("Error al guardar/actualizar:", error);
        alert("No se pudo guardar. Revisa la consola (F12) para ver el detalle.");
    }
}


    async function eliminarProducto(id) {
        await borrarProducto(id);
        listar();
    }   

    function editarProducto(producto) {
        setProductoEditar(producto);
    }

    useEffect(() => {        
        listar();
    }, []);

        return (
        <main className="app-layout">
            <FormularioProducto productoEditar={productoEditar} guardar={agregarProducto} />
            <section className="products-container">
                {productos.map(e => (
                    <CardProducto 
                        key={e.id}
                        id={e.id}
                        firstName={e.firstName}
                        lastName={e.lastName}
                        email={e.email}
                        phone={e.phone}
                        department={e.department}
                        roleId={e.roleId}
                        status={e.status}
                        eliminar={eliminarProducto}
                        editar={editarProducto}
                    />
                ))}
            </section>
        </main>
    );

}
