import React from 'react';
import Base from '../../Layouts/Base';
export default function General() {
    return (
        <div class="page-content">
            <div class="container-fluid">


                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0 font-size-18">General</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li class="breadcrumb-item active">General</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="row">

                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Badges</h4>
                                <p class="card-subtitle mb-4">
                                    Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.
                                </p>

                                <span class="badge badge-primary">Primary</span>
                                <span class="badge badge-secondary">Secondary</span>
                                <span class="badge badge-success">Success</span>
                                <span class="badge badge-danger">Danger</span>
                                <span class="badge badge-warning">Warning</span>
                                <span class="badge badge-info">Info</span>
                                <span class="badge badge-light">Light</span>
                                <span class="badge badge-dark">Dark</span>

                                <h6 class="mt-4">Soft Badges</h6>
                                <p class="text-muted font-14 mb-3">
                                    Use the <code>.badge-soft-*</code> modifier class to make badges lighten.
                                </p>

                                <span class="badge badge-soft-primary">Primary</span>
                                <span class="badge badge-soft-secondary">Secondary</span>
                                <span class="badge badge-soft-success">Success</span>
                                <span class="badge badge-soft-danger">Danger</span>
                                <span class="badge badge-soft-warning">Warning</span>
                                <span class="badge badge-soft-info">Info</span>
                                <span class="badge badge-soft-light">Light</span>
                                <span class="badge badge-soft-dark">Dark</span>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Pill Badges</h4>
                                <p class="card-subtitle mb-4">
                                    Use the <code>.badge-pill</code> modifier class to make badges more rounded.
                                </p>

                                <span class="badge badge-primary badge-pill">Primary</span>
                                <span class="badge badge-secondary badge-pill">Secondary</span>
                                <span class="badge badge-success badge-pill">Success</span>
                                <span class="badge badge-danger badge-pill">Danger</span>
                                <span class="badge badge-warning badge-pill">Warning</span>
                                <span class="badge badge-info badge-pill">Info</span>
                                <span class="badge badge-light badge-pill">Light</span>
                                <span class="badge badge-dark badge-pill">Dark</span>

                                <h6 class="mt-4">Soft Badges</h6>
                                <p class="text-muted font-14 mb-3">
                                    Use the <code>.badge-soft-*</code> modifier class to make badges lighten.
                                </p>

                                <span class="badge badge-soft-primary badge-pill">Primary</span>
                                <span class="badge badge-soft-secondary badge-pill">Secondary</span>
                                <span class="badge badge-soft-success badge-pill">Success</span>
                                <span class="badge badge-soft-danger badge-pill">Danger</span>
                                <span class="badge badge-soft-warning badge-pill">Warning</span>
                                <span class="badge badge-soft-info badge-pill">Info</span>
                                <span class="badge badge-soft-light badge-pill">Light</span>
                                <span class="badge badge-soft-dark badge-pill">Dark</span>

                            </div>
                        </div>
                    </div>

                </div>


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">

                                <h4 class="card-title">Dropdowns</h4>
                                <p class="card-subtitle mb-4">
                                    Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
                                </p>

                                <div class="row">
                                    <div class="col-md-6">

                                        <p class="mb-1">Single button dropdowns</p>
                                        <p class="text-muted font-14 mb-3">
                                            Any single <code
                                            >.btn</code> can be turned into a dropdown
                                            toggle with some markup changes. Here’s how you can put them to work
                                            with either <code>&lt;button&gt;</code>
                                            elements:
                                        </p>

                                        <div class="row">
                                            <div class="col-6">
                                                <div class="dropdown">
                                                    <button class="btn btn-light dropdown-toggle waves-effect waves-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown Button <i class="mdi mdi-chevron-down"></i>
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="dropdown">
                                                    <a class="btn btn-secondary dropdown-toggle waves-effect waves-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown Link <i class="mdi mdi-chevron-down"></i>
                                                    </a>

                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <p class="mb-1 mt-4">Variant</p>
                                        <p class="text-muted font-14 mb-3">
                                            The best part is you can do this with any button variant, too:
                                        </p>

                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary <i class="mdi mdi-chevron-down"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-light dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary <i class="mdi mdi-chevron-down"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-success dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success <i class="mdi mdi-chevron-down"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-info dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info <i class="mdi mdi-chevron-down"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-warning dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning <i class="mdi mdi-chevron-down"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-danger dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger <i class="mdi mdi-chevron-down"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <p class="mb-1 mt-4">Dropright variation</p>
                                        <p class="text-muted font-14">
                                            Trigger dropdown menus at the right of the elements by adding <code>.dropright</code> to the parent element.
                                        </p>


                                        <div class="btn-group mb-2 dropright">
                                            <button type="button" class="btn btn-primary   dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropright  <i class="mdi mdi-chevron-right"></i>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <div class="btn-group mb-2 dropright">
                                            <button type="button" class="btn btn-primary waves-effect waves-light">
                                                Split dropright
                                            </button>
                                            <button type="button" class="btn btn-primary   dropdown-toggle-split dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-right"></i> <span class="sr-only">Toggle Dropright</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <p class="mb-1 mt-4">Dropup variation</p>
                                        <p class="text-muted font-14">
                                            Trigger dropdown menus above elements
                                            by adding <code>.dropup</code> to the parent
                                            element.
                                        </p>


                                        <div class="btn-group dropup">
                                            <button type="button" class="btn btn-light dropdown-toggle waves-effect " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup <i class="mdi mdi-chevron-up"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <div class="btn-group dropup">
                                            <button type="button" class="btn btn-light">
                                                Split dropup
                                            </button>
                                            <button type="button" class="btn btn-light dropdown-toggle waves-effect " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-up"></i> <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-md-6">
                                        <p class="mb-1 mt-3 mt-sm-0">Split button dropdowns</p>
                                        <p class="text-muted font-14">
                                            Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.
                                        </p>


                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-primary waves-effect waves-light">Primary</button>
                                            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-down"></i><span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-light waves-effect waves-light">Secondary</button>
                                            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-down"></i><span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-success waves-effect waves-light">Success</button>
                                            <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-down"></i><span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-info waves-effect waves-light">Info</button>
                                            <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-down"></i><span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-warning waves-effect waves-light">Warning</button>
                                            <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-down"></i><span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-danger waves-effect waves-light">Danger</button>
                                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-down"></i><span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>

                                        <p class="mb-1 mt-4">Sizing</p>
                                        <p class="text-muted font-14">
                                            Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
                                        </p>



                                        <div class="btn-group mb-2">
                                            <button class="btn btn-light btn-lg dropdown-toggle waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Large button <i class="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button class="btn btn-light btn-lg waves-effect waves-light" type="button">
                                                Large button
                                            </button>
                                            <button type="button" class="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-down"></i><span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <div class="btn-group mb-2">
                                            <button class="btn btn-light btn-sm dropdown-toggle waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Small button <i class="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div class="btn-group mb-2">
                                            <button class="btn btn-light btn-sm" type="button">
                                                Small button
                                            </button>
                                            <button type="button" class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-down"></i><span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <p class="mb-1 mt-4">Dropleft variation</p>
                                        <p class="text-muted font-14">
                                            Trigger dropdown menus at the right of the elements by adding <code>.dropleft</code> to the parent element.
                                        </p>


                                        <div class="btn-group dropleft">
                                            <button type="button" class="btn btn-secondary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-chevron-left"></i> Dropleft
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>


                                        <div class="btn-group">
                                            <div class="btn-group dropleft" role="group">
                                                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <i class="mdi mdi-chevron-left"></i> <span class="sr-only">Toggle Dropleft</span>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-secondary waves-effect waves-light waves-effect waves-light">
                                                Split dropleft
                                            </button>
                                        </div>


                                        <p class="mb-1 mt-4">Menu alignment</p>
                                        <p class="text-muted font-14">
                                            Add <code>.dropdown-menu-right</code>
                                            to a <code>.dropdown-menu</code> to right
                                            align the dropdown menu.
                                        </p>

                                        <div class="btn-group">
                                            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Right-aligned <i class="mdi mdi-chevron-down"></i>
                                            </button>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">

                                <h4 class="card-title">Pagination</h4>
                                <p class="card-subtitle mb-4">
                                    Provide pagination links for your site or app with the multi-page pagination component.
                                </p>

                                <p class="mb-1">Default Pagination</p>
                                <p class="text-muted font-14">
                                    Simple pagination inspired by Rdio, great for apps and search results.
                                </p>

                                <nav>
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link waves-effect" href="javascript: void(0);" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li class="page-item active"><a class="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">4</a></li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">5</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript: void(0);" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <p class="mb-1 mt-4">Sizing</p>
                                <p class="text-muted font-14">
                                    Add <code>
                                        .pagination-lg</code>
                                    or <code>
                                        .pagination-sm</code>
                                    for additional sizes.
                                </p>

                                <nav>
                                    <ul class="pagination pagination-lg">
                                        <li class="page-item">
                                            <a class="page-link waves-effect" href="javascript: void(0);" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li class="page-item active"><a class="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link waves-effect" href="javascript: void(0);" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <nav>
                                    <ul class="pagination pagination-sm">
                                        <li class="page-item">
                                            <a class="page-link waves-effect" href="javascript: void(0);" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li class="page-item active"><a class="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link waves-effect" href="javascript: void(0);" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <p class="mb-1 mt-4">Alignment</p>
                                <p class="text-muted font-14">
                                    Change the alignment of pagination components with flexbox utilities.
                                </p>

                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item disabled">
                                            <a class="page-link waves-effect" href="javascript: void(0);" tabindex="-1">Previous</a>
                                        </li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li class="page-item active"><a class="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link waves-effect" href="javascript: void(0);">Next</a>
                                        </li>
                                    </ul>
                                </nav>

                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-end">
                                        <li class="page-item disabled">
                                            <a class="page-link waves-effect" href="javascript: void(0);" tabindex="-1">Previous</a>
                                        </li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">1</a></li>
                                        <li class="page-item active"><a class="page-link waves-effect" href="javascript: void(0);">2</a></li>
                                        <li class="page-item"><a class="page-link waves-effect" href="javascript: void(0);">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link waves-effect" href="javascript: void(0);">Next</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">

                                <h4 class="card-title">Breadcrumb</h4>
                                <p class="card-subtitle mb-4">
                                    Indicate the current page’s location within a navigational hierarchy.
                                </p>

                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active">Home</li>
                                </ol>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                    <li class="breadcrumb-item active">Library</li>
                                </ol>
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Library</a></li>
                                    <li class="breadcrumb-item active">Data</li>
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
