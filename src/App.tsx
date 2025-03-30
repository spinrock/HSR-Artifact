import type { FC } from 'react';
import { Fragment, useState } from 'react';
import Table from './components/Table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getArtifact } from '@/api/getArtifact';
import { getBodyData, getLegData } from '@/api/getData';
import { ArtifactUsage } from './interfaces/Artifact';
import { getArtifactList } from '@/app/entities/artifact/api';
import { getOrnamentList } from '@/app/entities/ornament/api';

const Section: FC<{ title: string; data: ArtifactUsage[] }> = ({ title, data }) => (
  <div className='mb-8'>
    <p className='text-xl'>{title}</p>
    <Table data={data} />
  </div>
);

const App: FC = () => {
  const [filterArtifactId, setFilterArtifactId] = useState<string>('');
  // TODO: プルダウンリストの改善は後続Issueで実施予定
  const artifactTypeList = [...getArtifactList(), ...getOrnamentList()];

  const artifact = artifactTypeList.find((artifactType) => artifactType.id === filterArtifactId);
  const data = getArtifact(filterArtifactId);
  const bodyData = getBodyData(data);
  const legData = getLegData(data);

  return (
    <Fragment>
      <div className='bg-slate-200 h-16 w-full shadow-md px-6 py-4'>
        <p className='text-2xl'>HSR-Artifacts</p>
      </div>
      <div className='px-6 py-4 w-full'>
        <p className='text-2xl'>{artifact?.name || '遺物を選択してください'}</p>
        <div className='py-3'>
          <Section title="胴体" data={bodyData} />
          <Section title="脚部" data={legData} />
        </div>
      </div>
      <div className='fixed bottom-0 bg-slate-200 h-18 w-full px-6 py-4'>
        <div>
          <Select onValueChange={setFilterArtifactId}>
            <SelectTrigger className='bg-white'>
              <SelectValue placeholder="遺物" className='text-2xl' />
            </SelectTrigger>
            <SelectContent className='bg-white'>
              {artifactTypeList.map(artifactType => (
                <SelectItem key={artifactType.id} value={artifactType.id}>
                  {artifactType.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
