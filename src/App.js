import React, { Component } from 'react';
import NavBar from './component/navbar';
import Counters from './component/counters';

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 2 },
			{ id: 3, value: 0 },
			{ id: 4, value: 4 },
			{ id: 5, value: 0 },
			{ id: 6, value: 5 }
		]
	};

	render() {
		return (
			<React.Fragment>
				<NavBar totalCounter={this.state.counters.filter((c) => c.value > 0).length} />
				<div className="container p-3 my-3 bg-info text-white">
					<Counters
						counters={this.state.counters}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onReset={this.handleReset}
					/>
				</div>
			</React.Fragment>
		);
	}

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		++counters[index].value;
		this.setState({ counters });
	};

	handleReset = () => {
		console.log('object');
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
}

export default App;
