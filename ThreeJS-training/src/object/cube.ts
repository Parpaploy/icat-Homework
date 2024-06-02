import * as THREE from 'three';

export class Cube {
    cube: THREE.Mesh | null = null;

    constructor(scene: THREE.Scene, colorHex: THREE.ColorRepresentation) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: colorHex});

        this.cube = new THREE.Mesh(geometry, material);
        this.cube.position.x = Math.random() * 7;
        scene.add(this.cube);
    }

    render = () => {
        this.cube?.rotateY((Math.random() * 1.5) / 36);
    }
}