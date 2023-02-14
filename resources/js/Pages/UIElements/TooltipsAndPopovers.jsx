import React from 'react';
import Base from '../../Layouts/Base';
export default function TooltipsAndPopovers() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Tooltips & Popovers</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Tooltips & Popovers</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Tooltips</h4>
                                <p className="card-subtitle mb-4">Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.</p>

                                <div className="button-examples">
                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                        Tooltip on top
                                    </button>
                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                                        Tooltip on right
                                    </button>
                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                        Tooltip on bottom
                                    </button>
                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                                        Tooltip on left
                                    </button>
                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                                        Tooltip with HTML
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Popovers</h4>
                                <p className="card-subtitle mb-4">Examples of popovers.</p>

                                <div className="button-examples">
                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        Popover on top
                                    </button>

                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        Popover on right
                                    </button>

                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                                            sagittis lacus vel augue laoreet rutrum faucibus.">
                                        Popover on bottom
                                    </button>

                                    <button type="button" className="btn btn-secondary waves-effect waves-light" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        Popover on left
                                    </button>

                                    <a tabindex="0" className="btn btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


TooltipsAndPopovers.layout = (page) => <Base children={page} title={"TooltipsAndPopovers"} />
