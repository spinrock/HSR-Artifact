import type { Charactor } from "@/app/entities/charactor/model";

export const himeko: Charactor = {
  id: '2003',
  name: '姫子',
  buildsets: [
    {
      id: '2003-1',
      artifacts: {
        artifactIds: ['015', '011/015'],
        bodyOptions: ['会心率'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1013', '1014'],
        sphereOptions: ['炎属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
