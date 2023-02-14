import React from 'react';
import Base from '../../Layouts/Base';
export default function Tabs() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Tabs</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Tabs</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Default Tabs</h4>
                                <p className="card-subtitle mb-4">Example of basic tabs.</p>

                                <ul className="nav nav-tabs mb-3">
                                    <li className="nav-item">
                                        <a href="#home" data-toggle="tab" aria-expanded="false" className="nav-link">
                                            <i className="mdi mdi-home-variant d-lg-none d-block"></i>
                                            <span className="d-none d-lg-block">Home</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#profile" data-toggle="tab" aria-expanded="true" className="nav-link active">
                                            <i className="mdi mdi-account-circle d-lg-none d-block"></i>
                                            <span className="d-none d-lg-block">Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#settings" data-toggle="tab" aria-expanded="false" className="nav-link">
                                            <i className="mdi mdi-settings-outline d-lg-none d-block"></i>
                                            <span className="d-none d-lg-block">Settings</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane" id="home">
                                        <p>Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                        <p className="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                    </div>
                                    <div className="tab-pane show active" id="profile">
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                        <p className="mb-0">Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    </div>
                                    <div className="tab-pane" id="settings">
                                        <p>Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                        <p className="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Tabs Justified</h4>
                                <p className="card-subtitle mb-4">Example of justified tabs.</p>

                                <ul className="nav nav-tabs nav-justified mb-3">
                                    <li className="nav-item">
                                        <a href="#home1" data-toggle="tab" aria-expanded="false" className="nav-link">
                                            <i className="mdi mdi-home-variant d-lg-none d-block"></i>
                                            <span className="d-none d-lg-block">Home</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#profile1" data-toggle="tab" aria-expanded="true" className="nav-link active">
                                            <i className="mdi mdi-account-circle d-lg-none d-block"></i>
                                            <span className="d-none d-lg-block">Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#settings1" data-toggle="tab" aria-expanded="false" className="nav-link">
                                            <i className="mdi mdi-settings-outline d-lg-none d-block"></i>
                                            <span className="d-none d-lg-block">Settings</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane" id="home1">
                                        <p>Leggings occaecat dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                        <p className="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                    </div>
                                    <div className="tab-pane show active" id="profile1">
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                        <p className="mb-0">Leggings occaecat dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    </div>
                                    <div className="tab-pane" id="settings1">
                                        <p>Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                        <p className="mb-0">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
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

                                <h4 className="card-title">Tabs Vertical Left</h4>
                                <p className="card-subtitle mb-4">Example of vertical left side tabs.</p>

                                <div className="row">
                                    <div className="col-sm-3 mb-2 mb-sm-0">
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a className="nav-link active show" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home"
                                                aria-selected="true">
                                                <i className="mdi mdi-home-variant d-lg-none d-block"></i>
                                                <span className="d-none d-lg-block">Home</span>
                                            </a>
                                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                                aria-selected="false">
                                                <i className="mdi mdi-account-circle d-lg-none d-block"></i>
                                                <span className="d-none d-lg-block">Profile</span>
                                            </a>
                                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                                                aria-selected="false">
                                                <i className="mdi mdi-settings-outline d-lg-none d-block"></i>
                                                <span className="d-none d-lg-block">Settings</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-sm-9">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade active show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                <p className="mb-0">Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Leggings sint. Veniam sint duis incididunt
                                                    do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit
                                                    excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit
                                                    mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                <p className="mb-0">Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna
                                                    pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit
                                                    id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Leggings
                                                    enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur
                                                    qui.</p>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                <p className="mb-0">Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                                                    eu, pretium quis, sem. Nulla consequat massa quis enim. Cillum ad ut irure tempor velit nostrud occaecat ullamco
                                                    aliqua anim Leggings sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Tabs Vertical Right</h4>
                                <p className="card-subtitle mb-4">Example of vertical right tabs.</p>

                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="tab-content" id="v-pills-tabContent-right">
                                            <div className="tab-pane fade active show" id="v-pills-home2" role="tabpanel" aria-labelledby="v-pills-home-tab2">
                                                <p className="mb-0">Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Leggings sint. Veniam sint duis incididunt
                                                    do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit
                                                    excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit
                                                    mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-profile2" role="tabpanel" aria-labelledby="v-pills-profile-tab2">
                                                <p className="mb-0">Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna
                                                    pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit
                                                    id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Leggings
                                                    enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur
                                                    qui.</p>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
                                                <p className="mb-0">Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                                                    eu, pretium quis, sem. Nulla consequat massa quis enim. Cillum ad ut irure tempor velit nostrud occaecat ullamco
                                                    aliqua anim Leggings sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-3 mt-2 mt-sm-0">
                                        <div className="nav flex-column nav-pills" id="v-pills-tab2" role="tablist" aria-orientation="vertical">
                                            <a className="nav-link active show" id="v-pills-home-tab2" data-toggle="pill" href="#v-pills-home2" role="tab" aria-controls="v-pills-home2"
                                                aria-selected="true">
                                                <i className="mdi mdi-home-variant d-lg-none d-block"></i>
                                                <span className="d-none d-lg-block">Home</span>
                                            </a>
                                            <a className="nav-link" id="v-pills-profile-tab2" data-toggle="pill" href="#v-pills-profile2" role="tab" aria-controls="v-pills-profile2"
                                                aria-selected="false">
                                                <i className="mdi mdi-account-circle d-lg-none d-block"></i>
                                                <span className="d-none d-lg-block">Profile</span>
                                            </a>
                                            <a className="nav-link" id="v-pills-settings-tab2" data-toggle="pill" href="#v-pills-settings2" role="tab" aria-controls="v-pills-settings2"
                                                aria-selected="false">
                                                <i className="mdi mdi-settings-outline d-lg-none d-block"></i>
                                                <span className="d-none d-lg-block">Settings</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <h4 className="mb-4">Accordions</h4>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">

                        <div id="accordion" className="custom-accordion mb-4">

                            <div className="card mb-0">
                                <div className="card-header" id="headingOne">
                                    <h5 className="m-0 font-size-15">
                                        <a className="d-block pt-2 pb-2 text-dark" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Collapsible Group Item #1 <span className="float-right"><i className="mdi mdi-chevron-down accordion-arrow"></i></span>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                        excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                        you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-0">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="m-0 font-size-15">
                                        <a className="collapsed d-block pt-2 pb-2 text-dark" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Collapsible Group Item #2 <span className="float-right"><i className="mdi mdi-chevron-down accordion-arrow"></i></span>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                        excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                        you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-0">
                                <div className="card-header" id="headingThree">
                                    <h5 className="m-0 font-size-15">
                                        <a className="collapsed d-block pt-2 pb-2 text-dark" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Collapsible Group Item #3 <span className="float-right"><i className="mdi mdi-chevron-down accordion-arrow"></i></span>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                        anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                        excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                        you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="mb-4">
                            <p>
                                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Link with href
                                </a>
                                <button className="btn btn-primary ml-1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Button with data-target
                                </button>
                            </p>
                            <div className="collapse show" id="collapseExample">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>

    )
}


Tabs.layout = (page) => <Base children={page} title={"Tabs"} />
