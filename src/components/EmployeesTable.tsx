import React from "react";
import Tag from "./Tag";
import Tags from "./Tags";

enum EMPLOYEE_STATUS {
  working = "working",
  not_working = "not working",
}

export interface Employee {
  username: string;
  name: string;
  email: string;
  status: EMPLOYEE_STATUS;
  role: string;
  teams: string[];
}

const formatEmployeeStatus = (status: EMPLOYEE_STATUS) => {
  return status === EMPLOYEE_STATUS.working ? "Working" : "Not Working";
}

const EmployeesTable = ({employees}: { employees: Employee[] }) => {
    const columns = [
      "Name",
      "Status",
      "Role",
      "Email",
      "Teams"
    ];
    return (
      <table className={"text-[14px] text-[#2E2E2E] w-[90%] mx-auto my-[12px] rounded-[8px]"}
             style={{boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.12)"}}>
        <thead>
        <tr className={"leading-[20px] "}>
          <th className={"bg-[#F7F7F7] rounded-tl-[8px] text-left py-[14px] pl-[12px] w-[28px]"}>
            <input type="checkbox"/>
          </th>
          {columns.map((columnName, index) => {
            return (
              <th
                className={`bg-[#F7F7F7] text-left py-[14px] pl-[12px] ${index === columns.length - 1 ? "rounded-tr-[8px]" : ""}`}
                key={columnName}
              >
                {columnName}
              </th>
            );
          })}
        </tr>
        </thead>
        <tbody>
        {employees.map(employee => {
          return (
            <tr key={employee.username} className={"border-[1px] border-[#F2F2F2]"}>
              <td className={"py-[6px] pl-[12px] w-[28px]"}>
                <input type="checkbox"/>
              </td>
              <td
                className={"py-[6px] pl-[12px] leading-[20px]"}>
                {employee.name}
                <br/>
                <span
                  className={"text-[#5D5D5D] text-[12px] leading-[16px]"}
                >
                  @{employee.username}
                </span>
              </td>
              <td className={"py-[6px] pl-[12px]"}>
                <Tag label={formatEmployeeStatus(employee.status)}
                     type={employee.status === EMPLOYEE_STATUS.working ? "primary" : "danger"}/>
              </td>
              <td className={"py-[6px] pl-[12px]"}>{employee.role}</td>
              <td className={"py-[6px] pl-[12px]"}>{employee.email}</td>
              <td className={"py-[6px] pl-[12px]"}>
                <Tags labels={employee.teams} noOfLabelsToShow={3}/>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
;

export default EmployeesTable;
