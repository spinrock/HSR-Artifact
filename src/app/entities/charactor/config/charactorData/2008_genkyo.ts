import type { Charactor } from "@/app/entities/charactor/model";

export const genkyo: Charactor = {
  id: '2008',
  name: '彦卿',
  buildsets: [
    {
      id: '2008-1',
      artifacts: {
        artifactIds: ['001'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1006'],
        sphereOptions: ['氷属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    },
    {
      id: '2008-2',
      artifacts: {
        artifactIds: ['022'],
        bodyOptions: ['会心ダメージ'],
        footOptions: ['攻撃力%']
      },
      ornaments: {
        ornamentIds: ['1008'],
        sphereOptions: ['氷属性与ダメージ'],
        ropeOptions: ['攻撃力%']
      }
    }
  ]
};
