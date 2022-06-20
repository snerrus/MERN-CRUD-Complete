import axios from 'axios';

class EmployeeService {

    deleteemployee(id) {
        axios.get('http://localhost:8000/deleteemployee/' + id)
            .then(() => {
                console.log('Employee Deleted !!!')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default EmployeeService;