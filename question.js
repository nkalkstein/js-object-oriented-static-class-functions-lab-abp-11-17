'use strict';

class Question {
  constructor(question, id){
      this.constructor._All = [];
      this.save;
  }

  static All() {
    return this._All;
  }

  save() {
  this.constructor._All.push(this)
}

  static Find(id){
    this.All().filter(function(question){
    return question.question === id;
    })
  }
}
