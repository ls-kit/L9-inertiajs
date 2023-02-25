import React from 'react';
import Base from '../../Layouts/Base';


export default function Elements() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Form Elements</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li className="breadcrumb-item active">Elements</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Form Controls </h4>
                                <p className="card-subtitle mb-4">Textual form controls—like <code>input</code>s,<code> selects</code>, and<code> textare</code>s—are styled with the .form-control className. Included are styles for general appearance, focus state, sizing, and more. </p>

                                <form>
                                    <div className="form-group">
                                        <label for="simpleinput">Text</label>
                                        <input type="text" id="simpleinput" className="form-control" placeholder="Enter your text" />
                                    </div>

                                    <div className="form-group">
                                        <label for="example-password">Password</label>
                                        <input type="password" id="example-password" className="form-control" value="password" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlSelect1">Select</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlSelect2">Multiple Select</label>
                                        <select multiple className="form-control" id="exampleFormControlSelect2">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Textarea</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="formControlRange">Range input</label>
                                        <input type="range" className="form-control-range" id="formControlRange" />
                                    </div>
                                    <div className="form-group">
                                        <label for="customRange3">Custom Range</label>
                                        <input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3" />
                                    </div>
                                    <div className="form-group">
                                        <label>File Browser</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" />
                                            <label className="custom-file-label" for="customFile">Choose file</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="example-readonly">Readonly</label>
                                        <input type="text" id="example-readonly" className="form-control" readonly="" value="Readonly value" />
                                    </div>

                                    <div className="form-group">
                                        <label for="example-disable">Disabled</label>
                                        <input type="text" className="form-control" id="example-disable" disabled="" value="Disabled value" />
                                    </div>

                                    <div className="form-group">
                                        <label for="example-static">Static control</label>
                                        <input type="text" readonly className="form-control-plaintext" id="example-static" value="email@example.com" />
                                    </div>

                                    <div className="form-group mb-0">
                                        <label for="example-helping">Helping text</label>
                                        <input type="text" id="example-helping" className="form-control" placeholder="Helping text" />
                                        <span className="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
                                    </div>

                                </form>
                            </div>

                        </div>


                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Basic Forms</h4>
                                <p className="card-subtitle mb-4">Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.</p>

                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkmeout0" />
                                            <label className="custom-control-label" for="checkmeout0">Check me out !</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary waves-effect waves-light">Submit</button>
                                </form>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Horizontal Form</h4>
                                <p className="card-subtitle mb-4">Create horizontal forms with the grid by adding the <code>.row</code> className to form groups and using the <code>.col-*-*</code> classes to specify the width of your labels and controls. Be sure to add <code>.col-form-label</code> to your <code>&lt;label&gt;</code>s as well so they’re vertically centered with their associated form controls.</p>

                                <form className="form-horizontal">
                                    <div className="form-group row mb-3">
                                        <label for="inputEmail3" className="col-3 col-form-label">Email</label>
                                        <div className="col-9">
                                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <label for="inputPassword3" className="col-3 col-form-label">Password</label>
                                        <div className="col-9">
                                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <label for="inputPassword5" className="col-3 col-form-label">Re Password</label>
                                        <div className="col-9">
                                            <input type="password" className="form-control" id="inputPassword5" placeholder="Retype Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3 justify-content-end">
                                        <div className="col-9">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="checkmeout" />
                                                <label className="custom-control-label" for="checkmeout">Check me out !</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0 justify-content-end row">
                                        <div className="col-9">
                                            <button type="submit" className="btn btn-info waves-effect waves-light">Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Checkboxes and Radios</h4>
                                <p className="card-subtitle mb-4">Each checkbox and radio <code>&lt;input&gt;</code> and <code>&lt;label&gt;</code> pairing is wrapped in a <code>&lt;div&gt;</code> to create our custom control. Structurally, this is the same approach as our default <code>.form-check</code>.</p>

                                <h6>Checkboxes</h6>

                                <div className="mt-3">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                        <label className="custom-control-label" for="customCheck2">Check this custom checkbox</label>
                                    </div>
                                </div>

                                <h6 className="mt-4">Inline Checkbox</h6>


                                <div className="mt-3">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                        <label className="custom-control-label" for="customCheck3">Check this custom checkbox</label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                        <label className="custom-control-label" for="customCheck4">Check this custom checkbox</label>
                                    </div>
                                </div>



                                <div className="mt-2">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck5" checked disabled />
                                        <label className="custom-control-label" for="customCheck5">Check this custom checkbox</label>
                                    </div>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" id="customCheck6" disabled />
                                        <label className="custom-control-label" for="customCheck6">Check this custom checkbox</label>
                                    </div>
                                </div>


                                <h6 className="mt-4">Radios</h6>


                                <div className="mt-3">
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" for="customRadio1">Toggle this custom radio</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                        <label className="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
                                    </div>
                                </div>


                                <h6 className="mt-4">Inline Radios</h6>

                                <div className="mt-3">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadio3" name="customRadio1" className="custom-control-input" />
                                        <label className="custom-control-label" for="customRadio3">Toggle this custom radio</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadio4" name="customRadio1" className="custom-control-input" />
                                        <label className="custom-control-label" for="customRadio4">Or toggle this other custom radio</label>
                                    </div>
                                </div>



                                <div className="mt-2">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadio5" name="customRadio2" className="custom-control-input" disabled />
                                        <label className="custom-control-label" for="customRadio5">Toggle this custom radio</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadio6" name="customRadio2" className="custom-control-input" checked disabled />
                                        <label className="custom-control-label" for="customRadio6">Or toggle this other custom radio</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Sizing</h4>
                                <p className="card-subtitle mb-4">Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>

                                <h6 className="mb-3">Input Sizing</h6>
                                <input className="form-control form-control-lg mb-3" type="text" placeholder=".form-control-lg" />
                                <input className="form-control mb-3" type="text" placeholder="Default input" />
                                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />

                                <h6 className="mt-4 mb-3">Select Sizing</h6>
                                <select className="form-control form-control-lg mb-3">
                                    <option>Large select</option>
                                </select>

                                <select className="form-control mb-3">
                                    <option>Default select</option>
                                </select>

                                <select className="form-control form-control-sm">
                                    <option>Small select</option>
                                </select>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Horizontal Form Label Sizing</h4>
                                <p className="card-subtitle mb-4">Be sure to use <code>.col-form-label-sm</code> or <code>.col-form-label-lg</code> to your <code>&lt;label&gt;</code>s or <code>&lt;legend&gt;</code>s to correctly follow the size of <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>
                                <form>
                                    <div className="form-group row">
                                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="colFormLabel" placeholder="col-form-label" />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Input Group</h4>
                                <p className="card-subtitle mb-4">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs</p>

                                <div className="form-group">
                                    <label>Static</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">@</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Dropdowns</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-primary   dropdown-toggle waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Buttons</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" />
                                        <div className="input-group-append">
                                            <button className="btn btn-dark waves-effect waves-light" type="button">Button</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Inline Form</h4>
                                <p className="card-subtitle mb-4">Use the <code>.form-inline</code> className to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states. Controls only appear inline in viewports that are at least 576px wide to account for narrow viewports on mobile devices.</p>

                                <form className="form-inline">
                                    <div className="form-group">
                                        <label for="staticEmail2" className="sr-only">Email</label>
                                        <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
                                    </div>
                                    <div className="form-group mx-sm-3">
                                        <label for="inputPassword2" className="sr-only">Password</label>
                                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary waves-effect waves-light">Confirm identity</button>
                                </form>


                                <h6 className="mt-4 mb-3">Auto Sizing</h6>
                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-auto">
                                            <label className="sr-only" for="inlineFormInput">Name</label>
                                            <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
                                        </div>
                                        <div className="col-auto">
                                            <label className="sr-only" for="inlineFormInputGroup">Username</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="custom-control custom-checkbox mb-2">
                                                <input type="checkbox" className="custom-control-input" id="autoSizingCheck" />
                                                <label className="custom-control-label" for="autoSizingCheck">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-2 waves-effect waves-light">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </div>

    )
}


Elements.layout = (page) => <Base children={page} title={"Elements"} />
