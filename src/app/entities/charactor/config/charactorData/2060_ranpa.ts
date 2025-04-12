import type { Charactor } from "@/app/entities/charactor/model";

export const ranpa: Charactor = {
  id: '2060',
  name: '乱破',
  buildsets: [
    {
      id: '2060-1',
      artifacts: {
        artifactIds: ['019'],
        bodyOptions: ['攻撃力%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1003'],
        sphereOptions: ['攻撃力%'],
        ropeOptions: ['撃破特効']
      }
    }
  ]
};
