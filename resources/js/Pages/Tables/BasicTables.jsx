import React from 'react';
import Base from '../../Layouts/Base';


export default function BasicTables() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Tables</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                                    <li className="breadcrumb-item active">Tables</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic example</h4>
                                <p className="card-subtitle mb-4"> For basic styling—light padding and only horizontal
                                    dividers—add the base className <code>.table</code> to any
                                    <code>&lt;table&gt;</code>.
                                </p>
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>


                    </div>



                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Inverse table</h4>
                                <p className="card-subtitle mb-4">You can also invert the colors—with light text on dark
                                    backgrounds—with <code className="highlighter-rouge">.table-dark</code>. </p>
                                <div className="table-responsive">
                                    <table className="table table-dark mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Table head options</h4>
                                <p className="card-subtitle mb-4">Use one of two modifier classes to make
                                    <code>&lt;thead&gt;</code>s appear light or dark gray. </p>
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>


                    </div>



                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Striped rows</h4>
                                <p className="card-subtitle mb-4"> Use <code>.table-striped</code> to add zebra-striping
                                    to any table row
                                    within the <code>&lt;tbody&gt;</code>. </p>

                                <div className="table-responsive">
                                    <table className="table table-striped mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Bordered table</h4>
                                <p className="card-subtitle mb-4"> Add <code>.table-bordered</code> for borders on all
                                    sides of the table and cells.</p>
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@TwBootstrap</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Hoverable rows</h4>
                                <p className="card-subtitle mb-4"> Create responsive tables by wrapping any
                                    <code>.table</code> in <code>.table-responsive</code>
                                    to make them scroll horizontally on small devices (under 768px).</p>

                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Small table</h4>
                                <p className="card-subtitle mb-4"> Add <code>.table-sm</code> to make tables more
                                    compact by cutting cell padding in half.</p>
                                <div className="table-responsive">
                                    <table className="table table-sm mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>


                    </div>



                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Contextual classes</h4>
                                <p className="card-subtitle mb-4"> Use contextual classes to color table rows or
                                    individual cells. </p>
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Column heading</th>
                                                <th>Column heading</th>
                                                <th>Column heading</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-active">
                                                <th scope="row">1</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="table-success">
                                                <th scope="row">3</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="table-info">
                                                <th scope="row">5</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="table-warning">
                                                <th scope="row">7</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="table-danger">
                                                <th scope="row">9</th>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Table head options</h4>
                                <p className="card-subtitle mb-4"> imilar to tables and dark tables, use the modifier
                                    classes <code className="highlighter-rouge">.thead-light</code> or <code
                                        className="highlighter-rouge">.thead-dark</code> to make <code
                                            className="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.
                                </p>
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>


                    </div>



                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Contextual classes with Background color</h4>
                                <p className="card-subtitle mb-4"> You can also invert the colors—with light text on
                                    dark backgrounds—with <code className="highlighter-rouge">.table-dark</code>. </p>
                                <div className="table-responsive">
                                    <table className="table table-dark text-white mb-0">
                                        <thead>
                                            <tr className="">
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-primary">
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr className="bg-custom">
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr className="bg-success">
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Borderless table</h4>
                                <p className="card-subtitle mb-4"> For basic styling—light padding and only horizontal
                                    dividers—add the base className <code>.table</code> to any
                                    <code>&lt;table&gt;</code>. </p>

                                <div className="table-responsive">
                                    <table className="table table-borderless mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>


                    </div>



                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Borderless Inverse table</h4>
                                <p className="card-subtitle mb-4"> Your awesome text goes here.Your awesome text goes
                                    here. </p>
                                <div className="table-responsive">
                                    <table className="table table-dark table-borderless mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>



            </div>
        </div>

    )
}


BasicTables.layout = (page) => <Base children={page} title={"BasicTables"} />
