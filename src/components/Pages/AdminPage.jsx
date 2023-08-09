import { useCallback, useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component-with-filter";
import * as XLSX from "xlsx";
import Header from "../Layout/Header";

const AdminPage = () => {
  const [data, setData] = useState([
    {
      serial_no: 1,
      doctor_code: "DOC001",
      doctor_name: "Dr. John Smith",
      years_experience: 15,
      patients_treated_daily: 30,
      image_path: "path/to/doctor1.png",
    },
    {
      serial_no: 2,
      doctor_code: "DOC002",
      doctor_name: "Dr. Emily Johnson",
      years_experience: 10,
      patients_treated_daily: 25,
      image_path: "path/to/doctor2.png",
    },
    {
      serial_no: 3,
      doctor_code: "DOC003",
      doctor_name: "Dr. Michael Williams",
      years_experience: 8,
      patients_treated_daily: 20,
      image_path: "path/to/doctor3.png",
    },
    {
      serial_no: 4,
      doctor_code: "DOC004",
      doctor_name: "Dr. Sophia Davis",
      years_experience: 5,
      patients_treated_daily: 15,
      image_path: "path/to/doctor4.png",
    },
    {
      serial_no: 5,
      doctor_code: "DOC005",
      doctor_name: "Dr. Daniel Wilson",
      years_experience: 12,
      patients_treated_daily: 28,
      image_path: "path/to/doctor5.png",
    },
    {
      serial_no: 6,
      doctor_code: "DOC006",
      doctor_name: "Dr. Olivia Brown",
      years_experience: 7,
      patients_treated_daily: 18,
      image_path: "path/to/doctor6.png",
    },
    {
      serial_no: 7,
      doctor_code: "DOC007",
      doctor_name: "Dr. James Lee",
      years_experience: 9,
      patients_treated_daily: 22,
      image_path: "path/to/doctor7.png",
    },
    {
      serial_no: 8,
      doctor_code: "DOC008",
      doctor_name: "Dr. Ava Martinez",
      years_experience: 3,
      patients_treated_daily: 12,
      image_path: "path/to/doctor8.png",
    },
    {
      serial_no: 9,
      doctor_code: "DOC009",
      doctor_name: "Dr. Ethan Clark",
      years_experience: 6,
      patients_treated_daily: 16,
      image_path: "path/to/doctor9.png",
    },
    {
      serial_no: 10,
      doctor_code: "DOC010",
      doctor_name: "Dr. Mia Rodriguez",
      years_experience: 11,
      patients_treated_daily: 26,
      image_path: "path/to/doctor10.png",
    },
    {
      serial_no: 9,
      doctor_code: "DOC009",
      doctor_name: "Dr. Ethan Clark",
      years_experience: 6,
      patients_treated_daily: 16,
      image_path: "path/to/doctor9.png",
    },
    {
      serial_no: 10,
      doctor_code: "DOC010",
      doctor_name: "Dr. Mia Rodriguez",
      years_experience: 11,
      patients_treated_daily: 26,
      image_path: "path/to/doctor10.png",
    },
  ]);
  const columns = useCallback([
    {
      name: "Sr.",
      width: "50px",
      selector: (row) => row.serial_no,
    },
    {
      name: "Doctor Code",
      sortable: true,
      filterable: true,
      width: "200px",
      selector: (row) => row.doctor_code,
    },
    {
      name: "Doctor Name",
      sortable: true,
      filterable: true,
      width: "200px",
      selector: (row) => row.doctor_name,
    },
    {
      name: "No. of Years experience",
      sortable: true,
      filterable: true,
      width: "200px",
      selector: (row) => row.years_experience,
    },
    {
      name: "No. of patients daily",
      sortable: true,
      filterable: true,
      width: "200px",
      selector: (row) => row.patients_treated_daily,
    },
    {
      name: "Image",
      width: "200px",
      selector: (row) => row.image_path,
      sortable: true,
      filterable: true,
    },
  ]);

  useEffect(() => {
    axios
      .post(`https://independenceday.acidityfreelife.com/api/index.php`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const actionExport = useMemo(() => {
    const exportToXlsx = (data) => {
      let wb = XLSX.utils.book_new();
      let ws1 = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws1, "React Table Data");
      XLSX.writeFile(wb, `test.xlsx`);
      return false;
    };
    return (
      <div className="flex gap-3 items-center justify-center">
        <button
          className="btn shrink-0 bg-green-600 p-2 font-[md] rounded-md"
          onClick={() => exportToXlsx(data)}
        >
          Download XLSX
        </button>
      </div>
    );
  });
  return (
    <div className="flex justify-center mt-2 ">
      <div className="card shadow !p-0" style={{ border: "1px solid black" }}>
        <DataTable
          title="Doctors List"
          pagination
          columns={columns}
          data={data}
          persistTableHead
          actions={actionExport}
        />
      </div>
    </div>
  );
};
export default AdminPage;
