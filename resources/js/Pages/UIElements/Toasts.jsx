import React from 'react';
import Base from '../../Layouts/Base';
export default function Toasts() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Toasts</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Toasts</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Bootstrap Toasts</h4>
                                <p className="card-subtitle mb-4">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <h6 className="mb-2">Basic</h6>
                                        <p className="text-muted">Toasts are as flexible as you need and have very little required markup. At a minimum, we
                                            require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
                                        <div className="p-3">
                                            <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-toggle="toast">
                                                <div className="toast-header">
                                                    <img src="assets/images/users/avatar-2.jpg" alt="brand-logo" height="28" className="mr-1 rounded" />
                                                    <strong className="mr-auto">Myra</strong>
                                                    <small>11 mins ago</small>
                                                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="toast-body">
                                                    Hello, world! This is a toast message.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="mb-2">Translucent</h6>
                                        <p className="text-muted">Toasts are slightly translucent, too, so they blend over whatever they might appear over.
                                            For browsers that support the backdrop-filter CSS property, we’ll also attempt to blur the elements under a toast.</p>

                                        <div className="p-3 bg-secondary">
                                            <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-toggle="toast">
                                                <div className="toast-header">
                                                    <img src="assets/images/users/avatar-3.jpg" alt="brand-logo" height="28" className="mr-1 rounded" />
                                                    <strong className="mr-auto">Myra</strong>
                                                    <small>11 mins ago</small>
                                                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="toast-body">
                                                    Hello, world! This is a toast message.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-6 mt-4">
                                        <h6 className="mb-2">Stacking</h6>
                                        <p className="text-muted">When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.</p>
                                        <div className="p-3">
                                            <div aria-live="polite" aria-atomic="true" style={{ position: 'relative', minHeight: '200px' }}>

                                                <div style={{ position: 'absolute', top: 0, right: 0 }}>


                                                    <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-toggle="toast">
                                                        <div className="toast-header">
                                                            <img src="assets/images/users/avatar-4.jpg" alt="brand-logo" height="28" className="mr-1 rounded" />
                                                            <strong className="mr-auto">Myra</strong>
                                                            <small className="text-muted">just now</small>
                                                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="toast-body">
                                                            See? Just like this.
                                                        </div>
                                                    </div>

                                                    <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-toggle="toast">
                                                        <div className="toast-header">
                                                            <img src="assets/images/users/avatar-5.jpg" alt="brand-logo" height="28" className="mr-1 rounded" />
                                                            <strong className="mr-auto">Myra</strong>
                                                            <small className="text-muted">2 seconds ago</small>
                                                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="toast-body">
                                                            Heads up, toasts will stack automatically
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <h6 className="mb-2">Placement</h6>
                                        <p className="text-muted">Place toasts with custom CSS as you need them. The top right is often used for
                                            notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning
                                            styles right on the <code>.toast</code>.</p>
                                        <div className="p-3">
                                            <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>


                                                <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-toggle="toast">
                                                    <div className="toast-header">
                                                        <img src="assets/images/users/avatar-6.jpg" alt="brand-logo" height="28" className="mr-2 rounded-circle" />
                                                        <strong className="mr-auto">Myra</strong>
                                                        <small>11 mins ago</small>
                                                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="toast-body">
                                                        Hello, world! This is a toast message.
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


                <div className="row">
                    <div className="col-12">
                        <h4 className="mb-4">Alerts</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Examples</h4>
                                <p className="card-subtitle mb-4">Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code>.alert-success</code>).</p>

                                <div className="alert alert-primary" role="alert">
                                    A simple primary alert—check it out!
                                </div>
                                <div className="alert alert-secondary" role="alert">
                                    A simple secondary alert—check it out!
                                </div>
                                <div className="alert alert-success" role="alert">
                                    A simple success alert—check it out!
                                </div>
                                <div className="alert alert-danger" role="alert">
                                    A simple danger alert—check it out!
                                </div>
                                <div className="alert alert-warning" role="alert">
                                    A simple warning alert—check it out!
                                </div>
                                <div className="alert alert-info" role="alert">
                                    A simple info alert—check it out!
                                </div>
                                <div className="alert alert-light" role="alert">
                                    A simple light alert—check it out!
                                </div>
                                <div className="alert alert-dark mb-0" role="alert">
                                    A simple dark alert—check it out!
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Link Color</h4>
                                <p className="card-subtitle mb-4">Use the <code>.alert-link</code> utility className to quickly provide matching colored links within any alert.</p>

                                <div className="alert alert-primary" role="alert">
                                    A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                </div>
                                <div className="alert alert-secondary" role="alert">
                                    A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                </div>
                                <div className="alert alert-success" role="alert">
                                    A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                </div>
                                <div className="alert alert-danger" role="alert">
                                    A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                </div>
                                <div className="alert alert-warning" role="alert">
                                    A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                </div>
                                <div className="alert alert-info" role="alert">
                                    A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                </div>
                                <div className="alert alert-light" role="alert">
                                    A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                </div>
                                <div className="alert alert-dark mb-0" role="alert">
                                    A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Additional Content</h4>
                                <p className="card-subtitle mb-4">Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>

                                <div className="alert alert-success mb-0" role="alert">
                                    <h5 className="alert-heading">Well done!</h5>
                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                    <hr />
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Dismissing</h4>
                                <p className="card-subtitle mb-4">You can see this in action with a live demo:</p>

                                <div className="alert alert-warning alert-dismissible fade show mb-0" role="alert">
                                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


Toasts.layout = (page) => <Base children={page} title={"Toasts"} />
