# Desafío técnico: Frontend Software Engineering

## Star Wars Battle App

Bienvenido a su desafío técnico!

Este desafío es para validar tu habilidad como Frontend Software Engineering y tiene un tiempo estimado de finalización de 24hs.

## Steps

1.  El title de la app debe ser: Star Wars Battle App
2.  Debe contener un componente Home
3.  El componente Home debe contener un NavBar, un Cards y un List
4.  El componente Cards debe estar dividido en dos y contiene en cada división el componente Card
5.  El componente Card es un slide que muestra y oculta una card que contiene al menos 6 atributos del character, entre estos deben estar si o sí: image, name e id
6.  El componente List se debe encontrar por debajo del componente cards

## Tareas

1.  Crear Random que es un botón selector random de un personaje de star wars
2.  Crear Search que es un buscador y selector por nombre de un personaje de star wars
3.  Crear AllCharacters que es un botón que nos trae y muestra en el componente List el nombre de todos los personajes de nuestra API

## Importante

- Recuerda de reutilizar componentes de ser necesario (no repetir código)
- Uso adecuado de git. Por favor, no subas tu proyecto a GitHub con solo una confirmación; nosotros
  queremos ver cómo usa GitHub y cómo documentas cada cambio en su código.

### Material

- React con: npx create-react-app <nameapp>
- Estilos con CSS, Material IU, Bootstrap, o cualquier librería a fin. Este trabajo pretende centralizarse en la implementación de React, la aplicación y manipulación de datos desde una api externa y el sentido lógico para desarrollar nuestras funciones.
- API https://github.com/akabab/starwars-api
  Siendo el único endpoint el siguiente: https://akabab.github.io/starwars-api/api/all.json

### Extras

- No permitir que en una misma vista se enfrente el mismo personaje (que aparezca en ambos componentes) a la hora de buscar o seleccionar uno random.
