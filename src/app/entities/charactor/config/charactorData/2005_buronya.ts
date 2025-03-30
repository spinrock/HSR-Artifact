import type { Charactor } from "@/app/entities/charactor/model";

export const buronya: Charactor = {
  id: '2005',
  name: 'ブローニャ',
  buldsets: [
    {
      id: '2005-1',
      artifacts: {
        artifactIds: ['002', '007/014'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1010'],
        sphereOptions: ['HP%', '防御力%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
