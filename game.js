// ==========================
// キャラクター
// ==========================

const characters = [
    {
        name: "炎の戦士",
        attribute: "炎",
        icon: "🔥"
        image: "炎元素キャラ/"
    },
    {
        name: "水の魔導士",
        attribute: "水",
        icon: "💧"
        image: "水元素キャラ/"
    },
    {
        name: "氷の騎士",
        attribute: "氷",
        icon: "❄️"
        image: "氷元素キャラ/"
    },
    {
        name: "雷の剣士",
        attribute: "雷",
        icon: "⚡"
        image: "雷元素キャラ/"
    },
    {
        name: "草の精霊",
        attribute: "草",
        icon: "🌿"
        image: "草元素キャラ/"
    },
    {
        name: "風の旅人",
        attribute: "風",
        icon: "🌪️"
        image: "風元素キャラ/"
    },
    {
        name: "岩の守護者",
        attribute: "岩",
        icon: "🪨"
        image: "岩元素キャラ/"
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

    "炎+氷": {
        name: "融解",
        damage: 150
    },

    "炎+雷": {
        name: "過負荷",
        damage: 120
    },

    "炎+草": {
        name: "燃焼",
        damage: 100
    },


    // 水
    "水+氷": {
        name: "凍結",
        damage: 80
    },

    "水+雷": {
        name: "感電",
        damage: 110
    },

    "水+草": {
        name: "開花",
        damage: 130
    },


    // 氷
    "氷+雷": {
        name: "超電導",
        damage: 90
    },


    // 風
    "炎+風": {
        name: "拡散",
        damage: 100
    },

    "水+風": {
        name: "拡散",
        damage: 100
    },

    "氷+風": {
        name: "拡散",
        damage: 100
    },

    "風+雷": {
        name: "拡散",
        damage: 100
    },


    // 岩
    "炎+岩": {
        name: "結晶",
        damage: 100
    },

    "水+岩": {
        name: "結晶",
        damage: 100
    },

    "岩+雷": {
        name: "結晶",
        damage: 100
    },

    "岩+氷": {
        name: "結晶",
        damage: 100
    }

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
    <div class="attribute">${character.icon} ${character.attribute}</div>
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
            ${character.icon}
            ${character.name}
            （${character.attribute}）
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
    const key = [attr1, attr2].sort().join("+");

    const reaction = reactions[key];

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
