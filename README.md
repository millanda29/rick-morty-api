# 🧬 Rick and Morty Explorer

Aplicación frontend construida con **React.js + Vite**, que consume la **Rick and Morty API** para mostrar personajes y detalles relevantes de la serie.

---

## 📸 Vista previa

> Muestra información como:
- Imagen
- Nombre
- Estado (vivo, muerto, desconocido)
- Género
- Origen
- Ubicación
- Episodios en los que aparece

---

## 🚀 Tecnologías

- ⚛️ React.js + Vite (Frontend)
- 🔗 Axios (Consumo de API)
- 🧭 React Router DOM (Navegación)
- 💅 CSS personalizado / Tailwind (opcional)
- 🌐 Rick and Morty API - [https://rickandmortyapi.com](https://rickandmortyapi.com)

---

## ⚙️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/rick-and-morty-explorer.git
cd rick-and-morty-explorer
````

### 2. Instala las dependencias

```bash
npm install
```

### 3. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

---

## 🌐 Estructura del Proyecto

```
src/
├── api/                # Lógica para consumo de la API
├── components/         # Componentes reutilizables (CharacterCard, etc.)
├── pages/              # Vistas como Home o Detalle
├── router/             # Definición de rutas
├── App.jsx
└── main.jsx
```

---

## 🔁 Ejemplo de consumo de la API

```js
// src/api/characterApi.js

import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacterById = async (id) => {
  const response = await axios.get(`${BASE_URL}/character/${id}`);
  return response.data;
};
```

---

## 🧪 Funcionalidades

* 🔍 Buscar personaje por ID
* 📄 Vista detallada de personaje
* 🧠 Estado, origen y localización
* 🎬 Número de episodios donde aparece
* 🔗 Enlace directo a la API oficial

---

## 📌 Pendientes / TO-DO

* [ ] Filtro por especie, estado o género
* [ ] Paginación
* [ ] Vista general de todos los personajes
* [ ] Mejora en estilos con Tailwind o CSS Modules
* [ ] Manejo de errores y estados de carga

---

## 👨‍💻 Autor

* **Tu Nombre**
* GitHub: [@tu-usuario](https://github.com/tu-usuario)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
