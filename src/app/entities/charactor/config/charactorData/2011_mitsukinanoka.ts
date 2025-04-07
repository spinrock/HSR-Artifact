import type { Charactor } from "@/app/entities/charactor/model";

export const mitsukinanoka: Charactor = {
  id: '2011',
  name: '三月なのか',
  buildsets: [
    {
      id: '2011-1',
      artifacts: {
        artifactIds: ['009'],
        bodyOptions: ['防御力%', '効果命中'],
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
