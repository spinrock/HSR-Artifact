import type { Charactor } from "@/app/entities/charactor/model";

export const sanpo: Charactor = {
  id: '2019',
  name: 'サンポ',
  buildsets: [
    {
      id: '2019-1',
      artifacts: {
        artifactIds: ['002', '016'],
        bodyOptions: ['攻撃力%', '効果命中'],
        footOptions: ['速度', '攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1001', '1012'],
        sphereOptions: ['風属性与ダメージ', '攻撃力%'],
        ropeOptions: ['攻撃力%', 'EP回復効率']
      }
    }
  ]
};
