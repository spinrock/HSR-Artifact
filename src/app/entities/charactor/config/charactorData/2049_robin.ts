import type { Charactor } from "@/app/entities/charactor/model";

export const robin: Charactor = {
  id: '2049',
  name: 'ロビン',
  buildsets: [
    {
      id: '2049-1',
      artifacts: {
        artifactIds: ['004', '014', '016'],
        bodyOptions: ['攻撃力%'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1004'],
        sphereOptions: ['攻撃力%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
