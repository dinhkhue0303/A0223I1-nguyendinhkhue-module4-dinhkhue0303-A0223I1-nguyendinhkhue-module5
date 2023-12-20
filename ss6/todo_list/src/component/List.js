import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";

import {toast} from "react-toastify";
import axios from "axios";
import * as listService from "../services/ListService";

function List(){
    const [list,setList] = useState({
        name: ""
    })
    const [todoList,setTodoList] = useState([])
    useEffect( () => {
        console.log("hello")
        //call api
        findAll();
    }, []);
    const findAll = async () => {
        try {
            let temp = await axios.get("http://localhost:8080/list")
            setTodoList(temp.data);
        }catch (e){
            console.log(e)
        }
    }

    const createList = async (values) => {
        console.log(values)
        try{
            await listService.createStudent(values);
            // await axios.post("http://localhost:8080/list",values)
            findAll();
            toast("thêm mới thành công",{
                position: "top-center",
                autoClose: 2000
            });
        }catch (e){
            console.log(e)
        }
    }

    return(
        <>
            <div className="contain">
                <h1>Todo List</h1>
                <Formik initialValues={list} onSubmit={(values,{setSubmitting,resetForm}) => {
                    resetForm(list);
                    setSubmitting(true);
                    setTimeout(() => {
                        setSubmitting(false);
                    },2500)
                    createList(values);
                }}>
                    {
                        ({isSubmitting}) => (
                            <Form>
                                <div>
                                    <Field type="text" name="name" className="form-control"/>
                                </div>
                                <div>
                                    {
                                        isSubmitting ? <></> : <button type="submit" className="btn btn-primary">Create</button>
                                    }
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>

            <table width="500px">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {todoList?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </>
    )
}
export default List;