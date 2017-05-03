"use strict"

const fs = require('fs');

class Cookie {
  constructor(name) {
    this.name=name;
    this.status = 'mentah';
    this.ingredients = [];
  }
  bake(){
    this.status = 'selesai di masak';
  }
}

class PeanutBetter extends Cookie {
  constructor(name) {
    super();
    this.name = name;
    this.peanut_count = 100;
  }
}

class ChocolateChip extends Cookie {
  constructor(name) {
    super();
    this.name =name;
    this.choc_chip_count = 200;
  }
}



class OtherCookies extends Cookie {
  constructor(name) {
    super();
    this.otherCount = 150;
    this.name=name;
  }
}



class CookieFactory {
  static create(options){
    let arr=[];
    for(let i =0 ; i < options.length ; i ++){
      if(options[i] === 'peanut better '){

        arr.push(new PeanutBetter(options[i]));

      } else if ( options[i] === 'chocolate chip') {
        arr.push(new ChocolateChip(options[i]));
      } else  {
        arr.push(new OtherCookies(options[i]));
      }
     }
    return arr;
  }
}


let data = fs.readFileSync('cookies.txt','utf-8'); //mengambil data dari cookies.txt
let options = data.trim().split('\n'); //ubah Array
let batch_of_cookies = CookieFactory.create(options);

console.log(batch_of_cookies);
