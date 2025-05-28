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
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nombre" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required minLength={6} />
            <button type="submit">Registrarse</button>
            <Link to="/usuarios">
                <button style={{ marginTop: "1rem" }}>Ver usuarios registrados</button>
            </Link>

        </form>
    );
}
