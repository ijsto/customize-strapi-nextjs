import styled from 'styled-components';

const StyledCard = styled.div`
  background: white;
  border: 1px solid transparent;
  border-radius: 8px;
  display: block;
  margin-bottom: 24px;
  padding: 0.5em 1em;
  width: ${({ width }) => width && width};

  img {
    width: 100%;
  }

  h3 {
    margin: 0;
    &:hover {
      color: orange;
    }
  }
`;

const Card = ({ children, image, title, width }) => {
  return (
    <StyledCard width={width}>
      {image && <img src={image} alt={title} />}
      <div className="card-body">
        <div>
          {title && <h3>{title}</h3>}
          {children || 'Card Content'}
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
