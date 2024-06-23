import { masterData } from "@/assets/data";
import type { CharactorArtifactData } from "@/interfaces/Artifact";

const getArtifact = (artifactId: string):CharactorArtifactData[] => {
  
  return masterData.filter((data) => data.artifactId === artifactId);
}

export { getArtifact }