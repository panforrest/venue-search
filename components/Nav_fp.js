import React, { Component } from 'react'

class Nav extends Component {
    constructor(){
    	super()
    	this.state = {
            zip: {}
    	}
    }

    searchVenues(){
    	console.log('searchVenues: ')
    }

    update(event){
    	var updatedZip = Object.assign({}, this.state)
        updatedZip[event.target.id] = event.target.value
        // var zip = updatedZip.zip
        this.setState({
            zip: event.target.value    
        })
        console.log(JSON.stringify(this.state.zip))
    }

	render(){
		return(
			<div>
			    <input onChange={this.update.bind(this)} type="text" placeholder="Zip code" />
			    <button onClick={this.searchVenues.bind(this)}>Search</button>
			</div>
		)
	}
}

export default Nav