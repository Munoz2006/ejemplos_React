import './Home.css'
export const Home = () => {
    return (
       <>
       <main>
        <div className="container">
            <h1>To-Do List</h1>
            <div className="add-task">
                <input type="text" className="task-input" placeholder="Hacer ejercicio"/>
                <input type="text" className="description-input" placeholder="Descripción"/>
                <button id="add-button">Add Task</button>
            </div>
            <div className="filter">
                <button className="filter-button active" data-filter="all">All</button>
                <button className="filter-button" data-filter="pending">Pending</button>
                <button className="filter-button" data-filter="completed">Completed</button>
            </div>
            <div className="task-list">
                <div className="task-item" data-status="pending">
                    <input type="checkbox" className="task-checkbox" />
                    <div className="task-content">
                        <div className="task-title">Barrer</div>
                        <div className="task-description">Realizar aseo del lugar</div>
                    </div>
                </div>
                <div className="task-item" data-status="pending">
                    <input type="checkbox" className="task-checkbox"/>
                    <div className="task-content">
                        <div className="task-title">Estudiar para examen</div>
                        <div className="task-description">Preparación bimestral</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
    )
}