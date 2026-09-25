import { userFormatInputType, userFormatResponseType } from './types';

export class usersHelpers {
  formatUser(user: userFormatInputType): userFormatResponseType {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      departments: user.departments.map(({ department }) => ({
        ...department,
      })),
    };
  }
}
