import React from 'react';
import Base from '../../Layouts/Base';
export default function MediaObjects() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Media Object</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Media Object</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Default Media Object</h4>
                                <p className="card-subtitle mb-4">The default media displays a media object (images, video, audio) to the left or right of a content block.</p>

                                <div className="media mb-3">
                                    <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-8.jpg" alt="Generic placeholder image" height="48" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Media heading</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                </div>

                                <div className="media mb-3">
                                    <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-7.jpg" alt="Generic placeholder image" height="48" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Media heading</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                                        <div className="media mt-3">
                                            <a className="d-flex pr-3" href="#">
                                                <img src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" height="48" className="rounded-circle" />
                                            </a>
                                            <div className="media-body">
                                                <h5 className="mt-0">Media heading</h5>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">Media object</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                    <img className="d-flex ml-3 rounded-circle" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="48" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Media Alignment</h4>
                                <p className="card-subtitle mb-4">Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your <code>.media-body</code> content.</p>

                                <div className="media mb-3">
                                    <img className="d-flex align-self-start rounded mr-3" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="48" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Top-aligned media</h5>
                                        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>

                                <div className="media mb-3">
                                    <img className="d-flex align-self-center rounded mr-3" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" height="48" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Center-aligned media</h5>
                                        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>

                                <div className="media">
                                    <img className="d-flex align-self-end rounded mr-3" src="assets/images/users/avatar-7.jpg" alt="Generic placeholder image" height="48" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Bottom-aligned media</h5>
                                        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Images Shapes</h4>
                                <p className="card-subtitle mb-4">Add classes to an <code>&lt;img&gt;</code> element to easily style
                                    images in any project.</p>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src="assets/images/media/sm-1.jpg" alt="image"
                                            className="img-fluid rounded" width="200" />
                                        <p className="mb-0">
                                            <code>.rounded</code>
                                        </p>
                                    </div>

                                    <div className="col-sm-4 text-center">
                                        <img src="assets/images/users/avatar-6.jpg" alt="image"
                                            className="img-fluid rounded-circle" width="120" />
                                        <p className="mb-0">
                                            <code>.rounded-circle</code>
                                        </p>
                                    </div>

                                    <div className="col-sm-4">
                                        <img src="assets/images/media/sm-3.jpg" alt="image"
                                            className="img-fluid img-thumbnail" width="200" />
                                        <p className="mb-0">
                                            <code>.img-thumbnail</code>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Avatar Sizes</h4>
                                <p className="card-subtitle mb-4">Available avatar sizes.</p>

                                <div className="row">
                                    <div className="col-sm-3">
                                        <img src="assets/images/users/avatar-1.jpg" alt="image"
                                            className="img-fluid avatar-xs rounded" />
                                        <p className="mb-0">
                                            <code>.avatar-xs</code>
                                        </p>
                                        <img src="assets/images/users/avatar-1.jpg" alt="image"
                                            className="img-fluid avatar-sm rounded mt-2" />
                                        <p className="mb-0">
                                            <code>.avatar-sm</code>
                                        </p>
                                    </div>

                                    <div className="col-sm-3">
                                        <img src="assets/images/users/avatar-1.jpg" alt="image"
                                            className="img-fluid avatar-md rounded" />
                                        <p className="mb-0">
                                            <code>.avatar-md</code>
                                        </p>
                                    </div>

                                    <div className="col-sm-3">
                                        <img src="assets/images/users/avatar-1.jpg" alt="image"
                                            className="img-fluid avatar-lg rounded" />
                                        <p className="mb-0">
                                            <code>.avatar-lg</code>
                                        </p>
                                    </div>

                                    <div className="col-sm-3">
                                        <img src="assets/images/users/avatar-1.jpg" alt="image"
                                            className="img-fluid avatar-xl rounded" />
                                        <p className="mb-0">
                                            <code>.avatar-xl</code>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


MediaObjects.layout = (page) => <Base children={page} title={"MediaObjects"} />
