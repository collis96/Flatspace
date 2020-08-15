

class MainView {

  constructor(model){
    this._model = model;
  }

  // Render current entities
  render(){
    // Render static objects
    let sArray = this._model._sEntities;
    for(let i=0; i<sArray.length; i++){
      fill(sArray[i]._colour);
      circle(sArray[i]._xpos, sArray[i]._ypos, sArray[i]._radius*2);
    }

    // Render Dynamic objects
    let dArray = this._model._dEntities;
    for(let i=0; i<dArray.length; i++){
      fill(dArray[i]._colour);
      circle(dArray[i]._xpos, dArray[i]._ypos, dArray[i]._radius*2);
    }
  }

}
