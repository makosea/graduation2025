// GSAPからメディアクエリを管理
const mm = gsap.matchMedia();

// ----------------------------------------------------
// 1025px以上の画面幅でのアニメーションを全てこのブロック内に記述
// ----------------------------------------------------
mm.add("(min-width: 1025px)", () => {

    // introduction-section 全体のタイムライン (スクロールトリガー)
    const introTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".introduction-section",
            start: "top center",
            markers: false,
            once: true
        }
    });

    // ページのメインタイトル「患者さんへ「伝わる」情報発信を」
    introTl.fromTo(
        ".introduction-section h2",
        {
            y: 50,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out"
        }
    )
    // タイトル下の最初の段落
    .fromTo(
        ".introduction-section .contents-container > p:nth-of-type(1)",
        {
            y: 30,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.out"
        },
        ">-0.5"
    )
    // タイトル下の2番目の段落
    .fromTo(
        ".introduction-section .contents-container > p:nth-of-type(2)",
        {
            y: 30,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.out"
        },
        ">-0.5"
    )
    // 「Webサイトが担う情報発信の重要性」の見出し
    .fromTo(
        ".introduction-section h3",
        {
            y: 50,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out"
        },
        ">-0.5"
    )
    // マーカーアニメーション
    .to(".marker-line", {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.7")
    // 4つのリストアイテムを3Dフリップで表示
    .fromTo(
        ".intro-list-item",
        { // 開始状態
            rotationX: -90,
            autoAlpha: 0,
            transformOrigin: "top center"
        },
        { // 終了状態
            rotationX: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.2,
            clearProps: "transform" 
        },
        ">-0.5"
    )
    // 各リストアイテム内のアイコンアニメーション (任意)
    .fromTo(
        ".intro-list-item .fa-solid.fa-circle-check",
        {
            autoAlpha: 0,
            scale: 0.5,
            rotate: -90
        },
        {
            autoAlpha: 1,
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
            stagger: 0.2
        },
        "<+0.2"
    )
    // 最後のまとめの段落
    .fromTo(
        ".introduction-section .contents-container > p:last-of-type",
        {
            y: 30,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.out"
        },
        ">-0.5"
    );

    // ABOUTセクションのヘッダーアニメーション
    gsap.fromTo(
        ".about-header",
        {
            y: 50,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-header",
                start: "top 70%",
                markers: false,
                once: true
            }
        }
    );

    // Aboutセクションのテキストのスライドインアニメーション
    gsap.fromTo(
        ".about-text.js-fade-in-item.fade-in-left",
        {
            x: -50,
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-text.js-fade-in-item.fade-in-left",
                start: "top center",
                markers: false,
                once: true
            }
        }
    );

    // Aboutセクションの画像のスライドインアニメーション
    gsap.fromTo(
        ".about-image img.js-fade-in-item.fade-in-right",
        {
            x: 50,
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-image img.js-fade-in-item.fade-in-right",
                start: "top center",
                markers: false,
                once: true
            }
        }
    );

    // Skillsセクションのヘッダーアニメーション
    gsap.fromTo(
        ".skills-header",
        {
            y: 50,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".skills-header",
                start: "top 70%",
                markers: false,
                once: true
            }
        }
    );

    // Skills Section Animation (Alternating Slide-in)
    const skillsTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills-content",
            start: "top center", 
            markers: false, 
            once: true 
        }
    });

    skillsTl.from(gsap.utils.toArray(".skill-item"), {
        x: (i, target) => { 
            return target.classList.contains('--right') ? 800 : -800; 
        },
        autoAlpha: 0, 
        duration: 1, 
        ease: "power2.out", 
        stagger: 0.2 
    });

    // Skills Story (Timeline) Animation
    const storyTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills-story",
            start: "top 70%",
            markers: false, 
            once: true
        }
    });

    storyTl.from(".timeline-item", {
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3
    });

    // worksセクションのヘッダーアニメーション
    gsap.fromTo(
        ".works-header",
        {
            y: 50,
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".works-header",
                start: "top 70%",
                markers: false,
                once: true
            }
        }
    );

    // Worksセクションの各work-itemの縦軸中心一回転＆フェードインアニメーション
    gsap.fromTo(
        ".work-item",
        {
            rotationY: -360, 
            autoAlpha: 0, 
            transformOrigin: "center center", 
            perspective: 800 
        },
        {
            rotationY: 0, 
            autoAlpha: 1, 
            duration: 1.5, 
            ease: "power2.out",
            stagger: 0.2, 
            scrollTrigger: {
                trigger: ".works-content",
                start: "top center",
                markers: false,
                once: true
            },
            clearProps: "transform" 
        }
    );

}); // ここで mm.add のブロックが閉じる




