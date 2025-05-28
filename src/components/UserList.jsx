import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error al obtener usuarios:", err));
  }, []);

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
