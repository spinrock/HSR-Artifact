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
import { artifactTypeList } from './assets/data';
import { getArtifact } from '@/api/getArtifact';
import { getBodyData, getLegData } from '@/api/getData';

const App: FC = () => {
  const [filterArtifactId, setFilterArtifactId] = useState<string>('');
  const artifact = artifactTypeList.find((artifactType) => artifactType.id === filterArtifactId);
  console.log(filterArtifactId);

  const data = getArtifact(filterArtifactId);

  const bodyData = getBodyData(data);
  const legData = getLegData(data);
  console.log(bodyData)

  return (
    <Fragment>
      <div className='bg-slate-200 h-16 w-full shadow-md px-6 py-4'>
        <p
          className='text-2xl'
        >
          HSR-Artifacts
        </p>
      </div>
      <div className='px-6 py-4 w-full'>
        <p
          className='text-2xl'
        >
          {artifact?.name || '遺物を選択してください'}
        </p>
        <div
          className=' py-3'
        >
          <div className='mb-8'>
            <p className='text-xl'>胴体</p>
            <Table 
              data={bodyData}
            />
          </div>
          <div>
            <p className='text-xl'>脚部</p>
            <Table 
              data={legData}
            />
          </div>
        </div>
      </div>
      <div className='
        fixed
        bottom-0
        bg-slate-200
        h-18
        w-full
        px-6 py-4
        '
      >
        <div className=''>
          <Select
            onValueChange={setFilterArtifactId}
            >
            <SelectTrigger 
              className='bg-white'
            >
              <SelectValue placeholder="遺物" className='text-2xl'/>
            </SelectTrigger>
            <SelectContent
              className='bg-white'
            >
              {artifactTypeList.map(artifactType => (
                <SelectItem value={artifactType.id}>{artifactType.name}</SelectItem>              
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Fragment>
  )
}
export default App;
