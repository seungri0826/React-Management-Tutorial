import React from 'react';
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
        <div>
            <h2>{props.name}</h2>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    );
}

export default Customer;