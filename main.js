let model, view;
// let controller;

function setup() {

  model = new MainModel();
  createCanvas(model._resx,model._resy);
  frameRate(model._fr);
  background(0);
  model.generateTestSystem();
  view = new MainView(model);
  draw();

}

function draw() { // At the end of draw, draw calls itself this happens as fast as the frameRate

  // model.calculate();
  view.render();

}
