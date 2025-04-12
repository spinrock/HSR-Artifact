import type { Charactor } from "@/app/entities/charactor/model";

export const seijaku: Charactor = {
  id: '2022',
  name: '青雀',
  buildsets: [
    {
      id: '2022-1',
      artifacts: {
        artifactIds: ['004', '008'],
        bodyOptions: ['会心率'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1009'],
        sphereOptions: ['量子属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
