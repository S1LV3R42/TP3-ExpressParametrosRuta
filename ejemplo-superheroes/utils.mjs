import fs from "fs";

// Clase para representar un Superhéroe
class Superheroe {
    constructor(
        id,
        nombreSuperheroe,
        nombreReal,
        nombreSociedad,
        edad,
        planetaOrigen,
        debilidad,
        poder,
        habilidadEspecial,
        aliado,
        enemigo,
    ) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

// Función para leer y ordenar los superhéroes
// export function leerSuperheroes(ruta) {
//     const datos = fs.readFileSync(ruta, 'utf-8');
//     const superheroesArray = JSON.parse(datos);

//     // Convertir a instancias de Superheroe
//     const superheroes = superheroesArray.map(
//         hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
//     );

//     // Ordenar por nombre de superhéroe
//     superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

//     return superheroes;

// }

// Función MEJORADA para leer y ordenar los superhéroes con manejo de errores
export function leerSuperheroes(ruta) {
    try {
        // 1. Leemos el archivo (aunque sea .txt, leemos el string)
        const datos = fs.readFileSync(ruta, "utf-8");

        // 2. Convertimos el texto a un Array de objetos
        const superheroesArray = JSON.parse(datos);

        // 3. Mapeo a la clase Superheroe
        const superheroes = superheroesArray.map(
            (hero) =>
                new Superheroe(
                    hero.id,
                    hero.nombreSuperheroe || "Desconocido",
                    hero.nombreReal,
                    hero.nombreSociedad,
                    hero.edad,
                    hero.planetaOrigen,
                    hero.debilidad,
                    hero.poder,
                    hero.habilidadEspecial,
                    hero.aliado,
                    hero.enemigo,
                ),
        );

        // 4. Ordenar por nombre de superhéroe
        superheroes.sort((a, b) => {
            const nombreA = a.nombreSuperheroe || "";
            const nombreB = b.nombreSuperheroe || "";
            return nombreA.localeCompare(nombreB);
        });

        return superheroes;
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error(`Error: No se encontró el archivo en la ruta: ${ruta}`);
        } else if (error instanceof SyntaxError) {
            console.error(
                "Error: El contenido de superheroes.txt no tiene un formato JSON válido.",
            );
        } else {
            console.error("Error inesperado:", error.message);
        }
        return []; // Retornamos array vacío para no romper el resto del programa
    }
}

// Nueva función para agregar superhéroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaOriginal, "utf-8");
    const datosNuevos = fs.readFileSync(rutaNuevos, "utf-8");

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    // Convertir los nuevos superhéroes a instancias de Superheroe
    const instanciasNuevos = nuevosSuperheroes.map(
        (hero) =>
            new Superheroe(
                hero.id,
                hero.nombreSuperheroe || "Desconocido",
                hero.nombreReal,
                hero.nombreSociedad,
                hero.edad,
                hero.planetaOrigen,
                hero.debilidad,
                hero.poder,
                hero.habilidadEspecial,
                hero.aliado,
                hero.enemigo
            )
    );

    // Combinar listas
    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    // Guardar la lista actualizada 
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), "utf-8");
    console.log("Lista de superhéroes actualizada con éxito.");
}