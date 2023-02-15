import React from 'react';
import Base from '../../Layouts/Base';


export default function Chartjs() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Google Chart</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Charts</a></li>
                                    <li className="breadcrumb-item active">Google Chart</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Line Chart</h4>
                                <p className="card-subtitle mb-4">A line chart that is rendered within the browser using SVG or VML. Displays tooltips when hovering over points.</p>

                                <div className="chart" id="line-chart"></div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Area Chart</h4>
                                <p className="card-subtitle mb-4">An area chart that is rendered within the browser using SVG or VML. Displays tips when hovering over points.</p>

                                <div className="chart" id="area-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Bar Chart</h4>
                                <p className="card-subtitle mb-4">Like all Google charts, bar charts display tooltips when the user hovers over the data.</p>

                                <div className="chart" id="bar-chart"></div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Candlestick Charts</h4>
                                <p className="card-subtitle mb-4">An interactive candlestick chart.</p>

                                <div className="chart" id="candlestick-chart"></div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Column Chart</h4>
                                <p className="card-subtitle mb-4">A column chart is a vertical bar chart rendered in the browser using SVG or VML, whichever is appropriate for the user's browser.</p>

                                <div className="chart" id="column-chart"></div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Combo Chart</h4>
                                <p className="card-subtitle mb-4">A chart that lets you render each series as a different marker type from the following list: line, area, bars, candlesticks, and stepped area.</p>

                                <div className="chart" id="combo-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Pie Chart</h4>
                                <p className="card-subtitle mb-4">A pie chart that is rendered within the browser using SVG or VML. Displays tooltips when hovering over slices.</p>

                                <div className="chart" id="piechart"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">3D Pie Chart</h4>
                                <p className="card-subtitle mb-4">If you set the <code>is3D</code> option to <code>true</code>, your pie chart will be drawn as though it has three dimensions:</p>

                                <div className="chart" id="piechart-3d-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Donut Chart</h4>
                                <p className="card-subtitle mb-4">A donut chart is a pie chart with a hole in the center. You can create donut charts with the pieHole option:</p>

                                <div className="chart" id="donutchart"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Exploding a Slice</h4>
                                <p className="card-subtitle mb-4">You can separate pie slices from the rest of the chart with the offset property of the slices option:</p>

                                <div className="chart" id="exploding-slice-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}


Chartjs.layout = (page) => <Base children={page} title={"Chartjs"} />
