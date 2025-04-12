import type { Charactor } from "@/app/entities/charactor/model";

export const abenchurin: Charactor = {
  id: '2047',
  name: 'アベンチュリン',
  buildsets: [
    {
      id: '2047-1',
      artifacts: {
        artifactIds: ['009', '017'],
        bodyOptions: ['防御力%', '会心ダメージ'],
        footOptions: ['速度', '防御力%']
      },
      ornaments: {
        ornamentIds: ['1002', '1010'],
        sphereOptions: ['防御力%', '虚数属性与ダメージ'],
        ropeOptions: ['防御力%', 'EP回復効率']
      }
    }
  ]
};
