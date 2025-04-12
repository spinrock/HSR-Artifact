import type { Charactor } from "@/app/entities/charactor/model";

export const tankoIngetsu: Charactor = {
  id: '2031',
  name: '丹恒・飲月',
  buildsets: [
    {
      id: '2031-1',
      artifacts: {
        artifactIds: ['004', '012'],
        bodyOptions: ['会心率', '会心ダメージ'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1009'],
        sphereOptions: ['虚数属性与ダメージ', '攻撃力%'],
        ropeOptions: ['攻撃力%', 'EP回復効率']
      }
    }
  ]
};
