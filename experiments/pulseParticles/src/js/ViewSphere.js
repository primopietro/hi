// ViewSphere.js


import alfrid, { GL } from 'alfrid';
import fs from 'shaders/sphere.frag';

class ViewSphere extends alfrid.View {
	
	constructor() {
		super(null, fs);
	}


	_init() {
		this.mesh = alfrid.Geom.sphere(5, 24 * 4);
	}


	render() {
		this.shader.bind();
		GL.draw(this.mesh);
	}


}

export default ViewSphere;