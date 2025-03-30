import type { Charactor } from "@/app/entities/charactor/model";

export const shujinkoKaimetsu: Charactor = {
  id: '2001',
  name: '主人公(壊滅)',
  buldsets: [
    {
      id: '2001-1',
      artifacts: {
        artifactIds: ['005', '022'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1008'],
        sphereOptions: ['物理属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
