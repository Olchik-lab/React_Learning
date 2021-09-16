import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Friends from "./components/Friends";

const Messages = () => {
  return <h2>Страница с сообщенями</h2>
}
const Settings = () => {
  return <h2>Страница  с настройками</h2>
}



function App(props) {
  console.log(props);
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row mt-3">
          <div className="col-3">
            <div className="nav flex-column nav-pills" aria-orientation="vertical">
              <NavLink className="nav-link" to="profile">
                Профиль
              </NavLink>
              <NavLink className="nav-link" to="messages">
                Сообщения
              </NavLink>
              <NavLink className="nav-link" to="settings">
                Настройки
              </NavLink>
              <NavLink className="nav-link" to="friends">
                Мои друзья
              </NavLink>
            </div>
          </div>
          <div className="col-9">
            <Route path='/profile' render={() => <Profile function={props.function.key_getUser} />} />
            <Route path='/messages' component={Messages} />
            <Route path='/settings' component={Settings} />
            <Route path='/friends' render={() => <Friends function={props.function.key_getUsers} />} />
          </div>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
