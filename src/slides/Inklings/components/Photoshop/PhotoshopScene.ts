import * as THREE from 'three';

class PhotoshopScene {

    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    mesh: THREE.Mesh;
    renderer: THREE.WebGLRenderer;
    shouldRender: boolean = false;
    container?: HTMLDivElement

    get width () {
        if (this.container) return this.container.clientWidth
        return 1;
    }

    get height () {
        if (this.container) return this.container.clientHeight
        return 1;
    }

    get aspect () {
        return this.width / this.height
    }

    constructor () {
        this.camera = new THREE.PerspectiveCamera( 70, this.aspect, 0.01, 10);
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();
        const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        const material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh( geometry, material );
        this.scene.add(this.mesh);

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );

        window.addEventListener('resize', this.resize.bind(this));
    }
    
    init (container: HTMLDivElement) {
        this.container = container
        this.container.appendChild(this.renderer.domElement);
        this.resize()
        this.shouldRender = true;
        this.animate()
    }

    animate () {
        if (this.shouldRender) requestAnimationFrame(this.animate.bind(this))
        this.mesh.rotation.x+=0.1;
        this.renderer.render(this.scene, this.camera)
    }
    
    resize () {
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.aspect;
        this.camera.updateProjectionMatrix();
    }

}

export default PhotoshopScene