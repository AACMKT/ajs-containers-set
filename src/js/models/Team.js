export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Character is already in the team');
    }
    this.members.add(char);
  }

  addAll(...chars) {
    chars.forEach((char) => this.members.add(char));
  }

  toArray() {
    return Array.from(this.members);
  }
}
