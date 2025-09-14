'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // キャリアページのクリック領域を取得
    const clickableArea = document.getElementById('clickable-hotspot-career');
    const popupWrapper = document.getElementById('popup-wrapper');
    const getSound = document.getElementById('se-get-item');
    const bgm = document.getElementById('bgm-audio');

    // 1. 特定の場所がクリックされたらポップアップを表示
    clickableArea.addEventListener('click', () => {
        popupWrapper.style.display = 'flex';
        getSound.play();
        if (bgm && bgm.paused) {
            bgm.play();
        }
    });

    // 2. ポップアップがクリックされたら次のページへ移動
    popupWrapper.addEventListener('click', () => {
        // ▼ 次のページのファイル名に設定 ▼
        window.location.href = 'emotion.html';
    });
});