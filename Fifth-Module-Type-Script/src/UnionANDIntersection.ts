// Union
type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "user") {
    return "User Dashboard";
  } else if (role == "admin") {
    return "Admin Dashboard";
  }
};

getDashboard("admin");

// Intersection

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};
type EmployeeManager = Employee & Manager;
const chodhuryShaheb : EmployeeManager = {
  id: "345",
  name: "Me",
  phoneNo: "4356",
  designation: "Emlo",
  teamSize: 23,
};

console.log(chodhuryShaheb);


