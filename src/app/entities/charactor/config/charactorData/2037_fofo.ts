import type { Charactor } from "@/app/entities/charactor/model";

export const fofo: Charactor = {
  id: '2037',
  name: 'フォフォ',
  buildsets: [
    {
      id: '2037-1',
      artifacts: {
        artifactIds: ['003'],
        bodyOptions: ['治癒量'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1010', '1017'],
        sphereOptions: ['HP%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
