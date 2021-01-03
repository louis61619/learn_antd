import React, { PureComponent } from 'react'

import moment from 'moment'

import { Input, Button } from 'antd'

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      content: ""
    }
  }

  render() {
    return (
      <div>
        <Input.TextArea row={4}
                        value={this.state.content} 
                        onChange={e => this.handleChange(e)}/>
        <Button type="primary" onClick={e => this.addComment()}>添加評論</Button>
      </div>
    )
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://inews.gtimg.com/newsapp_bt/0/10078884356/641",
      nickname: "Renny",
      datetime: moment(),
      content: this.state.content
    }
    this.props.submitComment(commentInfo)
    this.setState({
      content: ""
    })
  }
}
