import React from 'react';
import styled from 'styled-components';

const FilterBox = styled.div`
  position: fixed;
  right: 20px;
  top: 100px;
  width: 200px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Tag = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.toggleBorder};
  }
`;

const TagFilter = () => {
  const tags = ['React', 'TypeScript', 'JavaScript'];

  return (
    <FilterBox>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </FilterBox>
  );
};

export default TagFilter;
