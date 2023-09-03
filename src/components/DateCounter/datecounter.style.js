import Icon from "components/Icons";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
`

export const Button = styled.div`
width: 24px;
height: 24px;
border-radius: 6px;
background-color: var(--grey-100);
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const Text = styled.span`
margin: 0 30px;
`

export const ArrowRightIcon = styled(Icon.ChevronRight)`
transform: ${props => !props.prev ? 'rotate(180deg)' : 'rotate(0)'};
`