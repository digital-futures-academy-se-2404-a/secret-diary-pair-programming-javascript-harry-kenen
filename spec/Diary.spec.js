import Diary from '../src/Diary.js';
import * as readline from 'readline';

describe("Diary tests:", () => {
  let testDiary;

  beforeEach(() => {
    testDiary = new Diary();
  });

  afterEach(() => {
    testDiary = undefined;
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
  });

  describe('Diary lock tests:', () => {
    it("should prevent the user from viewing the entries if locked and they have not provided a password", () => {
      testDiary.lock();

      expect(testDiary.getEntries()).toBeFalse();
      
    });

    it("should get the entries when the diary is locked and they input the correct password to unlock it.", () => {
      const testEntry = "Hello, World!";

      testDiary.lock();

      testDiary.unlock(1234);
      testDiary.addEntry(testEntry);
      
      expect(testDiary.getEntries()).toContain(testEntry);
    });

    it("should prompt the user to set a password.", () => {
      
      spyOn(readline, "createInterface");
      
      testDiary.requestPasswordInput();

      expect(readline.createInterface).toHaveBeenCalledWith("Set a password for your diary: ");
    });

    it("It should have a default password that unlocks the diary", () => {
      let defaultPassword
      defaultPassword = 1234;

      testDiary.lock();

      testDiary.unlock(defaultPassword);

      expect(testDiary.isLocked()).toBeFalse();
    });
  });
});
