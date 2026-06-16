import { OperatorFunction } from "rxjs";
import { ValidateUserSuccess } from "../../auth/actions/auth.action";

export interface ResponseInterface {
    message: string;
    data?: any;
    status: Number;
    count?:any;
}
