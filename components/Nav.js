import React, { Component } from 'react'

class Nav extends Component {
    constructor(){
    	super()
    	this.state = {
            zipCode: ''     // zip: {}
    	}
    }

    searchVenues(){
    	console.log('searchVenues: '+this.state.zipCode)
    }

    updateZipCode(event){
    	// var updatedZip = Object.assign({}, this.state)
        // updatedZip[event.target.id] = event.target.value
        // var zip = updatedZip.zip

        console.log(event.target.value)
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