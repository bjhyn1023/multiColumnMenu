import { Component } from "react";

class Li extends Component {
  state = {
    show: false,
  };
  changShow = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };
  render() {
    const { title, data } = this.props;
    const { show } = this.state;
    return (
      <li className={show ? "subList-show" : ""}>
        <a onClick={this.changShow}>{title}</a>
        <ul className="subList">
          {data.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </li>
    );
  }
}

export default Li;
