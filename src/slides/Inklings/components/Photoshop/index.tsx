import React, { RefObject } from 'react'

import sidebar from './assets/sidebar.png'
import top from './assets/top.png'

import './style.scss'
import PhotoshopScene from './PhotoshopScene';

interface IProps {}
interface IState {}


export default class Photoshop extends React.Component<IProps, IState> {

    playground: RefObject<HTMLDivElement> = React.createRef()
    photoshop: PhotoshopScene

    constructor (props: IProps) {
        super(props)
        this.photoshop = new PhotoshopScene();
    }

    componentDidMount () {
        console.log(this.playground.current)
        if (this.playground.current) this.photoshop.init(this.playground.current);
    }

    render () {
        return (<div className="Comparison__panel photoshop">
            <h1>Photoshop</h1>
            <div className="photoshop__app">
                <img className="sidebar" src={sidebar} alt="Photoshop Sidebar"/>
                <img className="topbar" src={top} alt="Photoshop Topbar"/>
                <div ref={this.playground} className="playground" />
            </div>
        </div>)
    }

}