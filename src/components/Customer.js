import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/* 컴포넌트형
class Customer extends React.Component {
    render() {
        return (
            <div>
                <h2>유승리</h2>
                <p>990826</p>
                <p>여자</p>
                <p>대학생</p>
            </div>
        );
    }
}*/

function Customer(props) {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    );
}



export default Customer;