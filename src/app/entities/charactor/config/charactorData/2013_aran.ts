import type { Charactor } from "@/app/entities/charactor/model";

export const aran: Charactor = {
  id: '2013',
  name: 'アーラン',
  buildsets: [
    {
      id: '2013-1',
      artifacts: {
        artifactIds: ['010', '022'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1001', '1012'],
        sphereOptions: ['雷属性与ダメージ', '攻撃力%'],
        ropeOptions: ['攻撃力%', 'EP回復効率']
      }
    }
  ]
};
