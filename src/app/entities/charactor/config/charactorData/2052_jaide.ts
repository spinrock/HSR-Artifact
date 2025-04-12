import type { Charactor } from "@/app/entities/charactor/model";

export const jaide: Charactor = {
  id: '2052',
  name: 'ジェイド',
  buildsets: [
    {
      id: '2052-1',
      artifacts: {
        artifactIds: ['006', '014', '019'],
        bodyOptions: ['会心率'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1014'],
        sphereOptions: ['量子属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
