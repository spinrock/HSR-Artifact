import type { Buildset, Charactor } from "@/app/entities/charactor/model";

const getBuildsetList = (charactorList: Charactor[]): Buildset[] => 
  charactorList.flatMap((charactor) => charactor.buildsets);
export { getBuildsetList };
