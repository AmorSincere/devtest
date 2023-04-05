import "./MainSection.css";
import { useState, useEffect } from "react";
import Tasks from '../Tasks/Tasks'


function MainSection() {
  const [data, setData] = useState(null);
  const [dropId, setDropId] = useState("");


  function DragOverFunc(event, id) {
    console.log("Drag Over", dropId, id);
    setDropId(id);
    event.preventDefault();

  }


  function DragStartFunc(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log("Drag started")

  }

  function DragEndFunc() {
    console.log("Drag ended")
  }

  function DragEnterFunc() {
    console.log("Drag entered!")
  }
  function DragDropFunc(event) {
    event.preventDefault();
    console.log("Drag Dropped!")
    const somedata = event.dataTransfer.getData("text/plain");

    var a = document.getElementById(somedata);
    // var mytab=document.getElementById(dropId);
    // mytab?.appendChild(a);
    // // event.target.appendChild(a);
    // console.log(data)
    // console.log(somedata,a)
    const containerElem = event.target.closest(".Tabs");
    const nearestcard = event.target.closest(".Tasks");
    containerElem.appendChild(a);
    containerElem.insertBefore(a, nearestcard);
  }

  useEffect(() => {


    fetch("  http://localhost:8000/tasks", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
    ).then(res => res.json())
      .then(res => {
        res = res.slice(0, 8);
        setData(res);

      }).catch(err => console.log(err))
  }, [])

  return (
    <div className="MainSection">


      <div className="Tabs" id="tab1" onDragOver={e => DragOverFunc(e, "tab1")} onDragEnter={DragEnterFunc} onDrop={DragDropFunc}>
        <div className="TabHeader"><h4>Новые</h4></div>
        {data && data.map(task => (
          <Tasks task={task} DragStartFunc={DragStartFunc} DragEndFunc={DragEndFunc}></Tasks>
        ))}
      </div>

      <div className="Tabs" id="tab2" onDragOver={e => DragOverFunc(e, "tab2")} onDragEnter={DragEnterFunc} onDrop={DragDropFunc} >
        <div className="TabHeader"><h4>Текущие</h4></div>
    
      </div>

      <div className="Tabs" id="tab3" onDragOver={e => DragOverFunc(e, "tab3")} onDragEnter={DragEnterFunc} onDrop={DragDropFunc}>
        <div className="TabHeader"><h4>Закрытые</h4></div>

      </div>

      <div className="Tabs" id="tab4" onDragOver={e => DragOverFunc(e, "tab4")} onDragEnter={DragEnterFunc} onDrop={DragDropFunc}>
        <div className="TabHeader"><h4>Архив</h4></div>
    
      </div>

      <div className="Tabs" id="tab5" onDragOver={e => DragOverFunc(e, "tab5")} onDragEnter={DragEnterFunc} onDrop={DragDropFunc}>
        <div className="TabHeader"><h4>Удаленные</h4></div>

      </div>



    </div>
  );
}

export default MainSection;
