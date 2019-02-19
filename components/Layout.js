import { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'


const Layout = ( props ) => (

	<div>

		<Head>
			<title>A Title</title>
			<meta name="description" content="" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

		{ props.children }

	</div>

) 


/*class Layout extends Component {

	static propTypes = {

		children: PropTypes.node.isRequired

	}

	constructor ( props ) {

		super ( props )

		this.state = {

			

		}

	}

	render () {

		let { children } = this.props

		return (

			<div>

				<Head>
					<title>A Title</title>
					<meta name="description" content="" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>

				{ children }

			</div>

		)

	}

}*/

export default Layout