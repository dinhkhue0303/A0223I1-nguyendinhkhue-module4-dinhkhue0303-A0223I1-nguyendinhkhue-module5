import {useState} from "react";
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";

function LibraryCreate(){
    const navigate = useNavigate();
    const [library,setLibrary] = useState({
        title: "",
        quantity: 0
    })
    const [showAlert, setShowAlert] = useState(false);
    const handleCreate = async (values) => {
        try {
            await axios.post("http://localhost:8080/librarys" ,values)
        }catch (e){
            console.log(e)
        }
    }
    const handleAlert = () => {
        navigate("/library/list");
    }
    return(
        <>
            <div>
            <h1>Add new Book</h1>
            <Formik initialValues={library} onSubmit={(values, {setSubmitting,resetForm}) =>{
                handleCreate(values);
                // toast("hello",{
                //     position:"top-center",
                //     autoClose: 2000
                // })
            }}>
                {
                    ({isSubmitting}) => (
                        <Form>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <Field type="text" className="form-control" name="title"/>
                            </div>
                            <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <Field type="number" className="form-control" name="quantity"/>
                            </div>
                            {
                                isSubmitting ? <></> : <button type="submit" className="btn btn-primary"
                                                               data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                            }
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Create thành công
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={() => handleAlert()}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>

        </div>
        </>
    )
}
export default LibraryCreate;