import React from 'react';
import Base from '../../Layouts/Base';
export default function Grid() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Grid</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Grid</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>




                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Grid Options</h4>
                                <p className="card-subtitle mb-4">
                                    See how aspects of the Bootstrap grid system work across multiple devices with a handy table.
                                </p>

                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped mb-0">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th className="text-center">
                                                    Extra small<br />
                                                    <small>&lt;576px</small>
                                                </th>
                                                <th className="text-center">
                                                    Small<br />
                                                    <small>≥576px</small>
                                                </th>
                                                <th className="text-center">
                                                    Medium<br />
                                                    <small>≥768px</small>
                                                </th>
                                                <th className="text-center">
                                                    Large<br />
                                                    <small>≥992px</small>
                                                </th>
                                                <th className="text-center">
                                                    Extra large<br />
                                                    <small>≥1200px</small>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Max container width</th>
                                                <td>None (auto)</td>
                                                <td>540px</td>
                                                <td>720px</td>
                                                <td>960px</td>
                                                <td>1140px</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">className prefix</th>
                                                <td><code>.col-</code></td>
                                                <td><code>.col-sm-</code></td>
                                                <td><code>.col-md-</code></td>
                                                <td><code>.col-lg-</code></td>
                                                <td><code>.col-xl-</code></td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row"># of columns</th>
                                                <td colspan="5">12</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Gutter width</th>
                                                <td colspan="5">24px (12px on each side of a column)</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Nestable</th>
                                                <td colspan="5">Yes</td>
                                            </tr>
                                            <tr>
                                                <th className="text-nowrap" scope="row">Column ordering</th>
                                                <td colspan="5">Yes</td>
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


Grid.layout = (page) => <Base children={page} title={"Grid"} />
