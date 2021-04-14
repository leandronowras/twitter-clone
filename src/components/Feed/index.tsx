import React from 'react'

import {Tweet} from '../Tweet'

import { Container, Tab, Tweets } from './styles'

export function Feed() {
    return (
        <Container>
            <Tab>Tweet</Tab>

            <Tweets>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </Tweets>
        </Container>
    )
}