import React, { ReactElement } from 'react';

import {
  ColumnLi,
  ColumnList,
  ColumnTitle,
  ColumnWrapper,
} from './FooterColumn.styled';
import type { FooterColumnTypes } from './FooterColumn.types';

export const FooterColumn = ({ column }: FooterColumnTypes): ReactElement => (
  <ColumnWrapper>
    <ColumnTitle href={column.title.link}>{column.title.label}</ColumnTitle>
    {column.elements && (
      <ColumnList>
        {column.elements.map(element => (
          <ColumnLi key={element.label}>
            <a href={element.link}>{element.label}</a>
          </ColumnLi>
        ))}
      </ColumnList>
    )}
  </ColumnWrapper>
);
