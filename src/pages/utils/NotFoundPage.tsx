import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const NotFoundText = styled.h1`
  font-size: 48px;
  color: #6c757d;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>404 - Page Not Found</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
