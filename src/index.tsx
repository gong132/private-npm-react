import * as Comps from './components'
import {Button} from './components/index'
import 'antd/dist/antd.less'
import { DatePicker } from 'antd'

import React from 'react'
import ReactDOM from 'react-dom'

class Page extends React.Component {

    
    render() {
        return (
            <div>
                <DatePicker></DatePicker>
                <Button.TableOptBtn text='hhh'></Button.TableOptBtn>
                <Button.RadiusBtn text='RadiusBtn'></Button.RadiusBtn>
                {/* <Comps.Button>自定义button</Comps.Button> */}
                {/* <Comps.Title label='label' value='value' /> */}
            </div>
        )
    }
}

ReactDOM.render(<Page />, document.getElementById('root'))
