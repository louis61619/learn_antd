import React, { PureComponent } from 'react'
import CommentInput from './componenet/CommentInput'
import CommentItem from './componenet/CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      commentList: []
    }
  }
  render() {
    return (
      <div style={{width: "500px", padding: "20px"}}>
        App
        {
          this.state.commentList.map((item, index) => {
            return <CommentItem removeItem={e => this.removeItem(index)} comment={item} key={item.id}/>
          })
        }
        <CommentInput submitComment={ info => this.submitComment(info)}/>
      </div>
    )
  }

  submitComment(commentInfo) {
    // let newArr = [...this.state.commentList]
    // newArr.push(commentInfo)
    this.setState({
      // commentList: newArr
      commentList: [...this.state.commentList, commentInfo]
    })
  }

  removeItem(index) {
    console.log(index)
    let newArr = [...this.state.commentList]
    newArr.splice(index, 1)
    this.setState({
      commentList: newArr
    })
  }
}
