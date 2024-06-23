export type Artifact = {
  name: string,
  type: HeadArtifact | HandArtifact | BodyArtifact | LegArtifact
};

export type HeadArtifact = {
  name: '頭部',
  main: 'HP'
};

export type HandArtifact = {
  name: '手部',
  main: '攻撃力'
};

export type BodyArtifact = {
  name: '胴体',
  main: '会心率' | '会心ダメージ' | 'HP%' | '攻撃力%' | '防御力%' | '治癒量' | '効果命中'
};

export type LegArtifact = {
  name: '脚部',
  main: 'HP%' | '攻撃力%' | '防御力%' | '速度'
};

export type ArtifactUsage = {
  mainOption: string,
  usage: number,
};

export type ArtifactType = {
  id: string,
  name: string
}

export type CharactorArtifactData = {
  charactorName: string,
  part: '頭部'|'手部'|'胴体'|'脚部',
  mainOption: string,
  artifactId: string,
}