// <Provider store=currentStore()>
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Nav, Venues } from '../components'
import store from '../stores'   //import { store } from './stores'
import { Provider } from 'react-redux'

// class App extends Component {
// 	render(){
//         return(
//             <app />
//         )
// 	}
// }

const app = (
	<Provider store={store.initialize()}>
    	<div> 
    	    <Nav />
    	    <Venues />
    	</div>
    </Provider>		
)

ReactDOM.render(app, document.getElementById('root'))