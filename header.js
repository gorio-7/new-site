/*
function showPopup() {
  const popup = document.getElementById('popup');
  const content = document.getElementById('popup-content');
  const popupTitle = document.getElementById('popup-title');

  // 中身をクリア
  content.innerHTML = '';

  // 表示する果物（京都用）
  const fruits = [
    { src: 'Photo/apple.jpg', name: 'リンゴ' },
    { src: 'Photo/orange.jpg', name: 'みかん' }
  ];

  // 果物を追加
  fruits.forEach(fruit => {
    console.log(fruit);
    const item = document.createElement('div');
    item.className = 'popup-item';
    item.innerHTML = `
      <img src="${fruit.src}" alt="${fruit.name}">
      <p class="label">${fruit.name}</p>
    `;
    content.appendChild(item);
  });

  popupTitle.textContent = '';
  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}




function showPopup() {
  const popup = document.getElementById('popup');
  const content = document.getElementById('popup-content');

  // 中身をクリア
  content.innerHTML = '';

  // 表示する果物（京都用）
  const fruits = [
    { src: 'Photo/map_kyoto.png', name: '京都' }
  ];

  

  // 果物を追加（名前なし）
  fruits.forEach(fruit => {
    console.log(fruit);

    const item = document.createElement('div');
    item.className = 'popup-item';
    item.innerHTML = `
    <img src="${fruit.src}" alt="${fruit.name}">
    `;
    content.appendChild(item);
  });

  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
*/

function showPopup(area) {
  const popup = document.getElementById('popup');
  const content = document.getElementById('popup-content');
  content.innerHTML = '';

  const areaImages = {
    京都: { src: 'Photo/map_kyoto.png', name: '京都' },
    大阪: { src: 'Photo/map_osaka.png', name: '大阪' },
    奈良: { src: 'Photo/map_nara.png', name: '奈良' },
    滋賀: { src: 'Photo/map_shiga.png', name: '滋賀' },
    兵庫: { src: 'Photo/map_hyogo.png', name: '兵庫' },
    三重: { src: 'Photo/map_mie.png', name: '三重' },
    和歌山: { src: 'Photo/map_wakayama.png', name: '和歌山' }
  };

  const selected = areaImages[area];
  if (!selected) return;

  const item = document.createElement('div');
  item.className = 'popup-item';
  item.innerHTML = `
    <img src="${selected.src}" alt="${selected.name}">
    <p class="label">${selected.name}</p> `; /*画像下のタイトル*/
  content.appendChild(item);

  popup.style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
