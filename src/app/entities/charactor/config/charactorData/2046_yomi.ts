import type { Charactor } from "@/app/entities/charactor/model";

export const yomi: Charactor = {
  id: '2046',
  name: '黄泉',
  buildsets: [
    {
      id: '2046-1',
      artifacts: {
        artifactIds: ['017'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1013'],
        sphereOptions: ['雷属性与ダメージ', '攻撃力%'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
