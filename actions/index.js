import constants from '../constants'

export default {
	// return venuesReceived: (venues) => {
 //        type: constants.VENUES_RECEICED,
 //        venues: venues
	// }
	venuesReceived: (venues) => {
		return {
			type: constants.VENUES_RECEIVED,
			venues: venues
		}
	}
}