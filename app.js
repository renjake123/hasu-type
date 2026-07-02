const lessons = {
  basic: [
    { kana: "あいうえお", roma: "aiueo" },
    { kana: "かきくけこ", roma: "kakikukeko" },
    { kana: "さしすせそ", roma: "sashisuseso" },
    { kana: "たちつてと", roma: "tachitsuteto" },
    { kana: "なにぬねの", roma: "naninuneno" },
    { kana: "はひふへほ", roma: "hahifuheho" },
    { kana: "まみむめも", roma: "mamimumemo" },
    { kana: "やゆよ", roma: "yayuyo" },
    { kana: "らりるれろ", roma: "rarirurero" },
    { kana: "わをん", roma: "wawon" }
  ],
  words: [
    { kana: "みかん", roma: "mikan" },
    { kana: "さくら", roma: "sakura" },
    { kana: "えんぴつ", roma: "enpitsu" },
    { kana: "たいよう", roma: "taiyou" },
    { kana: "ともだち", roma: "tomodachi" },
    { kana: "しんぶん", roma: "shinbun" },
    { kana: "きょうしつ", roma: "kyoushitsu" },
    { kana: "れんしゅう", roma: "renshuu" },
    { kana: "はやうち", roma: "hayauchi" },
    { kana: "せいかく", roma: "seikaku" },
    { kana: "じしん", roma: "jishin" },
    { kana: "じじつ", roma: "jijitsu" },
    { kana: "契約", yomi: "けいやく", roma: "keiyaku" },
    { kana: "税金", yomi: "ぜいきん", roma: "zeikin" },
    { kana: "年金", yomi: "ねんきん", roma: "nenkin" },
    { kana: "保険", yomi: "ほけん", roma: "hoken" },
    { kana: "雇用", yomi: "こよう", roma: "koyou" },
    { kana: "賃金", yomi: "ちんぎん", roma: "chingin" },
    { kana: "給料", yomi: "きゅうりょう", roma: "kyuuryou" },
    { kana: "経済", yomi: "けいざい", roma: "keizai" },
    { kana: "景気", yomi: "けいき", roma: "keiki" },
    { kana: "物価", yomi: "ぶっか", roma: "bukka" },
    { kana: "為替", yomi: "かわせ", roma: "kawase" },
    { kana: "予算", yomi: "よさん", roma: "yosan" },
    { kana: "利益", yomi: "りえき", roma: "rieki" },
    { kana: "損失", yomi: "そんしつ", roma: "sonshitsu" },
    { kana: "資産", yomi: "しさん", roma: "shisan" },
    { kana: "負債", yomi: "ふさい", roma: "fusai" },
    { kana: "請求", yomi: "せいきゅう", roma: "seikyuu" },
    { kana: "領収", yomi: "りょうしゅう", roma: "ryoushuu" },
    { kana: "会議", yomi: "かいぎ", roma: "kaigi" },
    { kana: "議事録", yomi: "ぎじろく", roma: "gijiroku" },
    { kana: "報告", yomi: "ほうこく", roma: "houkoku" },
    { kana: "提案", yomi: "ていあん", roma: "teian" },
    { kana: "承認", yomi: "しょうにん", roma: "shounin" },
    { kana: "責任", yomi: "せきにん", roma: "sekinin" },
    { kana: "権利", yomi: "けんり", roma: "kenri" },
    { kana: "義務", yomi: "ぎむ", roma: "gimu" },
    { kana: "法律", yomi: "ほうりつ", roma: "houritsu" },
    { kana: "規則", yomi: "きそく", roma: "kisoku" },
    { kana: "個人情報", yomi: "こじんじょうほう", roma: "kojinjouhou" },
    { kana: "機密", yomi: "きみつ", roma: "kimitsu" },
    { kana: "選挙", yomi: "せんきょ", roma: "senkyo" },
    { kana: "投票", yomi: "とうひょう", roma: "touhyou" },
    { kana: "行政", yomi: "ぎょうせい", roma: "gyousei" },
    { kana: "自治体", yomi: "じちたい", roma: "jichitai" },
    { kana: "福祉", yomi: "ふくし", roma: "fukushi" },
    { kana: "医療", yomi: "いりょう", roma: "iryou" },
    { kana: "防災", yomi: "ぼうさい", roma: "bousai" },
    { kana: "避難", yomi: "ひなん", roma: "hinan" },
    { kana: "安全", yomi: "あんぜん", roma: "anzen" },
    { kana: "衛生", yomi: "えいせい", roma: "eisei" },
    { kana: "環境", yomi: "かんきょう", roma: "kankyou" },
    { kana: "資源", yomi: "しげん", roma: "shigen" },
    { kana: "交通", yomi: "こうつう", roma: "koutsuu" },
    { kana: "教育", yomi: "きょういく", roma: "kyouiku" },
    { kana: "労働", yomi: "ろうどう", roma: "roudou" },
    { kana: "履歴書", yomi: "りれきしょ", roma: "rirekisho" },
    { kana: "面接", yomi: "めんせつ", roma: "mensetsu" },
    { kana: "研修", yomi: "けんしゅう", roma: "kenshuu" },
    { kana: "期限", yomi: "きげん", roma: "kigen" },
    { kana: "納期", yomi: "のうき", roma: "nouki" },
    { kana: "所得税", yomi: "しょとくぜい", roma: "shotokuzei" },
    { kana: "消費税", yomi: "しょうひぜい", roma: "shouhizei" },
    { kana: "住民票", yomi: "じゅうみんひょう", roma: "juuminhyou" },
    { kana: "退職金", yomi: "たいしょくきん", roma: "taishokukin" },
    { kana: "交通費", yomi: "こうつうひ", roma: "koutsuuhi" },
    { kana: "非常口", yomi: "ひじょうぐち", roma: "hijouguchi" },
    { kana: "消防署", yomi: "しょうぼうしょ", roma: "shoubousho" },
    { kana: "試用期間", yomi: "しようきかん", roma: "shiyoukikan" },
    { kana: "勤務時間", yomi: "きんむじかん", roma: "kinmujikan" },
    { kana: "社会保険", yomi: "しゃかいほけん", roma: "shakaihoken" },
    { kana: "健康保険", yomi: "けんこうほけん", roma: "kenkouhoken" },
    { kana: "雇用保険", yomi: "こようほけん", roma: "koyouhoken" },
    { kana: "有給休暇", yomi: "ゆうきゅうきゅうか", roma: "yuukyuukyuuka" },
    { kana: "防災訓練", yomi: "ぼうさいくんれん", roma: "bousaikunren" },
    { kana: "確定申告", yomi: "かくていしんこく", roma: "kakuteishinkoku" },
    { kana: "源泉徴収", yomi: "げんせんちょうしゅう", roma: "gensenchoushuu" },
    { kana: "印鑑証明", yomi: "いんかんしょうめい", roma: "inkanshoumei" },
    { kana: "労働基準", yomi: "ろうどうきじゅん", roma: "roudoukijun" },
    { kana: "扶養控除", yomi: "ふようこうじょ", roma: "fuyoukoujo" },
    { kana: "個人番号", yomi: "こじんばんごう", roma: "kojinbangou" },
    { kana: "雇用契約書", yomi: "こようけいやくしょ", roma: "koyoukeiyakusho" },
    { kana: "源泉徴収票", yomi: "げんせんちょうしゅうひょう", roma: "gensenchoushuuhyou" },
    { kana: "所得証明書", yomi: "しょとくしょうめいしょ", roma: "shotokushoumeisho" },
    { kana: "身分証明書", yomi: "みぶんしょうめいしょ", roma: "mibunshoumeisho" },
    { kana: "健康診断書", yomi: "けんこうしんだんしょ", roma: "kenkoushindansho" },
    { kana: "消費者保護", yomi: "しょうひしゃほご", roma: "shouhishahogo" },
    { kana: "労働契約法", yomi: "ろうどうけいやくほう", roma: "roudoukeiyakuhou" },
    { kana: "社会保障制度", yomi: "しゃかいほしょうせいど", roma: "shakaihoshouseido" },
    { kana: "個人情報保護", yomi: "こじんじょうほうほご", roma: "kojinjouhouhogo" },
    { kana: "確定拠出年金", yomi: "かくていきょしゅつねんきん", roma: "kakuteikyoshutsunenkin" }
  ],
  english: [
    { kana: "apple", roma: "apple" },
    { kana: "orange", roma: "orange" },
    { kana: "school", roma: "school" },
    { kana: "keyboard", roma: "keyboard" },
    { kana: "practice", roma: "practice" },
    { kana: "computer", roma: "computer" },
    { kana: "window", roma: "window" },
    { kana: "message", roma: "message" },
    { kana: "typing", roma: "typing" },
    { kana: "challenge", roma: "challenge" },
    { kana: "morning", roma: "morning" },
    { kana: "beautiful", roma: "beautiful" },
    { kana: "important", roma: "important" },
    { kana: "question", roma: "question" },
    { kana: "language", roma: "language" },
    { kana: "certain", roma: "certain" },
    { kana: "stay", roma: "stay" },
    { kana: "city", roma: "city" },
    { kana: "face", roma: "face" },
    { kana: "given", roma: "given" },
    { kana: "cut", roma: "cut" },
    { kana: "universe", roma: "universe" },
    { kana: "describe", roma: "describe" },
    { kana: "government", roma: "government" },
    { kana: "area", roma: "area" },
    { kana: "past", roma: "past" },
    { kana: "admit", roma: "admit" },
    { kana: "still", roma: "still" },
    { kana: "have", roma: "have" },
    { kana: "above", roma: "above" },
    { kana: "anybody", roma: "anybody" },
    { kana: "used", roma: "used" },
    { kana: "notice", roma: "notice" },
    { kana: "hundred", roma: "hundred" },
    { kana: "your", roma: "your" },
    { kana: "stone", roma: "stone" },
    { kana: "hand", roma: "hand" },
    { kana: "why", roma: "why" },
    { kana: "pity", roma: "pity" },
    { kana: "both", roma: "both" },
    { kana: "village", roma: "village" },
    { kana: "measure", roma: "measure" },
    { kana: "give", roma: "give" },
    { kana: "feeling", roma: "feeling" },
    { kana: "full", roma: "full" },
    { kana: "sea", roma: "sea" },
    { kana: "age", roma: "age" },
    { kana: "concern", roma: "concern" },
    { kana: "teach", roma: "teach" },
    { kana: "next", roma: "next" },
    { kana: "instead", roma: "instead" },
    { kana: "kept", roma: "kept" },
    { kana: "put", roma: "put" },
    { kana: "let", roma: "let" },
    { kana: "watch", roma: "watch" },
    { kana: "appear", roma: "appear" },
    { kana: "beauty", roma: "beauty" },
    { kana: "radio", roma: "radio" },
    { kana: "laugh", roma: "laugh" },
    { kana: "special", roma: "special" },
    { kana: "write", roma: "write" },
    { kana: "character", roma: "character" },
    { kana: "phone", roma: "phone" },
    { kana: "abroad", roma: "abroad" }
  ],
  sentences: [
    { kana: "今日も楽しく練習する", yomi: "きょうもたのしくれんしゅうする", roma: "kyoumotanoshikurenshuusuru" },
    { kana: "ゆっくり正しく打つ", yomi: "ゆっくりただしくうつ", roma: "yukkuritadashikuutsu" },
    { kana: "間違えても続けよう", yomi: "まちがえてもつづけよう", roma: "machigaetemotsudukeyou" },
    { kana: "手を見ないで打ってみる", yomi: "てをみないでうってみる", roma: "tewominaideuttemiru" },
    { kana: "少しずつ速くなる", yomi: "すこしずつはやくなる", roma: "sukoshizutsuhayakunaru" },
    { kana: "会議の予定を確認する", yomi: "かいぎのよていをかくにんする", roma: "kaiginoyoteiwokakuninsuru" },
    { kana: "契約内容をよく読む", yomi: "けいやくないようをよくよむ", roma: "keiyakunaiyouwoyokuyomu" },
    { kana: "期限までに報告する", yomi: "きげんまでにほうこくする", roma: "kigenmadenihoukokusuru" },
    { kana: "税金と保険を確認する", yomi: "ぜいきんとほけんをかくにんする", roma: "zeikintohokenwokakuninsuru" },
    { kana: "個人情報を大切に扱う", yomi: "こじんじょうほうをたいせつにあつかう", roma: "kojinjouhouwotaisetsuniatsukau" },
    { kana: "安全第一で行動する", yomi: "あんぜんだいいちでこうどうする", roma: "anzendaiichidekoudousuru" },
    { kana: "避難場所を覚えておく", yomi: "ひなんばしょをおぼえておく", roma: "hinanbashowooboeteoku" },
    { kana: "履歴書を丁寧に書く", yomi: "りれきしょをていねいにかく", roma: "rirekishowoteineinikaku" },
    { kana: "面接では明るく話す", yomi: "めんせつではあかるくはなす", roma: "mensetsudehaakarukuhanasu" },
    { kana: "社会の仕組みを学ぶ", yomi: "しゃかいのしくみをまなぶ", roma: "shakainoshikumiwomanabu" }
  ],
  numbers: [
    { kana: "でんわ 090 1234 5678", roma: "denwa 090 1234 5678" },
    { kana: "2026 07 02", roma: "2026 07 02" },
    { kana: "room 315", roma: "room 315" },
    { kana: "score 100 percent", roma: "score 100 percent" },
    { kana: "level 1 2 3 4 5", roma: "level 1 2 3 4 5" }
  ]
};

