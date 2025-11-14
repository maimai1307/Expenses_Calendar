function toggleCard(button) {
  // 全てのカードコンテンツを取得
  const allCardContents = document.querySelectorAll('.card-content');
  const allIcons = document.querySelectorAll('.card-header-icon i');
  
  // クリックされたカードのコンテンツとアイコンを取得
  const clickedCardContent = button.closest('.card').querySelector('.card-content');
  const clickedIcon = button.querySelector('i');
  // クリックされたカードの状態を退避
  var cardStatus = clickedCardContent.style.display;
  
  // まず全てのカードを閉じる
  allCardContents.forEach(content => {
    content.style.display = 'none';
  });
  allIcons.forEach(icon => {
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
  });
  
  if (cardStatus === 'none') {
    // クリックされたカードが閉じていた場合は開く
    clickedCardContent.style.display = 'block';
    clickedIcon.classList.remove('fa-angle-down');
    clickedIcon.classList.add('fa-angle-up');
  } else {
    // クリックされたカードが開いていた場合は閉じる
    clickedCardContent.style.display = 'none';
    clickedIcon.classList.remove('fa-angle-up');
    clickedIcon.classList.add('fa-angle-down');
  }
}
