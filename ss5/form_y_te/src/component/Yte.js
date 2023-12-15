import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
function Yte(){
    const initValue = {
        ten: "",
        CMND: "",
        namSinh: 0,
        gioiTinh: "",
        quocTich: "",
        coTheBaoHiem: "0",
        tinhThanh: "",
        dienThoai: "",
        email: "",
        diDenQuocGia: "",
        dauHieu: []
    }
    const validateSchema = {
        ten: Yup.string().required("Require"),
        CMND: Yup.string().required("Require"),
        namSinh: Yup.number().required("Require").min(1901,"> 1900"),
        quocTich: Yup.string().required("Require"),
        tinhThanh: Yup.string().required("Require"),
        dienThoai: Yup.string().required("Require"),
        email: Yup.string().required("Require").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+$/,"invalid email")
    }
    return (
        <>
            <h1>Tờ khai y tế</h1>
            <Formik initialValues={initValue} onSubmit={(values,{setSubmitting,resetForm}) => {
                console.log(values)
                toast("thêm mới thành công",{
                    position: "top-center",
                    autoClose: 2000
                });
                setTimeout(() => {
                    setSubmitting(false);
                    resetForm(initValue)
                },2000)
            }} validationSchema={Yup.object(validateSchema)}>
                {
                    ({isSubmitting}) => (
                        <Form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <Field type="text" className="form-control" name="ten"/>
                                <ErrorMessage name="ten" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">CMND</label>
                                <Field type="text" className="form-control" name="CMND"/>
                                <ErrorMessage name="CMND" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Năm sinh</label>
                                <Field type="text" className="form-control" name="namSinh"/>
                                <ErrorMessage name="namSinh" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-check-label">Giới tính</label>
                                <div className="form-check form-check-inline">
                                    <Field className="form-check-input" type="radio" name="gioiTinh" id="inlineRadio1"
                                            value="1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field className="form-check-input" type="radio" name="gioiTinh" id="inlineRadio2"
                                           value="0"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quốc tịch</label>
                                <Field type="text" className="form-control" name="quocTich"/>
                                <ErrorMessage name="quocTich" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Có thẻ bảo hiểm y tế
                                </label>
                                <Field className="form-check-input" type="checkbox" value="1" name="coTheBaoHiem"
                                       id="flexCheckDefault"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tỉnh thành</label>
                                <Field type="text" className="form-control" name="tinhThanh"/>
                                <ErrorMessage name="tinhThanh" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Điện thoại</label>
                                <Field type="text" className="form-control" name="dienThoai"/>
                                <ErrorMessage name="dienThoai" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <Field type="text" className="form-control" name="email"/>
                                <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">14 ngày qua, bạn có đi quốc gia nào</label>
                                <Field type="text" className="form-control" name="diDenQuocGia"/>
                            </div>

                            <label className='form-label'>14 ngày qua có thấy xuất hiện dấu hiệu nào không</label>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="sot" name="dauHieu"
                                       id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    sốt
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="ho" name="dauHieu"
                                       id="flexCheckDefault1"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    ho
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="khoTho" name="dauHieu"
                                       id="flexCheckDefault2"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault2">
                                    khó thở
                                </label>
                            </div>
                            {
                                isSubmitting ? <></> : <button type="submit" className="btn btn-primary">Submit</button>
                            }
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}
export default Yte;