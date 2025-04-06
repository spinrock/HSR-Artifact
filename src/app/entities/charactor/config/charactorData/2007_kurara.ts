import type { Charactor } from "@/app/entities/charactor/model";

export const kurara: Charactor = {
  id: '2007',
  name: 'クラーラ',
  buildsets: [
    {
      id: '2007-1',
      artifacts: {
        artifactIds: ['005', '013'],
        bodyOptions: ['会心率'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1008'],
        sphereOptions: ['物理属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
