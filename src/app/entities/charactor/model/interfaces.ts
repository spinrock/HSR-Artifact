type Buildset = {
  id: string;
  artifacts: {
    artifactids: string[];
    headOption: 'HP';
    handOption: '攻撃力';
    bodyOption: '会心率' | '会心ダメージ' | 'HP%' | '攻撃力%' | '防御力%' | '治癒量' | '効果命中';
    footOption: 'HP%' | '攻撃力%' | '防御力%' | '速度';
  };
  Ornaments: {
    ornamentid: string;
    sphereOption: 'HP%' | '攻撃力%' | '防御力%' | '物理与ダメージ' | '炎属性与ダメージ'| '炎属性与ダメージ' | '氷属性与ダメージ' | '雷属性与ダメージ' | '風属性与ダメージ' | '量子属性与ダメージ' | '虚数属性与ダメージ';
    ropeOption: 'HP%' | '攻撃力%' | '防御力%' | '撃破特効' | 'EP回復効率';
  }
};

type Charactor = {
  id: string;
  name : string;
  type?: string;
  destiny?: string;
  buldsets : Buildset[];
};

export type { Buildset, Charactor };
