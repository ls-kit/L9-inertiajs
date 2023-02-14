import React from 'react';
import Base from '../../Layouts/Base';
export default function Embeds() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Embed</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Embed</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Responsive embed video 21:9</h4>
                                <p className="card-subtitle mb-4">Wrap any embed like an <code>&lt;iframe&gt;</code> in a parent element with <code>.embed-responsive</code> and an aspect ratio. The <code>.embed-responsive-item</code> isn’t strictly required, but we encourage it.</p>


                                <div className="embed-responsive embed-responsive-21by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hihYqk15e6Y?autohide=0&showinfo=0&controls=0"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Responsive embed video 1:1</h4>
                                <p className="card-subtitle mb-4">Please use className <code>.embed-responsive-1by1</code> with div.</p>


                                <div className="embed-responsive embed-responsive-1by1">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hihYqk15e6Y?ecver=1"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Responsive embed video 16:9</h4>
                                <p className="card-subtitle mb-4">Please use className <code>.embed-responsive-16by9</code> with div.</p>


                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hihYqk15e6Y?ecver=1"></iframe>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Responsive embed video 4:3</h4>
                                <p className="card-subtitle mb-4">Please use className <code>.embed-responsive-4by3</code> with div.</p>


                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hihYqk15e6Y?ecver=1"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}


Embeds.layout = (page) => <Base children={page} title={"Embeds"} />
