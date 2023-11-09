import styled from "styled-components"

export const Container = styled.div`
padding: 40px 60px 60px 200px;
display: flex;
`;


export const Form = styled.form`
margin: 30px;
display: flex;
max-width: 500px;
flex-direction: column;
`;
export const FormTitle = styled.h1`

  font-size: 30px;
  font-weight: bold;
`;
export const Label = styled.h3`
font-size: 20px;
`;

export const Name = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  width: 250px;
  


  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
  }

  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
  &::placeholder{
    color: ${(props) => props.theme.colors.container}
  }
`;
export const Bd = styled.select`
padding: 10px;
font-size: 16px;
border: 2px solid #ccc;
border-radius: 5px;
width: 250px;
appearance: none;



&:focus {
  border-color: #007bff;
}

&::after {
  content: "▼";
  background-color: transparent;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: black;
}

`;

export const Valor = styled.input`
padding: 10px;
font-size: 16px;
border: 2px solid #ccc;
border-radius: 5px;
width: 100px;


/* Estilo específico para valor monetário */

&::before {
  content: "R$"; /* Adiciona o símbolo do Real (ou outra moeda desejada) antes do valor */
  position: absolute;
  
}

&::placeholder{
    color: ${(props) => props.theme.colors.container}
  }


&:focus {
  border-color: #007bff;
}
`;

export const SubmitButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50; /* Cor de fundo verde */
  color: white; /* Cor do texto branco */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #45a049; /* Cor de fundo ligeiramente mais escura no hover */
  }
  
`;

export const Card = styled.div`
  width: 280px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px 10px 10px;
  margin: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-height: 500px;
`;

export  const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export  const CardContent = styled.p`
  font-size: 16px;
  color: #666;
`;

export  const CardButton = styled.div`
  background-color: ${(props) => props.color ? "lightblue":"red"};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  width: 100px;
  font-size: 16px;
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: lightgreen;
  }
`;




