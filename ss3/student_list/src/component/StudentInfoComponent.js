import {Component} from "react";
class StudentInfoComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            student: [
                {
                    "id": 1,
                    "name": "nam",
                    "age": 10,
                    "address": "ha noi"
                },
                {
                    "id": 2,
                    "name": "trung",
                    "age": 20,
                    "address": "ha noi"
                },
                {
                    "id": 3,
                    "name": "bao",
                    "age": 17,
                    "address": "da nang"
                }
            ]
        }
    }
    render() {
        return(
            <>
                <h1>Danh sách sinh viên</h1>
                <table width="500px">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.student.map((item,index) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    }

}
export default StudentInfoComponent;