import { FaqData } from "../FaqData/FaqData"


describe('NavData', () => {
    it("Assert that the array receive all data correctly", () => {
        FaqData.forEach(item => (
            expect(item).toHaveProperty('question'),
            expect(item).toHaveProperty('answer'),
            expect(item).toHaveProperty('id')
        ))
    })
})