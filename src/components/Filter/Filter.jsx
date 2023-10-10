import React from 'react';
import { NameLabel, Input } from './Filter.styled';
export const Filter = ({ value, onChange }) => (
  <NameLabel>
    Фильтр по имени <Input type="text" value={value} onChange={onChange} />
  </NameLabel>
);
