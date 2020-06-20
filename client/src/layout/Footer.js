/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FooterCont } from "../StyledComponents";

const Footer = () => {
  return (
    <FooterCont>
      <p>Created by Zuzanna Gąsior</p>
      <span
        css={css`
          font-size: 12px;
        `}
      >
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
          css={css`
            color: #3797a4;
          `}
        >
          Pixel perfect
        </a>
        ,{" "}
        <a
          href="https://www.flaticon.com/authors/good-ware"
          title="Good Ware"
          css={css`
            color: #3797a4;
          `}
        >
          Good Ware
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          css={css`
            color: #3797a4;
          `}
        >
          www.flaticon.com
        </a>
      </span>
    </FooterCont>
  );
};

export default Footer;
