

class MainModel {

  constructor(){
    this._resx = 1500; // X Resolution
    this._resy = 1000; // Y Resolution
    this._fr = 60; // Frame Rate
    this._sEntities = null; // Static Entity Array
    this._dEntities = null; // Dynamic Entity Array
  }

  generateTestSystem(){

    let testmass = 5000;
    let sArray = new Array(1);
    let dArray = new Array(1);
    let sEntity = new StaticEntity("Static Entity",40,"Red",500,400,testmass);
    let dEntity = new DynamicEntity("Object 1",10,"Blue",0,0,testmass,2,2);
    let orbits = new Orbits(sEntity,dEntity);
    orbits.orbitalElements();

    console.log("Static object mass: " + orbits._M);
    console.log("Eccentricity value: " + orbits._e);
    console.log("Semi-Major axis value: " + orbits._a);
    console.log("Inclination value: " + orbits._i);
    console.log("Longitude of the ascending node value: " + orbits._omega);
    console.log("Argument of periapsis value " + orbits._w);
    console.log("True anomaly value: " + orbits._f);

    dArray[0] = dEntity;
    sArray[0] = sEntity;

    console.log(dArray);
    console.log(sArray);

    this._sEntities = sArray;
    this._dEntities = dArray;
  }

  move(){
    let arr = this._dEntities;
    for(let i=0;i<arr.length;i++){
      arr[i]._xpos += arr[i]._xvel;
      arr[i]._ypos += arr[i]._yvel;
    }
    this._dEntities = arr;
  }

  calculate(){
    this.move();
  }

}
