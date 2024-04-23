export default class Diary {
  #entries = new Array();
  #isLocked = false;

  addEntry(entry) {
    this.#entries.push(entry);
  }

  getEntries() {
    if (!this.#isLocked) {
      return this.#entries;
    } else {
      return false;
    } 
  }

  printEntries() {
    this.#entries.forEach((entry, i) => {
      console.log(`ENTRY #${i + 1}: Dear Diary, `);
      console.log(entry);
    })
  }

  lock() {
    this.#isLocked = true;
  }

  unlock(password) {
    if (password === 1234) {
      this.#isLocked = false
    }
  }
}