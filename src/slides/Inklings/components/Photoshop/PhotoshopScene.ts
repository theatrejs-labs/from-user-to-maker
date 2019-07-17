import * as THREE from 'three';

class PhotoshopScene {

    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    shouldRender: boolean = false;
    container?: HTMLDivElement;
    light: THREE.PointLight

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

    addSphere () {
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh( geometry, material );
        this.scene.add(mesh);
        return mesh;
    }

    constructor () {
        this.camera = new THREE.PerspectiveCamera( 70, this.aspect, 0.01, 10);
        this.camera.position.z = 3;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x111111)
        this.addSphere()

        this.light = new THREE.PointLight(0xff0000, 10, 20)
        this.light.position.set(10, 10, 12)
        this.scene.add(this.light)

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );

        window.addEventListener('resize', this.resize.bind(this));
    }
    
    init (container: HTMLDivElement) {
        this.container = container
        this.container.appendChild(this.renderer.domElement);
        this.resize()
        this.animate()
    }

    play () {
        this.shouldRender = true;
        this.animate()
    }

    pause () {
        this.shouldRender = false;
    }

    animate () {
        if (this.shouldRender) requestAnimationFrame(this.animate.bind(this))
        this.renderer.render(this.scene, this.camera)
    }
    
    resize () {
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.aspect;
        this.camera.updateProjectionMatrix();
    }

}

export default PhotoshopScene