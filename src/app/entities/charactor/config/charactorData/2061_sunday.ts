import type { Charactor } from "@/app/entities/charactor/model";

export const sunday: Charactor = {
  id: '2061',
  name: 'サンデー',
  buildsets: [
    {
      id: '2061-1',
      artifacts: {
        artifactIds: ['014', '021'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1017'],
        sphereOptions: ['HP%', '防御力%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
