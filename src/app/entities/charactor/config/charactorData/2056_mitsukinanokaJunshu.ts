import type { Charactor } from "@/app/entities/charactor/model";

export const mitsukinanokaJunshu: Charactor = {
  id: '2056',
  name: '三月なのか(巡狩)',
  buildsets: [
    {
      id: '2056-1',
      artifacts: {
        artifactIds: ['004', '012'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1009'],
        sphereOptions: ['虚数属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
