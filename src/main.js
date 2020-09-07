import { creatElement, Component, render } from "./toy-react"

class MyComponent extends Component {
  render() {
    return (
      <div id="a">
        <p> {this.props.title}</p>
        this wrapper
        {this.props.children}
      </div>
    )
  }
}

render(
  <MyComponent title="component">
    <p>ddd</p>
    <p>ddd</p>
  </MyComponent>,
  document.getElementById("app")
)
