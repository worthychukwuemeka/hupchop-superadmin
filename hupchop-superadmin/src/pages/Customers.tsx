/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaSortUp, FaSortDown } from 'react-icons/fa'; // Ensure this import exists
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

interface TableRowProps {
  id: number;
  avatar: string;
  customerName: string;
  address: string;
  phoneNumber: string;
  email: string;
  registeredDate: string;
  lastOrderDate: string;
  status: string;
}

const Customers: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const rows: TableRowProps[] = [
    {
      id: 1,
      avatar: './assets/images/avatar/1.png',
      customerName: 'John Doe',
      address: 'Army Barracks, Asokoro',
      phoneNumber: '+234 123 456 7890',
      email: 'johndoe@example.com',
      registeredDate: '2023-05-20',
      lastOrderDate: '2023-06-15, 12:23PM',
      status: 'Active',
    },
    {
      id: 2,
      avatar: './assets/images/avatar/2.png',
      customerName: 'Jane Smith',
      address: 'Peace Villa & Suites, Mpape',
      phoneNumber: '+234 987 654 3210',
      email: 'janesmith@example.com',
      registeredDate: '2023-05-22',
      lastOrderDate: '2023-06-10, 1:30PM',
      status: 'Inactive',
    },
    {
      id: 3,
      avatar: './assets/images/avatar/3.png',
      customerName: 'Michael Johnson',
      address: '4 Mike Akhigbe Way, Jabi',
      phoneNumber: '+234 555 789 1234',
      email: 'michaeljohnson@example.com',
      registeredDate: '2023-06-01',
      lastOrderDate: '2023-06-20, 3:45PM',
      status: 'Active',
    },
    {
      id: 4,
      avatar: './assets/images/avatar/4.png',
      customerName: 'Emily Davis',
      address: '12 Jabi Garage, Abuja',
      phoneNumber: '+234 222 333 4444',
      email: 'emilydavis@example.com',
      registeredDate: '2023-05-25',
      lastOrderDate: '2023-06-18, 2:15PM',
      status: 'Active',
    },
    {
      id: 5,
      avatar: './assets/images/avatar/5.png',
      customerName: 'David Brown',
      address: 'Gwarinpa 7th Avenue',
      phoneNumber: '+234 111 222 3333',
      email: 'davidbrown@example.com',
      registeredDate: '2023-06-05',
      lastOrderDate: '2023-06-22, 4:00PM',
      status: 'Inactive',
    },
  ];

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedRows(prevSelectedRows =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter(rowId => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const filteredRows = useMemo(() => {
    return rows.filter(row =>
      row.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.registeredDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, rows]);

  const sortedRows = useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredRows].sort((a, b) => {
        if (a[sortConfig.key as keyof TableRowProps] < b[sortConfig.key as keyof TableRowProps]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key as keyof TableRowProps] > b[sortConfig.key as keyof TableRowProps]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredRows;
  }, [filteredRows, sortConfig]);

  return (
    <div>
      <Sidebar />
      <Header />

      <main className="nxl-container">
        <div className="nxl-content">
          {/* Breadcrumb */}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Customers</h5> {/* Updated to "Customers" */}
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item">Customers</li> {/* Updated to "Customers" */}
              </ul>
            </div>
            <div className="page-header-right ms-auto">
              <div className="page-header-right-items">
                <div className="d-flex d-md-none">
                  <a href="javascript:void(0)" className="page-header-right-close-toggle">
                    <i className="feather-arrow-left me-2"></i>
                    <span>Back</span>
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                  <a href="javascript:void(0);" className="btn btn-icon btn-light-brand" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    <i className="feather-bar-chart"></i>
                  </a>
                  <div className="dropdown">
                    <a className="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                      <i className="feather-filter"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-map-pin me-3"></i>
                        <span>Sort by Address</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-clock me-3"></i>
                        <span>Sort by Time of Order</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-tag me-3"></i>
                        <span>Sort by Price</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-calendar me-3"></i>
                        <span>Sort by Date</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-star me-3"></i>
                        <span>Sort by Rating</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-list me-3"></i>
                        <span>Sort by Category</span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-arrow-up-right me-3"></i>
                        <span>Export to CSV</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-printer me-3"></i>
                        <span>Print Order</span>
                      </a>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="btn btn-icon btn-light-brand">
                    <i className="feather-refresh-cw"></i>
                  </a>

                  <div className="dropdown">
                    <a className="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                      <i className="feather feather-paperclip"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-file-text me-3"></i>
                        <span>Download data as PDF</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-file-text me-3"></i>
                        <span>Download data as CSV</span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-printer me-3"></i>
                        <span>Print</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-md-none d-flex align-items-center">
                <a href="javascript:void(0)" className="page-header-right-open-toggle">
                  <i className="feather-align-right fs-20"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div id="collapseOne" className="accordion-collapse collapse page-header-collapse">
            <div className="accordion-body pb-2">
              <div className="row">
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-primary">
                        <i className="feather-shopping-bag stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">245</h5>
                        <span>Total Orders</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-success">
                        <i className="feather-check stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">145</h5>
                        <span>Delivered</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-warning">
                        <i className="feather-clock stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">60</h5>
                        <span>Processing</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-danger">
                        <i className="feather-x-circle stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">40</h5>
                        <span>Cancelled</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-grey">
                        <i className="feather-x stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">0</h5>
                        <span>Unpaid</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-info">
                        <i className="feather-airplay stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">85</h5>
                        <span>Total Sales</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><br />

          {/* Table */}
          <div className="main-content">
            <div className="row">
              <div className="col-xxl-8">
                <div className="card stretch stretch-full">
                  <div className="card-header">
                    <h5 className="card-title">Customers</h5>
                    <div className="card-header-action">
                      {/* Search box */}
                      <input
                        type="text"
                        placeholder="Search Customers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>
                              <input type="checkbox" onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedRows(rows.map(row => row.id));
                                } else {
                                  setSelectedRows([]);
                                }
                              }} />
                            </th>
                            <th>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Name</span>
                                <button onClick={() => handleSort('customerName')} className="btn btn-link p-0">
                                  {sortConfig && sortConfig.key === 'customerName' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                                </button>
                              </div>
                            </th>
                            <th>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Email</span>
                                <button onClick={() => handleSort('email')} className="btn btn-link p-0">
                                  {sortConfig && sortConfig.key === 'email' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                                </button>
                              </div>
                            </th>
                            <th>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Phone</span>
                                <button onClick={() => handleSort('phoneNumber')} className="btn btn-link p-0">
                                  {sortConfig && sortConfig.key === 'phoneNumber' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                                </button>
                              </div>
                            </th>
                            <th>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Date Registered</span>
                                <button onClick={() => handleSort('dateRegistered')} className="btn btn-link p-0">
                                  {sortConfig && sortConfig.key === 'dateRegistered' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                                </button>
                              </div>
                            </th>

                            <th>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Status</span>
                                <button onClick={() => handleSort('status')} className="btn btn-link p-0">
                                  {sortConfig && sortConfig.key === 'status' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                                </button>
                              </div>
                            </th>
                            <th>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span>Actions</span>
                                <button onClick={() => handleSort('actions')} className="btn btn-link p-0">
                                  {sortConfig && sortConfig.key === 'actions' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                                </button>
                              </div>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {sortedRows.map((row) => (
                            <tr key={row.id}>
                              
                              <td>
                                <input type="checkbox" checked={selectedRows.includes(row.id)} onChange={() => handleCheckboxChange(row.id)} />
                              </td>
                              <td>
                                <div className="d-flex align-items-center gap-3">
                                  <div className="avatar-image">
                                    <img src={row.avatar} alt=""
                                      className="img-fluid"/>
                                  </div>
                                  <a href="javascript:void(0);">
                                    <span className="d-block">{row.customerName}</span>
                                    <span
                                      className="fs-12 d-block fw-normal text-muted">{row.email}</span>
                                  </a>
                                </div>
                              </td>
                              
                              <td>{row.address}</td>
                              <td>{row.phoneNumber}</td>
                              <td>{row.registeredDate}</td>
                              <td>
                                <div
                                  className={`badge ${row.status === 'Inactive'
                                    ? 'bg-soft-warning text-warning'
                                    : row.status === 'Active'
                                      ? 'bg-soft-success text-success'
                                      : ''
                                    }`}
                                >
                                  {row.status}
                                </div>

                              </td>
                              <td>
                                <div className="ms-3 d-flex gap-2 align-items-center">

                                  <div className="hstack gap-2 justify-content-end">
                                    <Link to="/customer-details" className="avatar-text avatar-md text-primary me-2">
                                      <i className="feather feather-eye"></i>
                                    </Link>

                                    <div className="dropdown">
                                      <a href="javascript:void(0)" className="avatar-text avatar-md text-success" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                        <i className="feather feather-download-cloud"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a className="dropdown-item" href="javascript:void(0)">
                                            <i className="bi bi-filetype-csv me-3"></i>
                                            <span>Download as CSV</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item printBTN" href="javascript:void(0)">
                                            <i className="bi bi-filetype-pdf me-3"></i>
                                            <span>Download as PDF</span>
                                          </a>
                                        </li>

                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}


                        </tbody>

                        
                      </table>
                      <div>
                          <Pagination />
                        </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customers;
