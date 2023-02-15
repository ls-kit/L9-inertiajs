import React from 'react';
import Base from '../../Layouts/Base';


export default function Sparkline() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Sparkline</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Charts</a></li>
                                    <li className="breadcrumb-item active">Sparkline</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Line Charts</h4>
                                <p className="card-subtitle mb-4">Example of line sparkline chart.</p>

                                <div id="sparkline1"></div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Bar Chart</h4>
                                <p className="card-subtitle mb-4">Example of bar sparkline chart.</p>

                                <div id="sparkline2" className="text-center"></div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Pie Chart</h4>
                                <p className="card-subtitle mb-4">Example of pie sparkline chart.</p>

                                <div id="sparkline3" className="text-center"></div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Mouse Speed Chart</h4>
                                <p className="card-subtitle mb-4">Example of mouse speed sparkline chart.</p>

                                <div id="sparkline4" className="text-center"></div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Composite Bar Chart</h4>
                                <p className="card-subtitle mb-4">Example of composite bar sparkline chart.</p>

                                <div id="sparkline5" className="text-center"></div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Discrete Chart</h4>
                                <p className="card-subtitle mb-4">Example of discrete sparkline chart.</p>

                                <div id="sparkline6" className="text-center"></div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}


Sparkline.layout = (page) => <Base children={page} title={"Sparkline"} />
