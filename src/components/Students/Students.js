import React, { useState, useEffect } from 'react'

import Error from '../Error'
import Loader from '../Loader'
import Table from '../Table'

const Students = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [students, setStudents] = useState([])

    useEffect(() => getStudentList(), [])

    const getStudentList = () => {
        try {
            const students = JSON.parse(localStorage.getItem('students'))

            setStudents(students)

            if (students.length > 0) {
                setIsLoading(false)
            } 

            return students
        }

        catch (err) {
            setIsError(true)
        } 
    }

    const deleteStudent = (id) => {
        const studentsUpdate = students.filter((student) => student.id !== id)

        setStudents(studentsUpdate)
    }

    const addStudent = () => {
        const lastStudentId = () => students.slice(-1)[0].id

        const nextStudentId = lastStudentId() + 1
    }

    if (isError) {
        return <Error />
    }

    return (
        <div className="mt-4">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <button type="button" className="btn btn-success mb-2" onClick={addStudent}>Add student</button>
                    {students.length > 0 ? (
                        <Table students={students} onDeleteStudent={deleteStudent} />
                    ) : (
                        <div>There are no students on the course yet.</div>
                    )}
                </>
            )}
        </div>
    )
}

export default Students