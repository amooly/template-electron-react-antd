import React, {Component} from 'react';
import {Button} from 'antd';

export default class App extends Component {

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>欢迎使用electron+react+antd模板</h1>
                <Button>Hello World!</Button>
            </div>
        );
    }
}
