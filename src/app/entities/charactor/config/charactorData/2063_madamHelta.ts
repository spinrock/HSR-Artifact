import type { Charactor } from "@/app/entities/charactor/model";

export const madamHelta: Charactor = {
  id: '2063',
  name: 'マダムヘルタ',
  buildsets: [
    {
      id: '2063-1',
      artifacts: {
        artifactIds: ['022'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1009', '1013'],
        sphereOptions: ['氷属性与ダメージ'],
        ropeOptions: ['EP回復効率', '攻撃力%']
      }
    }
  ]
};
