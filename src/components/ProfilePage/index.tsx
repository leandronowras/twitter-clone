import React from 'react'
import {Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton} from './styles'
import {Feed} from '../Feed'

export function ProfilePage() {
    return(
        <Container>
            <Banner>
                <Avatar />
            </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Leandro Abreu</h1>
            <h2>@leandronowras</h2>

            <p>
                Developer at <a href="#">@rocketseat</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Brasilia, Brasil
                </li>
                <li>
                    <CakeIcon />
                    20/11/1999
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>672 </strong>seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
        </Container>
    )
}