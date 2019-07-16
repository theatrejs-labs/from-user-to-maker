import React from 'react'

import './style.scss'
import Presentation from '../../shared/Presentation';
import Slide from '../../shared/Slide';

export default class extends React.Component {
    render () {
        return (
            <Presentation>
                <Slide></Slide>
                <Slide></Slide>
                <Slide></Slide>
            </Presentation>
        )
    }
}