import type { Charactor } from "@/app/entities/charactor/model";

export const fugen: Charactor = {
  id: '2032',
  name: '符玄',
  buildsets: [
    {
      id: '2032-1',
      artifacts: {
        artifactIds: ['007', '013', '014'],
        bodyOptions: ['HP%', '防御力%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1002', '1010'],
        sphereOptions: ['HP%', '防御力%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
