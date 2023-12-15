import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';

function Contact(){
    const initValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const validateSchema = {
        name: Yup.string().required("Require"),
        email: Yup.string().required("Require").matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+$/,"inValid Email"),
        phone: Yup.string().required()
    }
    return (
        <>
            <h1>Contact Form</h1>
            <Formik initialValues={initValue} onSubmit={(values,{setSubmitting}) => {
                console.log(values)
                toast("Thêm mới thành công",{
                    position: "top-center",
                    autoClose: 2000
                });
                setTimeout(() => {
                    setSubmitting(false);
                },2000);
            }} validationSchema={Yup.object(validateSchema)}>
                {
                    ({isSubmitting}) => (
                        <Form>
                            <div className='mb-3'>
                                <label className='form-label'>Name</label>
                                <Field type="text" className='form-control' name="name"/>
                                <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Email</label>
                                <Field type="text" className='form-control' name="email"/>
                                <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Phone</label>
                                <Field type="text" className='form-control' name="phone"/>
                                <ErrorMessage name="phone" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Message</label>
                                <Field type="text" className='form-control' name="message"/>
                                <ErrorMessage name="message" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            {
                                isSubmitting ? <></> :
                                    <button type="submit" className="btn btn-primary">Submit</button>
                            }
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}
export default Contact;