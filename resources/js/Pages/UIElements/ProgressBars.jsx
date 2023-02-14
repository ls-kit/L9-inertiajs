import React from 'react';
import Base from '../../Layouts/Base';
export default function ProgressBars() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Progress Bars</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Progress Bars</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Examples</h4>
                                <p className="card-subtitle mb-4">A progress bar can be used to show a user how far along he/she is in a process.</p>

                                <div className="progress">
                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Labels</h4>
                                <p className="card-subtitle mb-4">Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>

                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Height</h4>
                                <p className="card-subtitle mb-4">We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will automatically resize accordingly.</p>


                                <div className="progress mb-2" style={{ height: '3px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <div className="progress mb-2" style={{ height: '6px' }}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <div className="progress" style={{ height: '12px' }}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Multiple Bars</h4>
                                <p className="card-subtitle mb-4">Include multiple progress bars in a progress component if you need.</p>

                                <div className="progress mb-2">
                                    <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '18%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Backgrounds</h4>
                                <p className="card-subtitle mb-4">Use background utility classes to change the appearance of individual progress bars.</p>


                                <div className="progress mb-2">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <div className="progress mb-2">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <div className="progress mb-2">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <div className="progress mb-2">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <div className="progress mb-2">
                                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                <div className="progress">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Striped</h4>
                                <p className="card-subtitle mb-4">Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p>

                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="progress mb-2">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Animated Stripes</h4>
                                <p className="card-subtitle mb-4">The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>

                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


ProgressBars.layout = (page) => <Base children={page} title={"ProgressBars"} />
