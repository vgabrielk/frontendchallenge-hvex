import { OmniData } from "./OmniData"


describe('OmniData', () => {
    test("Assert that the first array receive all data correctly", () => {
        OmniData.one.forEach((item : object) => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('image'),
            expect(item).toHaveProperty('id')
        ))
    })
    test("Assert that the 2nd receive all data correctly", () => {
        OmniData.two.forEach((item : object) => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('image'),
            expect(item).toHaveProperty('id')
        ))
    })
})