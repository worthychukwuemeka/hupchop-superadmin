/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { FaSortAlphaDown, FaSortNumericDown, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';


interface TableRowProps {
  id: number;
  orderId: string;
  orderItem: string;
  orderedBy: string;
  price: string;
  date: string;
  transaction: string;
  status: string;
}

const Orders: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rows: TableRowProps[] = [
    {
      id: 1,
      orderId: '#987456',
      orderItem: 'Wings & Thighs Meal',
      orderedBy: 'Army Barracks, Asokoro',
      price: '₦1,200.50',
      date: '2023-05-20, 12:23PM',
      transaction: '#SDEG4589SE1E',
      status: 'Delivered',
    },
    {
      id: 2,
      orderId: '#987456',
      orderItem: 'Fried Rice Combo',
      orderedBy: 'Peace Villa & Suites, Mpape',
      price: '₦2,300',
      date: '2023-05-20, 12:23PM',
      transaction: '#SDEG4589SE1E',
      status: 'Cancelled',
    },
    {
      id: 3,
      orderId: '#987456',
      orderItem: 'Yam & Fish Meal',
      orderedBy: '4 Mike Akhigbe Way, Jabi',
      price: '₦1,200.50',
      date: '2023-05-20, 12:23PM',
      transaction: '#SDEG4589SE1E',
      status: 'Processing order',
    },
    {
      id: 4,
      orderId: '#987456',
      orderItem: 'Chicken Burger',
      orderedBy: '12 Jabi Garage, Abuja',
      price: '₦1,200.50',
      date: '2023-05-20, 12:23PM',
      transaction: '#SDEG4589SE1E',
      status: 'Delivered',
    },
    {
      id: 5,
      orderId: '#987456',
      orderItem: 'Double Chickwizz Meal',
      orderedBy: 'Gwarinpa 7th Avenue',
      price: '₦1,200.50',
      date: '2023-05-20, 12:23PM',
      transaction: '#SDEG4589SE1E',
      status: 'Cancelled',
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
      row.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.orderItem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.orderedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.transaction.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
      {/* Start Sidebar */}
      <Sidebar />
      {/* Start Header */}
      <Header />

      {/* Main container starts */}
      <main className="nxl-container">
        <div className="nxl-content">
          {/* Breadcrumb */}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Orders</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item">Orders</li>
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
                        <span>Sort Ascending</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-arrow-down-left me-3"></i>
                        <span>Sort Descending</span>
                      </a>
                    </div>

                  </div>
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

                  {/* Search box */}
                  <input
                    type="text"
                    placeholder="Search Orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-control"
                  />
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
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
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
                          <span>ID</span>
                          <button onClick={() => handleSort('orderId')} className="btn btn-link p-0">
                            {sortConfig && sortConfig.key === 'orderId' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                          </button>
                        </div>
                      </th>
                      <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>Order Item</span>
                          <button onClick={() => handleSort('orderItem')} className="btn btn-link p-0">
                            {sortConfig && sortConfig.key === 'orderItem' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                          </button>
                        </div>
                      </th>
                      <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>Ordered By</span>
                          <button onClick={() => handleSort('orderedBy')} className="btn btn-link p-0">
                            {sortConfig && sortConfig.key === 'orderedBy' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                          </button>
                        </div>
                      </th>
                      <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>Price</span>
                          <button onClick={() => handleSort('price')} className="btn btn-link p-0">
                            {sortConfig && sortConfig.key === 'price' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                          </button>
                        </div>
                      </th>
                      <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>Date</span>
                          <button onClick={() => handleSort('date')} className="btn btn-link p-0">
                            {sortConfig && sortConfig.key === 'date' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
                          </button>
                        </div>
                      </th>
                      <th>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>Transaction ID</span>
                          <button onClick={() => handleSort('transaction')} className="btn btn-link p-0">
                            {sortConfig && sortConfig.key === 'transaction' && sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />}
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
                        <td>{row.orderId}</td>
                        <td>{row.orderItem}</td>
                        <td>{row.orderedBy}</td>
                        <td>{row.price}</td>
                        <td>{row.date}</td>
                        <td>{row.transaction}</td>
                        <td>
                          <div
                            className={`badge ${row.status === 'Cancelled'
                              ? 'bg-soft-danger text-danger'
                              : row.status === 'Processing order'
                                ? 'bg-soft-warning text-warning'
                                : row.status === 'Delivered'
                                  ? 'bg-soft-success text-success'
                                  : row.status === 'Unpaid'
                                    ? 'bg-soft-grey text-grey'
                                    : ''
                              }`}
                          >
                            {row.status}
                          </div>

                        </td>
                        <td>
                          <div className="ms-3 d-flex gap-2 align-items-center">

                            <div className="hstack gap-2 justify-content-end">
                              <Link to="/order-details" className="avatar-text avatar-md text-primary me-2">
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;
