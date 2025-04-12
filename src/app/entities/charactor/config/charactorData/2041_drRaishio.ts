import type { Charactor } from "@/app/entities/charactor/model";

export const drRaishio: Charactor = {
  id: '2041',
  name: 'Dr.レイシオ',
  buildsets: [
    {
      id: '2041-1',
      artifacts: {
        artifactIds: ['015', '017'],
        bodyOptions: ['会心ダメージ', '会心率'],
        footOptions: ['攻撃力%', '速度']
      },
      ornaments: {
        ornamentIds: ['1008', '1016'],
        sphereOptions: ['攻撃力%', '虚数属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
