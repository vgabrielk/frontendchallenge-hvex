import { OmniData } from "./OmniData"


describe('OmniData', () => {
    it("Assert that the first array receive all data correctly", () => {
        OmniData.one.forEach((item : object) => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('image'),
            expect(item).toHaveProperty('id')
        ))
    })
    it("Assert that the 2nd receive all data correctly", () => {
        OmniData.two.forEach((item : object) => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('image'),
            expect(item).toHaveProperty('id')
        ))
    })
    it("Assert that the 3rd receive all data correctly", () => {
        OmniData.two.forEach((item : object) => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('image'),
            expect(item).toHaveProperty('id')
        ))
    })
})