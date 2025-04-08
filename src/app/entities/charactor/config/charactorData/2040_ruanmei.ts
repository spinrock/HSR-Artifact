import type { Charactor } from "@/app/entities/charactor/model";

export const ruanmei: Charactor = {
  id: '2040',
  name: 'ルアンメェイ',
  buildsets: [
    {
      id: '2040-1',
      artifacts: {
        artifactIds: ['014', '018'],
        bodyOptions: ['HP%', '防御力%'],
        footOptions: ['HP%', '防御力%']
      },
      ornaments: {
        ornamentIds: ['1003', '1004'],
        sphereOptions: ['HP%', '防御力%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
