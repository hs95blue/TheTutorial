import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import useThemeStore from '../../../store/client/themeStore';
interface Theme {
  body: string;
  text: string;
}
const HeaderContainer = styled.header<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }: { theme: Theme }) => theme.body};
  color: ${({ theme }: { theme: Theme }) => theme.text};
`;

const Logo = styled.h1`
  color: #0077cc;
  font-size: 24px;
`;

const Menu = styled.nav`
  display: flex;
  gap: 10px;
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
  width : 30px;
  height : 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font-size: 16px;
  outline: none; // Attempt to prevent outline on click
  &:focus {
    outline: none; // Ensure no outline on focus
  }
`;

const ToolkitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();


  return (
    <HeaderContainer>
      <Logo>The Tutorial</Logo>
      <Menu>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Services</MenuItem>
      </Menu>
      <ToolkitDiv>
        <SearchInput type="text" placeholder="Search..." />
        <ToggleButton onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ToggleButton>
        <ToggleButton>
          <FaGithub />
        </ToggleButton>
      </ToolkitDiv>
    </HeaderContainer>
  );
};

export default Header;
