import type { Charactor } from "@/app/entities/charactor/model";

export const keigen: Charactor = {
  id: '2024',
  name: '景元',
  buildsets: [
    {
      id: '2024-1',
      artifacts: {
        artifactIds: ['010', '015'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1008', '1014'],
        sphereOptions: ['雷属性与ダメージ', '攻撃力%'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
