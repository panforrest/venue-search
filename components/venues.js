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
                    	return(
                    	    <li key={venue.id}>
                    	        <div style={{padding:12, marginBottom:16}}>
                    	            <h4 style={{marginBottom:0}}>{venue.name}</h4>
                    	            <span>{venue.location.address}</span><br />
                    	            <a href={venue.url}>{venue.url}</a>
                    	        </div>
                    	    </li>
                    	)
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