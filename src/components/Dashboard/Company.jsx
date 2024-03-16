import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
const columns = [
    { field: 'SR', headerName: 'id', width: 90 },
    {
      field: 'Comapany Name',
      headerName: 'ComapanyName',
      width: 150,
      editable: true,
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'Phone',
      headerName: 'Phone',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'City',
      headerName: 'City',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'Country',
        headerName: 'Country',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'Action',
        headerName: 'Action',
        type: 'number',
        width: 110,
        editable: true,
      },
  ];
  
  const rows = [
    { id: 1, ComapanyName: 'Snow', Email: 'Jon', Phone: 14,Country:'India', Action:'' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
const Company = () => {
  return (
    <div className=" mx-14">
        <h1 className="text-3xl font-bold text-black p-3">ALL COMPANY</h1>
      <div className="bg-slate-100 p-5">
        <div className="flex justify-between pb-8">
          <ul className="flex">
            <li>
              <Link className="font-semibold text-blue-500">All Company</Link>
            </li>
          </ul>
          <ul className="flex">
            <li className="p-1.5 bg-white border-1 w-40 border-blue-500 rounded-2xl">
            <ControlPointSharpIcon className="text-blue-500"/>  <Link className="text-blue-500">Add Company</Link>
            </li>
          </ul>
        </div>

        <div className="flex space-x-8 items-center justify-center p-3  ">
          <div className="border-2 border-blue-300 rounded-2xl w-150px space-x-2 bg-white ">
            <input type="text" 
            placeholder="Search Client..."
            className="rounded-full p-1  border-none w-72 border-white" />
            <button className="text-white bg-blue-500 rounded-md  m-1"> 
              Search
            </button>
          </div>

          <button className="text-white bg-blue-500 rounded-2xl p-1 w-44">
            Applay Search Filter
          </button>
        </div>




        <div className="bg-white rounded-md">
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
     
     
      />
    </Box>
        </div>
      </div>
    </div>
  );
};

export default Company;
