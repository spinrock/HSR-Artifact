import type { Charactor } from "@/app/entities/charactor/model";

export const arujenthi: Charactor = {
  id: '2038',
  name: 'アルジェンティ',
  buildsets: [
    {
      id: '2038-1',
      artifacts: {
        artifactIds: ['002', '005'],
        bodyOptions: ['会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1008'],
        sphereOptions: ['物理属性与ダメージ'],
        ropeOptions: ['EP回復効率', '攻撃力%']
      }
    }
  ]
};
