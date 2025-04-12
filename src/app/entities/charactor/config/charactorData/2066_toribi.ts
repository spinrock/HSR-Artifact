import type { Charactor } from "@/app/entities/charactor/model";

export const toribi: Charactor = {
  id: '2066',
  name: 'トリビー',
  buildsets: [
    {
      id: '2066-1',
      artifacts: {
        artifactIds: ['002', '023'],
        bodyOptions: ['会心ダメージ', '会心率'],
        footOptions: ['速度', 'HP%']
      },
      ornaments: {
        ornamentIds: ['1004', '1019'],
        sphereOptions: ['HP%', '量子属性与ダメージ'],
        ropeOptions: ['EP回復効率', 'HP%']
      }
    }
  ]
};
