import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid transparent;
  display: block;
  width: ${({ width }) => width && width};
  .card-body {
    padding: 0.5em 1em;
    background: white;
  }
  img {
    width: 100%;
  }

  h3 {
    margin: 0 auto 0.5em auto;
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
