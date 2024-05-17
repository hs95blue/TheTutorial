import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

const LeftSection = styled.div`
`;

const RightSection = styled.div`
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        © {new Date().getFullYear()} - Personal Blog by Hyunsik
      </LeftSection>
      <RightSection>
        Powered by React & Styled-Components
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
