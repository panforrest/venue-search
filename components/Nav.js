import React, { Component } from 'react'
import superagent from 'superagent'

class Nav extends Component {
    constructor(){
    	super()
    	this.state = {
            zipCode: ''     // zip: {}
    	}
    }

    searchVenues(){
    	console.log('searchVenues: '+this.state.zipCode)

		const url = 'https://api.foursquare.com/v2/venues/search'

		const params = {
			v: '20140806',
			near: this.state.zipCode,   //zip code, new york, chicago
			client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
			client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'
		}

    	superagent
    	.get(url)
    	.query(params)
    	.set('Accept', 'text/json')    //.set('Accept', 'application/json')
    	.end((err, response) => {
    		const venues = response.body.response.venues
    		console.log('RESPONSE: '+JSON.stringify(venues))
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
			<div>
			    <input onChange={this.updateZipCode.bind(this)} type="text" placeholder="Zip code" />
			    <button onClick={this.searchVenues.bind(this)}>Search</button>
			</div>
		)
	}
}

export default Nav