
import React, { useState } from 'react';
import './App.css';
import { EndFooter } from './components/EndFooter';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { Menu } from './components/Menu';
import Home from './components/Home';

import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blogs from './components/Blogs';
import Shop from './components/Shop';
import Moi from './components/Moi';
import LoginForm from './components/LoginForm';
import Cate from './components/Shop/Cate';






function App() {
  const Url_user = {
    img: "images/PH09328.jpg",
    name: "Ngọc Chuẩn",
    email: "chuan@gmail.com",
    password: "123123"
  }
  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (details.email === Url_user.email && details.password === Url_user.password) {
      setUser({

        email: details.email
      })
    } else {
      console.log("Không thành công");
      setError("Sai thông tin đăng nhập!");

    }
  }
  const Logout = details => {
    console.log(details);
    setUser({

      email: ""
    });
  }

  return (

    <Router>
      <div className="App">
        {(user.email !== "") ? (
          <div>
            <Header Logout={Logout} name={Url_user.name} img={Url_user.img} />
            <Menu />

            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/blogs">
                <Blogs />
              </Route>

              <Route path="/shop">
                <Shop />
              </Route>

              <Route path="/moi/:id">
                <Moi />
              </Route>

              <Route path="/category/:id">
                <Cate />
              </Route>

            </Switch>

            <Footer />
            <EndFooter />


          </div>
        ) : (

            <LoginForm Login={Login} error={error} />

          )}

      </div>
    </Router>
  );
}

export default App;
