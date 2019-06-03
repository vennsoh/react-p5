import React from "react";
import ReactDOM from "react-dom";
import P5Wrapper from "../../src";
import sketch3 from "./sketches/sketch3";

class App extends React.Component {
	render() {
		return (
			<div>
				<P5Wrapper sketch={sketch3} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
