import React from 'react';
import Base from '../../Layouts/Base';
export default function Spinners() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Spinners</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Spinners</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Border Spinner</h4>
                                <p className="card-subtitle mb-4">Use the border spinners for a lightweight loading indicator.
                                </p>

                                <div className="spinner-border m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Color Spinner</h4>
                                <p className="card-subtitle mb-4">The border spinner uses <code>currentColor</code> for its <code> border-color</code>, meaning you can customize the color with text color utilities. You can use any of our <a>text color utilities</a> on the standard spinner. </p>

                                <div className="spinner-border text-primary m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-secondary m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-success m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-warning m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-info m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-dark m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Growing spinner</h4>
                                <p className="card-subtitle mb-4">If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!
                                </p>

                                <div className="spinner-grow m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Color Growing Spinner</h4>
                                <p className="card-subtitle mb-4"> This spinner is built with <code>currentColor</code>, so you can easily change its appearance with text color utilities. Here it is in blue, along with the supported variants.</p>

                                <div className="spinner-grow text-primary m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-secondary m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-success m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-danger m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-warning m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-info m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-light m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow text-dark m-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Alignment</h4>
                                <p className="card-subtitle mb-4">Spinners in Bootstrap are built with<code> rem</code>s, <code>currentColor</code>, and <code>display: inline-flex</code>. This means they can easily be resized, recolored, and quickly aligned.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status"></div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Placement</h4>
                                <p className="card-subtitle mb-4">Use <code>flexbox utilities</code>, <code>float utilities</code> or <code>text alignment</code>  utilities to place spinners exactly where you need them in any situation. </p>

                                <div className="d-flex align-items-center">
                                    <strong>Loading...</strong>
                                    <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Sizes</h4>
                                <p className="card-subtitle mb-4">Add <code>.spinner-border-sm</code> and
                                    <code>.spinner-border.avatar-**</code>
                                    to make a smaller spinner that can quickly be used within other components.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="spinner-border avatar-lg text-primary m-2" role="status"></div>
                                        <div className="spinner-grow avatar-lg text-secondary m-2" role="status"></div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="spinner-border avatar-md text-primary m-2" role="status"></div>
                                        <div className="spinner-grow avatar-md text-secondary m-2" role="status"></div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="spinner-border avatar-sm text-primary m-2" role="status"></div>
                                        <div className="spinner-grow avatar-sm text-secondary m-2" role="status"></div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="spinner-border spinner-border-sm m-2" role="status"></div>
                                        <div className="spinner-grow spinner-grow-sm m-2" role="status"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Buttons Spinner</h4>
                                <p className="card-subtitle mb-4">Use spinners within buttons to indicate an action is currently processing or taking place.
                                    You may also swap the text out of the spinner element and utilize button text as needed.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="button-list">
                                            <button className="btn btn-primary" type="button" disabled>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span className="sr-only">Loading...</span>
                                            </button>
                                            <button className="btn btn-primary" type="button" disabled>
                                                <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                                                Loading...
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-2 mt-lg-0">
                                        <div className="button-list">
                                            <button className="btn btn-primary" type="button" disabled>
                                                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> <span className="sr-only">Loading...</span>
                                            </button>
                                            <button className="btn btn-primary" type="button" disabled>
                                                <span className="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true"></span>
                                                Loading...
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


Spinners.layout = (page) => <Base children={page} title={"Spinners"} />
