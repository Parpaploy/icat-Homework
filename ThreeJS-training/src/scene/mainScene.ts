import * as THREE from 'three';
import { Cube } from '../object/cube';

export class MainScene {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    container: HTMLElement;

    cubeClass1: Cube | null = null;
    cubeClass2: Cube | null = null;
    cubeClass3: Cube | null = null;

    constructor(container: HTMLElement) {
        this.scene = new THREE.Scene();
        this.container = container;
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();

        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement);

        this.onStart();

        this.container.addEventListener('click', this.onClick);

        this.renderer.setAnimationLoop(this.render);
    }
    
    onStart = () => {
        this.cubeClass1 = new Cube(this.scene, 0xf5b8d8);
        this.cubeClass2 = new Cube(this.scene, 0x62b9e9);
        this.cubeClass3 = new Cube(this.scene, 0xffd966);

        this.camera.position.z = 6;
        this.camera.position.y = 2;
        this.camera.position.x = 2;

    }

    onClick = (event: any) => {
        console.log("click");
        const rectBox = this.container.getBoundingClientRect();
        const mousePositionNormalize = {
            x: (event.x / rectBox.width) * 2 - 1,
            y: -(event.y / rectBox.height) * 2 + 1
        }

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mousePositionNormalize.x, mousePositionNormalize.y), this.camera);

        const intersects = raycaster.intersectObjects(this.scene.children);
        
        if(intersects.length > 0) {
            intersects[0].object.position.x = Math.random() * 5;
            intersects[0].object.position.y = Math.random() * 5;
        }
    }
    
    render = () => {
        this.cubeClass1?.render();
        this.cubeClass2?.render();
        this.cubeClass3?.render();

        this.renderer.render(this.scene, this.camera);
    }
}