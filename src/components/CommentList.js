import React, { Component } from 'react';
import { connect } from 'react-redux';
import LOG from 'logLevel'

class CommentList extends Component {

  constructor(props) {
   
    super(props)
  }

  render() {
   
    const list = this.props.comments.map(comment => <li key={comment}>{comment}</li>)
    return (
      <div>
        <h4>CommentList Component</h4>
        <ul value="blaaa" className="comment-list">{list}</ul>
      </div>
    )
  }


}
function mapStateToProps(state) {
  console.log('commentsLIST:mapStateToProps:state',state)
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList);