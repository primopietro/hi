// TouchSimulator.js

import alfrid, { EventDispatcher } from 'alfrid';

var random = function(min, max) { return min + Math.random() * (max - min);	}

class TouchSimulator extends EventDispatcher {
	constructor(mRadiusMultiplier=1, mResetting=true) {
		super();

		this._radiusMultiplier = mRadiusMultiplier;
		this._isResetting = mResetting;

		//	position
		const r = 0.05;
		this._position = vec3.fromValues(
			random(r, 1.0-r) * window.innerWidth, 
			random(r, 1.0-r) * window.innerHeight, 
			0
		);
		this._reset();

		//	loop
		this._efIndex = alfrid.Scheduler.addEF(()=>this._update());
	}


	_reset() {
		
		//	direction
		this._direction = vec3.fromValues(random(1, -1), random(-1, 1), 0);
		vec3.normalize(this._direction, this._direction);
		let speed = random(.25, 1);
		vec3.scale(this._direction, this._direction, speed);
		this._prePos = vec3.create();

		this._count = 0;
		this._minCount = Math.floor(random(400, 200));

		this._radius = random(0.005, 0.06) * 0.5 * this._radiusMultiplier;
	}


	_update() {
		vec3.copy(this._prePos, this._position);
		vec3.add(this._position, this._position, this._direction);

		this._checkBound();
		

		this.trigger('onDrag', {
			x:this._position[0],
			y:this._position[1],
			dx:(this._position[0] - this._prePos[0]) * 10,
			dy:(this._position[1] - this._prePos[1]) * 10,
			radius:this._radius
		});

		if(this._count++ > this._minCount && this._isResetting) {
			this._reset();
		}
	}

	_checkBound() {
		//	bouncing
		//*/
		if(this._position[0] > window.innerWidth) {
			this._direction[0] *= -1;
			this._position[0] = window.innerWidth - (this._position[0] - window.innerWidth);
		} else if(this._position[0] < 0) {
			this._direction[0] *= -1;
			this._position[0] *= -1;
		}

		if(this._position[1] > window.innerHeight) {
			this._direction[1] *= -1;
			this._position[1] = window.innerHeight - (this._position[1] - window.innerHeight);
		} else if(this._position[1] < 0) {
			this._direction[1] *= -1;
			this._position[1] *= -1;
		}
		/*/
		//	looping
		while(this._position[0] < 0) {
			this._position[0] += window.innerWidth;
		}
		this._position[0] = this._position[0] % window.innerWidth;

		while(this._position[1] < 0) {
			this._position[1] += window.innerHeight;
		}
		this._position[1] = this._position[1] % window.innerWidth;
		//*/
	}


	destory() {
		alfrid.Scheduler.removeEF(this._efIndex);
	}
}

export default TouchSimulator;