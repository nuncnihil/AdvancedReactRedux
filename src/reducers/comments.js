import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";
import LOG from 'logLevel'

export default function(state=[], action){
  
    console.log('commentsREDUCER:action.type',action.type)
    console.log('commentsREDUCER:action.payload',action.payload)
    
    switch(action.type){
       
        case SAVE_COMMENT :
        return [...state, action.payload]

        case FETCH_COMMENTS :

        const comments = action.payload.data.map(comment=>comment.name)
        
        return [...state, ...comments]
    }
    return state;
}