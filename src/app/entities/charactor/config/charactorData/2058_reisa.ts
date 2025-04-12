import type { Charactor } from "@/app/entities/charactor/model";

export const reisa: Charactor = {
  id: '2058',
  name: '霊砂',
  buildsets: [
    {
      id: '2058-1',
      artifacts: {
        artifactIds: ['006', '019'],
        bodyOptions: ['治癒量'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1016'],
        sphereOptions: ['攻撃力%'],
        ropeOptions: ['攻撃力%']
      }
    },
    {
      id: '2058-2',
      artifacts: {
        artifactIds: ['003', '018'],
        bodyOptions: ['治癒量'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1001', '1003'],
        sphereOptions: ['攻撃力%'],
        ropeOptions: ['撃破特効']
      }
    }
  ]
};
