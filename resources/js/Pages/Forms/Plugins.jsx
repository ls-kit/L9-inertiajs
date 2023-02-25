import React from 'react';
import Base from '../../Layouts/Base';


export default function Plugins() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Plugins</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li className="breadcrumb-item active">Plugins</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Bootstrap MaxLength</h4>
                                <p className="card-subtitle mb-4">Uses the HTML5 attribute "maxlength" to work.</p>

                                <div className="form-group">
                                    <label>Default usage</label>
                                    <input type="text" className="form-control" maxlength="25" name="defaultconfig" id="defaultconfig" />
                                </div>

                                <div className="form-group">
                                    <label>Threshold value</label>
                                    <input type="text" maxlength="25" name="thresholdconfig" className="form-control" id="thresholdconfig" />
                                </div>

                                <div className="form-group">
                                    <label>Position</label>
                                    <input type="text" className="form-control" maxlength="25" name="placement" id="placement" />
                                </div>

                                <div className="form-group">
                                    <label>All the options</label>
                                    <input type="text" className="form-control" maxlength="25" name="alloptions" id="alloptions" />
                                </div>

                                <div className="form-group">
                                    <label>Textarea</label>
                                    <textarea id="textarea" className="form-control" maxlength="250" rows="3" placeholder="This textarea has a limit of 250 chars."></textarea>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Bootstrap Touchspin</h4>
                                <p className="card-subtitle mb-4">A mobile and touch friendly input spinner component for Bootstrap.</p>

                                <div className="form-group">
                                    <label>Using data attributes</label>
                                    <input data-toggle="touchspin" type="text" value="55" />
                                </div>

                                <div className="form-group">
                                    <label>Example with postfix (large)</label>
                                    <input data-toggle="touchspin" value="18.20" type="text" data-step="0.1" data-decimals="2" data-bts-postfix="%" />
                                </div>

                                <div className="form-group">
                                    <label>With prefix</label>
                                    <input data-toggle="touchspin" type="text" data-bts-prefix="$" />
                                </div>

                                <div className="form-group">
                                    <label>Change button className</label>
                                    <input data-toggle="touchspin" value="77" type="text" data-bts-button-down-className="btn btn-secondary waves-effect waves-light" data-bts-button-up-className="btn btn-info" />
                                </div>

                                <div className="form-group">
                                    <label>Init with empty value:</label>
                                    <input data-toggle="touchspin" type="text" />
                                </div>

                                <div className="form-group mb-0">
                                    <label>Max value - (Default value 100)</label>
                                    <input data-toggle="touchspin" data-bts-max="500" value="100" data-btn-vertical="true" type="text" />
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Date Range Picker</h4>
                                <p className="card-subtitle mb-4">A JavaScript component for choosing date ranges, dates and times.</p>

                                <div className="form-group mb-3">
                                    <label>Date Range</label>
                                    <input type="text" className="form-control date" id="singledaterange" data-toggle="daterangepicker" data-cancel-className="btn-warning" />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Date Range Picker With Times</label>
                                    <input type="text" className="form-control date" id="daterangetime" data-toggle="daterangepicker" data-time-picker="true" data-locale="{'format': 'DD/MM hh:mm A'}" />
                                </div>

                                <div className="form-group">
                                    <label>Single Date Picker</label>
                                    <input type="text" className="form-control date" id="birthdatepicker" data-toggle="daterangepicker" data-single-date-picker="true" />
                                </div>

                                <div className="form-group">
                                    <label>Predefined Date Ranges</label>
                                    <div id="reportrange" className="form-control" data-toggle="date-picker-range" data-target-display="#selectedValue" data-cancel-className="btn-light">
                                        <i className="mdi mdi-calendar"></i>&nbsp;
                                        <span id="selectedValue"></span> <i className="mdi mdi-menu-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Switchery</h4>
                                <p className="card-subtitle mb-4">iOS 7 style switches for your checkboxes</p>

                                <div className="form-group">
                                    <label>Basic</label>
                                    <br />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#2e7ce4" />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#627898" />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#00c2b2" />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#df3554" />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#f1bf43" />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#38b3d6" />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#132843" />

                                </div>

                                <div className="form-group">
                                    <label>Sizes </label>
                                    <br />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#df3554" data-size="small" />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#00c2b2" />
                                    <input type="checkbox" checked data-toggle="switchery" data-color="#627898" data-size="large" />
                                </div>

                                <div className="form-group mb-0">
                                    <label>Secondary color</label>
                                    <br />
                                    <input type="checkbox" data-toggle="switchery" data-color="#2e7ce4" data-secondary-color="#df3554" />
                                    <input type="checkbox" data-toggle="switchery" data-color="#627898" data-secondary-color="#132843" checked />
                                    <input type="checkbox" data-toggle="switchery" data-color="#38b3d6" data-secondary-color="#df3554" checked />
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Select2</h4>
                                <p className="card-subtitle mb-4">The jQuery replacement for select boxes</p>

                                <div className="form-group">
                                    <label>Single Select</label>

                                    <select className="form-control" data-toggle="select2">
                                        <option>Select</option>
                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                            <option value="AK">Alaska</option>
                                            <option value="HI">Hawaii</option>
                                        </optgroup>
                                        <optgroup label="Pacific Time Zone">
                                            <option value="CA">California</option>
                                            <option value="NV">Nevada</option>
                                            <option value="OR">Oregon</option>
                                            <option value="WA">Washington</option>
                                        </optgroup>
                                        <optgroup label="Mountain Time Zone">
                                            <option value="AZ">Arizona</option>
                                            <option value="CO">Colorado</option>
                                            <option value="ID">Idaho</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="UT">Utah</option>
                                            <option value="WY">Wyoming</option>
                                        </optgroup>
                                        <optgroup label="Central Time Zone">
                                            <option value="AL">Alabama</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TX">Texas</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="WI">Wisconsin</option>
                                        </optgroup>
                                        <optgroup label="Eastern Time Zone">
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="IN">Indiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="OH">Ohio</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WV">West Virginia</option>
                                        </optgroup>
                                    </select>

                                </div>
                                <div className="form-group mb-0">
                                    <label>Multiple Select</label>

                                    <select className="form-control select2-multiple" data-toggle="select2" multiple="multiple" data-placeholder="Choose ...">
                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                            <option value="AK">Alaska</option>
                                            <option value="HI">Hawaii</option>
                                        </optgroup>
                                        <optgroup label="Pacific Time Zone">
                                            <option value="CA">California</option>
                                            <option value="NV">Nevada</option>
                                            <option value="OR">Oregon</option>
                                            <option value="WA">Washington</option>
                                        </optgroup>
                                        <optgroup label="Mountain Time Zone">
                                            <option value="AZ">Arizona</option>
                                            <option value="CO">Colorado</option>
                                            <option value="ID">Idaho</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="UT">Utah</option>
                                            <option value="WY">Wyoming</option>
                                        </optgroup>
                                        <optgroup label="Central Time Zone">
                                            <option value="AL">Alabama</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TX">Texas</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="WI">Wisconsin</option>
                                        </optgroup>
                                        <optgroup label="Eastern Time Zone">
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="IN">Indiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="OH">Ohio</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WV">West Virginia</option>
                                        </optgroup>
                                    </select>

                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Colorpicker</h4>
                                <p className="card-subtitle mb-4">Bootstrap Colorpicker is a modular color picker plugin for Bootstrap 4.</p>

                                <div className="form-group">
                                    <label>Default</label>
                                    <input type="text" id="basic-colorpicker" className="form-control" placeholder="Basic colorpicker" />
                                </div>

                                <div className="form-group">
                                    <label>Hexa Color</label>
                                    <input type="text" id="hexa-colorpicker" className="form-control" value="#4a81d4" />
                                </div>

                                <div className="form-group">
                                    <label>As Component</label>
                                    <div id="component-colorpicker" className="input-group" title="Using format option">
                                        <input type="text" className="form-control input-lg" value="#305AA2" />
                                        <span className="input-group-append">
                                            <span className="input-group-text colorpicker-input-addon"><i></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div className="form-group mb-0">
                                    <label>Horizontal</label>
                                    <input type="text" id="horizontal-colorpicker" className="form-control" value="#8fff00" />
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Bootstrap Datepicker</h4>
                                <p className="card-subtitle mb-4">Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style.</p>

                                <div className="form-group">
                                    <label>Date Picker</label>
                                    <input type="text" className="form-control" data-provide="datepicker" />
                                </div>

                                <div className="form-group">
                                    <label>Date View</label>
                                    <input type="text" className="form-control" data-provide="datepicker" data-date-format="d-M-yyyy" />
                                </div>

                                <div className="form-group">
                                    <label>Multi Datepicker</label>
                                    <input type="text" className="form-control" data-provide="datepicker" data-date-multidate="true" />
                                </div>

                                <div className="form-group">
                                    <label>Autoclose</label>
                                    <input type="text" className="form-control" data-provide="datepicker" data-date-autoclose="true" />
                                </div>

                                <div className="form-group">
                                    <label>Month View</label>
                                    <input type="text" className="form-control" data-provide="datepicker" data-date-format="MM yyyy" data-date-min-view-mode="1" />
                                </div>

                                <div className="form-group mb-0">
                                    <label>Year View</label>
                                    <input type="text" className="form-control" data-provide="datepicker" data-date-min-view-mode="2" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Auto Numberic</h4>
                                <p className="card-subtitle mb-4">A jQuery Plugin to make masks on form fields and HTML elements.</p>


                                <div className="row">
                                    <div className="col-md-6">
                                        <form action="#">
                                            <div className="form-group">
                                                <label>Default</label>
                                                <input type="text" placeholder="" className="form-control autonumber" data-a-sep="." data-a-dec="," />
                                                <span className="font-13 text-muted">e.g. "1.234.567.890.123"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Auto Numeric ($)</label>
                                                <input type="text" placeholder="" data-a-sign="$ " className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "$ $ 1,234,567,890,123"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Auto Numeric (€)</label>
                                                <input type="text" placeholder="" data-a-sign="€ " className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "€ 1,234,567,890,123"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Auto Numeric (Rs.)</label>
                                                <input type="text" placeholder="" data-a-sign="Rs. " className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "Rs. 1,234,567,890,123"</span>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <label>4 digit Group (¥)</label>
                                                <input type="text" placeholder="" data-d-group="4" data-a-sign="¥ " className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "¥ 1,2345,6789,0123"</span>
                                            </div>

                                        </form>
                                    </div>

                                    <div className="col-md-6">
                                        <form action="#">
                                            <div className="form-group">
                                                <label>Auto Numeric (£)</label>
                                                <input type="text" placeholder="" data-a-sign="£ " className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "£ 1,234,567,890,123"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Auto Numeric (%)</label>
                                                <input type="text" placeholder="" data-a-sign="%" data-p-sign="s" className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "11%"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Maximum Value (0 - 9999)</label>
                                                <input type="text" placeholder="" data-v-max="9999" data-v-min="0" className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "9,999"</span>
                                            </div>

                                            <div className="form-group">
                                                <label>Range Value (-99.99 - 1000.00)</label>
                                                <input type="text" placeholder="" data-v-min="-99.99" data-v-max="1000.00" className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "1000 Or -99.99"</span>
                                            </div>

                                            <div className="form-group m-b-0">
                                                <label>Bracket Value</label>
                                                <input type="text" placeholder="" data-a-sep="." data-a-dec="," data-v-min="-9999.99" data-v-max="0.00" data-n-bracket="(,)" className="form-control autonumber" />
                                                <span className="font-13 text-muted">e.g. "(9,999.00)"</span>
                                            </div>

                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>



            </div>/
        </div>

    )
}


Plugins.layout = (page) => <Base children={page} title={"Plugins"} />
