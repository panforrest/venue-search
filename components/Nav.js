// const stateToProps = (state) => {
// 	return {
//         venues: state.venue.venues
// 	}
// }

// const dispatchToProps = (dispatch) => {
// 	return {
//         venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
// 	}
// }

// export default connect(stateToProps, dispatchToProps)(Nav)

import React, { Component } from 'react'
import superagent from 'superagent'
import store from '../stores'
import actions from '../actions'
import { connect } from 'react-redux'

class Nav extends Component {
    constructor(){
    	super()
    	this.state = {
            zipCode: ''     // zip: {}
    	}
    }

    searchVenues(event){
    	event.preventDefault()

    	console.log('searchVenues: '+this.state.zipCode)

		const url = 'https://api.foursquare.com/v2/venues/search'

		const params = {
			v: '20140806',
			near: this.state.zipCode,   //zip code, new york, chicago
			client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
			client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ',
			query: 'coffee'
		}

    	superagent
    	.get(url)
    	.query(params)
    	.set('Accept', 'text/json')    //.set('Accept', 'application/json')
    	.end((err, response) => {
    		const venues = response.body.response.venues
    		// console.log('RESPONSE: '+JSON.stringify(venues))
    		this.props.venuesReceived(venues)
    	})
    }

    updateZipCode(event){
    	// var updatedZip = Object.assign({}, this.state)
        // updatedZip[event.target.id] = event.target.value
        // var zip = updatedZip.zip

        // console.log(event.target.value)
        this.setState({
            zipCode: event.target.value    
        })        
    }

	render(){
		return(
			
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
	                <form className="navbar-form navbar-left" role="search">
					  <div className="form-group">
					    
					    <input onChange={this.updateZipCode.bind(this)} className="form-control" type="text" placeholder="Zip code" />
					  </div>
					  <button style={{marginLeft:2}} onClick={this.searchVenues.bind(this)} className="btn btn-default">Search</button>						  
					</form>
			    </div>
			  </div>
			</nav>				
            		
		)
	}
}

const stateToProps = (state) => {
	return {
        venues: state.venue.venues
	}
}

const dispatchToProps = (dispatch) => {
	return {
        venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
	}
}

export default connect(stateToProps, dispatchToProps)(Nav)