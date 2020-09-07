import React from 'react'

class Question extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div key={this.props.i} className="anwserBlock">
				<p className="question">{this.props.anwser.question}</p>
				<p className="anwser">{this.props.anwser.anwser}</p>
				<footer>
					<p> Door: {this.props.anwser.by}</p>
				</footer>
			</div>
		)
	}

}

export default Question
