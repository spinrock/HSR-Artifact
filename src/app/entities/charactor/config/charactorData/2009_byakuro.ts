import type { Charactor } from "@/app/entities/charactor/model";

export const byakuro: Charactor = {
  id: '2009',
  name: '白露',
  buldsets: [
    {
      id: '2009-1',
      artifacts: {
        artifactIds: ['003', '003/014'],
        bodyOptions: ['治癒量', 'HP%'],
        footOptions: ['速度', 'HP%']
      },
      ornaments: {
        ornamentIds: ['1002', '1010'],
        sphereOptions: ['HP%'],
        ropeOptions: ['EP回復効率', 'HP%']
      }
    }
  ]
};
