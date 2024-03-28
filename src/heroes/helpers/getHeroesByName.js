
import { heroes } from "../data/heroes";


export const getHeroesByName = (name = '') => {

// Toma lo que busca y lo pasa a minusculas y sin espacio adelante y atras
    name = name.toLocaleLowerCase().trim();

// Valida si no ha ingreso algun nombre y retornara un arreglo
    if (name.length === 0) return [];

// de lo contrario devolvera filtrara en los heroes el nombre que busca
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );

};
