import { useCallback, useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component-with-filter";
import * as XLSX from "xlsx";
import Header from "../Layout/Header";
import axios from "axios";
import LOGO from "../../assets/images/logo.png";
import Fancybox from "../Layout/Fancybox";

const AdminPage = () => {
  let num = 0;
  const [data, setData] = useState([]);
  const columns = useCallback([
    {
      name: "Sr.",
      width: "50px",
      selector: (row, index) => index + 1,
    },
    {
      name: "Doctor Code",
      sortable: true,
      filterable: true,
      width: "200px",
      selector: (row) => row.emp_id,
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
      selector: (row) => row.years_of_practice,
    },
    {
      name: "No. of patients daily",
      sortable: true,
      filterable: true,
      width: "200px",
      selector: (row) => row.pts_treated_daily,
    },
    {
      name: "Image",
      width: "200px",
      selector: (row) => row.media_path,
      cell: (row) => {
        return (
          <a href={row.media_path} className="text-[#007DC4]">
            View
          </a>
        );
      },
    },
  ]);

  useEffect(() => {
    axios
      .post(`https://independenceday.acidityfreelife.com/api/index.php`, {
        operation: "get_saved_doctors",
      })
      .then((response) => {
        console.log(response);
        setData(response.data.doctors);
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
          className="btn shrink-0 bg-[#04AA6D] border-[#04AA6D] p-2  rounded-md"
          onClick={() => exportToXlsx(data)}
        >
          Download XLSX
        </button>
      </div>
    );
  });
  return (
    <>
      <div
        className="w-[100%] h-[100vh] backImage"
        style={{ overflow: "auto" }}
      >
        <img
          src={LOGO}
          alt="logo"
          className="absolute"
          style={{
            top: "10px",
            right: "10px",
            width: "100%",
            height: "auto",
            maxWidth: "120px",
            zIndex: 100,
            pointerEvents: "none",
          }}
        />
        <div className="flex justify-center pt-14 ">
          <div
            className="card shadow !p-0"
            style={{ border: "1px solid black" }}
          >
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
      </div>
    </>
  );
};
export default AdminPage;
