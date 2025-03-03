Descripción del Proyecto

Este proyecto es una aplicación web para gestionar usuarios.

Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de usuarios. 

La aplicación incluye funcionalidades como búsqueda, filtrado por estado, y modales para agregar, editar y eliminar usuarios.

La aplicación está dividida en dos partes principales:

Frontend (Cliente): Desarrollado con React y Ant Design para la interfaz de usuario.

Backend (API): Servidor desarrollado por Flexxus.

Tecnologías Utilizadas

-React

-Ant Design (UI Library)

-React Context (para manejo de estado global)

Instrucciones para Ejecutar el Proyecto

Sigue estos pasos para inicializar tanto el servidor como el cliente:

PASO 1: Inicializar el Servidor (Backend)

cd ./api
npm install
npm run server

Por defecto, el servidor se inicializará en el puerto (http://localhost:4000/users).

PASO 2: Inicializar el Cliente (Frontend)

cd ./client
npm install
npm start

La aplicación se abrirá automáticamente en tu navegador en la dirección http://localhost:3000.

Funcionalidades Principales

Listado de Usuarios: Muestra una tabla con todos los usuarios registrados.

Búsqueda: Permite buscar usuarios por nombre, apellido o nombre de usuario.

Filtrado: Filtra usuarios por estado (Activo/Inactivo).

Agregar Usuario: Abre un modal para agregar un nuevo usuario.

Editar Usuario: Permite editar la información de un usuario existente.

Eliminar Usuario: Permite eliminar un usuario con confirmación.