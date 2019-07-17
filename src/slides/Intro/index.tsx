import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide';

export default class extends Slide {
    
    get content () {
        return (<h1>Hey</h1>)
    }

}