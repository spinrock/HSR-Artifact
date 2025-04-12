import type { Charactor } from "@/app/entities/charactor/model";

export const shujinkoKioku: Charactor = {
  id: '2065',
  name: '主人公(記憶)',
  buildsets: [
    {
      id: '2065-1',
      artifacts: {
        artifactIds: ['024'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1004', '1017'],
        sphereOptions: ['HP%'],
        ropeOptions: ['EP回復効率']
      }
    },
    {
      id: '2065-2',
      artifacts: {
        artifactIds: ['014', '021', '024'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1010', '1019', '1020'],
        sphereOptions: ['HP%'],
        ropeOptions: ['EP回復効率']
      }
    }
  ]
};
