import type { ArtifactUsage, CharactorArtifactData } from "@/interfaces/Artifact";

const getBodyData = (artifacts: CharactorArtifactData[]):ArtifactUsage[] => {
  const bodyArtifactMainOptions = [
    '会心率',
    '会心ダメージ',
    'HP%',
    '攻撃力%',
    '防御力%',
    '治癒量',
    '効果命中'
  ] 

  const extractData =  artifacts.filter((artifact) => artifact.part == '胴体');

  return bodyArtifactMainOptions.map<ArtifactUsage>((option) => (
    {
      mainOption: option,
      usage: extractData.filter((data) => data.mainOption == option).length,
    }
  ));
}

const getLegData = (artifacts: CharactorArtifactData[]):ArtifactUsage[] => {
  const legArtifactMainOptions = [
    'HP%',
    '攻撃力%',
    '防御力%',
    '速度'
  ] 

  const extractData =  artifacts.filter((artifact) => artifact.part == '脚部');

  return legArtifactMainOptions.map<ArtifactUsage>((option) => (
    {
      mainOption: option,
      usage: extractData.filter((data) => data.mainOption == option).length,
    }
  ));
}

export { getBodyData, getLegData };
