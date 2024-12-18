import { DELETE_STUDENT_ERROR, DELETE_STUDENT_PROGESS, DELETE_STUDENT_SUCCESS, GET_STUDENT_ERROR, GET_STUDENT_PROGESS, GET_STUDENT_SUCCESS, POST_STUDENT_ERROR, POST_STUDENT_PROGESS, POST_STUDENT_SUCCESS, UPDATE_STUDENT_ERROR, UPDATE_STUDENT_PROGESS, UPDATE_STUDENT_SUCCESS } from "../action/action";

  
  const initlSatus = {
  
    // GET STUDENT
  
    student: [],
    getstudentprogress: false,
    getstudenterror: null,

    // POST STUDENT

    poststudentprogress: false,
    poststudenterror: null,

    // DELETE STUDENT

    deletestudentprogress: false,
    deletestudenterror: null,

    // UPDATE STUDENT

    updatestudentprogress: false,
    updatestudenterror: null,

    dataIsLodad : true,
  };
  
  const StudentReducer = (state = initlSatus, action) => {
    switch (action.type) {
  
      // GET STUDENT
  
      case GET_STUDENT_PROGESS: {
        return {
          ...state,
          getstudentprogress: true,
        };
      }
      case GET_STUDENT_SUCCESS: {
        return {
          ...state,
          dataIsLoded: false,
          student: action.data,
        };
      }
      case GET_STUDENT_ERROR: {
        return {
          ...state,
          getstudenterror: action.data,
        };
      }

      // POST STUDENT

      case POST_STUDENT_PROGESS: {
        return {
          ...state,
          poststudentprogress: true,
        };
      }
      case POST_STUDENT_SUCCESS: {
        return {
          ...state,
          dataIsLoded: false,
          student: state.student.concat(action.data),
        };
      }
      case POST_STUDENT_ERROR: {
        return {
          ...state,
          poststudenterror: action.data,
          };
      }

      // DELETE STUDENT

      case DELETE_STUDENT_PROGESS: {
        return {
          ...state,
          deletestudentprogress: true,
        };
      }
      case DELETE_STUDENT_SUCCESS: {
        return {
          ...state,
          dataIsLoded: false,
          student: state.student.filter((e)=>e.id!==action.data),
        };
      }
      case DELETE_STUDENT_ERROR: {
        return {
          ...state,
          deletestudenterror: action.data,
          };
      }

      // UPDATE STUDENT

      case UPDATE_STUDENT_PROGESS: {
        return {
          ...state,
          updatestudentprogress: true,
        };
      }
      case UPDATE_STUDENT_SUCCESS: {
        return {
          ...state,
          dataIsLoded: false,
          student : state.student.map((i)=>{
            if(i.id === action.data.id){
                return {...i,...action.data}
            }else{
                return i
            }
        })
        };
      }
      case UPDATE_STUDENT_ERROR: {
        return {
          ...state,
          updatestudenterror: action.data,
          };
      }
  
      default: {
        return {
          ...state,
        };
      }
    }
  };
  export default StudentReducer;
  