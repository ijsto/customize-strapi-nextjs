import styled from 'styled-components';

const StyledButton = styled.button`
  background: #caeafa;
  border-radius: 4px;
  border: 0;
  color: #2d8ac4;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.25em;
  padding: 0.5em 1.2em;
  transition: all 0.15s;
  &:focus,
  &:hover {
    background: #2d8ac4;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    color: #caeafa;
    transform: translateY(-1px);
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton type={props.type || 'submit'} {...props}>
      <div>
        <span>{children}</span>
      </div>
    </StyledButton>
  );
};

export default Button;
