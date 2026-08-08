<!-- スクロールアニメーション用スクリプト -->
  document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll(".container > *");
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
          // 一度表示したら監視を終了する場合コメントを外す
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01 // 要素が1%見えたら発火
    });

    targets.forEach(target => {
      observer.observe(target);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // モーダル用の要素を作成・取得
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".modal-close");
    
    // ページ内（コンテナ内）にあるすべての img タグを自動取得
    const images = document.querySelectorAll(".container img");

    images.forEach(img => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src; // そのままのパス（例: ../img/test.png）を読み込みます
        
        // 画像の近くにあるキャプションやalt文字を自動で取得して表示
        const photoCard = this.closest(".photo-card");
        if (photoCard) {
          const captionElem = photoCard.querySelector(".caption");
          modalCaption.textContent = captionElem ? captionElem.textContent.trim() : this.alt;
        } else {
          modalCaption.textContent = this.alt;
        }
      });
    });

    // 閉じるボタンがクリックされたら非表示にする
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // 背景の黒い部分がクリックされたら非表示にする
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });