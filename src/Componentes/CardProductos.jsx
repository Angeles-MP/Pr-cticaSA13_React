import { useState } from "react";

export default function CardProducto({ id, firstName, lastName, email, phone, department, roleId, status, eliminar, editar }) {
    const [mensaje, setMensaje] = useState("");

    function manejarEditar() {
        editar({
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            department:department,
            roleId: roleId,
            status: status
        });
    }

        return (
        <article className="user-card">
            <div>
                <div className="card-header">
                    <h3 className="card-title">{firstName} {lastName}</h3>
                    <span className={`badge-status ${status?.toLowerCase() === "inactivo" ? "inactivo" : ""}`}>
                        {status || "Activo"}
                    </span>
                </div>

                <div className="card-body">
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Teléfono:</strong> {phone}</p>
                    <p><strong>Departamento:</strong> {department}</p>
                    <p><strong>Rol ID:</strong> {roleId}</p>
                </div>
            </div>

            <div>
                {mensaje && <p className="msg-eliminando">{mensaje}</p>}
                <div className="card-actions">
                    <button className="btn-edit" onClick={manejarEditar}>Editar</button>
                    <button className="btn-delete" onClick={() => {
                        setMensaje("Eliminando... Por favor espere");
                        eliminar(id);
                    }}>
                        Eliminar
                    </button>
                </div>
            </div>
        </article>
    );

}
