import type { Charactor } from "@/app/entities/charactor/model";

export const boothill: Charactor = {
  id: '2050',
  name: 'ブートヒル',
  buildsets: [
    {
      id: '2050-1',
      artifacts: {
        artifactIds: ['006', '019'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1003'],
        sphereOptions: ['攻撃力%', '物理属性与ダメージ'],
        ropeOptions: ['EP回復効率', '撃破特効']
      }
    }
  ]
};
