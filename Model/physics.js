class Orbits {

  constructor(refentity,subentity){

    this._refent = refentity; // The non-orbiting Entity
    this._subent = refentity; // The orbiting Entity
    this._M = this._refent._mass; // Reference frame object mass

    /* Defines the shape and size of ellipse */
    this._e = null; // Eccentricity
    this._a = null; // semi-major axis

    /* Defines the orientation of the orbital plane */
    this._i = null; // Inclination
    this._omega = null; // Longitude of the ascending node

    /* Last two elements */
    this._w = null; // Argument of periapsis
    this._f = null; // True anomaly (the position of the body along the ellipse at a specific time)


  }

  // This method calculates the traditional keplerian orbital elements
  orbitalElements(){

    let p;
    let g = 6.67408*Math.pow(10,-11);

    /* Initial vectors */
    let r = createVector(5,10); // Position vector (x,y)
    let v = createVector(5,5);  // velocity vector (x,y)

    /* First solve for angular momentum */
    let h = r.cross(v);
    /* Node vector */
    let nhat = createVector(0,0).cross(h);
    /* Standard Gravitational Paramter Mu */
    let mu = g * this._M;
    /* Eccentricity vector */
    let evec = (r.mult(Math.pow(v.mag(),2)-mu/r.mag()).sub(v.mult(r.dot(v)))).div(mu);

    /* Eccentricity */
    this._e = evec.mag();
    /* Specific Mechnical Energy */
    let energy = (Math.pow(v.mag(),2)/2)-(mu/r.mag());

    if (Math.abs(this._e)!=1){
      this._a = -mu/(2*energy);
      p = this._a*(1-Math.pow(this._e,2));
    } else {
      p = (Math.pow(h.mag(),2))/mu;
      this._a = Infinity;
    }

    let k = createVector(0,0);
    this._i = Math.acos(h*3/h.mag()); //Might not need this for "flat" orbits
    this._omega = null;

    let n = h.cross(k);
    if(n<0){
      this._omega = 360 - this._omega;
    }

    this._w = Math.acos(n.dot(evec)/(n.mag()*this._e));

    if(this._e<0){
      this._w = 360-this._w;
    }

    this._f = Math.acos(evec.dot(r)/(this._e*r.mag()));

    if(r.dot(v)<0){
      this._f = 360 - this._f;
    }
  }

}
