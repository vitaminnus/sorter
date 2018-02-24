class Sorter {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data.slice();
  }

  sort(indices) {
    indices.sort((a, b) => (a > b) ? 1 : -1);
    const a = indices.map(elem => this.data[elem]);
    if (this.comparator) {     
      a.sort(this.comparator);
    } else {
      a.sort((a, b) => (a > b) ? 1 : -1);
    };

    indices.forEach((elem, i) => {
      this.data[elem]=a[i];
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;