const kanaMap = {
  あ: ["a"], い: ["i"], う: ["u"], え: ["e"], お: ["o"],
  か: ["ka"], き: ["ki"], く: ["ku"], け: ["ke"], こ: ["ko"],
  さ: ["sa"], し: ["shi", "si"], す: ["su"], せ: ["se"], そ: ["so"],
  た: ["ta"], ち: ["chi", "ti"], つ: ["tsu", "tu"], て: ["te"], と: ["to"],
  な: ["na"], に: ["ni"], ぬ: ["nu"], ね: ["ne"], の: ["no"],
  は: ["ha"], ひ: ["hi"], ふ: ["fu", "hu"], へ: ["he"], ほ: ["ho"],
  ま: ["ma"], み: ["mi"], む: ["mu"], め: ["me"], も: ["mo"],
  や: ["ya"], ゆ: ["yu"], よ: ["yo"],
  ら: ["ra"], り: ["ri"], る: ["ru"], れ: ["re"], ろ: ["ro"],
  わ: ["wa"], を: ["wo", "o"], ん: ["n", "nn"],
  が: ["ga"], ぎ: ["gi"], ぐ: ["gu"], げ: ["ge"], ご: ["go"],
  ざ: ["za"], じ: ["ji", "zi"], ず: ["zu"], ぜ: ["ze"], ぞ: ["zo"],
  だ: ["da"], ぢ: ["ji", "di"], づ: ["zu", "du"], で: ["de"], ど: ["do"],
  ば: ["ba"], び: ["bi"], ぶ: ["bu"], べ: ["be"], ぼ: ["bo"],
  ぱ: ["pa"], ぴ: ["pi"], ぷ: ["pu"], ぺ: ["pe"], ぽ: ["po"],
  ぁ: ["xa", "la"], ぃ: ["xi", "li"], ぅ: ["xu", "lu"], ぇ: ["xe", "le"], ぉ: ["xo", "lo"],
  ゃ: ["xya", "lya"], ゅ: ["xyu", "lyu"], ょ: ["xyo", "lyo"],
  ゎ: ["xwa", "lwa"], ー: ["-"], " ": [" "]
};

