

import { heroes } from '../data/heroes';

/** Filtra el publisher y valida si el publishe esta dentro del arreglo
 * si no esta muestra un mensaje de error 
 * pero si lo encuentra regresara un arreglo con los heroes
 */

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {

        throw new Error(`${publisher} is not a valid publisher}`);
    };

    return heroes.filter(hero => hero.publisher === publisher);
};
