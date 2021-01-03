import React, { PureComponent } from 'react'

// import classNames from 'classnames'
import moment from 'moment'

import {Button, DatePicker} from 'antd'
import { PoweroffOutlined } from '@ant-design/icons';
import HYHomeRecommends from 'components/home/childComps/home-recommends'


export default class App extends PureComponent {
  
  render() {
    const loadings = true
    return (
      <>
        <HYHomeRecommends></HYHomeRecommends>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
         <DatePicker picker="day" allowClear={false} defaultValue={moment('2015-06-06', "YYYY-MM-DD")} />
      </>
    );
  }

  enterLoading() {
    console.log('--------------')
  }
}




// classnames庫的使用

// export default class App extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isAcitve: true,
//       isBar: false
//     }
//   }

//   render() {
//     const {isAcitve, isBar} = this.state
//     const errClass = "error"
//     const warnClass = 10
//     return (
//       <div>
//         {/* 原生動態添加class的方法 */}
//         <h2 className={"title " + (isAcitve ? "active": "")}>我是標題</h2>
//         <h2 className={["title", (isAcitve ? "active": "")].join(" ")}>我是標題2</h2>

//         {/* classnmaes庫動態添加class */}

//         <h2 className={classNames("foo", "bar", "active", "title")}>1我是標題</h2>
//         <h2 className={classNames({"active": isAcitve, "bar": isBar}, "title")}>2我是標題</h2>
//         <h2 className={classNames("foo", errClass, warnClass, {"active": isAcitve})}>3我是標題</h2>
//         <h2 className={classNames(["active", "title", {"bar": isBar}])}>4我是標題</h2>
//       </div>
//     )
//   }
// }
