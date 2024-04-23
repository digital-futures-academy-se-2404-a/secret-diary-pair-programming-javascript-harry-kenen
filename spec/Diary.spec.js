import Diary from '../src/Diary.js';

describe('Diary entry tests:', () => {

  beforeEach(() => {
    const testDiary = new Diary();
  })

  it("should store text inputs provided by the user", () => {
    const testEntry = "Hello, World!";

    testDiary.addEntry(testEntry);

    expect(testDiary.entries.length).toBe(1);
  })
})