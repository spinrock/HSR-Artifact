import type { Charactor } from "@/app/entities/charactor/model";

export const shujinkoChowa: Charactor = {
  id: '2053',
  name: '主人公(調和)',
  buildsets: [
    {
      id: '2053-1',
      artifacts: {
        artifactIds: ['018'],
        bodyOptions: ['HP%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1003', '1016'],
        sphereOptions: ['HP%'],
        ropeOptions: ['撃破特効']
      }
    }
  ]
};
