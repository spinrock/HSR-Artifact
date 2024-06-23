import type { ArtifactType, ArtifactUsage, CharactorArtifactData } from "@/interfaces/Artifact"

export const artifactTypeList: ArtifactType[] = [
  {
    id: '001',
    name: '雪の密林の狩人'
  },
  {
    id: '002',
    name: '昼夜の狭間を翔ける鷹'
  },
  {
    id: '003',
    name: '流雲無痕の過客'
  },
  {
    id: '004',
    name: '草の穂ガンマン'
  },
  {
    id: '005',
    name: '成り上がりチャンピオン'
  },
  {
    id: '006',
    name: '流星の跡を追う怪盗'
  },
  {
    id: '007',
    name: '吹雪と対峙する兵士'
  },
  {
    id: '008',
    name: '星の如く輝く天才'
  },
  {
    id: '009',
    name: '純庭協会の聖騎士'
  },
  {
    id: '010',
    name: '雷鳴轟くバンド'
  },
  {
    id: '011',
    name: '溶岩で鍛造する火匠'
  },
  {
    id: '012',
    name: '荒地で盗みを働く廃土客'
  },
  {
    id: '013',
    name: '宝命長存の蒔者'
  },
  {
    id: '014',
    name: '仮想空間を漫遊するメッセンジャー'
  },
  {
    id: '015',
    name: '灰燼を燃やし尽くす大公'
  },
  {
    id: '016',
    name: '深い牢獄の囚人'
  },
  {
    id: '017',
    name: '死水に潜る先駆者'
  },
  {
    id: '018',
    name: '夢を弄ぶ時計屋'
  },
  {
    id: '019',
    name: '蝗害を一掃せし鉄騎'
  },
  {
    id: '020',
    name: '風雲を薙ぎ払う勇烈'
  },
]

