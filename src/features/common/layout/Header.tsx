import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Logo = styled.h1`
  color: #0077cc;
  font-size: 24px;
`;

const Menu = styled.nav`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.a`
  color: inherit;
  text-decoration: none;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

const Header = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <HeaderContainer>
      <Logo>The Tutorial</Logo>
      <Menu>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Services</MenuItem>
      </Menu>
      <SearchInput type="text" placeholder="Search..." />
      <ToggleButton onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </ToggleButton>
      <ToggleButton>
        <FaGithub />
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
