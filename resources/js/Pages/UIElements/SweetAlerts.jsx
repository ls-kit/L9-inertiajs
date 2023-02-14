import React from 'react';
import Base from '../../Layouts/Base';
export default function SweetAlerts() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Sweet Alerts</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Sweet Alerts</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Examples</h4>

                                <p className="card-subtitle mb-4">
                                    A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes
                                </p>

                                <div className="row">
                                    <div className="col-xl-6">
                                        <table className="table table-borderless table-centered mb-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Alert Type</th>
                                                    <th>Example</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>A basic message</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-basic">Click me</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>A title with a text under</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-title">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A success message!</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-success">Click me</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>A modal window with a long content inside:</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-long-content">Click me</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>A custom positioned dialog</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-custom-position">Click me</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>A modal with a title, an error icon, a text, and a footer</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-error">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A confirm dialog, with a function attached to the "Confirm"-button...</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-warning">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>By passing a parameter, you can execute something else for "Cancel".</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-params">Click me</button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-xl-6">
                                        <table className="table table-borderless table-centered mb-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Alert Type</th>
                                                    <th>Example</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>A message with custom Image Header</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-image">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A message with auto close timer</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="sa-close">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Custom HTML description and buttons</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="custom-html-alert">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>A message with custom width, padding and background</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="custom-padding-width-alert">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ajax request example</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="ajax-alert">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Chaining modals (queue) example</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="chaining-alert">Click me</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Dynamic queue example</td>
                                                    <td>
                                                        <button type="button" className="btn btn-info btn-sm waves-effect waves-light" id="dynamic-alert">Click me</button>
                                                    </td>
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
        </div>

    )
}


SweetAlerts.layout = (page) => <Base children={page} title={"SweetAlerts"} />
