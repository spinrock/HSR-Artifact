import { isArtifactId } from '@/app/entities/artifact/model';
import type { Buildset } from '@/app/entities/charactor/model';
import { isOrnamentId } from '@/app/entities/ornament/model';
import type {
  ArtifactUsage,
  ArtifactUsageResult,
  BodyOption,
  FootOption,
  RopeOption, // Placeholder
  SphereOption, // Placeholder
} from './interfaces';
import {
  BODY_OPTIONS,
  FOOT_OPTIONS,
  ROPE_OPTIONS, // Placeholder
  SPHERE_OPTIONS, // Placeholder
} from './interfaces';

/**
 * Calculates the usage statistics for a given list of options based on buildsets.
 * @param buildsets - The list of character buildsets.
 * @param optionsList - The list of possible main options for the artifact/ornament piece.
 * @param getOptionsFromBuildset - A function that extracts the relevant options array from a single buildset.
 * @returns An array of ArtifactUsage objects.
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
 * Calculates the usage statistics for a specific artifact or ornament set.
 * @param artifactOrOrnamentId - The ID of the artifact or ornament set.
 * @param allBuildsets - A list of all character buildsets.
 * @returns An ArtifactUsageResult object containing usage data for each piece.
 * @throws Error if the provided ID is not a valid artifact or ornament ID.
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

    // Sphere and Rope are not applicable to regular artifacts
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

    // TODO: Replace placeholders once SphereOption/RopeOption and their extraction logic are defined
    const sphereUsageData = calculateUsageData<SphereOption>(
      relevantBuildsets,
      SPHERE_OPTIONS, // Placeholder options
      (buildset) => buildset.ornaments.sphereOptions // Placeholder accessor
    );
    const ropeUsageData = calculateUsageData<RopeOption>(
      relevantBuildsets,
      ROPE_OPTIONS, // Placeholder options
      (buildset) => buildset.ornaments.ropeOptions // Placeholder accessor
    );

    // Body and Foot are not applicable to ornaments
    return {
      ...initialResult,
      sphere: sphereUsageData,
      rope: ropeUsageData,
    };
  }

  // This line should theoretically be unreachable due to the initial check,
  // but included for exhaustive type checking and safety.
  return initialResult;
};

export { getArtifactUsage };
