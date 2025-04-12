import type { Charactor } from "@/app/entities/charactor/model";

export const agraia: Charactor = {
  id: '2064',
  name: 'アグライア',
  buildsets: [
    {
      id: '2064-1',
      artifacts: {
        artifactIds: ['004', '024'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1009', '1018'],
        sphereOptions: ['雷属性与ダメージ'],
        ropeOptions: ['EP回復効率', '攻撃力%']
      }
    }
  ]
};
