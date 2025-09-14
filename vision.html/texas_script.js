// クリックする領域の要素を取得
const triggerArea = document.getElementById('trigger-area-all');
const texasPopup = document.getElementById('texas-popup');
const texasSE = document.getElementById('texas-se');

// 画面全体がクリックされた時の動作を定義
triggerArea.addEventListener('click', () => {
    // ポップアップを表示する
    texasPopup.style.display = 'flex';
    // 効果音を再生する
    texasSE.play();
});