import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { incrementCount } from '../store'


class Main extends Component {

	static propTypes = {


	}

	constructor ( props ) {

		super ( props )

		this.state = {

			

		}

	}

	render () {

		let { children, count, dispatch } = this.props

		return (

			<div>

				{ count }

				<button onClick={ this._increment }>Increment Count</button>

			</div>

		)

	}

	_increment = () => {

		const { dispatch } = this.props

		dispatch( incrementCount() )

	}

}


function mapStateToProps ( state ) {

	const { count} = state
	return { count }

}

export default connect( mapStateToProps )( Main )