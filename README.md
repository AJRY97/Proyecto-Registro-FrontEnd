# App de Registro de Usuarios

## Objetivo
Construir una pequeña aplicacion web de registro de usuarios, donde se pueda registrar, guardar y visualizar informacion en una base de datos utilizando tecnologias Full Stack (React + Flask + PostgreSQL).


## Tecnologias utilizadas

### Frontend

- React.js (Vite)
- Bootstrap 5
- Fetch API

### Backend

- Python
- Flask
- Flask-CORS
- Flask-SQLAlchemy
- PostgreSQL
- Werkzeug (para hashear contraseñas)

---

## Funcionalidades principales

### Registro de usuarios
- Formulario con campos: nombre, correo y contraseña
- Validaciones frontend:
  - Todos los campos requeridos
  - Email con formato valido
  - Contraseña minima de 6 caracteres
- Validaciones backend:
  - Verifica que el correo no este registrado previamente
  - Contraseña hasheada antes de guardar

### Visualizacion de usuarios
- Lista que muestra nombre y correo
- Botón Editar que permite modificar nombre y correo (requiere ingresar contraseña para confirmar cambios)
- Boton Eliminar para borrar un usuario de la base de datos

### Base de datos
- Se crea automaticamente al iniciar el backend
- Tabla: `User`
  - Campos: id, name, email, password

