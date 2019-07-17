import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide';

export default class extends Slide {
    
    steps = [
        () => { console.log('a') },
        () => { console.log('b') },
        () => { console.log('c') },
        () => { console.log('d') },
    ]

    backwardSteps = [
        () => { console.log('ba') },
        () => { console.log('bb') },
        () => { console.log('bc') },
        () => { console.log('bd') },
    ]

    get content () {
        return (<h1 style={{color: 'white'}}>{Math.random()}</h1>)
    }

}