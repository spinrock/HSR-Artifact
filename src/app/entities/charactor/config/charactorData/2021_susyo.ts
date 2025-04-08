import type { Charactor } from "@/app/entities/charactor/model";

export const susyo: Charactor = {
  id: '2021',
  name: '素裳',
  buildsets: [
    {
      id: '2021-1',
      artifacts: {
        artifactIds: ['005'],
        bodyOptions: ['会心率'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1001'],
        sphereOptions: ['物理属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
