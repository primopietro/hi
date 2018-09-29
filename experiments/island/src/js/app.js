
import alfrid, { GL } from 'alfrid';
import SceneApp from './SceneApp';
import AssetsLoader from 'assets-loader';
import dat from 'dat-gui';
import Stats from 'stats.js';
import assets from './asset-list';
import Assets from './Assets';

window.params = {
	numParticles:64 * 1,
	skipCount: 4,
	maxRadius: 5.5,
	sphereSize: 3,
	numSeg:40,
	light: {
		lightPos:[0, 0, 1]
	},
	lineLife: {
		uEnd:150,
		uLength:40
	}
};

if(document.body) {
	_init();
} else {
	window.addEventListener('DOMContentLoaded', _init);	
}


function _init() {
	_init3D();
}


function _onImageLoaded(o) {
	//	ASSETS
	console.log('Image Loaded : ', o);
	window.assets = o;
	const loader = document.body.querySelector('.Loading-Bar');
	loader.style.width = '100%';

	_init3D();

	setTimeout(()=> {
		document.body.classList.remove('isLoading');
	}, 250);
}


function _init3D() {
	
	//	CREATE CANVAS
	const canvas = document.createElement('canvas');
	canvas.className = 'Main-Canvas';
	document.body.appendChild(canvas);

	//	INIT 3D TOOL
	GL.init(canvas, {ignoreWebgl2:true});

	//	INIT ASSETS
	Assets.init();

	//	INIT DAT-GUI
	// window.gui = new dat.GUI({ width:300 });
	// gui.add(params, 'maxRadius', 0.0, 10.0);

	//	CREATE SCENE
	const scene = new SceneApp();

	//	STATS
	// const stats = new Stats();
	// document.body.appendChild(stats.domElement);
	// alfrid.Scheduler.addEF(()=>stats.update());

}