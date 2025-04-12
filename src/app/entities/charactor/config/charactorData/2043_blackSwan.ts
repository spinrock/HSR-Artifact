import type { Charactor } from "@/app/entities/charactor/model";

export const blackSwan: Charactor = {
  id: '2043',
  name: 'ブラックスワン',
  buildsets: [
    {
      id: '2043-1',
      artifacts: {
        artifactIds: ['004', '016'],
        bodyOptions: ['効果命中'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1005', '1012'],
        sphereOptions: ['攻撃力%', '風属性与ダメージ'],
        ropeOptions: ['EP回復効率', '攻撃力%']
      }
    }
  ]
};
