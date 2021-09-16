import React from "react"

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td>{props.name} {props.lastname}</td>
        </tr>
    );
}


const Friends = (props) => {
    let users = props.function();
    // console.log(Odject.keys(user).length);
    let userCount = Odject.keys(user).length;
    let userRow = [];
    for (let i = 0; i < userCount; i++) {
        userRow.push(<TableRow index={i} name={users[i].name} {users[i].lastname} />)
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Фамилия и имя</th>

                </tr>
            </thead>
            <tbody>{TableRow}</tbody>
        </table>
    );
};

export default Friends;