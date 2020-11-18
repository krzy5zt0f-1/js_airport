class Airport {
  constructor(capacity = 5 ) {
    this._capacity = capacity;
    this._hangar = [];
  }
   get capacity() {
     return this._capacity;
   }
   get hangar() {
     return this._hangar;
   }
   land(plane) {
     if (this._capacity === 0) {
       return "Airport full, unable to land!";
     } else if (weather.con() === "stormy") {
       return "Bad weather, cannot land now!"
     }else {
     this._hangar.push(plane);
     this._capacity -= 1;
   }
   }
   takeOff(plane) {
     this._hangar = this._hangar.filter(inHangar => {
       return inHangar !== plane;
     });
     this._capacity += 1;
     return `${plane} took off!`
   }

 }
