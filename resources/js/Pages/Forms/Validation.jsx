import React from 'react';
import Base from '../../Layouts/Base';


export default function Validation() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Validation</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li className="breadcrumb-item active">Validation</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Custom styles</h4>
                                <p className="card-subtitle mb-4">Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for <code>&lt;select&gt;</code>s are only available with <code>.custom-select</code>, and not <code>.form-control</code>.</p>
                                <form className="needs-validation" novalidate>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label for="validationCustom01">First name</label>
                                            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label for="validationCustom02">Last name</label>
                                            <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label for="validationCustomUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label for="validationCustom03">City</label>
                                            <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label for="validationCustom04">State</label>
                                            <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label for="validationCustom05">Zip</label>
                                            <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox form-check">
                                            <input type="checkbox" className="custom-control-input" id="invalidCheck"
                                                required />
                                            <label className="custom-control-label" for="invalidCheck">Agree to terms
                                                and conditions</label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary waves-effect waves-light" type="submit">Submit form</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Tooltips</h4>
                                <p className="card-subtitle mb-4">If your form layout allows it, you can swap the <code>.
                                    -feedback</code> classes for <code>.-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.</p>
                                <form className="needs-validation" novalidate>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label for="validationTooltip01">First name</label>
                                            <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required />
                                            <div className="valid-tooltip">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label for="validationTooltip02">Last name</label>
                                            <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required />
                                            <div className="valid-tooltip">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label for="validationTooltipUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required />
                                                <div className="invalid-tooltip">
                                                    Please choose a unique and valid username.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label for="validationTooltip03">City</label>
                                            <input type="text" className="form-control" id="validationTooltip03" placeholder="City" required />
                                            <div className="invalid-tooltip">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label for="validationTooltip04">State</label>
                                            <input type="text" className="form-control" id="validationTooltip04" placeholder="State" required />
                                            <div className="invalid-tooltip">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label for="validationTooltip05">Zip</label>
                                            <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
                                            <div className="invalid-tooltip">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary waves-effect waves-light" type="submit">Submit Form</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


Validation.layout = (page) => <Base children={page} title={"Validation"} />
