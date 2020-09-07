import React from 'react'

class Vote extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		return(
			<div className="content" >
				<div className="voteBox">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere eros non justo lacinia Quisque posuere eros non justo lacinia?</p>
					<footer>
						<p> Door: naam</p>
					</footer>
				</div>
				<div className="voteControlls">
					<button>✓</button>
					<button>+</button>
					<button>X</button>
				</div>
			</div>
		)
	}
}

export default Vote
