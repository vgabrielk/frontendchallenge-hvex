import { PerformanceData } from "./PerformanceData"



describe('OmniData', () => {
    it("Assert that the array receive all data correctly", () => {
        PerformanceData.forEach((item: object) => (
            expect(item).toHaveProperty('title'),
            expect(item).toHaveProperty('id')
        ))
    })
})