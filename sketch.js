let capture;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  
  // 取得攝影機影像
  capture = createCapture(VIDEO);
  
  // 隱藏攝影機產生的預設 HTML 標籤，我們只需要在畫布上繪製它
  capture.hide();
}

function draw() {
  // 設定背景顏色為 e7c6ff
  background('#e7c6ff');

  // 計算影像顯示的大小（全螢幕寬高的 60%）
  let videoW = width * 0.6;
  let videoH = height * 0.6;

  // 計算置中座標
  let x = (width - videoW) / 2;
  let y = (height - videoH) / 2;

  // 在畫布中央繪製攝影機影像
  // 注意：這會根據 60% 的比例進行縮放，可能會改變影像原始比例
  image(capture, x, y, videoW, videoH);
}

// 當瀏覽器視窗大小改變時，自動調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
