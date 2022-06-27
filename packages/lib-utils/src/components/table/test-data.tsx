import { sortable, Td } from '@patternfly/react-table';
import React from 'react';

export const testData: TableTestItem[] = [
  {
    name: 'name-Y',
    prs: 'prs-Y',
    branches: 'branches-Y',
    workspaces: 3,
  },
  {
    name: 'name-Z',
    prs: 'prs-Z',
    branches: 'branches-Z',
    workspaces: 1,
  },
  {
    name: 'name-X',
    prs: 'prs-X',
    branches: 'branches-X',
    workspaces: 2,
  },
];

export const testFilters = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'branches',
    label: 'Branches',
  },
  {
    id: 'workspaces',
    label: 'Workspaces',
  },
];

export const testColumns = [
  {
    title: 'Name',
    id: 'name',
    transforms: [sortable],
    sort: 'name',
  },
  {
    title: 'PRs',
    id: 'prs',
    sort: 'prs',
  },
  {
    title: 'Branches',
    id: 'branches',
  },
  {
    title: 'Workspaces',
    id: 'workspaces',
    sort: 'workspaces',
  },
];

type RowProps<D> = {
  obj: D;
  index: number;
};

export type TableTestItem = {
  name: string;
  prs: string;
  branches: string;
  workspaces: number;
};

export const TestRow: React.FC<RowProps<TableTestItem>> = ({ obj, index }) => {
  return (
    <>
      <Td data-testid={`col-name-${index}`} dataLabel={obj.name}>
        {obj.name}
      </Td>
      <Td data-testid={`col-prs-${index}`} dataLabel={obj.prs}>
        {obj.prs}
      </Td>
      <Td data-testid={`col-branches-${index}`} dataLabel={obj.branches}>
        {obj.branches}
      </Td>
      <Td data-testid={`col-workspaces-${index}`} dataLabel={String(obj.workspaces)}>
        {obj.workspaces}
      </Td>
    </>
  );
};
