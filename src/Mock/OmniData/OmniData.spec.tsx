import { OmniData } from "./OmniData"


describe('NavData', () => {
    test("Assert that the array receive all data correctly", () => {
        OmniData.forEach(item => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('image'),
            expect(item).toHaveProperty('id')
        ))
    })
})