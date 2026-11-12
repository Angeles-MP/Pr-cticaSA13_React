import { useEffect, useState } from "react";

export default function FormularioProducto({ productoEditar, guardar }) {
    const [formulario, setFormulario] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        roleId: "",
        status: ""
    });

    function manejarCambio(e) {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    function agregar(e) {
        e.preventDefault();
        guardar(formulario);
    }

    useEffect(() => {
        if (productoEditar) {
            setFormulario(productoEditar);
        }
    }, [productoEditar]);

        return (
        <form className="form-card" onSubmit={agregar}>
            <h2>{formulario.id > 0 ? "Editar Usuario" : "Registrar Usuario"}</h2>

            <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input 
                type="text"
                id="firstName" 
                name="firstName" 
                value={formulario.firstName || ""} 
                onChange={manejarCambio} required />
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={formulario.lastName || ""} 
                onChange={manejarCambio} required />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                value={formulario.email || ""} 
                onChange={manejarCambio} required />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input 
                type="text" 
                id="phone" 
                name="phone" 
                value={formulario.phone || ""} 
                onChange={manejarCambio} />
            </div>

            <div className="form-group">
                <label htmlFor="department">Departamento</label>
                <input 
                type="text" 
                id="department"
                name="department" 
                value={formulario.department || ""} 
                onChange={manejarCambio} />
            </div>

            <div className="form-group">
                <label htmlFor="roleId">Rol (ID numérico)</label>
                <input 
                type="number" 
                id="roleId" 
                name="roleId" 
                value={formulario.roleId || ""} 
                onChange={manejarCambio} />
            </div>

            <div className="form-group">
                <label htmlFor="status">Estado</label>
                <select id="status" name="status" value={formulario.status || "Activo"} onChange={manejarCambio}>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
            </div>

            <button className="btn-submit" type="submit">
                {formulario.id > 0 ? "Guardar Cambios" : "Registrar"}
            </button>
        </form>
    );

}
