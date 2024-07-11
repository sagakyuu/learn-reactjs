import { Component } from "react";
import Button from "../../Elements/Button";

class Counterr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({ count: 10 });
    console.log("componentDidMount");
  }

  render() {
    return (
      <div>
        <h1 className="text-center py-4 border border-black mb-3">
          {this.state.count}
        </h1>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            -
          </Button>
        </div>
      </div>
    );
  }
}

export default Counterr;
