import type { Charactor } from "@/app/entities/charactor/model";

export const kafka: Charactor = {
  id: '2029',
  name: 'カフカ',
  buildsets: [
    {
      id: '2029-1',
      artifacts: {
        artifactIds: ['010', '016'],
        bodyOptions: ['攻撃力%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1001', '1012'],
        sphereOptions: ['雷属性与ダメージ', '攻撃力%'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
