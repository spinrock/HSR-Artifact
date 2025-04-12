import type { Charactor } from "@/app/entities/charactor/model";

export const kana: Charactor = {
  id: '2039',
  name: '寒鴉',
  buildsets: [
    {
      id: '2039-1',
      artifacts: {
        artifactIds: ['014', '021'],
        bodyOptions: ['HP%', '攻撃力%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1004', '1010'],
        sphereOptions: ['HP%', '攻撃力%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
