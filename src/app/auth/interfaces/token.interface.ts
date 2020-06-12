import { RolesEnum } from '../enums';

export interface ITokenModel {
  id: string;
  roles: RolesEnum[];
  exp: number;
  emailAddress: string;
  iat: number;
}
