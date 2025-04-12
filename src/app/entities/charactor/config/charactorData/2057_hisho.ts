import type { Charactor } from "@/app/entities/charactor/model";

export const hisho: Charactor = {
  id: '2057',
  name: '飛霄',
  buildsets: [
    {
      id: '2057-1',
      artifacts: {
        artifactIds: ['002', '020'],
        bodyOptions: ['会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1015'],
        sphereOptions: ['風属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
