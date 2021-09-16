import React from "react";

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>
                {props.name} {props.lastname}
            </td>
        </tr>
    );
};

const Friends = (props) => {
    let users = props.function();
    //console.log(Object.keys(users).length);
    let userCount = Object.keys(users).length;
    let userRow = [];

    for (let i = 0; i < userCount; i++) {
        userRow.push(<TableRow index={i} key={i} name={users[i].name} lastname={users[i].lastname} />);
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Фамилия и имя</th>
                </tr>
            </thead>
            <tbody>{userRow}</tbody>
        </table>
    );
};

export default Friends;