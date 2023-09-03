import Icon from "components/Icons";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
height: 100vh;
`

export const LeftContent = styled.div`
flex: 1;
background-color: var(--primary-500);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Img = styled.img`
width: 320px;
height: 320px;
`
export const Text = styled.p`
width: 580px;
margin-top: 20px;
font-family: Mulish;
font-size: 28px;
font-weight: 500;
line-height: 35px;
letter-spacing: 0em;
text-align: center;
color: #fff;
`

export const RightContent = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #fff;
`

export const H4 = styled.h4`
font-family: Mulish;
font-size: 28px;
font-weight: 700;
line-height: 35px;
letter-spacing: 0em;
text-align: center;
`
export const Form = styled.form`
width: 380px;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 20px;
font-family: Mulish;
font-size: 14px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0px;
text-align: left;
color: var(--dark);

&:last-child {
    margin-bottom: 0;
}
`

export const InputWrapper = styled.div`
width: 100%;
margin-top: 10px;
padding: 16px 24px 16px 24px;
border-radius: 6px;
border: 1px solid var(--grey-300);
border-color: ${props => props.border ? 'var(--grey-500)' : 'var(--grey-300)'};
align-items: center;
display: flex;
`
export const Input = styled.input`
width: 100%;
font-family: Mulish;
font-size: 18px;
font-weight: 500;
line-height: 23px;
letter-spacing: 0px;
text-align: left;
color: var(--dark);
padding-right: 10px;

&::placeholder {
    color: var(--grey-300);
}
`

export const ErrorMessage = styled.div`
margin-top: 5px;
color: var(--error-600);
`

export const Button = styled.button`
font-family: Mulish;
width: 100%;
padding: 16px 32px 16px 32px;
border-radius: 6px;
font-size: 20px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0px;
color: #fff;
cursor: pointer;
text-align: center;
background-color: var(--primary-500);
`

export const Close = styled(Icon.Close)`
cursor: pointer;
`