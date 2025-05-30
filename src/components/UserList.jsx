import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error al obtener usuarios:", err));
  }, []);

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      password: ""
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    const currentData = formData;
    console.log("Enviando:", formData);

    if (!currentData.name || !currentData.email || !currentData.password) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(currentData.email)) {
      alert("Por favor ingresa un correo válido.");
      return;
    }

    const response = await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentData)
    });

    if (response.ok) {
      const updatedUser = await response.json();
      setUsers(users.map((u) => (u.id === id ? updatedUser : u)));
      setEditingUserId(null);
    } else {
      const err = await response.json();
      alert(err.error || "Error al actualizar.");
    }
  };

  const handleDelete = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de que quieres eliminar este usuario?");
    if (!confirmar) return;

    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setUsers(users.filter((u) => u.id !== id));
      } else {
        alert("Error al eliminar el usuario.");
      }
    } catch (error) {
      console.error("Error eliminando:", error);
      alert("Ocurrió un error al intentar eliminar.");
    }
  };


  return (
    <div className="container mt-4">
      <ul className="list-unstyled">
        {users.map((user) => (
          <li key={user.id} className="mb-3 p-3 border rounded">
            {editingUserId === user.id ? (
              <div className="row g-2">
                <div className="col-md-3">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Contraseña"
                  />
                </div>
                <div className="col-md-3 d-flex gap-2">
                  <button className="btn btn-success" onClick={() => handleSave(user.id)}>Guardar</button>

                  <button className="btn btn-secondary" onClick={() => setEditingUserId(null)}>Cancelar</button>
                </div>
              </div>
            ) : (
              <div className="d-flex-end">
                <div>
                  <strong>{user.name}</strong> — {user.email}
                </div>
                <button className="btn btn-warning" onClick={() => handleEditClick(user)}>
                  Editar
                </button>
                <button className="btn btn-danger ms-2" onClick={() => handleDelete(user.id)}>
                  Eliminar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
