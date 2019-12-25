import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.25em;
  padding: 0.5em 1.2em;
  transition: all 0.15s;
  &:focus,
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <div>
        <span>{children}</span>
      </div>
    </StyledButton>
  );
};

export default Button;
