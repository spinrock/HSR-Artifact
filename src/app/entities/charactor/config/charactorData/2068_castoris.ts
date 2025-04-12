import type { Charactor } from "@/app/entities/charactor/model";

export const castoris: Charactor = {
  id: '2068',
  name: 'キャストリス',
  buildsets: [
    {
      id: '2068-1',
      artifacts: {
        artifactIds: ['023', '024'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['HP%']
      },
      ornaments: {
        ornamentIds: ['1018', '1019'],
        sphereOptions: ['HP%', '量子属性与ダメージ'],
        ropeOptions: ['HP%']
      }
    }
  ]
};