const digraphMap = {
  きゃ: ["kya"], きゅ: ["kyu"], きょ: ["kyo"],
  しゃ: ["sha", "sya"], しゅ: ["shu", "syu"], しょ: ["sho", "syo"],
  ちゃ: ["cha", "tya", "cya"], ちゅ: ["chu", "tyu", "cyu"], ちょ: ["cho", "tyo", "cyo"],
  にゃ: ["nya"], にゅ: ["nyu"], にょ: ["nyo"],
  ひゃ: ["hya"], ひゅ: ["hyu"], ひょ: ["hyo"],
  みゃ: ["mya"], みゅ: ["myu"], みょ: ["myo"],
  りゃ: ["rya"], りゅ: ["ryu"], りょ: ["ryo"],
  ぎゃ: ["gya"], ぎゅ: ["gyu"], ぎょ: ["gyo"],
  じゃ: ["ja", "jya", "zya"], じゅ: ["ju", "jyu", "zyu"], じょ: ["jo", "jyo", "zyo"],
  ぢゃ: ["ja", "dya"], ぢゅ: ["ju", "dyu"], ぢょ: ["jo", "dyo"],
  びゃ: ["bya"], びゅ: ["byu"], びょ: ["byo"],
  ぴゃ: ["pya"], ぴゅ: ["pyu"], ぴょ: ["pyo"],
  ふぁ: ["fa", "fwa"], ふぃ: ["fi", "fyi"], ふぇ: ["fe", "fye"], ふぉ: ["fo", "fwo"],
  てぃ: ["thi", "ti"], でぃ: ["dhi", "di"],
  とぅ: ["twu", "tu"], どぅ: ["dwu", "du"],
  うぃ: ["wi", "whi"], うぇ: ["we", "whe"], うぉ: ["who", "wo"]
};

