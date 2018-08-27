import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../src/actions';
import connectAdvanced from 'react-redux/lib/components/connectAdvanced';

class CommentBox extends Component{
  
  constructor(props){

    console.log("CommentBox:constructor")
    super(props)
    this.state = {comment:""}

  }
  
  handleChange(event){

    this.setState({comment:event.target.value})
  }

  handleSubmit(event){
   
    this.props.saveComment(this.state.comment)
    this.setState({comment:""}) 
    console.log("CommentBox:handleSubmit:this.state.comment: "+this.state.comment)
    event.preventDefault()
    
  }
    render() {
   
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)} className = "comment-box">
        <h4>ADD A COMMENT</h4>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
      <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
      
     )}

}

export default connect(null, actions)(CommentBox) 
//the null is for any mapstate to props and commentbox doesnt need it
//the actions are all the actions imported - they are available as props ie  this.props.fetchComments
//rem connect looks up the component hierarchy to find provider