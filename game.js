// ==========================
// キャラクター
// =========================

const characters = [
    {
        name: "クレー",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/クレー.png"
    },
    {
        name: "アルレッキーノ",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/アルレッキーノ.png"
    },
    {
        name: "ディシア",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/ディシア.webp"
    },
    {
        name: "ディルック",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/ディルック.webp"
    },
    {
        name: "ドゥリン",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/ドゥリン.png"
    },
    {
        name: "ニコ",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/ニコ.png"
    },
    {
        name: "マーヴィカ",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/マーヴィカ.png"
    },
    {
        name: "リネ",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/リネ.png"
    },
    {
        name: "宵宮",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/宵宮.webp"
    },
    {
        name: "胡桃",
        attribute: "炎",
        icon: "元素アイコン/炎元素.png",
        image: "炎元素キャラ/胡桃.webp"
    }, 
    {
        name: "モナ",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/モナ.png"
    },
    {
        name: "コロンビーナ",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/コロンビーナ.png"
    },
    {
        name: "シグウィン",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/シグウィン.webp"
    },
    {
        name: "タルタリヤ",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/タルタリヤ.webp"
    },
    {
        name: "ニィロウ",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/ニィロウ.webp"
    },
    {
        name: "ヌヴィレット",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/ヌヴィレット.webp"
    },
    {
        name: "フリーナ",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/フリーナ.webp"
    },
    {
        name: "ムアラニ",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/ムアラニ.png"
    },
    {
        name: "夜蘭",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/夜蘭.webp"
    },
    {
        name: "珊瑚宮心海",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/珊瑚宮心海.webp"
    },
    {
        name: "神里綾人",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/神里綾人.webp"
    }, 
    {
        name: "ヴォジャニーツア",
        attribute: "水",
        icon: "元素アイコン/水元素.png",
        image: "水元素キャラ/ヴォジャニーツア.webp"
    },
    {
        name: "エウルア",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/エウルア.webp"
    },
    {
        name: "エスコフィエ",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/エスコフィエ.png"
    },
    {
        name: "オデット",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/オデット.png"
    },
    {
        name: "サンドローネ",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/サンドローネ.png"
    },
    {
        name: "シトラリ",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/シトラリ.png"
    },
    {
        name: "スカーク",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/スカーク.webp"
    },
    {
        name: "リオセスリ",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/リオセスリ.png"
    },
    {
        name: "ローエン",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/ローエン.webp"
    },
    {
        name: "七七",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/七七.webp"
    },
    {
        name: "甘雨",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/甘雨.webp"
    },
    {
        name: "申鶴",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/申鶴.webp"
    },
    {
        name: "神里綾華",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/神里綾華.webp"
    },
    {
        name: "アーロイ",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/アーロイ.webp"
    }, 
    {
        name: "アナスターシャ",
        attribute: "氷",
        icon: "元素アイコン/氷元素.png",
        image: "氷元素キャラ/アナスターシャ.png"
    },
    {
        name: "刻晴",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/刻晴.webp"
    },
    {
        name: "イネファ",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/イネファ.png"
    },
    {
        name: "クロリンデ",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/クロリンデ.webp"
    },
    {
        name: "セノ",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/セノ.webp"
    },
    {
        name: "フリンズ",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/フリンズ.png"
    },
    {
        name: "ヴァレサ",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/ヴァレサ.png"
    },
    {
        name: "雷電将軍",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/雷電将軍.webp"
    },
    {
        name: "八重神子",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/八重神子.png"
    }, 
    {
        name: "ミティア",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/ミティア.png"
    },
    {
        name: "ダニカ",
        attribute: "雷",
        icon: "元素アイコン/雷元素.png",
        image: "雷元素キャラ/ダニカ.png"
    },
    {
        name: "白朮",
        attribute: "草",
        icon: "元素アイコン/草元素.png",
        image: "草元素キャラ/白朮.png"
    },
    {
        name: "アルハイゼン",
        attribute: "草",
        icon: "元素アイコン/草元素.png",
        image: "草元素キャラ/アルハイゼン.webp"
    },
    {
        name: "エミリエ",
        attribute: "草",
        icon: "元素アイコン/草元素.png",
        image: "草元素キャラ/エミリエ.webp"
    },
    {
        name: "キィニチ",
        attribute: "草",
        icon: "元素アイコン/草元素.png",
        image: "草元素キャラ/キィニチ.webp"
    },
    {
        name: "ティナリ",
        attribute: "草",
        icon: "元素アイコン/草元素.png",
        image: "草元素キャラ/ティナリ.webp"
    },
    {
        name: "ナヒーダ",
        attribute: "草",
        icon: "元素アイコン/草元素.png",
        image: "草元素キャラ/ナヒーダ.webp"
    },
    {
        name: "ネフェル",
        attribute: "草",
        icon: "元素アイコン/草元素.png",
        image: "草元素キャラ/ネフェル.webp"
    },
    {
        name: "ラウマ",
        attribute: "草",
        icon: "元素アイコン/草元素.png",
        image: "草元素キャラ/ラウマ.webp"
    }, 
    {
        name: "ジン",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/ジン.webp"
    },
    {
        name: "ウェンティ",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/ウェンティ.webp"
    },
    {
        name: "チャスカ",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/チャスカ.webp"
    },
    {
        name: "ファルカ",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/ファルカ.png"
    },
    {
        name: "夢見月瑞希",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/夢見月瑞希.webp"
    },
    {
        name: "放浪者",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/放浪者.webp"
    },
    {
        name: "楓原万葉",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/楓原万葉.webp"
    },
    {
        name: "閑雲",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/閑雲.png"
    },
    {
        name: "魈",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/魈.webp"
    }, 
    {
        name: "ヴェスナ",
        attribute: "風",
        icon: "元素アイコン/風元素.png",
        image: "風元素キャラ/ヴェスナ.png"
    },
    {
        name: "アルベド",
        attribute: "岩",
        icon: "元素アイコン/岩元素.png",
        image: "岩元素キャラ/アルベド.webp"
    },
    {
        name: "シロネン",
        attribute: "岩",
        icon: "元素アイコン/岩元素.png",
        image: "岩元素キャラ/シロネン.webp"
    },
    {
        name: "ナヴィア",
        attribute: "岩",
        icon: "元素アイコン/岩元素.png",
        image: "岩元素キャラ/ナヴィア.png"
    },
    {
        name: "リンネア",
        attribute: "岩",
        icon: "元素アイコン/岩元素.png",
        image: "岩元素キャラ/リンネア.webp"
    },
    {
        name: "千織",
        attribute: "岩",
        icon: "元素アイコン/岩元素.png",
        image: "岩元素キャラ/千織.webp"
    },
    {
        name: "兹白",
        attribute: "岩",
        icon: "元素アイコン/岩元素.png",
        image: "岩元素キャラ/兹白.png"
    },
    {
        name: "荒瀧一斗",
        attribute: "岩",
        icon: "元素アイコン/岩元素.png",
        image: "岩元素キャラ/荒瀧一斗.png"
    },
    {
        name: "鍾離",
        attribute: "岩",
        icon: "元素アイコン/岩元素.png",
        image: "岩元素キャラ/鍾離.webp" 
    } 
];

// ==========================
// 属性反応
// ==========================

const reactions = {

    // 炎
    "炎+水": {
        name: "蒸発",
        damage: 150
    },

    "水+炎": {
        name: "蒸発",
        damage: 150
    },

    "炎+氷": {
        name: "融解",
        damage: 150
    },
    
    "氷+炎": {
        name: "溶解",
        damage: 150
    },

    "炎+雷": {
        name: "過負荷",
        damage: 120
    },

    "雷+炎": {
        name: "過負荷",
        damage: 120
    },

    "炎+草": {
        name: "燃焼",
        damage: 100
    },

    "草+炎": {
        name: "燃焼",
        damage: 100
    },

    // 水
    "水+氷": {
        name: "凍結",
        damage: 80
    },

    "氷+水": {
        name: "凍結",
        damage: 80
    },

    "水+雷": {
        name: "感電",
        damage: 110
    },

    "雷+水": {
        name: "感電",
        damage: 110
    },

    "水+草": {
        name: "開花",
        damage: 130
    },

    "草+水": {
        name: "開花",
        damage: 130
    },

    // 氷
    "氷+雷": {
        name: "超電導",
        damage: 90
    },

    "雷+氷": {
        name: "超電導",
        damage: 90
    },

    // 風
    "炎+風": {
        name: "拡散",
        damage: 100
    },

    "風+炎": {
        name: "拡散",
        damage: 100
    },

    "水+風": {
        name: "拡散",
        damage: 100
    },

    "風+水": {
        name: "拡散",
        damage: 100
    },

    "氷+風": {
        name: "拡散",
        damage: 100
    },

    "風+氷": {
        name: "拡散",
        damage: 100
    },

    "風+雷": {
        name: "拡散",
        damage: 100
    },

    "雷+風": {
        name: "拡散",
        damage: 100
    },

    // 岩
    "炎+岩": {
        name: "結晶",
        damage: 100
    },

    "岩+炎": {
        name: "結晶",
        damage: 100
    },

    "水+岩": {
        name: "結晶",
        damage: 100
    },

    "岩+水": {
        name: "結晶",
        damage: 100
    },

    "岩+雷": {
        name: "結晶",
        damage: 100
    },

    "雷+岩": {
        name: "結晶",
        damage: 100
    },

    "岩+氷": {
        name: "結晶",
        damage: 100
    },

    "氷+岩": {
        name: "結晶",
        damage: 100
    },

    "+": {
        name: "",
        damage: 150
    },

};

// ==========================
// 選択したキャラクター
// ==========================

let selectedCharacters = [];


// ==========================
// キャラクター表示
// ==========================

const characterArea = document.getElementById("characters");

characters.forEach((character, index) => {

    const card = document.createElement("div");

    card.className = "character";

    card.innerHTML = `
        <img src="${character.image}" class="character-image">
        <div class="name">${character.name}</div>
        <div class="attribute">
            <img src="${character.icon}" class="element-icon">
            ${character.attribute}
        </div>
    `;

    card.addEventListener("click", () => {
        selectCharacter(index, card);
    });

    characterArea.appendChild(card);
});


// ==========================
// キャラクター選択
// ==========================

function selectCharacter(index, card) {

    // すでに選択されている場合
    if (selectedCharacters.includes(index)) {

        selectedCharacters =
            selectedCharacters.filter(i => i !== index);

        card.classList.remove("selected");

    }

    // 2体未満なら追加
    else if (selectedCharacters.length < 2) {

        selectedCharacters.push(index);

        card.classList.add("selected");
    }

    // 表示更新
    updateSelected();

    // 2体選択されたら反応判定
    if (selectedCharacters.length === 2) {
        checkReaction();
    }
}


// ==========================
// 選択キャラクター表示
// ==========================

function updateSelected() {

    const area = document.getElementById("selectedCharacters");

    if (selectedCharacters.length === 0) {

        area.textContent = "まだ選択されていません";
        return;
    }

    area.innerHTML = selectedCharacters.map(index => {

        const character = characters[index];

        return `
    　　    <img src="${character.icon}" class="element-icon">
    　　    ${character.name}
    　      (${character.attribute}）
　　　　`;
    }).join("　＋　");
}


// ==========================
// 属性反応判定
// ==========================

function checkReaction() {

    const char1 = characters[selectedCharacters[0]];
    const char2 = characters[selectedCharacters[1]];

    const attr1 = char1.attribute;
    const attr2 = char2.attribute;

    // 属性を並び替えて検索
    const key1 = attr1 + "+" + attr2;
    const key2 = attr2 + "+" + attr1;
    
    const reaction = reactions[key1] || reactions[key2];

    const reactionArea = document.getElementById("reaction");

    if (reaction) {

        reactionArea.innerHTML = `
            <h2>⚡ 属性反応発生！</h2>

            <div class="reaction-name">
                ${reaction.name}
            </div>

            <div class="damage">
                ダメージ：${reaction.damage}
            </div>
        `;

    } else {

        reactionArea.innerHTML = `
            <h2>属性反応なし</h2>

            <p>
                ${attr1} ＋ ${attr2}
            </p>
        `;
    }
}
