let capture;
let pg; // 用於儲存與攝影機影像同寬高的繪圖層

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

  // 當攝影機準備完成且 pg 尚未建立時，建立一個與攝影機影像同尺寸的繪圖層
  if (!pg && capture.width > 1) {
    pg = createGraphics(capture.width, capture.height);
  }

  // 計算影像顯示的大小（全螢幕寬高的 60%）
  let videoW = width * 0.6;
  let videoH = height * 0.6;

  // 計算置中座標
  let x = (width - videoW) / 2;
  let y = (height - videoH) / 2;

  // 修正左右顛倒問題
  push();
  // 將原點移至畫布右側，並水平翻轉座標系
  translate(width, 0);
  scale(-1, 1);
  // 在翻轉後的座標系中繪製影像
  image(capture, x, y, videoW, videoH);

  // 如果繪圖層已建立，則繪製在影像上方
  if (pg) {
    // 你可以在 pg 內部進行繪圖，例如繪製裝飾圖形或文字
    pg.clear(); // 保持背景透明
    pg.fill(255, 255, 0);
    pg.noStroke();
    pg.ellipse(pg.width / 2, pg.height / 2, 50, 50); // 在 pg 的中心點畫一個圓

    // 將繪圖層以同樣的比例與座標繪製在影像上方
    image(pg, x, y, videoW, videoH);
  }
  pop();
}

// 當瀏覽器視窗大小改變時，自動調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
