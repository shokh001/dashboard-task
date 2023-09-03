import Icon from 'components/Icons'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    width: 280px;
    height: 100vh;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 6px 32px 0px #D0D5DDA3;
    /* position: sticky;
    left: 0;
    top: 0; */
    
`
export const LogoWrapper = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Wrapper = styled.div`
    
`

export const Title = styled.span`
  font-family: Mulish;
font-size: 28px;
font-weight: 700;
line-height: 35px;
letter-spacing: 0em;
text-align: justified;
  color: var(--dark);
`

export const LogoIcon = styled(Icon.Logo)`
width: 42px;
height: 42px;
`

export const MainMenu = styled.p`
font-family: Mulish;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: justified;
color: var(--grey-400);
margin-top: 40px;
margin-bottom: 10px;
`
export const UL = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
`

export const LI = styled.li`
display: flex;
align-items: center;
padding: 10px 16px 10px 16px;
gap: 14px;
position: relative;
background-color: ${props => props.active ? 'var(--primary-25)' : 'transparent'};

&:hover {
    background-color: var(--primary-25);
}
`

export const Link = styled(NavLink)`
font-family: Mulish;
font-size: 18px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: justified;
color: ${props => props.active ? 'var(--primary-500)' : 'var(--grey-600)'};
${LI}:hover & {
    color: var(--primary-500);
}

&::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
}
`
export const IconWrap = styled.div`
width: 18px;
height: 18px;
& {
    svg {
        path {
            stroke: ${props => props.active ? 'var(--primary-500)' : 'var(--grey-600)'};
            }
        }
    }
${LI}:hover & {
    & {
        svg {
            path {
                stroke: var(--primary-500);
            }
        }
    }
}
`
export const Bottom = styled.div`
display: flex;
flex-direction: column;
`

export const Button = styled.button`
font-family: Mulish;
cursor: pointer;
font-size: 18px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: justified;
background-color: transparent;
color: ${props => props.active ? 'var(--primary-500)' : 'var(--grey-600)'};
${LI}:hover & {
    color: var(--primary-500);
}

&::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
}
`