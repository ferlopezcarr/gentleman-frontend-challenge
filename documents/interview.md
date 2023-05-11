# Product interview

## Descripción del proyecto

Se te ha encargado crear una aplicación web sencilla que permita a los usuarios buscar y filtrar una lista de productos. La aplicación debe tener dos vistas: una para mostrar la lista de productos y otra para mostrar el detalle de un producto seleccionado.

## Requerimientos

1. La lista de productos debe ser obtenida de forma asíncrona a través de una API REST externa. Puedes utilizar la siguiente URL para obtener los datos de ejemplo:

https://fakestoreapi.com/products

2. La lista de productos debe ser mostrada en una tabla con las siguientes columnas: imagen, nombre, precio y botón para ver detalle.
3. La tabla debe permitir al usuario ordenar los productos por nombre o precio de forma ascendente o descendente.
4. La tabla debe permitir al usuario filtrar los productos por nombre o por precio mínimo y máximo.
5. Al hacer clic en el botón para ver detalle de un producto, se debe redirigir al usuario a la vista de detalle del producto seleccionado.
6. La vista de detalle debe mostrar la imagen, nombre, descripción y precio del producto seleccionado.

## Pasos a seguir

1. Crea un nuevo proyecto de Angular utilizando el comando ng new.
2. Crea un servicio que obtenga la lista de productos de la API REST externa utilizando el módulo HttpClient.
3. Crea un componente para mostrar la lista de productos. Utiliza la tabla de Angular Material para mostrar la lista de productos.
4. Implementa la funcionalidad de ordenamiento y filtrado en el componente de la lista de productos.
5. Crea un componente para mostrar el detalle de un producto.
6. Implementa la funcionalidad de redirección al componente de detalle de producto al hacer clic en el botón de ver detalle en el componente de lista de productos.
7. Implementa la vista de detalle de producto.
