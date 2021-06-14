import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {   //get the state from store.
    return {
        user: state.UserReducer.user,
    };
}

export default connect(mapStateToProps)(function SecondLevel({ user }) {

    return (
        <>
            <div className="my-5 col-5  mx-auto  border-1 p-3 bg-body rounded  shadow" style={{ border: "1px solid gray" }}>
                <div>
                    <h3>My Name Is {user.name || "fullName"} and I am {user.age || "age"} years old </h3>
                    <h3> I come from {user.city || "city"} </h3>
                    <h3>contact details:</h3>
                    <h2>email:  {user.email || "email"}</h2>
                    <h2>phone:  {user.phone || "phone"}</h2>
                    {/* <h1>Display</h1> */}
                </div>
            </div>
        </>
    );
});