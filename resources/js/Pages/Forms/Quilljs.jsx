import React from 'react';
import Base from '../../Layouts/Base';


export default function Quilljs() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Quilljs Editor</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li className="breadcrumb-item active">Quilljs</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Snow Editor</h4>
                                <p className="card-subtitle mb-4">Snow is a clean, flat toolbar theme.</p>

                                <div id="snow-editor" style={{ height: '300px' }}>
                                    <h3><span className="ql-size-large">Hello World!</span></h3>
                                    <p><br /></p>
                                    <h3>This is an simple editable area.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Bubble Editor</h4>
                                <p className="card-subtitle mb-4">Bubble is a simple tooltip based theme.</p>

                                <div id="bubble-editor" style={{ height: '250px' }}>
                                    <h3><span className="ql-size-large">Hello World!</span></h3>
                                    <p><br /></p>
                                    <h3>This is an simple editable area.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


Quilljs.layout = (page) => <Base children={page} title={"Quilljs"} />
