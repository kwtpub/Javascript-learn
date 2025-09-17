'use strict';

class DB {
  save(items) {
    // Save
    console.log(`Saved ${items}`)
  }
}

class ToDoList {
  items = [1,2,3];
  db;
  constructor(db) {
    this.db = db;
  }
  saveToDB() {
    this.db.save(this.items)
  }
}
const list1 = new ToDoList(new DB());
list1.saveToDB()
