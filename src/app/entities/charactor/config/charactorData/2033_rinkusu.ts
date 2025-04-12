import type { Charactor } from "@/app/entities/charactor/model";

export const rinkusu: Charactor = {
  id: '2033',
  name: 'リンクス',
  buildsets: [
    {
      id: '2033-1',
      artifacts: {
        artifactIds: ['013', '014'],
        bodyOptions: ['治癒量'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1002'],
        sphereOptions: ['HP%'],
        ropeOptions: ['HP%']
      }
    }
  ]
};
