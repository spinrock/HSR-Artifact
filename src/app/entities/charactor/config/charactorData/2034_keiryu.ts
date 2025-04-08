import type { Charactor } from "@/app/entities/charactor/model";

export const keiryu: Charactor = {
  id: '2034',
  name: '鏡流',
  buildsets: [
    {
      id: '2034-1',
      artifacts: {
        artifactIds: ['001', '022'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1008', '1009'],
        sphereOptions: ['氷属性与ダメージ'],
        ropeOptions: ['攻撃力%', 'EP回復効率']
      }
    }
  ]
};
