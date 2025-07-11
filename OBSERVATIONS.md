# 📌 Observaciones sobre decisiones técnicas

## 🔁 AlwaysData vs. MockAPI

Durante el desarrollo del proyecto, se evaluaron distintas alternativas para la provisión de servicios backend simulados (mock services), entre ellas **AlwaysData** y **MockAPI**.

### ✅ Preferencia: AlwaysData

He optado por utilizar **AlwaysData** como solución principal por los siguientes motivos:

---

### 1. 🌱 Visión a futuro y escalabilidad

- AlwaysData ofrece un entorno real de hosting (con soporte para bases de datos como MySQL, PostgreSQL, SQLite, entre otros), permitiendo una evolución natural desde un entorno de pruebas hacia producción.
- Esta capacidad facilita el desarrollo sostenible a futuro, para posteriores desarrollos en otras ramas de estudio.

---

### 2. 🔐 Transparencia y marco legal

- MockAPI no presenta públicamente sus **términos y condiciones de uso**, lo que genera incertidumbre en cuanto a privacidad de datos, límites del servicio y soporte legal.
- AlwaysData, en cambio, cuenta con documentación detallada, condiciones de uso claras y atención al cliente accesible.

---

### 3. ⚙️ Control y personalización

- AlwaysData permite configurar rutas, servicios, bases de datos y otros aspectos clave del backend, lo que es esencial para pruebas avanzadas y desarrollo profesional.
- Esta flexibilidad no está disponible en MockAPI, que ofrece una experiencia más limitada y cerrada.

---

## 🧠 Sobre el manejo de metadatos HTML (`<head>`) en React 19

Inicialmente se consideró utilizar la biblioteca **`react-helmet-async`** para la gestión de etiquetas HTML dentro del `<head>`, como `<title>`, `<meta>` y `<link>`, siguiendo las buenas prácticas históricas en aplicaciones React.

Sin embargo, durante la implementación se detectaron los siguientes inconvenientes:

- `react-helmet-async` **no declara compatibilidad** con **React 19**, versión utilizada en este proyecto.
- La instalación genera **conflictos en el árbol de dependencias** debido a `peerDependencies` no actualizadas desde hace más de un año.

### 🚀 React 19 y los metadatos nativos

React 19 introduce de forma **nativa** el soporte para **"Document Metadata"**, permitiendo declarar etiquetas `<head>` directamente en los componentes JSX. Esta funcionalidad elimina la necesidad de bibliotecas externas como `react-helmet`.

#### Ventajas de usar metadatos nativos:

- ✅ Reduce dependencias externas
- ✅ Mejora el rendimiento y la simplicidad
- ✅ Evita conflictos en el árbol de dependencias
- ✅ Está oficialmente soportado y documentado por el equipo de React

El cambio fue debidamente evaluado y documentado, y **no representa una pérdida funcional** respecto a los objetivos del trabajo académico.

> 🧾 *React 19 introduces support for rendering metadata such as `<title>` and `<meta>` tags directly inside components. These are now hoisted into the document head.*  
> — *Fuente: React 19 release notes*

---

Este conjunto de decisiones responde tanto a criterios técnicos actuales como a una visión a largo plazo, alineada con estándares profesionales de desarrollo.
