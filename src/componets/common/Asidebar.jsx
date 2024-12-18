import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GET_FACULTY_PROGESS} from '../../redux-saga/faculty/action/action'
import { GET_STUDENT_PROGESS } from '../../redux-saga/student/action/action'

const Asidebar = ({data}) => {

    const dispatch=useDispatch()

    useEffect(()=>{
        if(data[0].role==="admin"){
            dispatch({type:GET_FACULTY_PROGESS})
            dispatch({type:GET_STUDENT_PROGESS})
        }else if(data[0].role==="faculty"){
            dispatch({type:GET_FACULTY_PROGESS})
            dispatch({type:GET_STUDENT_PROGESS})
        }else if(data[0].role==="student"){
            dispatch({type:GET_FACULTY_PROGESS})
            dispatch({type:GET_STUDENT_PROGESS})
        }
    },[])

    return (
        <div>
            <div>
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse shadow-lg">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            {
                                data?.map((e, index) => {
                                    return (
                                        <li key={index} className="nav-item">
                                            <Link to={`${e.path}`} className="nav-link active" aria-current="page" href="#">
                                                {e.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}

export default Asidebar