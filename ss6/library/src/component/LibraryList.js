import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function LibraryList(){
    const [library,setLibrary] = useState([])
    const [selectIdItem,setSelectIdItem] = useState(null);
    useEffect(() => {
        findAll();
    }, []);
    const findAll = async () => {
        try {
            let temp = await axios.get("http://localhost:8080/librarys");
            setLibrary(temp.data);
        }catch (e){
            console.log(e)
        }
    }
    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8080/librarys/"+id);
            findAll();
        }catch (e){
            console.log(e)
        }
    }
    return(
        <>
            <h1>Library</h1>
            <NavLink to={"/library/create"} className="btn btn-primary">create</NavLink>
            <table className="table">
                <thead className="table-dark">
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {library?.map((item,index) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <NavLink className="btn btn-primary" to={`/library/update/${item.id}`}>Update</NavLink>
                        </td>
                        <td>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            type="button" onClick={() => setSelectIdItem(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                            onClick={() => handleDelete(selectIdItem)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LibraryList;