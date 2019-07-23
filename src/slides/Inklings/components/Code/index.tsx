import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from './duotone-space';

import './style.scss'

interface IProps {
    appear: boolean
}
interface IState {}

export default class Code extends React.Component<IProps, IState> {

    render () {
        const { appear } = this.props
        const code = `const circle = new Circle({ radius: 10 })`
        return (<div className={"Comparison__panel code-box" + (appear ? ' appear' : '')}>
            <h1>Code</h1>
            <div className="result">
                <div className="circle"></div>
            </div>
            <SyntaxHighlighter className="code-box__prism" language="javascript" style={theme}>
                {code}
            </SyntaxHighlighter>
        </div>)
    }

}