import type { Charactor } from "@/app/entities/charactor/model";

export const kibonoSasuraibito: Charactor = {
  id: '2062',
  name: '帰忘の流離人',
  buildsets: [
    {
      id: '2062-1',
      artifacts: {
        artifactIds: ['006', '019'],
        bodyOptions: ['効果命中'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1003', '1016'],
        sphereOptions: ['HP%', '防御力%'],
        ropeOptions: ['EP回復効率', '撃破特効']
      }
    }
  ]
};
