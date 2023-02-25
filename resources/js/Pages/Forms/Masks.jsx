import React from 'react';
import Base from '../../Layouts/Base';


export default function Elements() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Input Masks</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li className="breadcrumb-item active">Input Masks</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Input Masks</h4>
                                <p className="card-subtitle mb-4">A jQuery Plugin to make masks on form fields and HTML elements.</p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <form action="#">
                                            <div className="form-group">
                                                <label>Date</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00/00/0000" />
                                                <span className="font-13 text-muted">e.g "DD/MM/YYYY"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Hour</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00:00:00" />
                                                <span className="font-13 text-muted">e.g "HH:MM:SS"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Date & Hour</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00/00/0000 00:00:00" />
                                                <span className="font-13 text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>ZIP Code</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00000-000" />
                                                <span className="font-13 text-muted">e.g "xxxxx-xxx"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Crazy Zip Code</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="0-00-00-00" />
                                                <span className="font-13 text-muted">e.g "x-xx-xx-xx"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Money</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="000.000.000.000.000,00" data-reverse="true" />
                                                <span className="font-13 text-muted">e.g "Your money"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Money 2</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="#.##0,00" data-reverse="true" />
                                                <span className="font-13 text-muted">e.g "#.##0,00"</span>
                                            </div>

                                        </form>
                                    </div>

                                    <div className="col-md-6">
                                        <form action="#">
                                            <div className="form-group">
                                                <label>Telephone</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="0000-0000" />
                                                <span className="font-13 text-muted">e.g "xxxx-xxxx"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Telephone with Code Area</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="(00) 0000-0000" />
                                                <span className="font-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>US Telephone</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="(000) 000-0000" />
                                                <span className="font-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>São Paulo Celphones</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000" />
                                                <span className="font-13 text-muted">e.g "(xx) xxxxx-xxxx"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>CPF</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="000.000.000-00" data-reverse="true" />
                                                <span className="font-13 text-muted">e.g "xxx.xxx.xxxx-xx"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>CNPJ</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00.000.000/0000-00" data-reverse="true" />
                                                <span className="font-13 text-muted">e.g "xx.xxx.xxx/xxxx-xx"</span>
                                            </div>
                                            <div className="form-group">
                                                <label>IP Address</label>
                                                <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="099.099.099.099" data-reverse="true" />
                                                <span className="font-13 text-muted">e.g "xxx.xxx.xxx.xxx"</span>
                                            </div>

                                        </form>
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


Elements.layout = (page) => <Base children={page} title={"Elements"} />
