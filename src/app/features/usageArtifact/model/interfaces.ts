import type { BodyOption, FootOption, SphereOption, RopeOption } from "@/app/entities/charactor/model";

export type ArtifactUsage = {
  mainOption: string;
  usage: number;
};

export const BODY_OPTIONS: BodyOption[] = [
  '会心率',
  '会心ダメージ',
  'HP%',
  '攻撃力%',
  '防御力%',
  '治癒量',
  '効果命中',
];

export const FOOT_OPTIONS: FootOption[] = ['HP%', '攻撃力%', '防御力%', '速度'];

export const SPHERE_OPTIONS: SphereOption[] = [
  'HP%',
  '攻撃力%',
  '防御力%',
  '物理属性与ダメージ',
  '炎属性与ダメージ',
  '氷属性与ダメージ',
  '雷属性与ダメージ',
  '風属性与ダメージ',
  '量子属性与ダメージ',
  '虚数属性与ダメージ',
];
export const ROPE_OPTIONS: RopeOption[] = [
  'HP%',
  '攻撃力%',
  '防御力%',
  '撃破特効',
  'EP回復効率',
];


export type ArtifactUsageResult = {
  artifactId: string;
  body: ArtifactUsage[];
  foot: ArtifactUsage[];
  sphere: ArtifactUsage[];
  rope: ArtifactUsage[];
};
