import {Component} from "react";

class TodoApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    "item": "hello"
                },
                {
                    "item": "hi"
                },
                {
                    "item": "bye"
                }
            ],
            item: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            item: event
        })
    }
    handleAddItem = () => {
        if(this.state.item !== ""){
            let newItem = {
                "item": this.state.item
            };
            let updateList = [...this.state.list,newItem];
            console.log(updateList);
            this.setState({
                list: updateList,
                item: ""
            })
        }else{
            alert("không được để trống!!");
        }
    }
    render() {
        return (
            <>
                <h1>Danh sách Todo List</h1>
                <input onChange={(evt) => this.handleChange(evt.target.value)}/>
                <button onClick={this.handleAddItem}>Add item</button>
                <table width="500px">
                    <thead>
                    <tr>
                        <th>Item</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((item,index) => (
                        <tr key={index}>
                            <td>{item.item}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    }

}
export default TodoApp;