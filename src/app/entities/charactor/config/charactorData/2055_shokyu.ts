import type { Charactor } from "@/app/entities/charactor/model";

export const shokyu: Charactor = {
  id: '2055',
  name: '椒丘',
  buildsets: [
    {
      id: '2055-1',
      artifacts: {
        artifactIds: ['002', '014', '016'],
        bodyOptions: ['効果命中'],
        footOptions: ['攻撃力%', '速度']
      },
      ornaments: {
        ornamentIds: ['1004', '1005'],
        sphereOptions: ['攻撃力%', '炎属性与ダメージ'],
        ropeOptions: ['攻撃力%', 'EP回復効率']
      }
    }
  ]
};
