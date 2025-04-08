import type { Charactor } from "@/app/entities/charactor/model";

export const ruka: Charactor = {
  id: '2030',
  name: 'ルカ',
  buildsets: [
    {
      id: '2030-1',
      artifacts: {
        artifactIds: ['016'],
        bodyOptions: ['攻撃力%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1012'],
        sphereOptions: ['物理属性与ダメージ'],
        ropeOptions: ['撃破特効']
      }
    }
  ]
};
