# Trabajo Práctico 3 - Node.js

Prácticas de introducción a Node.js abordando modularización, gestión de paquetes con NPM y desarrollo de servidores con Express.

---

## 📁 Estructura del Proyecto

```
TP3/
├── actividad-1/          # Manejo de parámetros de ruta en Express
│   └── server.mjs
├── actividad-2/          # Manejo de parámetros de consulta en Express
│   └── server.mjs
├── ejemplo-express/      # Configuración básica de un servidor Express
│   └── app.js
└── ejemplo-superheroes/  # Exportación e importación de funciones con Node.js
    ├── index.mjs
    ├── utils.mjs
    ├── superheroes.txt
    └── agregarSuperheroes.txt
```

---

## 📌 Contenido

### Ejemplo: Superhéroes
Demostración de modularización en Node.js. `utils.mjs` exporta las funciones `leerSuperheroes` y `agregarSuperheroes`, que son importadas y utilizadas desde `index.mjs` para leer, ordenar y actualizar una lista de superhéroes almacenada en archivos `.txt` (formato JSON).

### Ejemplo: Express
Configuración básica de un servidor web con Express, definiendo rutas simples con `app.get()`.

### Actividad 1 — Parámetros de Ruta
Servidor Express que captura un parámetro dinámico `id` desde la URL (`/user/:id`) y lo muestra en consola.

### Actividad 2 — Parámetros de Consulta
Servidor Express que captura el parámetro de consulta `edad` desde la URL (`/profile?edad=30`) y lo muestra en consola.

---

## 🚀 Cómo ejecutar

1. Instalar dependencias en la carpeta correspondiente:
   ```bash
   npm install
   ```

2. Ejecutar el archivo principal:
   ```bash
   node server.mjs
   # o
   node index.mjs
   ```

---

## 🛠 Tecnologías
- Node.js
- NPM
- Express
