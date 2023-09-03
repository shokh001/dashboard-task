import React from 'react'
import { BellIcon, Container, H4, HomeIcon, Img, Input, Name, Profile, RightIcon, Roadmap, SearchIcon, SearchInput } from './topbar.style'
import { useLocation } from 'react-router-dom'
import user from 'assets/images/user.png'

const Topbar = () => {

  const location = useLocation();

  return (
    <Container>
      <Roadmap>
        <HomeIcon />
        <RightIcon />
        <H4>{location.pathname.slice(1, location.pathname.length)}</H4>
      </Roadmap>

      <Profile>
        <SearchInput>
          <SearchIcon />
          <Input type='text' placeholder='John Doe' />
        </SearchInput>
        <BellIcon />
        <Name>Kruluz Utsman</Name>
        <Img src={user} alt='user-avatar' />
      </Profile>
    </Container>
  )
}

export default Topbar