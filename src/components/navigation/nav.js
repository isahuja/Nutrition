import Nav from 'react-bootstrap/Nav'
import "./nav.css"
const nav = () =>{
    let pathName = window.location.pathname;
    return <Nav
    activeKey={pathName}
  >
    <Nav.Item>
      <Nav.Link href="/" >Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/food" >Food List</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/addfooditem" >Add Food Item</Nav.Link>
    </Nav.Item>
  </Nav>;

}

export default nav;