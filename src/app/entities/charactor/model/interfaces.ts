type BodyOption = '会心率' | '会心ダメージ' | 'HP%' | '攻撃力%' | '防御力%' | '治癒量' | '効果命中';
type FootOption = 'HP%' | '攻撃力%' | '防御力%' | '速度';
type SphereOption = 'HP%' | '攻撃力%' | '防御力%' | '物理属性与ダメージ' | '炎属性与ダメージ' | '氷属性与ダメージ' | '雷属性与ダメージ' | '風属性与ダメージ' | '量子属性与ダメージ' | '虚数属性与ダメージ';
type RopeOption = 'HP%' | '攻撃力%' | '防御力%' | '撃破特効' | 'EP回復効率';

type Buildset = {
  id: string;
  artifacts: {
    artifactIds: string[];
    // NOTE: 頭部と腕部のオプションは固定なのでこちらで明示しない
    // headOption: 'HP';
    // handOption: '攻撃力';
    bodyOptions: BodyOption[];
    footOptions: FootOption[];
  };
  ornaments: {
    ornamentIds: string[];
    sphereOptions: SphereOption[];
    ropeOptions: RopeOption[];
  }
};

type Charactor = {
  id: string;
  name : string;
  type?: string;
  destiny?: string;
  buldsets : Buildset[];
};

export type { Buildset, Charactor, BodyOption, FootOption };
