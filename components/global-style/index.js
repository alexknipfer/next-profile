const GlobalStyle = () => {
  return (
    <style jsx global>
      {`
        html,
        body,
        body > div:first-child,
        div#__next {
          height: 100%;
          width: 100%;
          font-family: 'Ubuntu';
          font-weight: 400;
          font-size: calc(12px + 0.9vw);
        }
        *,
        *:after,
        *:before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        @media screen and (min-width: 1920px) {
          html,
          body,
          body > div:first-child,
          div#__next {
            font-size: 30px;
          }
        }
      `}
    </style>
  );
};

export default GlobalStyle;
