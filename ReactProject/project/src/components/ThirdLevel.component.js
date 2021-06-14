import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {   //get the state from store.
    return {
        users: state.UserReducer.allUsers,
    };
}


export default connect(mapStateToProps)(function ThirdLevel({ users }) {

    return (
        <>
            {/* <h1>All Users</h1> */}
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <ul className="list-group">
                        {users && users.map((item, index) => (
                            <li key={index} className="list-group-item">
                                <h5> name: {item.name}</h5>
                                <h5>  email: {item.email}</h5>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
});