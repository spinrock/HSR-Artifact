import type { Charactor } from "@/app/entities/charactor/model";

export const keinaifun: Charactor = {
  id: '2036',
  name: '桂乃芬',
  buildsets: [
    {
      id: '2036-1',
      artifacts: {
        artifactIds: ['016'],
        bodyOptions: ['攻撃力%', '効果命中'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1012'],
        sphereOptions: ['炎属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
