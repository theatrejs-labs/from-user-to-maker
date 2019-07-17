import React from 'react'

import './style.scss'

import Slide from '../../shared/Slide';
import title from './assets/TheDynamicDesignTool.svg'

export default class extends Slide {

    get content () {
        return (<div>
            <img src={title} alt="The Dynamic Design Tool" />
        </div>)
    }

}