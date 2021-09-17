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

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userRow: [] };
    }

    componentDidMount() {
        this.props.function().then((users) => {
            console.log(users);
            let userCount = users.length;
            let userRow = [];
            for (let i = 0; i < userCount; i++) {
                userRow.push(
                    <TableRow index={i} key={i} name={users[i].name} lastname={users[i].lastname} />
                );
            }
            this.setState({ userRow: userRow });
        });
        // users.then(
        // 	result=>(console.log(result))
        // )
        //console.log(Object.keys(users).length);
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Фамилия и имя</th>
                    </tr>
                </thead>
                <tbody>{this.state.userRow}</tbody>
            </table>
        );
    }
}

export default Friends;