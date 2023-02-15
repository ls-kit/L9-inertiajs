import React from 'react';
import Base from '../../Layouts/Base';


export default function JqueryKnob() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Jquery Knob</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Charts</a></li>
                                    <li className="breadcrumb-item active">Jquery Knob</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Disable Display Input</h4>
                                <p className="card-subtitle mb-5">Example of disable display input knob chart.</p>

                                <div className="text-center">
                                    <input data-plugin="knob" data-width="180" data-height="180" data-bgColor="#ebeff2"
                                        data-fgColor="#3281f2" data-displayInput="false" value="75" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Cursor Mode</h4>
                                <p className="card-subtitle mb-5">Example of cursor mode chart.</p>

                                <div className="text-center">
                                    <input data-plugin="knob" data-width="180" data-height="180" data-cursor="true"
                                        data-fgColor="#c20856" value="49" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Display Previous Value</h4>
                                <p className="card-subtitle mb-5">Example of display previous value chart.</p>

                                <div className="text-center">
                                    <input data-plugin="knob" data-width="180" data-height="180" data-min="-100"
                                        data-fgColor="#fcba03" data-displayPrevious="true" value="76" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Angle Offset and Arc</h4>
                                <p className="card-subtitle mb-5">Example of angle offset and arc chart.</p>

                                <div className="text-center">
                                    <input data-plugin="knob" data-width="180" data-height="180" data-min="-100"
                                        data-fgColor="#1bccbd" data-displayPrevious="true" data-angleOffset="-125"
                                        data-angleArc="250" value="95" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Angle Offset</h4>
                                <p className="card-subtitle mb-5">Example of angle offset chart.</p>

                                <div className="text-center">
                                    <input data-plugin="knob" data-width="180" data-height="180" data-angleOffset="90"
                                        data-linecap="round" data-fgColor="#009411" value="68" data-thickness=".15" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">5-digit Values, Step 1000</h4>
                                <p className="card-subtitle mb-5">Example of 5-digit values and step 1000 chart.</p>

                                <div className="text-center">
                                    <input data-plugin="knob" data-width="180" data-height="180" data-min="-15000"
                                        data-displayPrevious="true" data-max="15000" data-step="1000" value="9000"
                                        data-fgColor="#bf2506" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Readonly</h4>
                                <p className="card-subtitle mb-5">Example of readonly chart.</p>

                                <div className="text-center">
                                    <input data-plugin="knob" data-width="180" data-height="180" data-linecap="round"
                                        data-fgColor="#7a08c2" value="29" data-skin="tron" data-angleOffset="180"
                                        data-readOnly="true" data-thickness=".1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


JqueryKnob.layout = (page) => <Base children={page} title={"JqueryKnob"} />
