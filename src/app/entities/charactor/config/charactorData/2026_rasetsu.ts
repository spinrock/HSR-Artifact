import type { Charactor } from "@/app/entities/charactor/model";

export const rasetsu: Charactor = {
  id: '2026',
  name: '羅刹',
  buildsets: [
    {
      id: '2026-1',
      artifacts: {
        artifactIds: ['003', '014'],
        bodyOptions: ['治癒量'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1010'],
        sphereOptions: ['攻撃力%'],
        ropeOptions: ['EP回復効率', '攻撃力%']
      }
    }
  ]
};
