import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fontFamily.sans};
    ::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #007bff;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #0056b3;
}

  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`;
