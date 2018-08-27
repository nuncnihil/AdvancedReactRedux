import { CHANGE_AUTH } from "../actions/types";

export default function(state=false, action){ //default false not logged in

    switch(action.type){
        
        case CHANGE_AUTH:
        return action.payload;

        default:
        return state;
    }
    
}