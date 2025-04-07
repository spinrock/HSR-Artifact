import type { Charactor } from "@/app/entities/charactor/model";

export const aster: Charactor = {
  id: '2014',
  name: 'アスター',
  buildsets: [
    {
      id: '2014-1',
      artifacts: {
        artifactIds: ['006', '014'],
        bodyOptions: ['HP%'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1002', '1003'],
        sphereOptions: ['HP%'],
        ropeOptions: ['撃破特効', 'EP回復効率']
      }
    }
  ]
};
