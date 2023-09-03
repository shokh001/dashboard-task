import Icon from 'components/Icons'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 18px 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 6px 24px 0px #D0D5DD33;
    position: sticky;
    right: 20px;
    top: 0px;
    border-radius: 8px;
    z-index: 2;

`
export const Roadmap = styled.div`
    display: flex;
    align-items: center;
`

export const HomeIcon = styled(Icon.Home03)`

`

export const RightIcon = styled(Icon.ChevronRight)`
margin: 0 6px;
`

export const H4 = styled.h4`
font-family: Mulish;
font-size: 16px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: var(--grey-400);

&::first-letter {
    text-transform: uppercase;
}
`



export const Profile = styled.div`
   display: flex;
   align-items: center;
   
`
export const SearchInput = styled.div`
   display: flex;
   align-items: center;
padding: 8px 16px 8px 16px;
border-radius: 12px;
border: 1px solid var(--grey-300);

`

export const SearchIcon = styled(Icon.Search)`
margin-right: 10px;
`

export const Input = styled.input`
font-family: Mulish;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
text-align: left;
color: var(--dark);

&::placeholder {
    color: var(--grey-300);
}
`
export const BellIcon = styled(Icon.Notification)`
margin: 0 25px;
`

export const Name = styled.h3`
font-family: Mulish;
font-size: 18px;
font-weight: 500;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: var(--grey-800);
margin-right: 15px;
`

export const Img = styled.img`
width: 36px;
height: 36px;
`
