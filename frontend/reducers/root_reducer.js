import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { entitiesReducer } from './entities_reducer';
import { errorsReducer } from './errors_reducer';
import { studentsReducer } from './students_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    students: studentsReducer,
    errors: errorsReducer
});

export default rootReducer;