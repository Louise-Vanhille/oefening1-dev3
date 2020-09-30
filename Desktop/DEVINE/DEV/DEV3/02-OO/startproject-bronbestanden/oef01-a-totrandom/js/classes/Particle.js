import Vector from './Vector.js';
import { random } from '../functions/lib.js';

export default class Particle {
  constructor(x, y) {
	this.location = new Vector(x, y);
	this.velocity = new Vector(random(-1, 1), random(-1,1));
	this.acceleration = new Vector(0, 0.05);
	this.lifespan = 100;
	
  }

  draw(ctx) {
	  console.log(Math.floor(random(10, 20)));
	this.velocity.add(this.acceleration);
	this.location.add(this.velocity);
	ctx.fillStyle = `rgba(255, 255, 255, ${this.lifespan / 100})`;
	ctx.fillRect(this.location.x-1, this.location.y-1, 2, 2);
	this.lifespan--; // this.lifespan - 1
  }
  
	get isAlive() {
		return this.lifespan > 0;
	}
}