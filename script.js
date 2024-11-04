// シーン、カメラ、レンダラーの初期化
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // 視野角 (FOV)
    window.innerWidth / window.innerHeight, // アスペクト比
    0.1, // 近くのクリッピング平面
    1000 // 遠くのクリッピング平面
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// 簡単な立方体を作成
const geometry = new THREE.BoxGeometry(); // 立方体の形状
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 緑色のマテリアル
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // シーンに立方体を追加

// カメラの位置を設定
camera.position.z = 5;

// アニメーションループの作成
function animate() {
    requestAnimationFrame(animate);

    // 立方体を回転
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // シーンをレンダリング
    renderer.render(scene, camera);
}

// アニメーション開始
animate();
