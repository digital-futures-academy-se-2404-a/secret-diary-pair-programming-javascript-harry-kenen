export default class Diary {
  #entries = new Array();

  addEntry(entry) {
    this.#entries.push(entry);
  }

  getEntries() {
    return this.#entries;
  }

  printEntries() {
    this.#entries.forEach((entry, i) => {
      console.log(`ENTRY #${i + 1}: Dear Diary, `);
      console.log(entry);
    })
  }
}