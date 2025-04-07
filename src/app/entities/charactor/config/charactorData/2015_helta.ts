import type { Charactor } from "@/app/entities/charactor/model";

export const helta: Charactor = {
  id: '2015',
  name: 'ヘルタ',
  buildsets: [
    {
      id: '2015-1',
      artifacts: {
        artifactIds: ['001', '015'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1014'],
        sphereOptions: ['氷属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
