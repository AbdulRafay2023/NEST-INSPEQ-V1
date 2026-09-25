export type userFormatInputType = {
  id: number;
  name: string;
  email: string;
  departments: {
    department: {
      id: number;
      name: string;
    };
  }[];
};

export type userFormatResponseType = {
  id: number;
  name: string;
  email: string;
  departments: {
    id: number;
    name: string;
  }[];
};
