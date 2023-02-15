import React from 'react';
import Base from '../../Layouts/Base';


export default function Morris() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Morris Chart</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Charts</a></li>
                                    <li className="breadcrumb-item active">Morris Chart</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Line Chart</h4>
                                <p className="card-subtitle mb-4">Example of morris line chart.</p>

                                <div id="morris-line-example" className="morris-chart"></div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Bar Chart</h4>
                                <p className="card-subtitle mb-4">Example of morris bar chart.</p>

                                <div id="morris-bar-example" className="morris-chart"></div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Area Chart</h4>
                                <p className="card-subtitle mb-4">Example of morris area chart.</p>

                                <div id="morris-area-example" className="morris-chart"></div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Doughnut Chart</h4>
                                <p className="card-subtitle mb-4">Example of morris doughnut chart.</p>

                                <div id="morris-donut-example" className="morris-chart"></div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Line Chart Updating</h4>
                                <p className="card-subtitle mb-4">Example of morris line updating chart.</p>

                                <div id="line-chart-updating" className="morris-chart"></div>

                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>

    )
}


Morris.layout = (page) => <Base children={page} title={"Morris"} />