export const masterData: CharactorArtifactData[] = [
  {
    charactorName: 'ホタル',
    part: '胴体',
    mainOption: '攻撃力%',
    artifactId: '019'
  },
  {
    charactorName: 'ホタル',
    part: '脚部',
    mainOption: '速度',
    artifactId: '019'
  },
  {
    charactorName: 'ギャラガー',
    part: '胴体',
    mainOption: '治癒量',
    artifactId: '019'
  },
  {
    charactorName: 'ギャラガー',
    part: '脚部',
    mainOption: '速度',
    artifactId: '019'
  },
  {
    charactorName: '開拓者(調和)',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '018'
  },
  {
    charactorName: '開拓者(調和)',
    part: '脚部',
    mainOption: '速度',
    artifactId: '018'
  },
  {
    charactorName: 'ルァン・メェイ',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '018'
  },
  {
    charactorName: 'ルァン・メェイ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '018'
  },
  {
    charactorName: '開拓者(壊滅)',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '005'
  },
  {
    charactorName: '開拓者(壊滅)',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '005'
  },
  {
    charactorName: '開拓者(壊滅)',
    part: '脚部',
    mainOption: '速度',
    artifactId: '005'
  },
  {
    charactorName: 'ロビン',
    part: '胴体',
    mainOption: '攻撃力%',
    artifactId: '004'
  },
  {
    charactorName: 'ロビン',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '004'
  },
  {
    charactorName: 'ロビン',
    part: '胴体',
    mainOption: '攻撃力%',
    artifactId: '016'
  }, 
  {
    charactorName: 'ロビン',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '016'
  },
  {
    charactorName: 'ロビン',
    part: '胴体',
    mainOption: '攻撃力%',
    artifactId: '020'
  }, 
  {
    charactorName: 'ロビン',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '020'
  },
  {
    charactorName: '開拓者(存護)',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '009'
  },
  {
    charactorName: '開拓者(存護)',
    part: '脚部',
    mainOption: '速度',
    artifactId: '009'
  },
  {
    charactorName: '開拓者(存護)',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '007'
  },
  {
    charactorName: '開拓者(存護)',
    part: '脚部',
    mainOption: '速度',
    artifactId: '007'
  },
  {
    charactorName: 'トパーズ',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '015'
  },
  {
    charactorName: 'トパーズ',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '015'
  },
  {
    charactorName: 'トパーズ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '015'
  },
  {
    charactorName: 'トパーズ',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '015'
  },
  {
    charactorName: 'トパーズ',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '017'
  },
  {
    charactorName: 'トパーズ',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '017'
  },
  {
    charactorName: 'トパーズ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '017'
  },
  {
    charactorName: 'トパーズ',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '017'
  },
  {
    charactorName: '姫子',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '015'
  },
  {
    charactorName: '姫子',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '015'
  },
  {
    charactorName: '姫子',
    part: '脚部',
    mainOption: '速度',
    artifactId: '015'
  },
  {
    charactorName: '姫子',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '015'
  },
  {
    charactorName: '姫子',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '011'
  },
  {
    charactorName: '姫子',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '011'
  },
  {
    charactorName: '姫子',
    part: '脚部',
    mainOption: '速度',
    artifactId: '011'
  },
  {
    charactorName: '姫子',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '011'
  },
  {
    charactorName: '鏡流',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '001'
  },
  {
    charactorName: '鏡流',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '001'
  },
  {
    charactorName: '鏡流',
    part: '脚部',
    mainOption: '速度',
    artifactId: '001'
  },
  {
    charactorName: '鏡流',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '001'
  },
  {
    charactorName: '鏡流',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '004'
  },
  {
    charactorName: '鏡流',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '004'
  },
  {
    charactorName: '鏡流',
    part: '脚部',
    mainOption: '速度',
    artifactId: '004'
  },
  {
    charactorName: '鏡流',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '004'
  },
  {
    charactorName: 'ジェパード',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '009'
  },
  {
    charactorName: 'ジェパード',
    part: '脚部',
    mainOption: '速度',
    artifactId: '009'
  },
  {
    charactorName: 'ジェパード',
    part: '脚部',
    mainOption: '防御力%',
    artifactId: '009'
  },
  {
    charactorName: 'ジェパード',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '014'
  },
  {
    charactorName: 'ジェパード',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },
  {
    charactorName: 'ジェパード',
    part: '脚部',
    mainOption: '防御力%',
    artifactId: '014'
  },
  {
    charactorName: '黄泉',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '017'
  },
  {
    charactorName: '黄泉',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '017'
  },
  {
    charactorName: '黄泉',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '017'
  },
  {
    charactorName: '白露',
    part: '胴体',
    mainOption: '治癒量',
    artifactId: '003'
  },
  {
    charactorName: '白露',
    part: '脚部',
    mainOption: '速度',
    artifactId: '003'
  },
  {
    charactorName: '白露',
    part: '胴体',
    mainOption: '治癒量',
    artifactId: '013'
  },
  {
    charactorName: '白露',
    part: '脚部',
    mainOption: '速度',
    artifactId: '013'
  },
  {
    charactorName: '白露',
    part: '胴体',
    mainOption: '治癒量',
    artifactId: '014'
  },
  {
    charactorName: '白露',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },
  {
    charactorName: 'カフカ',
    part: '胴体',
    mainOption: '攻撃力%',
    artifactId: '016'
  },
  {
    charactorName: 'カフカ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '016'
  },
  {
    charactorName: 'ブラックスワン',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '016'
  },
  {
    charactorName: 'ブラックスワン',
    part: '脚部',
    mainOption: '速度',
    artifactId: '016'
  },
  {
    charactorName: 'ブラックスワン',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '016'
  },
  {
    charactorName: 'フォフォ',
    part: '胴体',
    mainOption: '治癒量',
    artifactId: '013'
  },
  {
    charactorName: 'フォフォ',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '013'
  },
  {
    charactorName: 'フォフォ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '013'
  },
  {
    charactorName: 'フォフォ',
    part: '胴体',
    mainOption: '治癒量',
    artifactId: '014'
  },
  {
    charactorName: 'フォフォ',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '014'
  },
  {
    charactorName: 'フォフォ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },  {
    charactorName: 'フォフォ',
    part: '胴体',
    mainOption: '治癒量',
    artifactId: '002'
  },
  {
    charactorName: 'フォフォ',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '002'
  },
  {
    charactorName: 'フォフォ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '002'
  },
  {
    charactorName: 'ブローニャ',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '014'
  },
  {
    charactorName: 'ブローニャ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },
  {
    charactorName: 'ブローニャ',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '002'
  },
  {
    charactorName: 'ブローニャ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '002'
  },
  {
    charactorName: '花火',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '014'
  },
  {
    charactorName: '花火',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },
  {
    charactorName: '花火',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '002'
  },
  {
    charactorName: '花火',
    part: '脚部',
    mainOption: '速度',
    artifactId: '002'
  },
  {
    charactorName: '花火',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '013'
  },
  {
    charactorName: '花火',
    part: '脚部',
    mainOption: '速度',
    artifactId: '013'
  },
  {
    charactorName: '符玄',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '013'
  },
  {
    charactorName: '符玄',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '013'
  },
  {
    charactorName: '符玄',
    part: '脚部',
    mainOption: '速度',
    artifactId: '013'
  },
  {
    charactorName: '符玄',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '014'
  },
  {
    charactorName: '符玄',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '014'
  },
  {
    charactorName: '符玄',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },
  {
    charactorName: '符玄',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '007'
  },
  {
    charactorName: '符玄',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '007'
  },
  {
    charactorName: '符玄',
    part: '脚部',
    mainOption: '速度',
    artifactId: '007'
  },
  {
    charactorName: '銀狼',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '002'
  },
  {
    charactorName: '銀狼',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '002'
  },
  {
    charactorName: '銀狼',
    part: '脚部',
    mainOption: '速度',
    artifactId: '002'
  },
  {
    charactorName: '銀狼',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '013'
  },
  {
    charactorName: '銀狼',
    part: '脚部',
    mainOption: '速度',
    artifactId: '013'
  },
  {
    charactorName: '銀狼',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '014'
  },
  {
    charactorName: '銀狼',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },
  {
    charactorName: 'レイシオ',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '015'
  },
  {
    charactorName: 'レイシオ',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '015'
  },
  {
    charactorName: 'レイシオ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '015'
  },
  {
    charactorName: 'レイシオ',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '015'
  },
  {
    charactorName: 'レイシオ',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '017'
  },
  {
    charactorName: 'レイシオ',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '017'
  },
  {
    charactorName: 'レイシオ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '017'
  },
  {
    charactorName: 'レイシオ',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '017'
  },
  {
    charactorName: 'アベンチュリン',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '017'
  },
  {
    charactorName: 'アベンチュリン',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '017'
  },
  {
    charactorName: 'アベンチュリン',
    part: '脚部',
    mainOption: '速度',
    artifactId: '017'
  },
  {
    charactorName: 'アベンチュリン',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '009'
  },
  {
    charactorName: 'アベンチュリン',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '009'
  },
  {
    charactorName: 'アベンチュリン',
    part: '脚部',
    mainOption: '速度',
    artifactId: '009'
  },
  {
    charactorName: 'アベンチュリン',
    part: '胴体',
    mainOption: '防御力%',
    artifactId: '015'
  },
  {
    charactorName: 'アベンチュリン',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '015'
  },
  {
    charactorName: 'アベンチュリン',
    part: '脚部',
    mainOption: '速度',
    artifactId: '015'
  },
  {
    charactorName: 'ペラ',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '013'
  },
  {
    charactorName: 'ペラ',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '013'
  },
  {
    charactorName: 'ペラ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '013'
  },
  {
    charactorName: 'ペラ',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '014'
  },
  {
    charactorName: 'ペラ',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '014'
  },
  {
    charactorName: 'ペラ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },
  {
    charactorName: 'ペラ',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '002'
  },
  {
    charactorName: 'ペラ',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '002'
  },
  {
    charactorName: 'ペラ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '002'
  },
  {
    charactorName: 'ペラ',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '007'
  },
  {
    charactorName: 'ペラ',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '007'
  },
  {
    charactorName: 'ペラ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '007'
  },
  {
    charactorName: 'ヘルタ',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '001'
  },
  {
    charactorName: 'ヘルタ',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '001'
  },
  {
    charactorName: 'ヘルタ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '001'
  },
  {
    charactorName: 'ヘルタ',
    part: '胴体',
    mainOption: '会心率',
    artifactId: '015'
  },
  {
    charactorName: 'ヘルタ',
    part: '胴体',
    mainOption: '会心ダメージ',
    artifactId: '015'
  },
  {
    charactorName: 'ヘルタ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '015'
  },
  {
    charactorName: '停雲',
    part: '胴体',
    mainOption: '攻撃力%',
    artifactId: '014'
  },
  {
    charactorName: '停雲',
    part: '胴体',
    mainOption: 'HP%',
    artifactId: '014'
  },
  {
    charactorName: '停雲',
    part: '脚部',
    mainOption: '速度',
    artifactId: '014'
  },
  {
    charactorName: 'サンポ',
    part: '胴体',
    mainOption: '攻撃力%',
    artifactId: '016'
  },
  {
    charactorName: 'サンポ',
    part: '胴体',
    mainOption: '効果命中',
    artifactId: '016'
  },
  {
    charactorName: 'サンポ',
    part: '脚部',
    mainOption: '速度',
    artifactId: '016'
  },
  {
    charactorName: 'サンポ',
    part: '脚部',
    mainOption: '攻撃力%',
    artifactId: '016'
  },
];
