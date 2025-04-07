import type { Charactor } from "@/app/entities/charactor/model";

export const natasha: Charactor = {
  id: '2016',
  name: 'ナターシャ',
  buildsets: [
    {
      id: '2016-1',
      artifacts: {
        artifactIds: ['003', '014'],
        bodyOptions: ['治癒量', 'HP%'],
        footOptions: ['速度', 'HP%']
      },
      ornaments: {
        ornamentIds: ['1010'],
        sphereOptions: ['HP%'],
        ropeOptions: ['HP%', 'EP回復効率']
      }
    }
  ]
};
