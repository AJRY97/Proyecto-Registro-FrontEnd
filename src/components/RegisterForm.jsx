import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        alert(data.msg);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Registro de Usuario</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" name="name" placeholder="Nombre" onChange={handleChange} required />
                </div>

                <div className="mb-3">

                    <label htmlFor="name" className="form-label">Correo</label>
                    <input type="email" className="form-control" name="email" placeholder="Correo electrónico" onChange={handleChange} required />

                </div>

                <div className="mb-3">

                    <label htmlFor="name" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={handleChange} required minLength={6} />

                </div>

                <button type="submit" className="btn btn-primary w-100">Registrarse</button>

                <Link to="/usuarios">
                    <button className="btn btn-primary w-100" style={{ marginTop: "1rem" }}>Ver usuarios registrados</button>
                </Link>

            </form>
        </div>
    );
}
