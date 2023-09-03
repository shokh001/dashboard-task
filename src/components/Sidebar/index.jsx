import { Bottom, Button, Container, IconWrap, LI, Link, LogoIcon, LogoWrapper, MainMenu, Title, UL, Wrapper } from './sidebar.style'
import { sidebar } from 'utils/sidebar'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from 'redux/slice/auth'

const Sidebar = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const logout = (type) => {
        if (!type) {
            dispatch(logoutUser());
        }
    }

    return (
        <Container>
            <Wrapper>
                <LogoWrapper to={'/'}>
                    <LogoIcon />
                    <Title>Dashbord</Title>
                </LogoWrapper>

                <MainMenu>Main menu</MainMenu>

                <UL>
                    {
                        sidebar.menu.map(({ icon, path, id, title }) => <LI active={location.pathname === path ? 'true' : ''} key={id}>
                            <IconWrap active={location.pathname === path ? 'true' : ''}>{icon}</IconWrap>
                            <Link active={location.pathname === path ? 'true' : ''} to={path}>{title}</Link>
                        </LI>)
                    }
                </UL>
            </Wrapper>

            <Bottom>
                <MainMenu>Preferences</MainMenu>
                <UL>
                    {
                        sidebar.setting.map(({ id, icon, title, path }) => <LI onClick={() => logout(path)} active={location.pathname === path ? 'true' : ''} key={id}>
                            <IconWrap active={location.pathname === path ? 'true' : ''}>{icon}</IconWrap>
                            {
                                path ? <Link active={location.pathname === path ? 'true' : ''} to={path}>{title}</Link> : <Button type='button'>{title}</Button>
                            }
                        </LI>)
                    }
                </UL>
            </Bottom>

        </Container>
    )
}

export default Sidebar