import React from 'react';


const Main = () => {
    return (

        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Dashboard</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Xeloro</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-4">
                                    <span className="badge badge-soft-primary float-right">Daily</span>
                                    <h5 className="card-title mb-0">Cost per Unit</h5>
                                </div>
                                <div className="row d-flex align-items-center mb-4">
                                    <div className="col-8">
                                        <h2 className="d-flex align-items-center mb-0">$17.21</h2>
                                    </div>
                                    <div className="col-4 text-right">
                                        <span className="text-muted">12.5% <i className="mdi mdi-arrow-up text-success"></i></span>
                                    </div>
                                </div>

                                <div className="progress shadow-sm" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "57%" }}></div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="col-md-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-4">
                                    <span className="badge badge-soft-primary float-right">Per Week</span>
                                    <h5 className="card-title mb-0">Market Revenue</h5>
                                </div>
                                <div className="row d-flex align-items-center mb-4">
                                    <div className="col-8">
                                        <h2 className="d-flex align-items-center mb-0">$1875.54</h2>
                                    </div>
                                    <div className="col-4 text-right">
                                        <span className="text-muted">18.71% <i className="mdi mdi-arrow-down text-danger"></i></span>
                                    </div>
                                </div>

                                <div className="progress shadow-sm" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "57%" }}></div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="col-md-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-4">
                                    <span className="badge badge-soft-primary float-right">Per Month</span>
                                    <h5 className="card-title mb-0">Expenses</h5>
                                </div>
                                <div className="row d-flex align-items-center mb-4">
                                    <div className="col-8">
                                        <h2 className="d-flex align-items-center mb-0">$784.62</h2>
                                    </div>
                                    <div className="col-4 text-right">
                                        <span className="text-muted">57% <i className="mdi mdi-arrow-up text-success"></i></span>
                                    </div>
                                </div>

                                <div className="progress shadow-sm" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "57%" }}></div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="col-md-6 col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-4">
                                    <span className="badge badge-soft-primary float-right">All Time</span>
                                    <h5 className="card-title mb-0">Daily Visits</h5>
                                </div>
                                <div className="row d-flex align-items-center mb-4">
                                    <div className="col-8">
                                        <h2 className="d-flex align-items-center mb-0">1,15,187</h2>
                                    </div>
                                    <div className="col-4 text-right">
                                        <span className="text-muted">17.8% <i className="mdi mdi-arrow-down text-danger"></i></span>
                                    </div>
                                </div>

                                <div className="progress shadow-sm" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "57 %" }}></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="row">
                    <div className="col-lg-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h4 className="card-title">Sales Analytics</h4>
                                        <p className="card-subtitle mb-4">From date of 1st Jan 2020 to continue</p>
                                        <div id="morris-bar-example" className="morris-chart"></div>
                                    </div>

                                    <div className="col-lg-4">
                                        <h4 className="card-title">Stock</h4>
                                        <p className="card-subtitle mb-4">Recent Stock</p>

                                        <div className="text-center">
                                            <input
                                                data-plugin="knob"
                                                data-width="165"
                                                data-height="165"
                                                data-linecap="round"
                                                data-fgColor="#7a08c2"
                                                value="95"
                                                data-skin="tron"
                                                data-angleOffset="180"
                                                data-readOnly="true"
                                                data-thickness=".15"
                                            />
                                            <h5 className="text-muted mt-3">Total sales made today</h5>

                                            <p className="text-muted w-75 mx-auto sp-line-2">
                                                Traditional heading elements are designed to work best in the meat of your page
                                                content.
                                            </p>

                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <p className="text-muted font-15 mb-1 text-truncate">Target</p>
                                                    <h4><i className="fas fa-arrow-up text-success mr-1"></i>$7.8k</h4>
                                                </div>
                                                <div className="col-6">
                                                    <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
                                                    <h4><i className="fas fa-arrow-down text-danger mr-1"></i>$1.4k</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h4 className="card-title">Account Transactions</h4>
                                        <p className="card-subtitle mb-4">Transaction period from 21 July to 25 Aug</p>
                                        <h3>$7841.12 <span className="badge badge-soft-success float-right">+7.5%</span></h3>
                                    </div>
                                </div>


                                <div id="sparkline1" className="mt-3"></div>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="dropdown float-right position-relative">
                                    <a
                                        href="#"
                                        className="dropdown-toggle h4 text-muted"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="mdi mdi-dots-vertical"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="#" className="dropdown-item">Action</a></li>
                                        <li><a href="#" className="dropdown-item">Another action</a></li>
                                        <li><a href="#" className="dropdown-item">Something else here</a></li>
                                        <li className="dropdown-divider"></li>
                                        <li><a href="#" className="dropdown-item">Separated link</a></li>
                                    </ul>
                                </div>
                                <h4 className="card-title d-inline-block">Total Revenue</h4>

                                <div id="morris-line-example" className="morris-chart" style={{ height: "290px" }}></div>

                                <div className="row text-center mt-4">
                                    <div className="col-6">
                                        <h4>$7841.12</h4>
                                        <p className="text-muted mb-0">Total Revenue</p>
                                    </div>
                                    <div className="col-6">
                                        <h4>17</h4>
                                        <p className="text-muted mb-0">Open Compaign</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Top 5 Customers</h4>
                                <p className="card-subtitle mb-4 font-size-13">Transaction period from 21 July to 25 Aug</p>

                                <div className="table-responsive">
                                    <table className="table table-centered table-striped table-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th>Customer</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Location</th>
                                                <th>Create Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="table-user">
                                                    <img
                                                        src="assets/images/users/avatar-4.jpg"
                                                        alt="table-user"
                                                        className="mr-2 avatar-xs rounded-circle"
                                                    />
                                                    <a href="" className="text-body font-weight-semibold"
                                                    >Paul J. Friend</a
                                                    >
                                                </td>
                                                <td>937-330-1634</td>
                                                <td>pauljfrnd@jourrapide.com</td>
                                                <td>New York</td>
                                                <td>07/07/2018</td>
                                            </tr>

                                            <tr>
                                                <td className="table-user">
                                                    <img
                                                        src="assets/images/users/avatar-3.jpg"
                                                        alt="table-user"
                                                        className="mr-2 avatar-xs rounded-circle"
                                                    />
                                                    <a href="" className="text-body font-weight-semibold"
                                                    >Bryan J. Luellen</a
                                                    >
                                                </td>
                                                <td>215-302-3376</td>
                                                <td>bryuellen@dayrep.com</td>
                                                <td>New York</td>
                                                <td>09/12/2018</td>
                                            </tr>
                                            <tr>
                                                <td className="table-user">
                                                    <img
                                                        src="assets/images/users/avatar-8.jpg"
                                                        alt="table-user"
                                                        className="mr-2 avatar-xs rounded-circle"
                                                    />
                                                    <a href="" className="text-body font-weight-semibold"
                                                    >Kathryn S. Collier</a
                                                    >
                                                </td>
                                                <td>828-216-2190</td>
                                                <td>collier@jourrapide.com</td>
                                                <td>Canada</td>
                                                <td>06/30/2018</td>
                                            </tr>
                                            <tr>
                                                <td className="table-user">
                                                    <img
                                                        src="assets/images/users/avatar-1.jpg"
                                                        alt="table-user"
                                                        className="mr-2 avatar-xs rounded-circle"
                                                    />
                                                    <a href="" className="text-body font-weight-semibold"
                                                    >Timothy Kauper</a
                                                    >
                                                </td>
                                                <td>(216) 75 612 706</td>
                                                <td>thykauper@rhyta.com</td>
                                                <td>Denmark</td>
                                                <td>09/08/2018</td>
                                            </tr>
                                            <tr>
                                                <td className="table-user">
                                                    <img
                                                        src="assets/images/users/avatar-5.jpg"
                                                        alt="table-user"
                                                        className="mr-2 avatar-xs rounded-circle"
                                                    />
                                                    <a href="" className="text-body font-weight-semibold"
                                                    >Zara Raws</a
                                                    >
                                                </td>
                                                <td>(02) 75 150 655</td>
                                                <td>austin@dayrep.com</td>
                                                <td>Germany</td>
                                                <td>07/15/2018</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>


    );
};

export default Main;
