import * as readline from 'readline';

export default class Diary {
  #entries = new Array();
  #isLocked = false;
  #password = 1234;

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
    if (password === this.#password) {
      this.#isLocked = false
    }
  }

  isLocked() {
    return this.#isLocked;
  }

  requestPasswordInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("Set a password for your diary: ", (newPassword) => {
      this.#password = newPassword;
      rl.close();
    });
  }
}