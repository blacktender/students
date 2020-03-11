const names = ['Mark', 'Matthew', 'Anthony', 'Kenneth', 'Brian', 'Daniel', 'Larry', 'Benjamin', 'Tyler', 'Adam', 'Peter', 'Nicholas', 'Gary', 'Jacob']

const surnames = ['JACKSON', 'MILLER', 'WILLIAMS', 'SMITH', 'ANDERSON', 'WHITE', 'HARRIS', 'SCOTT']

const grades = ['d', 'c', 'b', 'a']

const random = (array) => array[Math.floor(Math.random() * array.length)]

const students = new Array(20).fill().map((item, i) => {
    const name = random(names)
    const surname = random(surnames)
    const grade = random(grades)

    return {
        id: i + 1,
        name: `${name} ${surname}`,
        birthday: `${i + 10}.01.1990`,
        progress: grade
    }
 })

 localStorage.setItem('students', JSON.stringify(students))