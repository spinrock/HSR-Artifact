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
  console.log(filterArtifactId);

  const data = getArtifact(filterArtifactId);

  const bodyData = getBodyData(data);
  const legData = getLegData(data);
  console.log(bodyData)

  return (
    <Fragment>
      <div className='bg-slate-200 h-16 w-full shadow-md'>
        <div className='p-3'>
          <Select
            onValueChange={setFilterArtifactId}
            >
            <SelectTrigger >
              <SelectValue placeholder="遺物" className='text-2xl'/>
            </SelectTrigger>
            <SelectContent>
              {artifactTypeList.map(artifactType => (
                <SelectItem value={artifactType.id}>{artifactType.name}</SelectItem>              
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='pl-4 w-full pt-4'>
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
    </Fragment>
  )
}
export default App;
