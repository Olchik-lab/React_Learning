import { BrowserRouter, NavLink, Route } from "react-router-dom";

const Profile = () => {
  return (
    <h2>Страница с профилем</h2>
  )
};
const Messages = () => {
  return <h2>Страница с сообщенями</h2>
}
const Settings = () => {
  return <h2>Страница  с настройками</h2>
}
const Friends = () => {
  return <h2>Страница с друзьями</h2>
}


function App() {
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
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Messages} />
            <Route path='/settings' component={Settings} />
            <Route path='/friends' component={Friends} />
          </div>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
