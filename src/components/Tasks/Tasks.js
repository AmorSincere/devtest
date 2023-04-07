import "./Tasks.css"



function Tasks(props) {
   const image_objects=props.image_objects
    

    return (
        <div 
        className="Tasks"
         key={props.task.id}
         id={props.task.id}
          draggable="true" 
          onDragStart={e=>props.DragStartFunc(e)}
           onDragEnd={e=>props.DragEndFunc(e)} >
            
            {props.task.id}
                <div className="d-flex justify-content-between align-items-center">
                <h4>{props.task.title}</h4>
                <div className="btn btn-sm btn-light d-flex flex-column align-items-center ">
                    ...
                </div>
            </div>
            <p>{props.task.description}</p>
            <div className="d-flex">
                <button type="button" className="btn btn-sm btn-light priority"> <p>В приоритете</p></button>
                <button type="button" className="btn btn-sm btn-light mx-1">
                    <div className="d-flex align-items-center justify-content-center"> <img src={image_objects["tabler_users"]} alt="tabler_users" /> 3</div>
                </button>
                <button type="button" className="btn btn-sm btn-light">
                    <div  className="d-flex align-items-center justify-content-between"><img src={image_objects["Group"]} alt="Group" /> 255</div>
                </button>
            </div>
            <div className="d-flex align-items-center">
                <div className="me-3"><img src={image_objects["Ellipse"]} alt="Ellipse" /></div>
                <div>
                    <p>{props.task.job}</p>
                    <p>{props.task.full_name}</p>
                </div>
            </div>

             
            


        </div>
    );
}

export default Tasks;
