import Link from 'next/link';

import styled from 'styled-components';
import Logo from '../Logo';
import Meta from '../Meta';

const StyledHeader = styled.header`
  align-items: center;
  background-color: #ff6666;
  border-color: white;
  display: flex;
  height: 64px;
  justify-content: space-between;
  left: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  .logo {
    padding: 0;
  }
  a {
    color: white;
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 1px;
    padding: 3.25rem 2rem 2rem 2rem;
    text-decoration: none;
    &:hover {
      color: #1c2b6d;
      text-shadow: 1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 10px #fff,
        1px 1px 0 #fff;
      font-weight: 800;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Meta />
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
