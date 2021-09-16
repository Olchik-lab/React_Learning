import React from "react";


const Profile = (props) => {
    let user = props.function();
    return (
        <div className="row mt-3">
            <div className="col-sm-3"><img src={user.avatar} alt="Фотография пользователя" width="70%" /></div>
            <div className="col-sm-9"><h1 style={{ color: "red" }}>{user.name} {user.lastname}</h1><h2>Обо мне:</h2><p>{user.about}</p><p>E-mail: {user.email}</p></div>
        </div>
    );
};


export default Profile;
