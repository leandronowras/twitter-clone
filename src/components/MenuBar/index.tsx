import React from 'react'

import { Container, Topside, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProlifileIcon, ExitIcon, Botside, Avatar, ProfileData } from './styles'

import Button from '../Button'

export function MenuBar() {
    return (
        <Container>
            <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Pagina inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificacoes</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton>
                    <ProlifileIcon className="active"/>
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Twettar</span>
                </Button>
            </Topside>

            <Botside>
                <Avatar />

                <ProfileData>
                    <strong>Leandro abreu</strong>
                    <span>@leandronowras</span>
                </ProfileData>

                <ExitIcon />
            </Botside>
        </Container>
    )
}