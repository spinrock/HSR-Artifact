import type { Charactor } from "@/app/entities/charactor/model";

export const veruto: Charactor = {
  id: '2004',
  name: 'ヴェルト',
  buldsets: [
    {
      id: '2004-1',
      artifacts: {
        artifactIds: ['012', '017'],
        bodyOptions: ['会心率'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1001'],
        sphereOptions: ['虚数属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
