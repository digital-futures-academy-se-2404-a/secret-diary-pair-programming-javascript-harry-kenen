import Diary from '../src/Diary.js';

describe("Diary tests:", () => {
  let testDiary;

  beforeEach(() => {
    testDiary = new Diary();
  });

  describe('Diary entry tests:', () => {
    it("should store text inputs provided by the user", () => {
      const testEntry = "Hello, World!";

      testDiary.addEntry(testEntry);
      
      expect(testDiary.getEntries()).toContain(testEntry);
    });

    it("should show previous entries written by the user", () => {

      const testEntry = "Hello, World!";
      const testEntry2 = "Hello, Universe!";

      // const testEntries = [ "Hello, World!", "Hello, Universe!" ];

      spyOn(console, "log");

      testDiary.addEntry(testEntry);
      testDiary.addEntry(testEntry2);

      // testEntries.forEach(entry => testDiary.addEntry(entry));

      testDiary.printEntries();

      expect(console.log).toHaveBeenCalled();
    });
  })

  describe('Diary lock tests:', () => {
    
    it("should prevent the user from viewing the entries if locked and they have not provided a password", () => {

      testDiary.lock()

      expect(testDiary.getEntries()).toBeFalse()


    })

  });
});