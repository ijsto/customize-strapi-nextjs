import { useState } from 'react';
import styled from 'styled-components';

import Socials from '../Socials';
import Button from '../common/Button';

const StyledFooter = styled.footer`
  background: #8a74d0;
  bottom: 0;
  left: 0;
  padding: 1.5em;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 1;
  div,
  a {
    color: white;
    &:hover {
      color: orange;
    }
  }
  .whatisthis {
    margin-top: 3em;
  }
`;

const StyledFooterButton = styled.div`
  bottom: 0;
  padding: 1.5em;
  position: fixed;
  right: 0;
  text-align: center;
  z-index: 2;
  button {
    background: #8a74d0;
    * {
      color: white;
    }
  }
`;

const Footer = () => {
  const [showFooter, setShow] = useState(false);
  return (
    <>
      {showFooter ? (
        <>
          <StyledFooter>
            <Socials />

            <div className="whatisthis">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ijs.to"
              >
                iJS.to
              </a>
            </div>
          </StyledFooter>
          <StyledFooterButton>
            <Button onClick={() => setShow(!showFooter)}>Hide Footer</Button>
          </StyledFooterButton>
        </>
      ) : (
        <StyledFooterButton>
          <Button onClick={() => setShow(!showFooter)}>Show Footer</Button>
        </StyledFooterButton>
      )}
    </>
  );
};

export default Footer;
