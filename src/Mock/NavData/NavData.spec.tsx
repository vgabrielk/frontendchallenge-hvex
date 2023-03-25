import { NavData } from "../NavData/NavData"


describe('NavData', () => {
    test("Assert that the array receive all data correctly", () => {
        NavData.forEach(item => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('id')
        ))
    })
})