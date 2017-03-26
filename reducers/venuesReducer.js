import constants from '../constants'

var initialState = {
	venues: null  //venues: {}
}

export default (state=initialState, action) => {    //ALWAYS FORGOT =>
	
	switch(action.type){      //switch(action.type){

		case constants.VENUES_RECEIVED:
		    console.log(JSON.stringify(action.venues))
		    let updated = Object.assign({}, state)   //let updated = Object.assign({}, action.venues)
		    updated['venues'] = action.venues

            return updated  //return state

		default:
		    return state
    }
}