import { isArtifactId } from "@/app/entities/artifact/model";
import { getCharactorList } from "@/app/entities/charactor/api";
import { Buildset, FootOption, getBuildsetList, type BodyOption } from "@/app/entities/charactor/model";
import { isOrnamentId } from "@/app/entities/ornament/model";
import type { ArtifactUsage } from "@/interfaces/Artifact";

const getBodyData = (artifacts: Buildset[]):ArtifactUsage[] => {
  const bodyArtifactMainOptions: BodyOption[] = [
    '会心率',
    '会心ダメージ',
    'HP%',
    '攻撃力%',
    '防御力%',
    '治癒量',
    '効果命中'
  ] 

  return bodyArtifactMainOptions.map<ArtifactUsage>((option) => (
    {
      mainOption: option,
      usage: artifacts.filter((data) => data.artifacts.bodyOptions.includes(option)).length,
    }
  ));
}

const getFootData = (artifacts: Buildset[]):ArtifactUsage[] => {
  const footArtifactMainOptions : FootOption[]  = [
    'HP%',
    '攻撃力%',
    '防御力%',
    '速度'
  ] 


  return footArtifactMainOptions.map<ArtifactUsage>((option) => (
    {
      mainOption: option,
      usage: artifacts.filter((data) => data.artifacts.footOptions.includes(option)).length,
    }
  ));
}

const getArtifactUsage = (artifactId: string) => {
  const artifactUsage = {
    artifactId: '',
    body: [],
    foot: [],
    sphere: [],
    rope: []
  }
  if (!isArtifactId(artifactId) && !isOrnamentId(artifactId)) {
    console.error("Invalid artifactId or ornamentId");
    return artifactUsage;
  }

  const buildsets = getBuildsetList(getCharactorList());

  if (isArtifactId(artifactId)) {
    const artifactBuildSet =  buildsets.filter((buildset) => buildset.artifacts.artifactIds.includes(artifactId));
    const bodyUsageData = getBodyData(artifactBuildSet);
    const footUsageData = getFootData(artifactBuildSet);
    console.log(footUsageData);
    console.log(bodyUsageData);
    return {
      ...artifactUsage,
      artifactId: artifactId,
      body: bodyUsageData,
      foot: footUsageData
    };
  }

  if (isOrnamentId(artifactId)) {
    // return buildsets.filter((buildset) => buildset.ornaments.ornamentIds.includes(artifactId));
    return artifactUsage;
  }

  return artifactUsage;
}

export { getArtifactUsage };
