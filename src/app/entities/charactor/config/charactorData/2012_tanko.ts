import type { Charactor } from "@/app/entities/charactor/model";

export const tanko: Charactor = {
  id: '2012',
  name: '丹恒',
  buildsets: [
    {
      id: '2012-1',
      artifacts: {
        artifactIds: ['002', '022'],
        bodyOptions: ['会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1008'],
        sphereOptions: ['風属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
