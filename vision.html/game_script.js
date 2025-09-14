// クリックする領域の要素を取得
const triggerArea = document.getElementById('trigger-area-game');
const gamePopup = document.getElementById('game-popup');
const gameSE = document.getElementById('game-se');

// 画面全体がクリックされた時の動作を定義
triggerArea.addEventListener('click', () => {
    // ポップアップを表示する
    gamePopup.style.display = 'flex';
    // 効果音を再生する
    gameSE.play();
});