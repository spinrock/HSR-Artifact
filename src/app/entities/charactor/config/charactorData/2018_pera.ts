import type { Charactor } from "@/app/entities/charactor/model";

export const pera: Charactor = {
  id: '2018',
  name: 'ペラ',
  buildsets: [
    {
      id: '2018-1',
      artifacts: {
        artifactIds: ['001', '014', '021'],
        bodyOptions: ['攻撃力%', '会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1010', '1011'],
        sphereOptions: ['氷属性与ダメージ', '攻撃力%'],
        ropeOptions: ['攻撃力%', 'EP回復効率']
      }
    }
  ]
};
