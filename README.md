
# Proyecto Registro de Usuarios – Frontend

Este es el frontend de una mini aplicación full stack de registro de usuarios. Permite registrar nuevos usuarios y visualizar, editar y eliminar usuarios existentes.

## Tecnologías usadas

- React
- Bootstrap
- Fetch API
- HTML5 y CSS3

## Estructura principal

- `RegisterForm.jsx`: formulario de registro con validaciones básicas.
- `UserList.jsx`: lista de usuarios con botones para editar y eliminar.
- `App.jsx`: enrutador principal para las vistas.

## Funcionalidades

- Registrar usuarios con validación de campos obligatorios y formato de correo.
- Editar nombre, correo y contraseña (verificación obligatoria de contraseña).
- Eliminar usuarios.
- Mostrar usuarios registrados en tiempo real.

## Conexión con backend

El frontend realiza peticiones HTTP (GET, POST, PUT, DELETE) a un servidor Flask corriendo usando `fetch()`.