// ----------------------------------------------------
// 1024px以下の画面幅でのアニメーション (タブレット・スマホ)
// ----------------------------------------------------
mm.add("(max-width: 1024px)", () => {

    // 汎用的な下からフェードイン（ヘッダーなどに適用）
    gsap.utils.toArray('.about-header, .skills-header, .works-header').forEach(header => {
        gsap.from(header, {
            autoAlpha: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                once: true,
            }
        });
    });
    
    // --- Introductionセクション（PC版よりシンプルなアニメーション） ---
    const introTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".introduction-section",
            start: "top 70%",
            once: true
        }
    });
    introTl.from(".introduction-section h2, .introduction-section p, .introduction-section h3, .introduction-section .intro-list-item", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1
    })
    .to(".marker-line", {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.8");


    // ★★★ Aboutセクションのアニメーションを修正 ★★★
    // --- Aboutセクション（スマホ向けに下からのスライドインに変更） ---
    gsap.from(".about-text", {
        y: 30, // xからyに変更
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ".about-text",
            start: 'top 80%',
            once: true,
        }
    });
    gsap.from(".about-image", {
        y: 30, // xからyに変更
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: ".about-image",
            start: 'top 80%',
            once: true,
        }
    });


    // --- Skillsセクション（スマホ向けに下からのスライドイン） ---
    gsap.utils.toArray(".skill-item").forEach(item => {
        gsap.from(item, {
            autoAlpha: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                once: true,
            }
        });
    });

    const storyTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills-story",
            start: "top 80%",
            once: true
        }
    });
    storyTl.from(".timeline-item", {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2
    });


    // --- Worksセクション（スマホ向けにスケールアップ＆フェードイン） ---
    gsap.utils.toArray(".work-item").forEach(item => {
        gsap.from(item, {
            autoAlpha: 0,
            scale: 0.9,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                once: true,
            }
        });
    });

});



// ----------------------------------------------------
// その他の考慮事項 (既存のコード)
// ----------------------------------------------------
window.addEventListener('load', () => {
    // ローディング中は背景をスクロールさせない
    document.body.classList.add('loading');

    const loadingScreen = document.getElementById('loading-screen');
    const tilesContainer = document.getElementById('loading-tiles-container');
    const loadingContent = document.getElementById('loading-content');
    const loadingText = document.getElementById('loading-text');
    const loadingLogo = document.getElementById('loading-logo');
    const welcomeText = "Welcome";

    const createTiles = () => {
        const columns = 20;
        const rows = Math.ceil(window.innerHeight / (window.innerWidth / columns));
        const numTiles = columns * rows;

        tilesContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        tilesContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        
        tilesContainer.innerHTML = '';
        for (let i = 0; i < numTiles; i++) {
            const tile = document.createElement('div');
            tile.classList.add('loading-tile');
            tilesContainer.appendChild(tile);
        }
    };

    if (loadingScreen) {
        createTiles();

        loadingText.innerHTML = welcomeText.split("").map(char => `<span>${char}</span>`).join("");
        const textSpans = loadingText.querySelectorAll('span');
        const tiles = document.querySelectorAll('.loading-tile');
        
        // ▼▼▼ アニメーション速度調整エリア ▼▼▼
        // ここに数値を入力することでお好みの速度に調整できます。
        let tileDuration, tileStagger, welcomeStagger, finalFadeDelay;

        if (window.innerWidth <= 1024) {
            // 【スマホ・タブレット用】長すぎるとのことだったので、tileStaggerをさらに小さくして高速化
            tileDuration = 0.2;
            tileStagger = 0.002; // この数値を小さくするとタイルが速く消えます
            welcomeStagger = 0.1;
            finalFadeDelay = "+=0.2";
        } else {
            // 【PC用】速すぎるとのことだったので、少しゆっくりな設定に戻します
            tileDuration = 0.4;
            tileStagger = 0.01; // この数値を大きくするとタイルがゆっくり消えます
            welcomeStagger = 0.2;
            finalFadeDelay = "+=0.5";
        }
        // ▲▲▲ 調整ここまで ▲▲▲

        const tl = gsap.timeline();

        tl
        // 1. タイルをランダムに消す
        .to(tiles, {
            scale: 0,
            opacity: 0,
            duration: tileDuration,
            ease: "power2.inOut",
            stagger: {
                each: tileStagger,
                from: "random"
            }
        })
        // 2. テキストとロゴのコンテナを表示
        .to(loadingContent, {
            opacity: 1,
            duration: 0.1
        }, "-=0.5")
        // 3. テキストを1文字ずつ表示
        .to(textSpans, {
            autoAlpha: 1,
            duration: 0.1,
            stagger: welcomeStagger,
            ease: "power2.out"
        })
        // 4. ロゴを下からフェードイン
        .fromTo(loadingLogo, { 
            y: 50,
            autoAlpha: 0,
        }, {
            y: 0,
            autoAlpha: 1,
            duration: 1.0,
            ease: "power2.out"
        }, "-=0.5")
        // 5. ローディングスクリーン全体をフェードアウト
        .to(loadingScreen, {
            autoAlpha: 0,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
                loadingScreen.style.display = "none";
                document.body.classList.remove('loading');

                gsap.fromTo(
                    ".hero-content", { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5, ease: "power2.out" }
                );

                gsap.to(".hero__background", { scale: 1.1, duration: 8, ease: "power1.inOut" });
            }
        }, finalFadeDelay);
    }
});