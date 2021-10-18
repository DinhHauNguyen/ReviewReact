import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './example/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ListUser from './User/ListUser';
import DetaiUser from './User/DetailUser';
const { default: ChildComponent } = require("./example/ChildComponent");
const { default: MyComponent } = require("./example/MyComponent");
const { default: ListToDo } = require("./todoList/listToDo");



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        {/* <Home></Home> */}
        {/* <MyComponent></MyComponent> */}
        {/* <ChildComponent/> */}
        {/* <ListToDo></ListToDo> */}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todos">
            <ListToDo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/users" exact>
            <ListUser></ListUser>
          </Route>
          <Route path="/users/:maNhom">
            <DetaiUser></DetaiUser>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
