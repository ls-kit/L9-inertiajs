import React from 'react';
import Base from '../../Layouts/Base';


export default function FileUploads() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">File Uploads</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li className="breadcrumb-item active">File Uploads</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Dropify</h4>
                                <p className="card-subtitle mb-4">Override your input files with style. Your so fresh input file — Default version.</p>

                                <input type="file" className="dropify" data-height="300" />

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Default File</h4>
                                <p className="card-subtitle mb-4">Example of dropify default file.</p>

                                <input type="file" className="dropify" data-default-file="assets/images/media/sm-6.jpg" />

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Disabled the Input</h4>
                                <p className="card-subtitle mb-4">Example of dropify disabled the input.</p>

                                <input type="file" className="dropify" disabled="disabled" />

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Max File Size</h4>
                                <p className="card-subtitle mb-4">Example of dropify max file size.</p>

                                <input type="file" className="dropify" data-max-file-size="1M" />

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


FileUploads.layout = (page) => <Base children={page} title={"FileUploads"} />
