import type { Charactor } from "@/app/entities/charactor/model";

export const sebal: Charactor = {
  id: '2017',
  name: 'セーバル',
  buildsets: [
    {
      id: '2017-1',
      artifacts: {
        artifactIds: ['010', '022'],
        bodyOptions: ['会心ダメージ', '会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1008', '1009'],
        sphereOptions: ['雷属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
