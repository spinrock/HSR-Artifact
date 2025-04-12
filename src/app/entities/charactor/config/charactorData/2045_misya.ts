import type { Charactor } from "@/app/entities/charactor/model";

export const misya: Charactor = {
  id: '2045',
  name: 'ミーシャ',
  buildsets: [
    {
      id: '2045-1',
      artifacts: {
        artifactIds: ['006', '019'],
        bodyOptions: ['会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1003'],
        sphereOptions: ['氷属性与ダメージ'],
        ropeOptions: ['撃破特効']
      }
    }
  ]
};
