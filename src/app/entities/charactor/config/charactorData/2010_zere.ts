import type { Charactor } from "@/app/entities/charactor/model";

export const zere: Charactor = {
  id: '2010',
  name: 'ゼーレ',
  buildsets: [
    {
      id: '2010-1',
      artifacts: {
        artifactIds: ['008'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1009', '1012'],
        sphereOptions: ['量子属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
