import React from 'react'
import DetailsHeader from './DetailsHeader'
import Sidebar from './Sidebar'
import Header from './Header'

function OrderDetails() {
    return (
        <div>
            {/* Sidebar */}
            <Sidebar />

            {/* Header */}
            <Header />

            <main className="nxl-container">
                <div className="nxl-content">
                    {/* Details Header */}
                    <DetailsHeader />

                    <div className="main-content">
                        <div className="tab-content">
                            {/* Active tab pane for the order overview */}
                            <div className="tab-pane fade active show" id="overviewTab">
                                <div className="row">
                                    {/* Card for displaying order details */}
                                    <div className="col-xl-8">
                                        <div className="card stretch stretch-full">
                                            {/* Card header containing order progress */}
                                            <div className="card-header">
                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        {/* Link to additional order progress information */}
                                                        <a href="javascript:void(0);" className="fs-12 fw-medium text-muted">
                                                            <span className="text-truncate-1-line">
                                                                Order Progress <i className="feather-link-2 fs-10 ms-1"></i>
                                                            </span>
                                                        </a>
                                                        <div className="ms-3">
                                                            <span className="fs-12 text-muted text-truncate-1-line">
                                                                Delivered
                                                                <span className="fs-11 text-muted">(100%)</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Progress bar showing the completion status */}
                                                    <div className="progress mt-2 ht-5">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card body containing order details */}
                                            <div className="card-body">
                                                <div className="row">
                                                    {/* Order ID */}
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label">Order ID</label>
                                                        <p>#987456</p>
                                                    </div>
                                                    {/* Order Item */}
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label">Order Item</label>
                                                        <p>Wings & Thighs Meal</p>
                                                    </div>
                                                    {/* Order Status */}
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label">Status</label>
                                                        <p className="text-success">Delivered</p>
                                                    </div>
                                                    {/* Delivery Address */}
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label">Delivery Address</label>
                                                        <p>4 Mike Akhigbe Way, Jabi</p>
                                                    </div>
                                                    {/* Date Ordered */}
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label">Date Ordered</label>
                                                        <p>2024-08-09</p>
                                                    </div>
                                                    {/* Time of Order */}
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label">Time of Order</label>
                                                        <p>17:30:28</p>
                                                    </div>
                                                    {/* Price of Item */}
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label">Price of Item</label>
                                                        <p>₦2,500.00</p>
                                                    </div>
                                                    {/* Customer Name */}
                                                    <div className="col-md-6 mb-4">
                                                        <label className="form-label">Customer Name</label>
                                                        <p>Timmy Mujong</p>
                                                    </div>
                                                    {/* Notes Added by Customer */}
                                                    <div className="col-md-12">
                                                        <label className="form-label">Notes Added by Customer</label>
                                                        <p>I want it hot and spicy please. Delivered before 6pm thanks!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="row">
                                            {/* Card for Delivered status */}
                                            <div className="col-xxl-6 col-xl-12 col-sm-6">
                                                <div className="card stretch stretch-full">
                                                    <div className="card-body">
                                                        <div className="avatar-text bg-soft-success text-success border-0 mb-3">
                                                            <i className="feather-log-in"></i>
                                                        </div>
                                                        <p>
                                                            <span className="fw-bold text-success">Delivered:</span> 17:30:00
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card for Order Sent Out status */}
                                            <div className="col-xxl-6 col-xl-12 col-sm-6">
                                                <div className="card stretch stretch-full">
                                                    <div className="card-body">
                                                        <div className="avatar-text bg-soft-warning text-warning border-0 mb-3">
                                                            <i className="feather-clipboard"></i>
                                                        </div>
                                                        <p>
                                                            <span className="fw-bold text-warning">Order Sent Out:</span> 17:10:00
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card for Order Received status */}
                                            <div className="col-xxl-6 col-xl-12 col-sm-6">
                                                <div className="card stretch stretch-full">
                                                    <div className="card-body">
                                                        <div className="avatar-text bg-soft-primary text-primary border-0 mb-3">
                                                            <i className="feather-check"></i>
                                                        </div>
                                                        <p>
                                                            <span className="fw-bold text-primary">Order Received:</span> 16:57:00
                                                        </p>
                                                    </div>
                                                </div>
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
    )
}

export default OrderDetails