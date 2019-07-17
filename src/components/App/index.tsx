import React from 'react'

import './style.scss'
import Presentation from '../../shared/Presentation';

import background from './assets/background.svg'
import Intro from '../../slides/Intro';
import Inklings from '../../slides/Inklings';

export default class extends React.Component {
    render () {
        return (
            <Presentation background={background}>
                <Intro />
                <Inklings />
            </Presentation>
        )
    }
}