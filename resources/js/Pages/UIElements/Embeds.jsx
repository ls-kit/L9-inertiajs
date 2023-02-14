import React from 'react';
import Base from '../../Layouts/Base';
export default function Embeds() {
    return (
        <div class="page-content">
            <div class="container-fluid">


                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0 font-size-18">Embed</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li class="breadcrumb-item active">Embed</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">

                                <h4 class="card-title">Responsive embed video 21:9</h4>
                                <p class="card-subtitle mb-4">Wrap any embed like an <code>&lt;iframe&gt;</code> in a parent element with <code>.embed-responsive</code> and an aspect ratio. The <code>.embed-responsive-item</code> isn’t strictly required, but we encourage it.</p>


                                <div class="embed-responsive embed-responsive-21by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/hihYqk15e6Y?autohide=0&showinfo=0&controls=0"></iframe>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">

                                <h4 class="card-title">Responsive embed video 1:1</h4>
                                <p class="card-subtitle mb-4">Please use class <code>.embed-responsive-1by1</code> with div.</p>


                                <div class="embed-responsive embed-responsive-1by1">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/hihYqk15e6Y?ecver=1"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">

                                <h4 class="card-title">Responsive embed video 16:9</h4>
                                <p class="card-subtitle mb-4">Please use class <code>.embed-responsive-16by9</code> with div.</p>


                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/hihYqk15e6Y?ecver=1"></iframe>
                                </div>

                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">

                                <h4 class="card-title">Responsive embed video 4:3</h4>
                                <p class="card-subtitle mb-4">Please use class <code>.embed-responsive-4by3</code> with div.</p>


                                <div class="embed-responsive embed-responsive-4by3">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/hihYqk15e6Y?ecver=1"></iframe>
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
