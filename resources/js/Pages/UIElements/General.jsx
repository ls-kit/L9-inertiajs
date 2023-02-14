import React from 'react';
import Base from '../../Layouts/Base';
export default function General() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">General</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">General</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Badges</h4>
                                <p className="card-subtitle mb-4">
                                    Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.
                                </p>

                                <span className="badge badge-primary">Primary</span>
                                <span className="badge badge-secondary">Secondary</span>
                                <span className="badge badge-success">Success</span>
                                <span className="badge badge-danger">Danger</span>
                                <span className="badge badge-warning">Warning</span>
                                <span className="badge badge-info">Info</span>
                                <span className="badge badge-light">Light</span>
                                <span className="badge badge-dark">Dark</span>

                                <h6 className="mt-4">Soft Badges</h6>
                                <p className="text-muted font-14 mb-3">
                                    Use the <code>.badge-soft-*</code> modifier className to make badges lighten.
                                </p>

                                <span className="badge badge-soft-primary">Primary</span>
                                <span className="badge badge-soft-secondary">Secondary</span>
                                <span className="badge badge-soft-success">Success</span>
                                <span className="badge badge-soft-danger">Danger</span>
                                <span className="badge badge-soft-warning">Warning</span>
                                <span className="badge badge-soft-info">Info</span>
                                <span className="badge badge-soft-light">Light</span>
                                <span className="badge badge-soft-dark">Dark</span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Pill Badges</h4>
                                <p className="card-subtitle mb-4">
                                    Use the <code>.badge-pill</code> modifier className to make badges more rounded.
                                </p>

                                <span className="badge badge-primary badge-pill">Primary</span>
                                <span className="badge badge-secondary badge-pill">Secondary</span>
                                <span className="badge badge-success badge-pill">Success</span>
                                <span className="badge badge-danger badge-pill">Danger</span>
                                <span className="badge badge-warning badge-pill">Warning</span>
                                <span className="badge badge-info badge-pill">Info</span>
                                <span className="badge badge-light badge-pill">Light</span>
                                <span className="badge badge-dark badge-pill">Dark</span>

                                <h6 className="mt-4">Soft Badges</h6>
                                <p className="text-muted font-14 mb-3">
                                    Use the <code>.badge-soft-*</code> modifier className to make badges lighten.
                                </p>

                                <span className="badge badge-soft-primary badge-pill">Primary</span>
                                <span className="badge badge-soft-secondary badge-pill">Secondary</span>
                                <span className="badge badge-soft-success badge-pill">Success</span>
                                <span className="badge badge-soft-danger badge-pill">Danger</span>
                                <span className="badge badge-soft-warning badge-pill">Warning</span>
                                <span className="badge badge-soft-info badge-pill">Info</span>
                                <span className="badge badge-soft-light badge-pill">Light</span>
                                <span className="badge badge-soft-dark badge-pill">Dark</span>

                            </div>
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Dropdowns</h4>
                                <p className="card-subtitle mb-4">
                                    Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
                                </p>

                                <div className="row">
                                    <div className="col-md-6">

                                        <p className="mb-1">Single button dropdowns</p>
                                        <p className="text-muted font-14 mb-3">
                                            Any single <code
                                            >.btn</code> can be turned into a dropdown
                                            toggle with some markup changes. Here’s how you can put them to work
                                            with either <code>&lt;button&gt;</code>
                                            elements:
                                        </p>

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="dropdown">
                                                    <button className="btn btn-light dropdown-toggle waves-effect waves-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown Button <i className="mdi mdi-chevron-down"></i>
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="dropdown">
                                                    <a className="btn btn-secondary dropdown-toggle waves-effect waves-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown Link <i className="mdi mdi-chevron-down"></i>
                                                    </a>

                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <p className="mb-1 mt-4">Variant</p>
                                        <p className="text-muted font-14 mb-3">
                                            The best part is you can do this with any button variant, too:
                                        </p>

                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary <i className="mdi mdi-chevron-down"></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-light dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary <i className="mdi mdi-chevron-down"></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-success dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success <i className="mdi mdi-chevron-down"></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-info dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info <i className="mdi mdi-chevron-down"></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-warning dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning <i className="mdi mdi-chevron-down"></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-danger dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger <i className="mdi mdi-chevron-down"></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <p className="mb-1 mt-4">Dropright variation</p>
                                        <p className="text-muted font-14">
                                            Trigger dropdown menus at the right of the elements by adding <code>.dropright</code> to the parent element.
                                        </p>


                                        <div className="btn-group mb-2 dropright">
                                            <button type="button" className="btn btn-primary   dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropright  <i className="mdi mdi-chevron-right"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <div className="btn-group mb-2 dropright">
                                            <button type="button" className="btn btn-primary waves-effect waves-light">
                                                Split dropright
                                            </button>
                                            <button type="button" className="btn btn-primary   dropdown-toggle-split dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-right"></i> <span className="sr-only">Toggle Dropright</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <p className="mb-1 mt-4">Dropup variation</p>
                                        <p className="text-muted font-14">
                                            Trigger dropdown menus above elements
                                            by adding <code>.dropup</code> to the parent
                                            element.
                                        </p>


                                        <div className="btn-group dropup">
                                            <button type="button" className="btn btn-light dropdown-toggle waves-effect " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup <i className="mdi mdi-chevron-up"></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <div className="btn-group dropup">
                                            <button type="button" className="btn btn-light">
                                                Split dropup
                                            </button>
                                            <button type="button" className="btn btn-light dropdown-toggle waves-effect " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-up"></i> <span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <p className="mb-1 mt-3 mt-sm-0">Split button dropdowns</p>
                                        <p className="text-muted font-14">
                                            Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.
                                        </p>


                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-primary waves-effect waves-light">Primary</button>
                                            <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-down"></i><span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-light waves-effect waves-light">Secondary</button>
                                            <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-down"></i><span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-success waves-effect waves-light">Success</button>
                                            <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-down"></i><span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-info waves-effect waves-light">Info</button>
                                            <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-down"></i><span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-warning waves-effect waves-light">Warning</button>
                                            <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-down"></i><span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button type="button" className="btn btn-danger waves-effect waves-light">Danger</button>
                                            <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-down"></i><span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>

                                        <p className="mb-1 mt-4">Sizing</p>
                                        <p className="text-muted font-14">
                                            Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
                                        </p>



                                        <div className="btn-group mb-2">
                                            <button className="btn btn-light btn-lg dropdown-toggle waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Large button <i className="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button className="btn btn-light btn-lg waves-effect waves-light" type="button">
                                                Large button
                                            </button>
                                            <button type="button" className="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-down"></i><span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <div className="btn-group mb-2">
                                            <button className="btn btn-light btn-sm dropdown-toggle waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Small button <i className="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="btn-group mb-2">
                                            <button className="btn btn-light btn-sm" type="button">
                                                Small button
                                            </button>
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-down"></i><span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <p className="mb-1 mt-4">Dropleft variation</p>
                                        <p className="text-muted font-14">
                                            Trigger dropdown menus at the right of the elements by adding <code>.dropleft</code> to the parent element.
                                        </p>


                                        <div className="btn-group dropleft">
                                            <button type="button" className="btn btn-secondary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-chevron-left"></i> Dropleft
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <div className="btn-group">
                                            <div className="btn-group dropleft" role="group">
                                                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <i className="mdi mdi-chevron-left"></i> <span className="sr-only">Toggle Dropleft</span>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-secondary waves-effect waves-light waves-effect waves-light">
                                                Split dropleft
                                            </button>
                                        </div>


                                        <p className="mb-1 mt-4">Menu alignment</p>
                                        <p className="text-muted font-14">
                                            Add <code>.dropdown-menu-right</code>
                                            to a <code>.dropdown-menu</code> to right
                                            align the dropdown menu.
                                        </p>

                                        <div className="btn-group">
                                            <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Right-aligned <i className="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Pagination</h4>
                                <p className="card-subtitle mb-4">
                                    Provide pagination links for your site or app with the multi-page pagination component.
                                </p>

                                <p className="mb-1">Default Pagination</p>
                                <p className="text-muted font-14">
                                    Simple pagination inspired by Rdio, great for apps and search results.
                                </p>

                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link waves-effect" href="javascript: void(0);" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li className="page-item active"><a className="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">4</a></li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">5</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="javascript: void(0);" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <p className="mb-1 mt-4">Sizing</p>
                                <p className="text-muted font-14">
                                    Add <code>
                                        .pagination-lg</code>
                                    or <code>
                                        .pagination-sm</code>
                                    for additional sizes.
                                </p>

                                <nav>
                                    <ul className="pagination pagination-lg">
                                        <li className="page-item">
                                            <a className="page-link waves-effect" href="javascript: void(0);" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li className="page-item active"><a className="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link waves-effect" href="javascript: void(0);" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <nav>
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item">
                                            <a className="page-link waves-effect" href="javascript: void(0);" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li className="page-item active"><a className="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link waves-effect" href="javascript: void(0);" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <p className="mb-1 mt-4">Alignment</p>
                                <p className="text-muted font-14">
                                    Change the alignment of pagination components with flexbox utilities.
                                </p>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link waves-effect" href="javascript: void(0);" tabindex="-1">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li className="page-item active"><a className="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link waves-effect" href="javascript: void(0);">Next</a>
                                        </li>
                                    </ul>
                                </nav>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item disabled">
                                            <a className="page-link waves-effect" href="javascript: void(0);" tabindex="-1">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li className="page-item active"><a className="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li className="page-item"><a className="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link waves-effect" href="javascript: void(0);">Next</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Breadcrumb</h4>
                                <p className="card-subtitle mb-4">
                                    Indicate the current page’s location within a navigational hierarchy.
                                </p>

                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active">Home</li>
                                </ol>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                    <li className="breadcrumb-item active">Library</li>
                                </ol>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Library</a></li>
                                    <li className="breadcrumb-item active">Data</li>
                                </ol>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


General.layout = (page) => <Base children={page} title={"General"} />
