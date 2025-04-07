import type { Charactor } from "@/app/entities/charactor/model";

export const huck: Charactor = {
  id: '2020',
  name: 'フック',
  buildsets: [
    {
      id: '2020-1',
      artifacts: {
        artifactIds: ['017', '022'],
        bodyOptions: ['会心率', '治癒量'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1001', '1012'],
        sphereOptions: ['炎属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
