import type { Charactor } from "@/app/entities/charactor/model";

export const hanabi: Charactor = {
  id: '2044',
  name: '花火',
  buildsets: [
    {
      id: '2044-1',
      artifacts: {
        artifactIds: ['014'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1004'],
        sphereOptions: ['HP%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
