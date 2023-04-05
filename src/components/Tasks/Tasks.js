import "./Tasks.css"



function Tasks(props) {

    

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
                    <div>Img 3</div>
                </button>
                <button type="button" className="btn btn-sm btn-light">
                    <div>Img 255</div>
                </button>
            </div>
            <div className="d-flex">
                <div className="me-3">IMg</div>
                <div>
                    <p>{props.task.job}</p>
                    <p>{props.task.full_name}</p>
                </div>
            </div>

             
            


        </div>
    );
}

export default Tasks;
