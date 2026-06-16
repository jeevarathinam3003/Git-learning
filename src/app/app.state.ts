import { AuthState } from './auth/reducer/auth.state';
import { ClaimState } from './pages/claim/reducer/claim.state';
import { MeetingState } from './pages/meeting/reducer/meeting.state';
import { MembersState } from './pages/members/reducer/members.state';
import { GroupsState } from './pages/groups/reducer/groups.state';
import { CommonState } from './common/reducer/common.state';

export interface AppState {
    auth: AuthState;
    members: MembersState;
    meeting:MeetingState;
    claim:ClaimState,
    groups : GroupsState,
    common : CommonState
}