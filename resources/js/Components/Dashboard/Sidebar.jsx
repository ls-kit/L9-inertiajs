import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo">
                            <i className="mdi mdi-album"></i>
                            <span> Xeloro </span>
                        </a>
                    </div>


                    <div id="sidebar-menu">

                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">Menu</li>

                            <li>
                                <a href="index.html" className="waves-effect"
                                ><i className="mdi mdi-home-analytics"></i
                                ><span className="badge badge-pill badge-primary float-right">7</span><span>Dashboard</span></a
                                >
                            </li>

                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect"
                                ><i className="mdi mdi-diamond-stone"></i><span>UI Elements</span></a
                                >
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link href={ route('uielements.buttons') }>Buttons</Link></li>
                                    <li><Link href={ route('uielements.cards') }>Cards</Link></li>
                                    <li><Link href={ route('uielements.carousel') }>Carousel</Link></li>
                                    <li><Link href={ route('uielements.embeds') }>Embeds</Link></li>
                                    <li><Link href={ route('uielements.general') }>General</Link></li>
                                    <li><Link href={ route('uielements.grid') }>Grid</Link></li>
                                    <li><Link href={ route('uielements.mediaObjects') }>Media Objects</Link></li>
                                    <li><Link href={ route('uielements.modals') }>Modals</Link></li>
                                    <li><Link href={ route('uielements.progressBars') }>Progress Bars</Link></li>
                                    <li><Link href={ route('uielements.tabs') }>Tabs</Link></li>
                                    <li><Link href={ route('uielements.typography') }>Typography</Link></li>
                                    <li><Link href={ route('uielements.toasts') }>Toasts</Link></li>
                                    <li><Link href={ route('uielements.tooltipsAndPopovers') }>Tooltips & Popovers</Link></li>
                                    <li><Link href={ route('uielements.scrollspy') }>Scrollspy</Link></li>
                                    <li><Link href={ route('uielements.spinners') }>Spinners</Link></li>
                                    <li><Link href={ route('uielements.sweetAlerts') }>Sweet Alerts</Link></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect"
                                ><i className="mdi mdi-table-merge-cells"></i><span>Tables</span></a
                                >
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link href={ route('tables.basicTables')}>Basic Tables</Link></li>
                                    <li><Link href={ route('tables.dataTables')}>Data Tables</Link></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect"
                                ><i className="mdi mdi-poll"></i><span>Charts</span></a
                                >
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link href={ route('charts.morris') }>Morris</Link></li>
                                    <li><Link href={ route('charts.google') }>Google</Link></li>
                                    <li><Link href={ route('charts.chartjs') }>Chartjs</Link></li>
                                    <li><Link href={ route('charts.sparkline') }>Sparkline</Link></li>
                                    <li><Link href={ route('charts.jqueryKnob') }>Jquery Knob</Link></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" className="waves-effect"
                                ><i className="mdi mdi-format-list-bulleted-type"></i
                                ><span className="badge badge-pill badge-danger float-right">6</span><span>Forms</span></a
                                >
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link href={ route('forms.elements') }>Elements</Link></li>
                                    <li><Link href={ route('forms.plugins') }>Plugins</Link></li>
                                    <li><Link href={ route('forms.validation') }>Validation</Link></li>
                                    <li><Link href={ route('forms.masks') }>Masks</Link></li>
                                    <li><Link href={ route('forms.quilljs') }>Quilljs</Link></li>
                                    <li><Link href={ route('forms.fileUploads') }>File Uploads</Link></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect"
                                ><i className="mdi mdi-black-mesa"></i><span>Icons</span></a
                                >
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link href={ route('icons.materialDesign') }>Material Design</Link></li>
                                    <li><Link href={ route('icons.fontAwesome') }>Font awesome</Link></li>
                                    <li><Link href={ route('icons.dripicons') }>Dripicons</Link></li>
                                    <li><Link href={ route('icons.featherIcons') }>Feather Icons</Link></li>
                                </ul>
                            </li>

                            <li className="menu-title">More</li>

                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect"
                                ><i className="mdi mdi-format-page-break"></i><span>Pages</span></a
                                >
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link href={ route('pages.invoice') }>Invoice</Link></li>
                                    <li><Link href={ route('pages.starterPage') }>Starter Page</Link></li>
                                    <li><Link href={ route('pages.maintenance') }>Maintenance</Link></li>
                                    <li><Link href={ route('pages.faqs') }>FAQs</Link></li>
                                    <li><Link href={ route('pages.pricing') }>Pricing</Link></li>
                                    <li><Link href={ route('pages.login') }>Login</Link></li>
                                    <li><Link href={ route('pages.register') }>Register</Link></li>
                                    <li><Link href={ route('pages.recoverPassword') }>Recover Password</Link></li>
                                    <li><Link href={ route('pages.lockScreen') }>Lock Screen</Link></li>
                                    <li><Link href={ route('pages.error404') }>Error 404</Link></li>
                                    <li><Link href={ route('pages.error500') }>Error 500</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link href={ route('calendar') } className="waves-effect"
                                ><i className="mdi mdi-calendar-range-outline"></i><span>Calendar</span></Link>
                            </li>

                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect"
                                ><i className="mdi mdi-map-marker-radius"></i><span>Maps</span></a
                                >
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link href={ route('maps.googleMaps') }>Google Maps</Link></li>
                                    <li><Link href={ route('maps.vectorMaps') }>Vector Maps</Link></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect"
                                ><i className="mdi mdi-share-variant"></i><span>Multi Level</span></a
                                >
                                <ul className="sub-menu" aria-expanded="true">
                                    <li><a href="javascript: void(0);">Level 1.1</a></li>
                                    <li>
                                        <a href="javascript: void(0);" className="has-arrow">Level 1.2</a>
                                        <ul className="sub-menu" aria-expanded="true">
                                            <li><a href="javascript: void(0);">Level 2.1</a></li>
                                            <li><a href="javascript: void(0);">Level 2.2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
