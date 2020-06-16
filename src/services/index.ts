import { IResponse } from '../interfaces/response';

export interface ILoginService {
    login(name: string, password: string): Promise<IResponse<boolean>>;
}
