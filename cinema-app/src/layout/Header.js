/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import clapperboard from '../assets/clapperboard.png';
import { HeaderCont, Clapperboard, MainTitle, Subtitle } from '../StyledComponents';

const Header = () => {

  //styles
  const paddingLeft = "0 0 0 24px";
  const paddingRight = "0 24px 0 0";

  const titleBoxStyle = css`
    text-align: center;
    margin: 0 48px;
    color: #1D1D20;
  `;

  return (
    <HeaderCont>
          <Clapperboard src={clapperboard} padding={paddingLeft} alt="clapperboard-icon"/>
          <Clapperboard src={clapperboard} padding={paddingLeft} alt="clapperboard-icon"/>
          <Clapperboard src={clapperboard} padding={paddingLeft} alt="clapperboard-icon"/>
            <div css={titleBoxStyle}>
              <MainTitle>Cinema</MainTitle>
              <Subtitle>with my favourite movies</Subtitle>
            </div>
          <Clapperboard src={clapperboard} padding={paddingRight} alt="clapperboard-icon"/>
          <Clapperboard src={clapperboard} padding={paddingRight} alt="clapperboard-icon"/>
          <Clapperboard src={clapperboard} padding={paddingRight} alt="clapperboard-icon"/>
    </HeaderCont>
  );
}

export default Header;