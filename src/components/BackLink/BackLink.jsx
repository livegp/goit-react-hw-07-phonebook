import { IoChevronBack } from 'react-icons/io5';

import { LinkContainer, StyledLink } from './BackLink.styled';

function BackLink({ to }) {
  return (
    <StyledLink to={to}>
      <LinkContainer>
        <IoChevronBack size="24" />
        <p>Back</p>
      </LinkContainer>
    </StyledLink>
  );
}

export default BackLink;
