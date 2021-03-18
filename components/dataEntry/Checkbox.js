import styled from 'styled-components';

const StyledCheckbox = styled.div`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  * {
    transition: all 0.125s;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    border-radius: 2px;
    position: absolute;
    top: 4px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #caeafa;
  }

  .container:hover input ~ .checkmark {
    background-color: #fdbf57;
  }

  .container input:checked ~ .checkmark {
    background-color: #4889bf;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkbox = ({ label, ...rest }) => {
  return (
    <StyledCheckbox>
      <label className="container">
        <span>{label}</span>
        <input type="checkbox" {...rest} />
        <span className="checkmark" />
      </label>
    </StyledCheckbox>
  );
};

export default Checkbox;
