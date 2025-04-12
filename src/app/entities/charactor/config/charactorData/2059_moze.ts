import type { Charactor } from "@/app/entities/charactor/model";

export const moze: Charactor = {
  id: '2059',
  name: 'モゼ',
  buildsets: [
    {
      id: '2059-1',
      artifacts: {
        artifactIds: ['015', '017'],
        bodyOptions: ['会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1015'],
        sphereOptions: ['雷属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