const keyRows = {
  qwerty: "qwertyuiop".split(""),
  asdf: "asdfghjkl".split(""),
  zxc: "zxcvbnm".split("")
};

const ENGLISH_TIME_LIMIT_MS = 60000;

const state = {
  mode: "basic",
  lesson: null,
  options: [],
  input: "",
  completedText: "",
  running: false,
  startedAt: 0,
  correct: 0,
  total: 0,
  misses: 0,
  streak: 0,
  missMap: new Map(),
  lastLessonKey: ""
};

const el = {
  runState: document.querySelector("#runState"),
  kanaLine: document.querySelector("#kanaLine"),
  romaLine: document.querySelector("#romaLine"),
  progressBar: document.querySelector("#progressBar"),
  typedLine: document.querySelector("#typedLine"),
  speed: document.querySelector("#speed"),
  accuracy: document.querySelector("#accuracy"),
  streak: document.querySelector("#streak"),
  misses: document.querySelector("#misses"),
  weakList: document.querySelector("#weakList"),
  startButton: document.querySelector("#startButton"),
  resetButton: document.querySelector("#resetButton"),
  soundToggle: document.querySelector("#soundToggle"),
  strictToggle: document.querySelector("#strictToggle")
};

function buildKeyboard() {
  Object.entries(keyRows).forEach(([row, letters]) => {
    const rowNode = document.querySelector(`[data-row="${row}"]`);
    rowNode.innerHTML = letters.map((letter) => (
      `<span class="key" data-key="${letter}">${letter}</span>`
    )).join("");
  });
}

