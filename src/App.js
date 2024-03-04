import React, {useState} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {

  const[todoData, setTodoData] = useState([]);
  const[value, setValue] = useState("");

  // const btnStyle = {
  //   color: "#fff",
  //   border: "none",
  //   padding: "5px 9px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   float:"right",
  //   };

  // const getStyle = (completed) => {
  //   return {
  //     padding: "10px",
  //     borderBottom: "1px #ccc dotted",
  //     textDecoration: completed ? "line-through" : "none",
  //   };
  // };


  // const handleClick = (id) => {
  //   let newTodoData = todoData.filter(data => data.id !== id);
  //   console.log("newTodoData", newTodoData);
  //   setTodoData(newTodoData);
  // };


  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };


  const handleSubmit = (e) => {
    //form 안에 input을 전송할 때 페이지 리로드 되는 것을 막아줌.
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 추가하기.
    // this.setState({todoData: [...this.state.todoData, newTodo], value:""});
    setTodoData(prev =>[...prev, newTodo]);
    setValue("");
  };

  // const handleCompleteChange = (id) => {
  //   let newTodoData = todoData.map((data) => {
  //     if (data.id === id) {
  //       data.completed = !data.completed;
  //     }
  //     return data;
  //   });

  //   setTodoData(newTodoData);
  //   //this.setState({todoData: newTodoData});
  // };


    return(
      <div className="container">
        <div className="todoBlock">
          {/* Part Title */}
          <div className="title">
            <h1>Todo List</h1>
          </div>

          <Lists todoData={todoData} setTodoData={setTodoData}/>

          <Form handleSubmit= {handleSubmit} value={value} setValue={setValue}/>

          {/* map 메서드 활용
          {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}>
              <p>
                <input type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleteChange(data.id)}/> 
                {data.title}
                <button style={btnStyle}
                onClick={() => handleClick(data.id)}>x</button>
              </p>
            </div>
          ))} */}

          {/* <form style={{display: 'flex'}} onSubmit={handleSubmit} >
            <input 
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px'}}
              placeholder="할 일을 입력하세요."
              value={value}
              onChange={handleChange}
            />

            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1'}}
            />

          </form>       */}

        </div>
      </div>
    )
}
