import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState as State } from './app.state';
import { environment } from '../environments/environment.prod';
import * as authReducer from './auth/reducer/auth.reducer';
import * as membersReducer from './pages/members/reducer/members.reducer';
import * as meetingReducer from './pages/meeting/reducer/meeting.reducer';
import * as claimReducer from './pages/claim/reducer/claim.reducer';
import * as groupsReducer from './pages/groups/reducer/groups.reducer';
import * as commonReducer from './common/reducer/common.reducer'


export const reducers: ActionReducerMap<State> = {
    auth: authReducer.reducer,
    members : membersReducer.reducer,
    meeting : meetingReducer.reducer,
    claim : claimReducer.reducer,
    groups:groupsReducer.reducer,
    common : commonReducer.reducer

};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
    return function (state: State, action: any): State {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];
