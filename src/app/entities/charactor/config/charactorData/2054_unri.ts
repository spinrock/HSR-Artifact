import type { Charactor } from "@/app/entities/charactor/model";

export const unri: Charactor = {
  id: '2054',
  name: '雲璃',
  buildsets: [
    {
      id: '2054-1',
      artifacts: {
        artifactIds: ['015', '020'],
        bodyOptions: ['会心ダメージ', '会心率'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1008', '1015'],
        sphereOptions: ['攻撃力%', '物理属性与ダメージ'],
        ropeOptions: ['攻撃力%', 'EP回復効率']
      }
    }
  ]
};
