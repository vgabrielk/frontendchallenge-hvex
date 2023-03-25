import { UtilitiesData } from "./UtilitiesData"


describe('UtilitiesData', () => {
    test("Assert that the array receive all data correctly", () => {
        UtilitiesData.forEach(item => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('id')
        ))
    })
})