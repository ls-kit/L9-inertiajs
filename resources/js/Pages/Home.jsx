import React from 'react'
import Guest from '../Layouts/Guest'

export default function Home() {
    return (
        <>
            <div id="layout-wrapper">
                <div className="header-border"></div>
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex align-items-left">
                            <button
                                type="button"
                                className="btn btn-sm mr-2 d-lg-none px-3 font-size-16 header-item waves-effect"
                                id="vertical-menu-btn"
                            >
                                <i className="fa fa-fw fa-bars"></i>
                            </button>

                            <div className="dropdown d-none d-sm-inline-block">
                                <button
                                    type="button"
                                    className="btn header-item waves-effect"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="mdi mdi-plus"></i> Create New
                                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                                </button>
                                <div className="dropdown-menu">

                                    <a href="" className="dropdown-item notify-item"> Application </a>


                                    <a href="" className="dropdown-item notify-item"> Software </a>


                                    <a href="" className="dropdown-item notify-item"> EMS System </a>


                                    <a href="" className="dropdown-item notify-item"> CRM App </a>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="dropdown d-none d-sm-inline-block ml-2">
                                <button
                                    type="button"
                                    className="btn header-item noti-icon waves-effect"
                                    id="page-header-search-dropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="mdi mdi-magnify"></i>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                    aria-labelledby="page-header-search-dropdown"
                                >
                                    <form className="p-3">
                                        <div className="form-group m-0">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search ..."
                                                    aria-label="Recipient's username"
                                                />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="dropdown d-inline-block">
                                <button
                                    type="button"
                                    className="btn header-item waves-effect"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img className="" src="assets/images/flags/us.jpg" alt="Header Language" height="16" />
                                    <span className="d-none d-sm-inline-block ml-1">English</span>
                                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">

                                    <a href="" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/spain.jpg" alt="user-image" className="mr-1" height="12" />
                                        <span className="align-middle">Spanish</span>
                                    </a>


                                    <a href="" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/germany.jpg" alt="user-image" className="mr-1" height="12" />
                                        <span className="align-middle">German</span>
                                    </a>


                                    <a href="" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/italy.jpg" alt="user-image" className="mr-1" height="12" />
                                        <span className="align-middle">Italian</span>
                                    </a>


                                    <a href="" className="dropdown-item notify-item">
                                        <img src="assets/images/flags/russia.jpg" alt="user-image" className="mr-1" height="12" />
                                        <span className="align-middle">Russian</span>
                                    </a>
                                </div>
                            </div>

                            <div className="dropdown d-inline-block">
                                <button
                                    type="button"
                                    className="btn header-item noti-icon waves-effect"
                                    id="page-header-notifications-dropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="mdi mdi-bell"></i>
                                    <span className="badge badge-danger badge-pill">3</span>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                    aria-labelledby="page-header-notifications-dropdown"
                                >
                                    <div className="p-3">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0">Notifications</h6>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#!" className="small"> View All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-simplebar style={{ maxHeight: "230px" }}>
                                        <a href="" className="text-reset notification-item">
                                            <div className="media">
                                                <img
                                                    src="assets/images/users/avatar-2.jpg"
                                                    className="mr-3 rounded-circle avatar-xs"
                                                    alt="user-pic"
                                                />
                                                <div className="media-body">
                                                    <h6 className="mt-0 mb-1">Samuel Coverdale</h6>
                                                    <p className="font-size-12 mb-1">You have new follower on Instagram</p>
                                                    <p className="font-size-12 mb-0 text-muted">
                                                        <i className="mdi mdi-clock-outline"></i> 2 min ago
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="" className="text-reset notification-item">
                                            <div className="media">
                                                <div className="avatar-xs mr-3">
                                                    <span className="avatar-title bg-success rounded-circle">
                                                        <i className="mdi mdi-cloud-download-outline"></i>
                                                    </span>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mt-0 mb-1">Download Available !</h6>
                                                    <p className="font-size-12 mb-1">
                                                        Latest version of admin is now available. Please download here.
                                                    </p>
                                                    <p className="font-size-12 mb-0 text-muted">
                                                        <i className="mdi mdi-clock-outline"></i> 4 hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="" className="text-reset notification-item">
                                            <div className="media">
                                                <img
                                                    src="assets/images/users/avatar-3.jpg"
                                                    className="mr-3 rounded-circle avatar-xs"
                                                    alt="user-pic"
                                                />
                                                <div className="media-body">
                                                    <h6 className="mt-0 mb-1">Victoria Mendis</h6>
                                                    <p className="font-size-12 mb-1">Just upgraded to premium account.</p>
                                                    <p className="font-size-12 mb-0 text-muted">
                                                        <i className="mdi mdi-clock-outline"></i> 1 day ago
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p-2 border-top">
                                        <a className="btn btn-sm btn-light btn-block text-center" href="javascript:void(0)">
                                            <i className="mdi mdi-arrow-down-circle mr-1"></i> Load More..
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown d-inline-block ml-2">
                                <button
                                    type="button"
                                    className="btn header-item waves-effect"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img
                                        className="rounded-circle header-profile-user"
                                        src="assets/images/users/avatar-2.jpg"
                                        alt="Header Avatar"
                                    />
                                    <span className="d-none d-sm-inline-block ml-1">Donald M.</span>
                                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                        href="javascript:void(0)"
                                    >
                                        <span>Inbox</span>
                                        <span>
                                            <span className="badge badge-pill badge-info">3</span>
                                        </span>
                                    </a>
                                    <a
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                        href="javascript:void(0)"
                                    >
                                        <span>Profile</span>
                                        <span>
                                            <span className="badge badge-pill badge-warning">1</span>
                                        </span>
                                    </a>
                                    <a
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                        href="javascript:void(0)"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                        href="javascript:void(0)"
                                    >
                                        <span>Lock Account</span>
                                    </a>
                                    <a
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                        href="javascript:void(0)"
                                    >
                                        <span>Log Out</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="vertical-menu">
                    <div data-simplebar className="h-100">
                        <div className="navbar-brand-box">
                            <a href="index.html" className="logo">
                                <i className="mdi mdi-album"></i>
                                <span> Xeloro </span>
                            </a>
                        </div>


                        <div id="sidebar-menu">

                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title">Menu</li>

                                <li>
                                    <a href="index.html" className="waves-effect"
                                    ><i className="mdi mdi-home-analytics"></i
                                    ><span className="badge badge-pill badge-primary float-right">7</span><span>Dashboard</span></a
                                    >
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow waves-effect"
                                    ><i className="mdi mdi-diamond-stone"></i><span>UI Elements</span></a
                                    >
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="ui-buttons.html">Buttons</a></li>
                                        <li><a href="ui-cards.html">Cards</a></li>
                                        <li><a href="ui-carousel.html">Carousel</a></li>
                                        <li><a href="ui-embeds.html">Embeds</a></li>
                                        <li><a href="ui-general.html">General</a></li>
                                        <li><a href="ui-grid.html">Grid</a></li>
                                        <li><a href="ui-media-objects.html">Media Objects</a></li>
                                        <li><a href="ui-modals.html">Modals</a></li>
                                        <li><a href="ui-progressbars.html">Progress Bars</a></li>
                                        <li><a href="ui-tabs.html">Tabs</a></li>
                                        <li><a href="ui-typography.html">Typography</a></li>
                                        <li><a href="ui-toasts.html">Toasts</a></li>
                                        <li><a href="ui-tooltips-popovers.html">Tooltips & Popovers</a></li>
                                        <li><a href="ui-scrollspy.html">Scrollspy</a></li>
                                        <li><a href="ui-spinners.html">Spinners</a></li>
                                        <li><a href="ui-sweetalerts.html">Sweet Alerts</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow waves-effect"
                                    ><i className="mdi mdi-table-merge-cells"></i><span>Tables</span></a
                                    >
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="tables-basic.html">Basic Tables</a></li>
                                        <li><a href="tables-datatables.html">Data Tables</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow waves-effect"
                                    ><i className="mdi mdi-poll"></i><span>Charts</span></a
                                    >
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="charts-morris.html">Morris</a></li>
                                        <li><a href="charts-google.html">Google</a></li>
                                        <li><a href="charts-chartjs.html">Chartjs</a></li>
                                        <li><a href="charts-sparkline.html">Sparkline</a></li>
                                        <li><a href="charts-knob.html">Jquery Knob</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="waves-effect"
                                    ><i className="mdi mdi-format-list-bulleted-type"></i
                                    ><span className="badge badge-pill badge-danger float-right">6</span><span>Forms</span></a
                                    >
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="forms-elements.html">Elements</a></li>
                                        <li><a href="forms-plugins.html">Plugins</a></li>
                                        <li><a href="forms-validation.html">Validation</a></li>
                                        <li><a href="forms-mask.html">Masks</a></li>
                                        <li><a href="forms-quilljs.html">Quilljs</a></li>
                                        <li><a href="forms-uploads.html">File Uploads</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow waves-effect"
                                    ><i className="mdi mdi-black-mesa"></i><span>Icons</span></a
                                    >
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="icons-materialdesign.html">Material Design</a></li>
                                        <li><a href="icons-fontawesome.html">Font awesome</a></li>
                                        <li><a href="icons-dripicons.html">Dripicons</a></li>
                                        <li><a href="icons-feather.html">Feather Icons</a></li>
                                    </ul>
                                </li>

                                <li className="menu-title">More</li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow waves-effect"
                                    ><i className="mdi mdi-format-page-break"></i><span>Pages</span></a
                                    >
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="pages-invoice.html">Invoice</a></li>
                                        <li><a href="pages-starter.html">Starter Page</a></li>
                                        <li><a href="pages-maintenance.html">Maintenance</a></li>
                                        <li><a href="pages-faqs.html">FAQs</a></li>
                                        <li><a href="pages-pricing.html">Pricing</a></li>
                                        <li><a href="pages-login.html">Login</a></li>
                                        <li><a href="pages-register.html">Register</a></li>
                                        <li><a href="pages-recoverpw.html">Recover Password</a></li>
                                        <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                                        <li><a href="pages-404.html">Error 404</a></li>
                                        <li><a href="pages-500.html">Error 500</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="calendar.html" className="waves-effect"
                                    ><i className="mdi mdi-calendar-range-outline"></i><span>Calendar</span></a
                                    >
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow waves-effect"
                                    ><i className="mdi mdi-map-marker-radius"></i><span>Maps</span></a
                                    >
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href="maps-google.html">Google Maps</a></li>
                                        <li><a href="maps-vector.html">Vector Maps</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow waves-effect"
                                    ><i className="mdi mdi-share-variant"></i><span>Multi Level</span></a
                                    >
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="javascript: void(0);">Level 1.1</a></li>
                                        <li>
                                            <a href="javascript: void(0);" className="has-arrow">Level 1.2</a>
                                            <ul className="sub-menu" aria-expanded="true">
                                                <li><a href="javascript: void(0);">Level 2.1</a></li>
                                                <li><a href="javascript: void(0);">Level 2.2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="main-content">
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
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    2020 © Xeloro.
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-right d-none d-sm-block">
                                        Design & Develop by Myra
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </>
    )
}

Home.layout = (page) => <Guest children={page} title={"Home"} />
