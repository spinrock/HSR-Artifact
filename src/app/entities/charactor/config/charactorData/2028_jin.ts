import type { Charactor } from "@/app/entities/charactor/model";

export const jin: Charactor = {
  id: '2028',
  name: '刃',
  buildsets: [
    {
      id: '2028-1',
      artifacts: {
        artifactIds: ['013'],
        bodyOptions: ['会心ダメージ', '会心率'],
        footOptions: ['速度', 'HP%']
      },
      ornaments: {
        ornamentIds: ['1019'],
        sphereOptions: ['風属性与ダメージ'],
        ropeOptions: ['HP%']
      }
    },
    {
      id: '2028-2',
      artifacts: {
        artifactIds: ['023'],
        bodyOptions: ['会心ダメージ', '会心率'],
        footOptions: ['HP%']
      },
      ornaments: {
        ornamentIds: ['1008'],
        sphereOptions: ['風属性与ダメージ'],
        ropeOptions: ['HP%']
      }
    }
  ]
};
