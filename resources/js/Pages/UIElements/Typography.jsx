import React from 'react';
import Base from '../../Layouts/Base';
export default function Typography() {
    return (
        <div className="page-content">
            <div className="container-fluid">


                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Typography</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Typography</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Headings</h4>
                                <p className="card-subtitle mb-4">All HTML headings, <code>&lt;h1&gt;</code> through
                                    <code>&lt;h6&gt;</code>, are available.</p>

                                <h1>h1. Bootstrap heading</h1>
                                <h2>h2. Bootstrap heading</h2>
                                <h3>h3. Bootstrap heading</h3>
                                <h4>h4. Bootstrap heading</h4>
                                <h5>h5. Bootstrap heading</h5>
                                <h6>h6. Bootstrap heading</h6>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"> Display Headings</h4>
                                <p className="card-subtitle mb-4"> <code>.h1</code> through <code>.h6</code> classes are
                                    also available, for when you want to match the font styling of a heading but
                                    cannot use the associated HTML element.</p>

                                <h1 className="display-1">Display 1</h1>
                                <h1 className="display-2">Display 2</h1>
                                <h1 className="display-3">Display 3</h1>
                                <h1 className="display-4">Display 4</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Description list</h4>
                                <p className="card-subtitle mb-4">Align terms and descriptions horizontally by using our
                                    grid system’s predefined classes. For longer terms, you can optionally add a
                                    <code>.text-truncate</code> className to truncate the text with an ellipsis.
                                </p>

                                <dl className="row">
                                    <dt className="col-sm-3">Description lists</dt>
                                    <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                                    <dt className="col-sm-3">Euismod</dt>
                                    <dd className="col-sm-9">
                                        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec
                                            elit.</p>
                                        <p>Donec id elit non mi porta gravida at eget metus.</p>
                                    </dd>

                                    <dt className="col-sm-3">Malesuada porta</dt>
                                    <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                                    <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                    <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                        condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                                    <dt className="col-sm-3">Nesting</dt>
                                    <dd className="col-sm-9">
                                        <dl className="row">
                                            <dt className="col-sm-4">Nested definition list</dt>
                                            <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc
                                                augue blandit nunc.</dd>
                                        </dl>
                                    </dd>
                                </dl>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Colored Text</h4>
                                <p className="card-subtitle mb-4">Color text are awesome</p>

                                <p className="text-primary">.text-primary</p>
                                <p className="text-secondary">.text-secondary</p>
                                <p className="text-success">.text-success</p>
                                <p className="text-danger">.text-danger</p>
                                <p className="text-warning">.text-warning</p>
                                <p className="text-info">.text-info</p>
                                <p className="text-light bg-dark">.text-light</p>
                                <p className="text-dark">.text-dark</p>
                                <p className="text-body">.text-body</p>
                                <p className="text-muted">.text-muted</p>
                                <p className="text-white bg-dark">.text-white</p>
                                <p className="text-black-50">.text-black-50</p>
                                <p className="text-white-50 bg-dark">.text-white-50</p>



                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Inline Text</h4>
                                <p className="card-subtitle mb-4">Remove a list’s bullets and apply some light <code>
                                    margin</code>with a combination of two classes, <code>.list-inline</code>
                                    and <code>.list-inline-item</code>.</p>

                                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                <p><ins>This line of text is meant to be treated as an addition to the
                                    document.</ins></p>
                                <p><u>This line of text will render as underlined</u></p>
                                <p><small>This line of text is meant to be treated as fine print.</small></p>
                                <p><strong>This line rendered as bold text.</strong></p>
                                <p><em>This line rendered as italicized text.</em></p>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Unordered</h4>
                                <p className="card-subtitle mb-4">A list of items in which the order does not explicitly
                                    matter.</p>

                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li>
                                        Consectetur adipiscing elit
                                    </li>
                                    <li>
                                        Integer molestie lorem at massa
                                    </li>
                                    <li>
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li>
                                        Nulla volutpat aliquam velit
                                        <ul>
                                            <li>
                                                Phasellus iaculis neque
                                            </li>
                                            <li>
                                                Purus sodales ultricies
                                            </li>
                                            <li>
                                                Vestibulum laoreet porttitor sem
                                            </li>
                                            <li>
                                                Ac tristique libero volutpat at
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li>
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li>
                                        Eget porttitor lorem
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>


                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Ordered</h4>
                                <p className="card-subtitle mb-4">A list of items in which the order does explicitly
                                    matter</p>

                                <ol>
                                    <li>
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li>
                                        Consectetur adipiscing elit
                                    </li>
                                    <li>
                                        Integer molestie lorem at massa
                                    </li>
                                    <li>
                                        Facilisis in pretium nisl aliquet
                                    </li>
                                    <li>
                                        Nulla volutpat aliquam velit
                                        <ol>
                                            <li>
                                                Phasellus iaculis neque
                                            </li>
                                            <li>
                                                Purus sodales ultricies
                                            </li>
                                            <li>
                                                Vestibulum laoreet porttitor sem
                                            </li>
                                            <li>
                                                Ac tristique libero volutpat at
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li>
                                        Aenean sit amet erat nunc
                                    </li>
                                    <li>
                                        Eget porttitor lorem
                                    </li>
                                </ol>


                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Unstyled</h4>
                                <p className="card-subtitle mb-4">This only applies to immediate children list items.
                                </p>

                                <ul className="list-unstyled">
                                    <li>
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li>
                                        Integer molestie lorem at massa
                                        <ul>
                                            <li>
                                                Phasellus iaculis neque
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Faucibus porta lacus fringilla vel
                                    </li>
                                    <li>
                                        Eget porttitor lorem
                                    </li>
                                    <ul>
                                        <li>
                                            Lorem ipsum dolor sit amet
                                        </li>
                                        <li>
                                            Integer molestie lorem at massa
                                            <ul>
                                                <li>
                                                    Phasellus iaculis neque
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Faucibus porta lacus fringilla vel
                                        </li>
                                        <li>
                                            Eget porttitor lorem
                                        </li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li>Faucibus porta lacus fringilla velit

                                    </li>
                                </ul>



                            </div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Alignment Text Center</h4>
                                <p className="card-subtitle mb-4">Use text utilities as needed to change the alignment
                                    of your blockquote. </p>

                                <blockquote className="blockquote text-center">
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        posuere erat a ante.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite
                                        title="Source Title">Source Title</cite></footer>
                                </blockquote>


                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Alignment Text Right</h4>
                                <p className="card-subtitle mb-4">Use text utilities as needed to change the alignment
                                    of your blockquote.</p>

                                <blockquote className="blockquote text-right">
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        posuere erat a ante.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite
                                        title="Source Title">Source Title</cite></footer>
                                </blockquote>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}


Typography.layout = (page) => <Base children={page} title={"Typography"} />