function unique(values) {
  return [...new Set(values)];
}

function isEnglishMode() {
  return state.mode === "english";
}

function shuffle(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildEnglishLine() {
  const dictionary = Array.isArray(window.ENGLISH_DICTIONARY) ? window.ENGLISH_DICTIONARY : [];
  const words = (dictionary.length ? dictionary : lessons.english.map((item) => item.roma))
    .map((word) => word.trim().toLowerCase())
    .filter((word) => /^[a-z]+(?:-[a-z]+)?$/.test(word));
  const line = [];
  while (line.join(" ").length < 520) {
    line.push(...shuffle(words));
  }
  return line.join(" ");
}

function isKanjiLesson(lesson) {
  return Boolean(lesson.yomi);
}

function chooseWordLesson() {
  const kanjiLessons = lessons.words.filter(isKanjiLesson);
  const kanaLessons = lessons.words.filter((lesson) => !isKanjiLesson(lesson));

  if (!kanjiLessons.length || Math.random() < 0.15) {
    return kanaLessons[Math.floor(Math.random() * kanaLessons.length)];
  }

  const lengths = unique(kanjiLessons.map((lesson) => lesson.kana.length));
  const targetLength = lengths[Math.floor(Math.random() * lengths.length)];
  const candidates = kanjiLessons.filter((lesson) => lesson.kana.length === targetLength);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function tokenVariants(kana) {
  const tokens = [];
  for (let index = 0; index < kana.length; index += 1) {
    const two = kana.slice(index, index + 2);
    if (digraphMap[two]) {
      tokens.push({ kana: two, variants: digraphMap[two] });
      index += 1;
      continue;
    }

    const char = kana[index];
    if (char === "ん" && index === kana.length - 1) {
      tokens.push({ kana: char, variants: ["nn"] });
      continue;
    }

    if (char === "っ") {
      tokens.push({ kana: char, variants: ["xtu", "ltu"], smallTsu: true });
      continue;
    }

    tokens.push({ kana: char, variants: kanaMap[char] || [char.toLowerCase()] });
  }
  return tokens;
}

function buildOptionsFromTokens(tokens) {
  let options = [""];
  const maxOptions = 1200;

  tokens.forEach((token, index) => {
    let variants = token.variants;
    if (token.smallTsu) {
      const next = tokens[index + 1];
      const doubled = (next?.variants || [])
        .map((variant) => variant[0])
        .filter((char) => char && !"aeioun ".includes(char));
      variants = unique([...doubled, ...variants]);
    }

    const nextOptions = [];
    options.forEach((prefix) => {
      variants.forEach((variant) => {
        nextOptions.push(prefix + variant);
      });
    });
    options = unique(nextOptions).slice(0, maxOptions);
  });

  return options;
}

function buildLessonOptions(lesson) {
  const source = lesson.yomi || lesson.kana;
  const generated = buildOptionsFromTokens(tokenVariants(source));
  const roma = source.endsWith("ん") && lesson.roma.endsWith("n") && !lesson.roma.endsWith("nn")
    ? `${lesson.roma}n`
    : lesson.roma;
  return unique([roma, ...generated].map((option) => option.toLowerCase()));
}

function chooseLesson() {
  if (isEnglishMode()) {
    const text = buildEnglishLine();
    state.lesson = { kana: "英単語連続練習", roma: text };
    state.options = [text];
    state.input = "";
    state.completedText = "";
    state.lastLessonKey = text.slice(0, 40);
    return;
  }

  const pool = lessons[state.mode];
  let next = state.mode === "words"
    ? chooseWordLesson()
    : pool[Math.floor(Math.random() * pool.length)];
  if (pool.length > 1) {
    while (`${next.kana}:${next.roma}` === state.lastLessonKey) {
      next = state.mode === "words"
        ? chooseWordLesson()
        : pool[Math.floor(Math.random() * pool.length)];
    }
  }
  state.lastLessonKey = `${next.kana}:${next.roma}`;
  state.lesson = next;
  state.options = buildLessonOptions(next);
  state.input = "";
  state.completedText = "";
}

function start() {
  state.running = true;
  state.startedAt = performance.now();
  state.correct = 0;
  state.total = 0;
  state.misses = 0;
  state.streak = 0;
  state.missMap.clear();
  chooseLesson();
  render();
}

function reset() {
  state.running = false;
  state.lesson = null;
  state.options = [];
  state.input = "";
  state.completedText = "";
  state.startedAt = 0;
  state.correct = 0;
  state.total = 0;
  state.misses = 0;
  state.streak = 0;
  state.missMap.clear();
  render();
}

function playTone(type) {
  if (!el.soundToggle.checked) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  const audio = new AudioContextClass();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.frequency.value = type === "miss" ? 150 : 560;
  oscillator.type = "square";
  gain.gain.setValueAtTime(type === "miss" ? 0.06 : 0.03, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.04);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + 0.045);
}

function finishLesson() {
  state.streak += 1;
  if (isEnglishMode()) state.completedText += `${state.input} `;
  chooseLesson();
}

function matchingOptions(input = state.input) {
  return state.options.filter((option) => option.startsWith(input));
}

function activeOption() {
  const matches = matchingOptions();
  if (!state.input) return state.options[0] || "";
  return matches.sort((a, b) => a.length - b.length)[0] || state.options[0] || "";
}

function nextPossibleKeys() {
  return unique(matchingOptions()
    .map((option) => option[state.input.length])
    .filter(Boolean));
}

function elapsedMs() {
  return state.startedAt ? performance.now() - state.startedAt : 0;
}

function remainingMs() {
  return Math.max(ENGLISH_TIME_LIMIT_MS - elapsedMs(), 0);
}

function enforceTimeLimit() {
  if (!isEnglishMode() || !state.running) return false;
  if (remainingMs() > 0) return false;
  state.running = false;
  state.completedText += state.input;
  return true;
}

function handleKey(event) {
  if (event.key === "Escape") {
    reset();
    return;
  }

  if (event.key === " " && !state.running) {
    event.preventDefault();
    start();
    return;
  }

  if (!state.running || !state.lesson || event.key.length !== 1) return;
  event.preventDefault();
  if (enforceTimeLimit()) {
    render();
    return;
  }

  const pressed = event.key.toLowerCase();
  const candidate = state.input + pressed;
  const matches = matchingOptions(candidate);
  state.total += 1;

  if (matches.length) {
    state.correct += 1;
    state.input = candidate;
    playTone("ok");
    if (matches.some((option) => option === state.input)) finishLesson();
  } else {
    const expected = nextPossibleKeys()[0] || activeOption()[state.input.length] || "";
    state.misses += 1;
    state.streak = 0;
    if (expected) state.missMap.set(expected, (state.missMap.get(expected) || 0) + 1);
    flashKeys(nextPossibleKeys());
    playTone("miss");

    if (!el.strictToggle.checked && expected) {
      state.input += expected;
      if (state.options.some((option) => option === state.input)) finishLesson();
    }
  }

  render();
}

function flashKeys(keys) {
  keys.forEach((key) => {
    const selectorKey = key === " " ? " " : key.toLowerCase();
    const node = document.querySelector(`.key[data-key="${CSS.escape(selectorKey)}"]`);
    if (!node) return;
    node.classList.remove("missed");
    void node.offsetWidth;
    node.classList.add("missed");
  });
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function renderRoma() {
  const display = activeOption();
  const limit = isEnglishMode()
    ? Math.min(display.length, Math.max(state.input.length + 260, 360))
    : display.length;

  return display.slice(0, limit).split("").map((char, index) => {
    const safe = char === " " ? (isEnglishMode() ? " " : "&nbsp;") : escapeHtml(char);
    if (index < state.input.length) return `<span class="done">${safe}</span>`;
    if (index === state.input.length) return `<span class="current">${safe}</span>`;
    return `<span class="todo">${safe}</span>`;
  }).join("") + (limit < display.length ? `<span class="todo">&nbsp;...</span>` : "");
}

function renderKeyboard() {
  document.querySelectorAll(".key.next").forEach((node) => node.classList.remove("next"));
  if (!state.lesson || !state.running) return;

  nextPossibleKeys().forEach((nextKey) => {
    const node = document.querySelector(`.key[data-key="${CSS.escape(nextKey)}"]`);
    if (node) node.classList.add("next");
  });
}

function renderWeakKeys() {
  const entries = [...state.missMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  if (!entries.length) {
    el.weakList.textContent = "まだありません";
    return;
  }
  el.weakList.innerHTML = entries.map(([key, count]) => (
    `<span class="weak-key">${key === " " ? "space" : escapeHtml(key)} x${count}</span>`
  )).join("");
}

function renderStats() {
  const elapsedMinutes = state.startedAt ? Math.max(elapsedMs() / 60000, 0.01) : 0;
  const speed = elapsedMinutes ? Math.round(state.correct / elapsedMinutes) : 0;
  const accuracy = state.total ? Math.round((state.correct / state.total) * 100) : 100;
  el.speed.textContent = speed;
  el.accuracy.textContent = accuracy;
  el.streak.textContent = state.streak;
  el.misses.textContent = state.misses;
}

function render() {
  enforceTimeLimit();
  document.querySelector(".prompt-board").classList.toggle("is-continuous", isEnglishMode());

  if (isEnglishMode() && state.lesson) {
    el.runState.textContent = state.running ? "練習中" : "終了";
    el.kanaLine.textContent = state.running
      ? `制限時間 ${Math.ceil(remainingMs() / 1000)}秒`
      : "スペースキーで再スタート";
  } else {
    el.runState.textContent = state.running ? "練習中" : "待機中";
    el.kanaLine.textContent = state.lesson ? state.lesson.kana : "スペースキーで開始";
  }

  el.romaLine.innerHTML = state.lesson ? renderRoma() : "";
  el.typedLine.textContent = state.input || (state.running ? "" : "Startボタン、またはスペースキー");
  const total = activeOption().length || 1;
  const progress = isEnglishMode() && state.startedAt
    ? Math.min((elapsedMs() / ENGLISH_TIME_LIMIT_MS) * 100, 100)
    : (state.input.length / total) * 100;
  el.progressBar.style.width = `${Math.round(progress)}%`;
  renderKeyboard();
  renderWeakKeys();
  renderStats();
}

document.querySelectorAll(".mode-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".mode-tab.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    state.mode = button.dataset.mode;
    if (state.running) {
      chooseLesson();
      render();
    }
  });
});

el.startButton.addEventListener("click", start);
el.resetButton.addEventListener("click", reset);
window.addEventListener("keydown", handleKey);

buildKeyboard();
render();
setInterval(() => {
  if (state.running) render();
}, 1000);
