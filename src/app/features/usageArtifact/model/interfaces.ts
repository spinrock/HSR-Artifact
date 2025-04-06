export type ArtifactUsage = {
  mainOption: string;
  usage: number;
};

export type BodyOption =
  | '会心率'
  | '会心ダメージ'
  | 'HP%'
  | '攻撃力%'
  | '防御力%'
  | '治癒量'
  | '効果命中';

export type FootOption = 'HP%' | '攻撃力%' | '防御力%' | '速度';

// TODO: Define SphereOption and RopeOption based on actual game data
export type SphereOption = string; // Placeholder
export type RopeOption = string;   // Placeholder

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

// TODO: Define SPHERE_OPTIONS and ROPE_OPTIONS based on actual game data
export const SPHERE_OPTIONS: SphereOption[] = []; // Placeholder
export const ROPE_OPTIONS: RopeOption[] = [];   // Placeholder


export type ArtifactUsageResult = {
  artifactId: string;
  body: ArtifactUsage[];
  foot: ArtifactUsage[];
  sphere: ArtifactUsage[];
  rope: ArtifactUsage[];
};
