import type { Charactor } from "@/app/entities/charactor/model";

export const ginro: Charactor = {
  id: '2025',
  name: '銀狼',
  buildsets: [
    {
      id: '2025-1',
      artifacts: {
        artifactIds: ['002'],
        bodyOptions: ['会心率', '効果命中'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1004'],
        sphereOptions: ['量子属性与ダメージ', 'HP%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
