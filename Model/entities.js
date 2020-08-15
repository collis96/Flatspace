class Entity {

  constructor(name,radius,colour,xpos,ypos,mass){
    this._name = name;
    this._radius = radius;
    this._colour = colour;
    this._xpos = xpos;
    this._ypos = ypos;
    this._mass = mass;
}

}

class StaticEntity extends Entity {
}

class DynamicEntity extends Entity {

  constructor(name,radius,colour,xpos,ypos,mass,xvel,yvel){
    super(name,radius,colour,xpos,ypos,mass);
    this._xvel = xvel;
    this._yvel = yvel;
  }

}
