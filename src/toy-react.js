// 自定义创建dom或者组件的类
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  // 设置属性的方法
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  // 添加自元素的方法
  appendChild(component) {
    this.root.appendChild(component.root)
  }
}
// innerText
class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
}
// 组件
export class Component {
  constructor(type) {
    // 组件上的属性传递给 props
    this.props = Object.create(null)
    // 子元素
    this.children = []
    this._root = null
  }
  // 设置属性
  setAttribute(name, value) {
    this.props[name] = value
  }
  // push children , props children
  appendChild(component) {
    this.children.push(component)
    this.props.children = this.children
  }
  get root() {
    if (!this._root) {
      console.log(this, this.render())
      // root？？
      this._root = this.render().root
    }
    return this._root
  }
}

export function creatElement(type, attributes, ...children) {
  let e
  if (typeof type === "string") {
    e = new ElementWrapper(type)
  } else {
    e = new type()
  }

  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }
  let insertChilden = (childerns) => {
    for (let child of childerns) {
      if (typeof child === "string") {
        child = new TextWrapper(child)
      }

      if (typeof child === "object" && child instanceof Array) {
        insertChilden(child)
      } else {
        e.appendChild(child)
      }
    }
  }
  insertChilden(children)

  return e
}

export function render(component, parentElement) {
  console.log(component, component.root)
  parentElement.appendChild(component.root)
}
