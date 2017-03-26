        // venues: state.venue   //    WRONG    venue: state.venues
// const dispatchToProps = (dispatch) => {
// 	return {
//         venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
// 	}
// }

import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'   //SO STUPID TO FORGET THIS LINE

class Venues extends Component {
	render(){
        const venues = this.props.venues || []

		return(
			<div>
			    <ol>
                    { venues.map((venue, i) => {
                    	return <li key={venue.id}>{venue.name}</li>
                      })	
                    }                    
			    </ol>
			</div>
	    )
	}
}

const stateToProps = (state) => {
	return {
        venues: state.venue.venues
	}
}


export default connect(stateToProps)(Venues)