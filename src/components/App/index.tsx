import React from 'react'

import './style.scss'
import Presentation from '../../shared/Presentation';
import Slide from '../../shared/Slide';

export default class extends React.Component {
    render () {
        return (
            <Presentation>
                <Slide>1</Slide>
                <Slide>2</Slide>
                <Slide>3</Slide>
            </Presentation>
        )
    }
}