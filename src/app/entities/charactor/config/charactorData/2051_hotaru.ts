import type { Charactor } from "@/app/entities/charactor/model";

export const hotaru: Charactor = {
  id: '2051',
  name: 'ホタル',
  buildsets: [
    {
      id: '2051-1',
      artifacts: {
        artifactIds: ['006', '014', '019'],
        bodyOptions: ['攻撃力%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1003', '1016'],
        sphereOptions: ['攻撃力%'],
        ropeOptions: ['撃破特効']
      }
    }
  ]
};
