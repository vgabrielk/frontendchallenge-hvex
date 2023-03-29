import { SocialIcons } from "./SocialIcons";

describe("Social Icons", () => {
  it("Assert that the array receive all data correctly", () => {
    SocialIcons.forEach(
      (item) => (
        expect(item).toHaveProperty("image"),
        expect(item).toHaveProperty("social"),
        expect(item).toHaveProperty("id")
      )
    );
  });
});
