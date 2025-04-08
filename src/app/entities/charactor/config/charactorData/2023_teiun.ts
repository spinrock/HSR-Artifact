import type { Charactor } from "@/app/entities/charactor/model";

export const teiun: Charactor = {
  id: '2023',
  name: '停雲',
  buildsets: [
    {
      id: '2023-1',
      artifacts: {
        artifactIds: ['014'],
        bodyOptions: ['攻撃力%', 'HP%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1004'],
        sphereOptions: ['攻撃力%', '防御力%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
