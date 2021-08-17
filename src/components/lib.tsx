import { FaSpinner } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
  fontSize: "50px",
  margin: "30px auto",
  display: "block",
});
Spinner.defaultProps = {
  "aria-label": "loading",
  role: "img",
};

const StyledButton = styled.button`
  background-color: beige;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  margin-right: 1em;
  padding: 0.5em 2em;

  &:hover {
    background-color: burlywood;
  }
`

const StyledContainer = styled.main`
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  color: #333;
  margin: 0 auto;
  max-width: 64rem;
  padding: 2rem;

  h1 {
    color: sienna;
    font-size: 2.625rem;
    padding-bottom: 1em;
  }

  .article {
    display: flex;
    margin-bottom: 5em;

    h2 {
      margin-bottom: 0.1em;

      a {
        border-bottom: 2px solid wheat;
        color: rosybrown;

        &:hover {
          border-bottom: 2px solid #ffd700;
          color: sienna;
        }
      }
    }

    ul {
      padding-left: 0;
    }
    li {
      color: sandybrown;
      display: inline-block;
      list-style: none;
      font-size: 1.25rem;
      padding-left: 0;

      &:first-child {
        margin-right: 1em;
      }
    }

    .image {
      display: none;
      max-width: 250px;
      width: 100%;

      @media screen and (min-width: 650px) {
        display: block;
      }

      img {
        border-radius: 12px;
      }
    }
  }

  .full-article {
    p {
      color: #444;
      font-size: 1.25rem;
      line-height: 1.3;
    }

    .comments {
      h3 {
        color: slategrey;
        font-size: 2.5rem;
      }
      padding-top: 3em;
    }

    .comment {
      border-bottom: 1px dashed #ccc;
      padding-bottom: 2em;
      margin-bottom: 2em;

      em {
        color: #999;
      }

      &:last-child {
        border-bottom: none;
        margin-bottom:0;
        padding-bottom: 0;
      }
    }
  }
`;

export { Spinner, StyledContainer, StyledButton };
