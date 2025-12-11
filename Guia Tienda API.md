Guía para Probar la API - Proyecto Final

Hola profe! Acá dejo una guía rápida de cómo probar mi API REST. Está deployada en Vercel y conectada a Firebase, así que todo funciona en la nube.

URL de la API
https://tienda-api-firebase.vercel.app

Credenciales

Username: admin
Password: admin123

Cómo Probar con Postman

- Hacer Login (para obtener el token)

Método: POST
URL: https://tienda-api-firebase.vercel.app/auth/login
Headers: Content-Type: application/json

Body (raw - JSON):
{
"username": "admin",
"password": "admin123"
}

Respuesta esperada:

{
"success": true,
"message": "Login exitoso",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

IMPORTANTE: Copiá el token que te devuelve, lo vas a necesitar para todas las otras peticiones.

- Crear un Producto

Método: POST
URL: https://tienda-api-firebase.vercel.app/api/products/create
Headers:
Content-Type: application/json
Authorization: Bearer TU_TOKEN_AQUI

Body (raw - JSON):

{
"name": "Elgato Stream Deck",
"price": 149.99,
"description": "Controlador con 15 teclas LCD personalizables para streaming",
"stock": 33,
"category": "Streaming",
"brand": "Elgato"
}

Respuesta esperada:

{
"success": true,
"message": "Producto creado exitosamente",
"data": {
"id": "algún_id_generado",
"name": "Elgato Stream Deck",
"price": 149.99,
"description": "Controlador con 15 teclas LCD personalizables para streaming",
"stock": 33,
"category": "Streaming",
"brand": "Elgato"
}

- Obtener Todos los Productos

Método: GET
URL: https://tienda-api-firebase.vercel.app/api/products
Headers:
Authorization: Bearer TU_TOKEN_AQUI

Respuesta esperada:

Lista con todos los productos que hayas creado.

- Obtener un Producto Específico

Método: GET
URL: https://tienda-api-firebase.vercel.app/api/products/ID_DEL_PRODUCTO
Headers:
Authorization: Bearer TU_TOKEN_AQUI

Respuesta esperada:
Los datos del producto específico.

- Actualizar un Producto

Método: PUT
URL: https://tienda-api-firebase.vercel.app/api/products/ID_DEL_PRODUCTO
Headers:
Content-Type: application/json
Authorization: Bearer TU_TOKEN_AQUI

Body (raw - JSON):

{
"name": "Elgato Stream Deck Plus",
"price": 179.99,
"stock": 25,
"description": "Versión mejorada con más teclas"
}

Respuesta esperada:

El producto actualizado con los nuevos datos.

Eliminar un Producto

Método: DELETE
URL: https://tienda-api-firebase.vercel.app/api/products/ID_DEL_PRODUCTO
Headers:
Authorization: Bearer TU_TOKEN_AQUI

Respuesta esperada:

{
"success": true,
"message": "Producto eliminado exitosamente"
}

Cualquier duda, aviseme
Saludos, Benjamín Ochoa
