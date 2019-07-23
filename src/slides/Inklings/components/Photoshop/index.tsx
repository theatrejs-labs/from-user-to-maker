import React, { RefObject } from 'react'

import sidebar from './assets/sidebar.png'
import top from './assets/top.png'
import cursorImage from './assets/cursor.svg'

import './style.scss'
import PhotoshopScene from './PhotoshopScene';
import { project } from '../../../../shared/Theatre';

interface IProps {
    appear: boolean
}
interface IState {
    cursor: {
        x: number,
        y: number
    }
    selection: {
        left: number,
        top: number,
        width: number,
        height: number,
        opacity: number
    }
}


export default class Photoshop extends React.Component<IProps, IState> {

    playground: RefObject<HTMLDivElement> = React.createRef()
    photoshop: PhotoshopScene
    timeline: Theatre.Timeline

    constructor (props: IProps) {
        super(props)
        this.state = {
            cursor: {
                x: 50,
                y: 50
            },
            selection: {
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                opacity: 0
            }
        }
        this.photoshop = new PhotoshopScene();
        this.timeline = project.getTimeline('Photoshop')
        this.initTheatre()
    }

    initTheatre () {
        const cursor = this.timeline.getObject('Cursor', {}, {
            props: {
                x: { type: 'number' },
                y: { type: 'number' }
            }
        })
        const selection = this.timeline.getObject('Selection', {}, {
            props: {
                top: { type: 'number' },
                left: { type: 'number' },
                width: { type: 'number' },
                height: { type: 'number' },
                opacity: { type: 'number' }
            }
        })
        const canvas = this.timeline.getObject('Photoshop Canvas', {}, {
            props: {
                draw: { type: 'number' },
                shader: { type: 'number' },
            }
        })
        cursor.onValuesChange((values) => {
            this.setState({ cursor: values as any })
        })
        selection.onValuesChange((values) => {
            this.setState({ selection: values as any })
        })
        canvas.onValuesChange((values) => {
            this.photoshop.setState(values)
        })
    }

    stepOne () {
        this.timeline.play({ range: { from: 0, to: 2350 } })
    }

    stepTwo () {
        this.timeline.play({ range: { from: 2200, to: 4000 } })
    }

    componentDidMount () {
        if (this.playground.current) {
            this.photoshop.init(this.playground.current);
        }
    }

    render () {
        const { appear } = this.props
        const { cursor, selection } = this.state
        return (<div className={"Comparison__panel photoshop" + (appear ? ' appear' : '')}>
            <h1>Photoshop</h1>
            <div className="photoshop__app">
                <img className="sidebar" src={sidebar} alt="Photoshop Sidebar"/>
                <img className="topbar" src={top} alt="Photoshop Topbar"/>
                <div ref={this.playground} className="playground">
                    <img src={cursorImage} style={{ marginTop: cursor.y, marginLeft: cursor.x }} className="cursor" alt="Cursor" />
                    <div className="selection" style={{
                        marginTop: selection.top,
                        marginLeft: selection.left,
                        width: selection.width,
                        height: selection.height,
                        opacity: selection.opacity
                    }}></div>
                </div>
            </div>
        </div>)
    }

}