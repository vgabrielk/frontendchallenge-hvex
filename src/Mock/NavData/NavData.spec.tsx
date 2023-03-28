import { NavData } from "../NavData/NavData"


describe('NavData', () => {
    it("Assert that the array receive all data correctly", () => {
        NavData.forEach(item => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('id')
        ))
    })
})