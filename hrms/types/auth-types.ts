export interface LoginResponse {
  token: string;
  user: Employee;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface Employee {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  employeeId: string;
  phone: string;
  joiningDate: string;
  active: number;
  token: string;
  department: string;
  designation: string;
  location: string;
  role: string;
  notifications: any[];
}
