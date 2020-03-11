import React from 'react'

const Table = ({ students, onDeleteStudent }) => {
    const deleteStudent = (id) => onDeleteStudent(id)

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((item) => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.birthday}</td>
                        <td>{item.progress}</td>
                        <td>
                            <button type="button" className="btn btn-info mr-2" onClick={deleteStudent.bind(null, item.id)}>
                                    Edit
                            </button>
                            <button type="button" className="btn btn-danger" onClick={deleteStudent.bind(null, item.id)}>
                                Delete
                            </button>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table