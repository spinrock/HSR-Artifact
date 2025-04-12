import type { Charactor } from "@/app/entities/charactor/model";

export const shujinkoSongo: Charactor = {
  id: '2002',
  name: '主人公(存護)',
  buildsets: [
    {
      id: '2002-1',
      artifacts: {
        artifactIds: ['007','009'],
        bodyOptions: ['防御力%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1007','1010'],
        sphereOptions: ['防御力%'],
        ropeOptions: ['防御力%', 'EP回復効率']
      }
    }
  ]
};
