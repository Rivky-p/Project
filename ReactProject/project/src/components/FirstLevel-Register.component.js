import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import UserService from '../services/user.service';
import { actions } from '../redux/Action';
import { connect } from 'react-redux';

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('this field is required'),
    age: Yup.number().required('this field is required').positive("age must be positive number"),
    city: Yup.string().required('this field is required'),
    email: Yup.string().required('this field is required').email('bad email'),
    phone: Yup.string().required('this field is required'),
});


const mapDispachToProps = function (dispatch) {
    return {
        setUser: (u) => dispatch(actions.setUser(u)),
    }
}

export default connect(null, mapDispachToProps)(function FirstLevel(props) {    
    let { setUser,history } = props;
    const handleSubmit = async (values) => {
        try {
            const user = await UserService.register(values);
            console.log(user);
            setUser(user.user);
            history.push('/second')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <h1>Register</h1>
                    <Formik
                        initialValues={{ name: '', age: '', city: '', email: '', phone: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={RegisterSchema}
                        render={() => {
                            return (
                                <Form>
                                    <div className="form-group">
                                        <Field type="text" name="name" className="form-control" placeholder="Name" />
                                        <ErrorMessage name="name" component="div" className="alert alert-danger" />
                                    </div>
                                    <div className="form-group">
                                        <Field type="number" name="age" className="form-control" placeholder="Age" />
                                        <ErrorMessage name="age" component="div" className="alert alert-danger" />
                                    </div>
                                    <div className="form-group">
                                        <Field type="text" name="city" className="form-control" placeholder="City" />
                                        <ErrorMessage name="city" component="div" className="alert alert-danger" />
                                    </div>
                                    <div className="form-group">
                                        <Field type="email" name="email" className="form-control" placeholder="Email" />
                                        <ErrorMessage name="email" component="div" className="alert alert-danger" />
                                    </div>
                                    <div className="form-group">
                                        <Field type="text" name="phone" className="form-control" placeholder="Phone" />
                                        <ErrorMessage name="phone" component="div" className="alert alert-danger" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-secondary">Submit</button>
                                    </div>
                                </Form>
                            );
                        }} />
                </div>
            </div>
        </>
    );
});