import React, { PureComponent } from 'react'

// import moment from 'moment'
import { Comment, Avatar, Tooltip } from 'antd'
import {DeleteOutlined} from '@ant-design/icons'

export default class CommentItem extends PureComponent {
  render() {
    const { nickname, avatar, content, datetime } = this.props.comment
    return (
      <Comment
        // actions={actions}
        author={<a href="/#">{nickname}</a>}
        avatar={
          <Avatar src={avatar} alt={nickname} />
        }
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{datetime.fromNow()}</span>
            {/* <span>{datetime.format('YYYY-MM-DD HH:mm:ss')}</span> */}
          </Tooltip>
        }
        actions={[
          // <Button>刪除評論</Button>
          <span onClick={e => this.removeItem()}><DeleteOutlined />刪除評論</span>
        ]}
      />
    );
  }

  removeItem(index) {
    this.props.removeItem(index)
  }
}
