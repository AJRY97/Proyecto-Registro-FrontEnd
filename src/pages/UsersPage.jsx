import UserList from "../components/UserList";
import { Link } from "react-router-dom";

export default function UsersPage() {
  return (
    <div>
      <h1>Usuarios Registrados</h1>
      <UserList />
      <Link to="/">
        <button>Volver al registro</button>
      </Link>
    </div>
  );
}
