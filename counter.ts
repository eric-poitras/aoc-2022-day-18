import { Bloc, Scan } from './types'

/**
 * Count the number of exposed faces from the result of a 3d spaces.
 * 
 * @param scan The detected voxel containg lava.
 * 
 * @returns The surface area exposed in 1 x 1 unit.
 */
export function countExposedSurface(scan: Scan) {

    function isExposed(bloc: Bloc): boolean {
        return scan.find((entry) => bloc[0] == entry[0] && bloc[1] == entry[1] && bloc[2] == entry[2]) == undefined
    }
    
    function countExposedSides(bloc: Bloc): number {
        const side0 = isExposed([ bloc[0], bloc[1], bloc[2] - 1]) ? 1 : 0 
        const side1 = isExposed([ bloc[0], bloc[1], bloc[2] + 1]) ? 1 : 0 
        const side2 = isExposed([ bloc[0], bloc[1] - 1, bloc[2]]) ? 1 : 0 
        const side3 = isExposed([ bloc[0], bloc[1] + 1, bloc[2]]) ? 1 : 0 
        const side4 = isExposed([ bloc[0] - 1, bloc[1], bloc[2]]) ? 1 : 0 
        const side5 = isExposed([ bloc[0] + 1, bloc[1], bloc[2]]) ? 1 : 0 
        return side0 + side1 + side2 + side3 + side4 + side5
    }
    
    return scan.reduce((count, bloc) => count + countExposedSides(bloc), 0)
}





