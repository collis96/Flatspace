

class MainView {

  constructor(model){
    this._model = model;
  }

  render(){
    let array = this._model._entities;

    let posx = array[0]._xpos;
    let posy = array[0]._ypos;
    let diameter = array[0]._radius*2;

    circle(posx, posy, diameter);
  }

}
