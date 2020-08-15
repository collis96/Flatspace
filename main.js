let model, view;
// let controller;

function setup() {

  model = new MainModel();
  createCanvas(model._resx,model._resy);
  frameRate(model._fr);
  model.generateTestSystem();
  view = new MainView(model);
  draw();

}

function draw() { // At the end of draw, draw calls itself this happens as fast as the frameRate

  background(0);
  model.calculate();
  view.render();

}
