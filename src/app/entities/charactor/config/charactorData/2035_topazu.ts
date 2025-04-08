import type { Charactor } from "@/app/entities/charactor/model";

export const topazu: Charactor = {
  id: '2035',
  name: 'トパーズ&カブ',
  buildsets: [
    {
      id: '2035-1',
      artifacts: {
        artifactIds: ['015', '016'],
        bodyOptions: ['会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1008', '1015'],
        sphereOptions: ['炎属性与ダメージ'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
