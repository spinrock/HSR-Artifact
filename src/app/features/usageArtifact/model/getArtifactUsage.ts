import { isArtifactId } from '@/app/entities/artifact/model';
import type { Buildset, BodyOption, FootOption, SphereOption, RopeOption } from '@/app/entities/charactor/model';
import { isOrnamentId } from '@/app/entities/ornament/model';
import type {
  ArtifactUsage,
  ArtifactUsageResult,
} from './interfaces';
import {
  BODY_OPTIONS,
  FOOT_OPTIONS,
  ROPE_OPTIONS,
  SPHERE_OPTIONS,
} from './interfaces';

/**
 * ビルドセットに基づいて、指定されたオプションリストの使用統計を計算します。
 * @param buildsets - キャラクタービルドセットのリスト。
 * @param optionsList - 遺物/オーナメントの部位のメインオプションのリスト。
 * @param getOptionsFromBuildset - 単一のビルドセットから関連するオプション配列を抽出する関数。
 * @returns ArtifactUsage オブジェクトの配列。
 */
const calculateUsageData = <T extends string>(
  buildsets: Buildset[],
  optionsList: T[],
  getOptionsFromBuildset: (buildset: Buildset) => T[]
): ArtifactUsage[] => {
  return optionsList.map<ArtifactUsage>((option) => ({
    mainOption: option,
    usage: buildsets.filter((buildset) =>
      getOptionsFromBuildset(buildset).includes(option)
    ).length,
  }));
};

/**
 * 特定の遺物またはオーナメントセットの使用統計を計算します。
 * @param artifactOrOrnamentId - 遺物またはオーナメントセットのID。
 * @param allBuildsets - すべてのキャラクタービルドセットのリスト。
 * @returns 各部位の使用データを含む ArtifactUsageResult オブジェクト。
 * @throws 提供されたIDが有効な遺物またはオーナメントIDでない場合にエラーをスローします。
 */
const getArtifactUsage = (
  artifactOrOrnamentId: string,
  allBuildsets: Buildset[]
): ArtifactUsageResult => {
  const initialResult: ArtifactUsageResult = {
    artifactId: artifactOrOrnamentId,
    body: [],
    foot: [],
    sphere: [],
    rope: [],
  };

  if (!isArtifactId(artifactOrOrnamentId) && !isOrnamentId(artifactOrOrnamentId)) {
    throw new Error(`Invalid artifactId or ornamentId: ${artifactOrOrnamentId}`);
  }

  if (isArtifactId(artifactOrOrnamentId)) {
    const relevantBuildsets = allBuildsets.filter((buildset) =>
      buildset.artifacts.artifactIds.includes(artifactOrOrnamentId)
    );

    const bodyUsageData = calculateUsageData<BodyOption>(
      relevantBuildsets,
      BODY_OPTIONS,
      (buildset) => buildset.artifacts.bodyOptions
    );
    const footUsageData = calculateUsageData<FootOption>(
      relevantBuildsets,
      FOOT_OPTIONS,
      (buildset) => buildset.artifacts.footOptions
    );

    // オーブと縄は遺物には適用されません
    return {
      ...initialResult,
      body: bodyUsageData,
      foot: footUsageData,
    };
  }

  if (isOrnamentId(artifactOrOrnamentId)) {
    const relevantBuildsets = allBuildsets.filter((buildset) =>
      buildset.ornaments.ornamentIds.includes(artifactOrOrnamentId)
    );

    const sphereUsageData = calculateUsageData<SphereOption>(
      relevantBuildsets,
      SPHERE_OPTIONS,
      (buildset) => buildset.ornaments.sphereOptions
    );
    const ropeUsageData = calculateUsageData<RopeOption>(
      relevantBuildsets,
      ROPE_OPTIONS,
      (buildset) => buildset.ornaments.ropeOptions
    );

    // 胴と脚はオーナメントには適用されません
    return {
      ...initialResult,
      sphere: sphereUsageData,
      rope: ropeUsageData,
    };
  }

  return initialResult;
};

export { getArtifactUsage };
