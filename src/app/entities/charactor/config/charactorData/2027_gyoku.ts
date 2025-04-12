import type { Charactor } from "@/app/entities/charactor/model";

export const gyoku: Charactor = {
  id: '2027',
  name: '御空',
  buildsets: [
    {
      id: '2027-1',
      artifacts: {
        artifactIds: ['007'],
        bodyOptions: ['HP%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1010'],
        sphereOptions: ['HP%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
