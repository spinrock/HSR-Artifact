import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { FC } from 'react';
import type { ArtifactUsage } from '../interfaces/Artifact';

const columnHelper = createColumnHelper<ArtifactUsage>();

const columns = [
  columnHelper.accessor('mainOption', {
    header: () => <span>メインオプション</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('usage', {
    header: () => <span>利用率</span>,
    cell: info => <span>{info.getValue()}人</span>,
  })
];

type TableProps = {
  data: ArtifactUsage[]
}

const Table: FC<TableProps> = ({data}: TableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className='w-full'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;
