import type { Charactor } from "@/app/entities/charactor/model";

export const gyaraga: Charactor = {
  id: '2048',
  name: 'ギャラガー',
  buildsets: [
    {
      id: '2048-1',
      artifacts: {
        artifactIds: ['003', '014' , '021'],
        bodyOptions: ['治癒量'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1010'],
        sphereOptions: ['HP%'],
        ropeOptions: ['EP回復効率']
      }
    },
    {
      id: '2048-2',
      artifacts: {
        artifactIds: ['006', '014', '018', '019'],
        bodyOptions: ['治癒量'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1003', '1010', '1016'],
        sphereOptions: ['HP%'],
        ropeOptions: ['撃破特効']
      }
    },
    {
      id: '2048-3',
      artifacts: {
        artifactIds: ['003', '006', '019'],
        bodyOptions: ['治癒量'],
        footOptions: ['速度']
      },
      ornaments: {
        ornamentIds: ['1010', '1020'],
        sphereOptions: ['HP%'],
        ropeOptions: ['EP回復効率', '撃破特効']
      }
    }
  ]
};
