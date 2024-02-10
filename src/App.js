import Header from './Header_1';
import Content from './Content';
import Footer from './Footer_1';
import { useState } from 'react';
import './index.css';
import AddItems from './AddItems';
import SearchItem from './SearchItem';
function App() {
  
  let [list, setList] = useState( 
    JSON.parse(localStorage.getItem("todo_list"))
  ) 
function handleCheck(id){
    const changeItems = list.map((one_list)=>
        one_list.id === id ? {...one_list, checked:!one_list.checked} :one_list)
    setList(changeItems)
    localStorage.setItem("todo_list", JSON.stringify(changeItems)) 
}
function delWork(id){
    const delBtn = list.filter((del_list)=>
        del_list.id !== id)
    setList(delBtn)
    localStorage.setItem("todo_list", JSON.stringify(delBtn)) 
}

// Add items
const [newItem, setNewItem] = useState("")

function addItem(works){
  const id = list.length ? list[list.length-1].id+1 :1;
  const addNewItem = {id,checked:false,work:works}
  const changeItems = [...list, addNewItem]
  setList(changeItems)
  localStorage.setItem("todo_list", JSON.stringify(changeItems)) 
}
function handleSubmit(e){
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
}

// search Items
const [search , setSearch] = useState("")


  return (
    <div className="App">
      <Header title = "To Do List App" /> 
      <AddItems
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        list = {list.filter(item =>((item.work).toLowerCase()).includes(search.toLowerCase()))}
        // list = {list}
        handleCheck = {handleCheck}
        delWork = {delWork}
      />
      <Footer work = {list.length} />             
    </div>
  );
}

export default App;
