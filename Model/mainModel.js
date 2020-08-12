

class MainModel {

  constructor(){
    this._resx = 1500; // X Resolution
    this._resy = 1000; // Y Resolution
    this._fr = 60; // Frame Rate
    this._entities = null; // Object Array
  }

  generateTestSystem(){
    let array = new Array(1);
    array[0] = new Entity("Object 1",50,"Blue",750,750,5,0);
    console.log(array);
    this._entities = array;
  }

  // calculate(){
  //
  // }

}
