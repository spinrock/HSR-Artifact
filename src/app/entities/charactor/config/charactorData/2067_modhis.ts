import type { Charactor } from "@/app/entities/charactor/model";

export const modhis: Charactor = {
  id: '2067',
  name: 'モーディス',
  buildsets: [
    {
      id: '2067-1',
      artifacts: {
        artifactIds: ['013', '022'],
        bodyOptions: ['会心ダメージ', 'HP%'],
        footOptions: ['速度', 'HP%']
      },
      ornaments: {
        ornamentIds: ['1009', '1019'],
        sphereOptions: ['HP%', '虚数属性与ダメージ'],
        ropeOptions: ['HP%']
      }
    }
  ]
};
