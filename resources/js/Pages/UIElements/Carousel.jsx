import React from 'react';
import Base from '../../Layouts/Base';
export default function Carousel() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Carousel</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Carousel</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Slides only</h4>
                                <p className="card-subtitle mb-4">Here’s a carousel with slides only.
                                    Note the presence of the <code>.d-block</code>
                                    and <code>.img-fluid</code> on carousel images
                                    to prevent browser default image alignment.</p>

                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-1.jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-2.jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-3.jpg" alt="Third slide" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">With controls</h4>
                                <p className="card-subtitle mb-4">Adding in the previous and next controls:</p>

                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-4.jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-5.jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-6.jpg" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">With Indicators</h4>
                                <p className="card-subtitle mb-4">You can also add the indicators to the carousel, alongside the controls, too.</p>

                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-7.jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-1.jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-2.jpg" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">With Captions</h4>
                                <p className="card-subtitle mb-4">Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>.</p>

                                <div id="carouselExampleCaption" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img src="assets/images/media/sm-3.jpg" alt="..." className="d-block img-fluid" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h3 className="text-white">First slide label</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/media/sm-4.jpg" alt="..." className="d-block img-fluid" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h3 className="text-white">Second slide label</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/media/sm-5.jpg" alt="..." className="d-block img-fluid" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h3 className="text-white">Third slide label</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleCaption" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleCaption" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Crossfade</h4>
                                <p className="card-subtitle mb-4">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>

                                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-6.jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-7.jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="assets/images/media/sm-1.jpg" alt="Third slide" />
                                        </div>
                                    </div>/
                                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>

    )
}


Carousel.layout = (page) => <Base children={page} title={"Carousel"} />
