export class LocalStorageRepository {
  constructor(keyName) {
    this.keyName = keyName;
  }

  persist(data) {
    if (!data.length) {
      localStorage.removeItem(this.keyName);
      return;
    }
    const stringData = JSON.stringify(data);
    localStorage.setItem(this.keyName, stringData);
  }

  retrive() {
    const stringData = localStorage.getItem(this.keyName);
    let data = JSON.parse(stringData);
    return data;
  }
}
