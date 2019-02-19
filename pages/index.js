import { Component } from 'react'
import { connect } from 'react-redux'
import { toggleMenu } from '../store'
import Layout from '../components/Layout'
import Main from '../components/Main'

class Index extends Component {

	static getInitialProps ( { reduxStore, req }) {

		const isServer = !!req
		//reduxStore.dispatch(serverRenderClock(isServer))

		return {}

	}

	componentDidMount () {


	}

	componentWillUnmount () {


	}

	render () {

		return (

			<Layout>
				<Main />
			</Layout>

		)

	}

}

export default connect()( Index )
