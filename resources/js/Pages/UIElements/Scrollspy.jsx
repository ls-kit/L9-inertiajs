import React from 'react';
import Base from '../../Layouts/Base';
export default function Scrollspy() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Scrollspy</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Scrollspy</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Navbar</h4>
                                <p className="card-subtitle mb-4">Scroll the area below the navbar and watch the active
                                    className change. The dropdown items will be highlighted as well.</p>

                                <nav id="navbar-example2" className="navbar navbar-light bg-light mb-3">
                                    <a className="navbar-brand" href="#">Navbar</a>
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#fat">@fat</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#mdo">@mdo</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle arrow-none"
                                                data-toggle="dropdown" href="#" role="button"
                                                aria-haspopup="true" aria-expanded="false">Dropdown <i
                                                    className="mdi mdi-chevron-down"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#one">one</a>
                                                <a className="dropdown-item" href="#two">two</a>
                                                <div role="separator" className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#three">three</a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0"
                                    className="scrollspy-example">
                                    <h5 id="fat">@fat</h5>
                                    <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
                                        enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
                                        rights whatever. Anim keffiyeh carles cardigan. Velit seitan
                                        mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
                                        shorts, williamsburg hoodie minim qui you probably haven't heard of
                                        them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
                                        Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
                                        ullamco consequat.</p>
                                    <h5 id="mdo">@mdo</h5>
                                    <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork
                                        beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat
                                        four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater
                                        food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson
                                        +1 sartorial. Carles non aesthetic exercitation quis gentrify.
                                        Brooklyn adipisicing craft beer vice keytar deserunt.</p>
                                    <h5 id="one">one</h5>
                                    <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard
                                        ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next
                                        level locavore single-origin coffee in magna veniam. High life id
                                        vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS
                                        est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex
                                        in, sustainable delectus consectetur fanny pack iphone.</p>
                                    <h5 id="two">two</h5>
                                    <p>In incididunt echo park, officia deserunt mcsweeney's proident master
                                        cleanse thundercats sapiente veniam. Excepteur VHS elit, proident
                                        shoreditch +1 biodiesel laborum craft beer. Single-origin coffee
                                        wayfarers irure four loko, cupidatat terry richardson master
                                        cleanse. Assumenda you probably haven't heard of them art party
                                        fanny pack, tattooed nulla cardigan tempor ad. Proident wolf
                                        nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf
                                        voluptate, lo-fi ea portland before they sold out four loko.
                                        Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
                                    <h5 id="three">three</h5>
                                    <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
                                        enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
                                        rights whatever. Anim keffiyeh carles cardigan. Velit seitan
                                        mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
                                        shorts, williamsburg hoodie minim qui you probably haven't heard of
                                        them et cardigan trust fund culpa biodiesel wes anderson aesthetic.
                                        Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan
                                        ullamco consequat.</p>
                                    <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food
                                        truck. Sapiente synth id assumenda. Locavore sed helvetica cliche
                                        irony, thundercats you probably haven't heard of them consequat
                                        hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before
                                        they sold out, terry richardson proident brunch nesciunt quis cosby
                                        sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer
                                        seitan readymade velit. VHS chambray laboris tempor veniam. Anim
                                        mollit minim commodo ullamco thundercats.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">Nested Nav</h4>
                                <p className="card-subtitle mb-4">Scrollspy also works with nested <code>.nav</code>s.
                                    If a nested <code>.nav</code> is <code>.active</code>, its parents will also be
                                    <code>.active</code>. Scroll the area next to the navbar and watch the active
                                    className change.</p>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <nav id="navbar-example3" className="navbar navbar-light flex-column">
                                            <a className="navbar-brand" href="#">Navbar</a>
                                            <nav className="nav nav-pills flex-column">
                                                <a className="nav-link active" href="#item-1">Item 1</a>
                                                <nav className="nav nav-pills flex-column">
                                                    <a className="nav-link ml-3 my-1 active"
                                                        href="#item-1-1">Item 1-1</a>
                                                    <a className="nav-link ml-3 my-1" href="#item-1-2">Item
                                                        1-2</a>
                                                </nav>
                                                <a className="nav-link" href="#item-2">Item 2</a>
                                                <a className="nav-link" href="#item-3">Item 3</a>
                                                <nav className="nav nav-pills flex-column">
                                                    <a className="nav-link ml-3 my-1" href="#item-3-1">Item
                                                        3-1</a>
                                                    <a className="nav-link ml-3 my-1" href="#item-3-2">Item
                                                        3-2</a>
                                                </nav>
                                            </nav>
                                        </nav>
                                    </div>
                                    <div className="col-sm-8">
                                        <div data-spy="scroll" data-target="#navbar-example3"
                                            data-offset="0" className="scrollspy-example"
                                            style={{ height: '350px' }}>
                                            <h4 id="item-1">Item 1</h4>
                                            <p>Ex consequat commodo adipisicing exercitation aute excepteur
                                                occaecat ullamco duis aliqua id magna ullamco eu. Do aute
                                                ipsum ipsum ullamco cillum consectetur ut et aute
                                                consectetur labore. Fugiat laborum incididunt tempor eu
                                                consequat enim dolore proident. Qui laborum do non excepteur
                                                nulla magna eiusmod consectetur in. Aliqua et aliqua officia
                                                quis et incididunt voluptate non anim reprehenderit
                                                adipisicing dolore ut consequat deserunt mollit dolore.
                                                Aliquip nulla enim veniam non fugiat id cupidatat nulla elit
                                                cupidatat commodo velit ut eiusmod cupidatat elit dolore.
                                            </p>
                                            <h5 id="item-1-1">Item 1-1</h5>
                                            <p>Amet tempor mollit aliquip pariatur excepteur commodo do ea
                                                cillum commodo Lorem et occaecat elit qui et. Aliquip labore
                                                ex ex esse voluptate occaecat Lorem ullamco deserunt. Aliqua
                                                cillum excepteur irure consequat id quis ea. Sit proident
                                                ullamco aute magna pariatur nostrud labore. Reprehenderit
                                                aliqua commodo eiusmod aliquip est do duis amet proident
                                                magna consectetur consequat eu commodo fugiat non quis. Enim
                                                aliquip exercitation ullamco adipisicing voluptate excepteur
                                                minim exercitation minim minim commodo adipisicing
                                                exercitation officia nisi adipisicing. Anim id duis qui
                                                consequat labore adipisicing sint dolor elit cillum anim et
                                                fugiat.</p>
                                            <h5 id="item-1-2">Item 1-2</h5>
                                            <p>Cillum nisi deserunt magna eiusmod qui eiusmod velit
                                                voluptate pariatur laborum sunt enim. Irure laboris mollit
                                                consequat incididunt sint et culpa culpa incididunt
                                                adipisicing magna magna occaecat. Nulla ipsum cillum eiusmod
                                                sint elit excepteur ea labore enim consectetur in labore
                                                anim. Proident ullamco ipsum esse elit ut Lorem eiusmod
                                                dolor et eiusmod. Anim occaecat nulla in non consequat
                                                eiusmod velit incididunt.</p>
                                            <h4 id="item-2">Item 2</h4>
                                            <p>Quis magna Lorem anim amet ipsum do mollit sit cillum
                                                voluptate ex nulla tempor. Laborum consequat non elit enim
                                                exercitation cillum aliqua consequat id aliqua. Esse ex
                                                consectetur mollit voluptate est in duis laboris ad sit
                                                ipsum anim Lorem. Incididunt veniam velit elit elit veniam
                                                Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse
                                                irure. Laborum nisi sit est tempor laborum mollit labore
                                                officia laborum excepteur commodo non commodo dolor
                                                excepteur commodo. Ipsum fugiat ex est consectetur ipsum
                                                commodo tempor sunt in proident.</p>
                                            <h4 id="item-3">Item 3</h4>
                                            <p>Quis anim sit do amet fugiat dolor velit sit ea ea do
                                                reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim
                                                proident occaecat excepteur aliquip culpa aute tempor
                                                reprehenderit. Deserunt tempor mollit elit ex pariatur
                                                dolore velit fugiat mollit culpa irure ullamco est ex
                                                ullamco excepteur.</p>
                                            <h5 id="item-3-1">Item 3-1</h5>
                                            <p>Deserunt quis elit Lorem eiusmod amet enim enim amet minim
                                                Lorem proident nostrud. Ea id dolore anim exercitation aute
                                                fugiat labore voluptate cillum do laboris labore. Ex velit
                                                exercitation nisi enim labore reprehenderit labore nostrud
                                                ut ut. Esse officia sunt duis aliquip ullamco tempor eiusmod
                                                deserunt irure nostrud irure. Ullamco proident veniam
                                                laboris ea consectetur magna sunt ex exercitation aliquip
                                                minim enim culpa occaecat exercitation. Est tempor excepteur
                                                aliquip laborum consequat do deserunt laborum esse eiusmod
                                                irure proident ipsum esse qui.</p>
                                            <h5 id="item-3-2">Item 3-2</h5>
                                            <p>Labore sit culpa commodo elit adipisicing sit aliquip elit
                                                proident voluptate minim mollit nostrud aute reprehenderit
                                                do. Mollit excepteur eu Lorem ipsum anim commodo sint labore
                                                Lorem in exercitation velit incididunt. Occaecat consectetur
                                                nisi in occaecat proident minim enim sunt reprehenderit
                                                exercitation cupidatat et do officia. Aliquip consequat ad
                                                labore labore mollit ut amet. Sit pariatur tempor proident
                                                in veniam culpa aliqua excepteur elit magna fugiat eiusmod
                                                amet officia.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="card-title">List-group</h4>
                                <p className="card-subtitle mb-4">Scrollspy also works with nested <code>.nav</code>s.
                                    If a nested <code>.nav</code> is <code>.active</code>, its parents will also be
                                    <code>.active</code>. Scroll the area next to the navbar and watch the active
                                    className change.</p>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div id="list-example" className="list-group">
                                            <a className="list-group-item list-group-item-action active"
                                                href="#list-item-1">Item 1</a>
                                            <a className="list-group-item list-group-item-action"
                                                href="#list-item-2">Item 2</a>
                                            <a className="list-group-item list-group-item-action"
                                                href="#list-item-3">Item 3</a>
                                            <a className="list-group-item list-group-item-action"
                                                href="#list-item-4">Item 4</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div data-spy="scroll" data-target="#list-example" data-offset="0"
                                            className="scrollspy-example">
                                            <h4 id="list-item-1">Item 1</h4>
                                            <p>Ex consequat commodo adipisicing exercitation aute excepteur
                                                occaecat ullamco duis aliqua id magna ullamco eu. Do aute
                                                ipsum ipsum ullamco cillum consectetur ut et aute
                                                consectetur labore. Fugiat laborum incididunt tempor eu
                                                consequat enim dolore proident. Qui laborum do non excepteur
                                                nulla magna eiusmod consectetur in. Aliqua et aliqua officia
                                                quis et incididunt voluptate non anim reprehenderit
                                                adipisicing dolore ut consequat deserunt mollit dolore.
                                                Aliquip nulla enim veniam non fugiat id cupidatat nulla elit
                                                cupidatat commodo velit ut eiusmod cupidatat elit dolore.
                                            </p>
                                            <h4 id="list-item-2">Item 2</h4>
                                            <p>Quis magna Lorem anim amet ipsum do mollit sit cillum
                                                voluptate ex nulla tempor. Laborum consequat non elit enim
                                                exercitation cillum aliqua consequat id aliqua. Esse ex
                                                consectetur mollit voluptate est in duis laboris ad sit
                                                ipsum anim Lorem. Incididunt veniam velit elit elit veniam
                                                Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse
                                                irure. Laborum nisi sit est tempor laborum mollit labore
                                                officia laborum excepteur commodo non commodo dolor
                                                excepteur commodo. Ipsum fugiat ex est consectetur ipsum
                                                commodo tempor sunt in proident.</p>
                                            <h4 id="list-item-3">Item 3</h4>
                                            <p>Quis anim sit do amet fugiat dolor velit sit ea ea do
                                                reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim
                                                proident occaecat excepteur aliquip culpa aute tempor
                                                reprehenderit. Deserunt tempor mollit elit ex pariatur
                                                dolore velit fugiat mollit culpa irure ullamco est ex
                                                ullamco excepteur.</p>
                                            <h4 id="list-item-4">Item 4</h4>
                                            <p>Quis anim sit do amet fugiat dolor velit sit ea ea do
                                                reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim
                                                proident occaecat excepteur aliquip culpa aute tempor
                                                reprehenderit. Deserunt tempor mollit elit ex pariatur
                                                dolore velit fugiat mollit culpa irure ullamco est ex
                                                ullamco excepteur.</p>
                                        </div>
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


Scrollspy.layout = (page) => <Base children={page} title={"Scrollspy"} />
