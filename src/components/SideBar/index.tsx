import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import {News} from '../News'
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles'

export function SideBar() {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter"/>
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List 
                        title="Talvez voce curta"
                        elements={[
                            <FollowSuggestion 
                                name="Luiz Batanero"
                                nickname="@luizabab"
                            />,
                            <FollowSuggestion 
                                name="Luke Batatata"
                                nickname="@batata"
                            />,
                            <FollowSuggestion 
                                name="Yasmin Freitas"
                                nickname="@yayafreitas"
                            />
                    ]}
                    />
                <List 
                    title="Talvez voce curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
                <List 
                    title="Talvez voce curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
                <List 
                    title="Talvez voce curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />
                    ]}
                />
                </Body>
            </StickyBox>
        </Container>
    )
}