import type { Charactor } from "@/app/entities/charactor/model";

export const setsui: Charactor = {
  id: '2042',
  name: '雪衣',
  buildsets: [
    {
      id: '2042-1',
      artifacts: {
        artifactIds: ['006', '008'],
        bodyOptions: ['会心ダメージ', '会心率'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1003', '1008'],
        sphereOptions: ['攻撃力%', '量子属性与ダメージ'],
        ropeOptions: ['撃破特効']
      }
    }
  ]
};
