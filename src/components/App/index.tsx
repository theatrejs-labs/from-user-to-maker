import React from 'react'

import './style.scss'
import Presentation from '../../shared/Presentation';
import Slide from '../../shared/Slide';

import background from './assets/background.svg'

export default class extends React.Component {
    render () {
        return (
            <Presentation background={background}>
                <Slide>1</Slide>
                <Slide>2</Slide>
                <Slide>3</Slide>
            </Presentation>
        )
    }
}