// ==================================================
// Hamburger Menu
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('js-hamburger-menu');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');
    const navLinks = document.querySelectorAll('.nav-menu_link a');
    const contactButtonInNav = document.querySelector('.nav .js-modal-open');

    const toggleMenu = () => {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-open');
        body.classList.toggle('no-scroll');
    };

    const closeMenu = () => {
        hamburger.classList.remove('is-active');
        nav.classList.remove('is-open');
        body.classList.remove('no-scroll');
    };

    if (hamburger && nav) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // メニュー内の各リンクをクリックしたらメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // メニュー内のCONTACTボタンをクリックしたらメニューを閉じる
    if (contactButtonInNav) {
        contactButtonInNav.addEventListener('click', closeMenu);
    }
});


// ==================================================
// 自動横スクロール画像ギャラリー
// ==================================================
// 必要なDOM要素を取得
const scrollContainer = document.querySelector('.scroll-container');
const imageWrapper = document.querySelector('.image-wrapper');

// スクロール速度（数値を大きくすると速くなります）
const scrollSpeed = 0.5; // ピクセル/フレーム

// requestAnimationFrameのIDを保持する変数
let animationFrameId;

// 無限スクロールを実現するために、imageWrapperの内容を複製して追加します。
// これにより、元のコンテンツの終わりに到達しても、複製されたコンテンツが続くため、
// シームレスなループが作成されます。
imageWrapper.innerHTML += imageWrapper.innerHTML;

// スクロールアニメーションを開始する関数
function startScrolling() {
    // 現在のスクロール位置を、scrollContainerの現在のスクロール位置で初期化
    // これにより、マウスオーバーで一時停止した後も、途切れることなく再開できます
    let currentScroll = scrollContainer.scrollLeft;

    // スクロールをアニメーションさせるメインの関数
    function scrollImages() {
        currentScroll += scrollSpeed; // スクロール位置を速度分だけ増加

        // スクロール位置がimageWrapperの元の幅の半分を超えたら、先頭に戻します。
        // imageWrapperは内容が2倍に複製されているため、半分の位置でリセットすることで、
        // 無限ループがシームレスに見えます。
        if (currentScroll >= imageWrapper.scrollWidth / 2) {
            currentScroll = 0;
        }

        // scrollContainerのスクロール位置を更新
        scrollContainer.scrollLeft = currentScroll;

        // 次のフレームでscrollImages関数を再実行するようブラウザに要求
        // これにより、滑らかなアニメーションが実現されます
        animationFrameId = requestAnimationFrame(scrollImages);
    }

    // 最初のスクロールアニメーションフレームを開始
    animationFrameId = requestAnimationFrame(scrollImages);
}

// マウスがコンテナに入ったらスクロールを一時停止
scrollContainer.addEventListener('mouseenter', () => {
    // 現在実行中のアニメーションフレームをキャンセル
    cancelAnimationFrame(animationFrameId);
});

// マウスがコンテナから出たらスクロールを再開
scrollContainer.addEventListener('mouseleave', () => {
    // スクロールアニメーションを再開
    startScrolling();
});

// ページの読み込みが完了したら自動スクロールを開始
startScrolling();


// ==================================================
// Modal Window
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contact-modal');
    if (!modal) {
        return;
    }
    
    const openButtons = document.querySelectorAll('.js-modal-open');
    const overlay = modal.querySelector('.modal-overlay');
    const closeButton = modal.querySelector('.modal-close-button');
    const contactForm = document.getElementById('contact-form');
    // ▼▼▼ 修正箇所 ▼▼▼
    // type="button" の送信ボタンを直接取得
    const submitButton = contactForm.querySelector('button[type="button"]');
    // ▲▲▲ 修正ここまで ▲▲▲

    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add('is-open');
        if (contactForm.classList.contains('is-submitted')) {
            contactForm.classList.remove('is-submitted');
        }
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
    };

    openButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    overlay.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });


});

// ==================================================
// Header Scroll Effect
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');

    // headerとheroSectionがページに存在する場合のみ処理を実行
    if (!header || !heroSection) {
        return;
    }

    // ヒーローセクションの高さを取得
    const heroHeight = heroSection.offsetHeight;

    // スクロール時の処理を定義
    const handleScroll = () => {
        // 現在の垂直スクロール位置がヒーローセクションの高さを超えたかチェック
        if (window.scrollY > heroHeight) {
            // 超えていれば、クラスを追加して背景をぼかす
            header.classList.add('header--scrolled');
        } else {
            // 超えていなければ、クラスを削除して透明に戻す
            header.classList.remove('header--scrolled');
        }
    };

    // ページがスクロールされるたびに handleScroll 関数を実行
    window.addEventListener('scroll', handleScroll);
});