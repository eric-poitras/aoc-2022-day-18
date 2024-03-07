import { describe, it, expect } from '@jest/globals'
import { countExposedSurface } from './counter'
import { Scan } from './types'

interface Scenario {
    description: string;
    scan: Scan;
    expectedResult: number;
};

const scenarios: Array<Scenario> = [
    {
        description: 'Example 1 from advent of code',
        scan: [[1,1,1], [1,1,2]],
        expectedResult: 10
    },
    {
        description: 'Example 2 from advent of code',
        scan: [
            [2,2,2],[1,2,2],[3,2,2],[2,1,2],[2,3,2],[2,2,1],[2,2,3],
            [2,2,4],[2,2,6],[1,2,5],[3,2,5],[2,1,5],[2,3,5]
        ],
        expectedResult: 64
    }
]


describe('countExposedSurface', () => {

    scenarios.forEach((scenario) => {
        it(`should correctly count the surface for scenario: ${scenario.description}`, () => {

            const result = countExposedSurface(scenario.scan)
            expect(result).toEqual(scenario.expectedResult)

        })

    })


})
