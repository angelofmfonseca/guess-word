import { getLetterMatchCount } from "./index";

describe("getLetterMatchCount", () => {
  const secretWord = "party";

  it("returns the correct count when there are no matching letters", () => {
    const getLetterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  it("returns the correct count when there are 3 matching letters", () => {
    const getLetterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });

  it("return the correct count when there are duplicated letters in the guess", () => {
    const getLetterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
