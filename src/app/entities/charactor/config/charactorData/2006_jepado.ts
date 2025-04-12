import type { Charactor } from "@/app/entities/charactor/model";

export const jepado: Charactor = {
  id: '2006',
  name: 'ジェパード',
  buildsets: [
    {
      id: '2006-1',
      artifacts: {
        artifactIds: ['009'],
        bodyOptions: ['効果命中', '防御力%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1007', '1010'],
        sphereOptions: ['防御力%'],
        ropeOptions: ['防御力%']
      }
    }
  ]
};
