import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from './duotone-space';

import './style.scss'

interface IProps {}
interface IState {}

export default class Code extends React.Component<IProps, IState> {

    render () {
        return (<div className="Comparison__panel code-box">
            <h1>Code</h1>
            <SyntaxHighlighter className="code-box__prism" language="javascript" style={theme}>
                const a = 2 + 1;
            </SyntaxHighlighter>
        </div>)
    }

}