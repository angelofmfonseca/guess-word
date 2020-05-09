import { storeFactory } from "./utils/testUtils";
import { guessWord } from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";

  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWords: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expectedState(newState).toEqual(expectedState);
    });

    it("updates state correctly for successful guess ", () => {});
  });

  describe("some guessed word", () => {
    it("updates state correctly for unsuccessful guess", () => {});

    it("updates state correctly for successful guess", () => {});
  });
});
