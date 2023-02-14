import React from 'react';
import Base from '../../Layouts/Base';


export default function Buttons() {
    return (
        <div className="page-content">
            <div class="container-fluid">


                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0 font-size-18">Buttons</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li class="breadcrumb-item active">Buttons</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Basic Examples</h4>
                                <p class="card-subtitle mb-4">Bootstrap includes several predefined button styles,
                                    each serving its own semantic purpose, with a few extras thrown in for more
                                    control.
                                </p>

                                <div class="button-examples">
                                    <button type="button" class="btn btn-primary waves-effect waves-light">Primary</button>
                                    <button type="button" class="btn btn-secondary waves-effect waves-light">Secondary</button>
                                    <button type="button" class="btn btn-success waves-effect waves-light">Success</button>
                                    <button type="button" class="btn btn-danger waves-effect waves-light">Danger</button>
                                    <button type="button" class="btn btn-warning waves-effect waves-light">Warning</button>
                                    <button type="button" class="btn btn-info waves-effect waves-light">Info</button>
                                    <button type="button" class="btn btn-light waves-effect">Light</button>
                                    <button type="button" class="btn btn-dark waves-effect waves-light">Dark</button>
                                    <button type="button" class="btn btn-link waves-effect">Link</button>
                                </div>

                            </div>

                        </div>


                    </div>


                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Outline Buttons</h4>
                                <p class="card-subtitle mb-4">In need of a button, but not the hefty background
                                    colors they bring? Replace the default modifier classes with the
                                    <code>.btn-outline-*</code> ones to remove all background images and colors on
                                    any button.</p>
                                <div class="button-examples">
                                    <button type="button" class="btn btn-outline-primary waves-effect waves-light">Primary</button>
                                    <button type="button" class="btn btn-outline-secondary waves-effect waves-light">Secondary</button>
                                    <button type="button" class="btn btn-outline-success waves-effect waves-light">Success</button>
                                    <button type="button" class="btn btn-outline-danger waves-effect waves-light">Danger</button>
                                    <button type="button" class="btn btn-outline-warning waves-effect waves-light">Warning</button>
                                    <button type="button" class="btn btn-outline-info waves-effect waves-light">Info</button>
                                    <button type="button" class="btn btn-outline-light">Light</button>
                                    <button type="button" class="btn btn-outline-dark waves-effect waves-light">Dark</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">

                                <h4 class="card-title">Button Tags</h4>
                                <p class="card-subtitle mb-4">The <code>.btn</code> classes are designed to be used
                                    with the <code>&lt;button&gt;</code> element. However, you can also use these
                                    classes on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements.</p>

                                <div class="button-examples">
                                    <a class="btn btn-primary waves-effect waves-light" href="#" role="button">Link</a>
                                    <button class="btn btn-secondary waves-effect waves-light" type="submit">Button</button>
                                    <input class="btn btn-success waves-effect waves-light" type="button" value="Input" />
                                    <input class="btn btn-danger waves-effect waves-light" type="submit" value="Submit" />
                                    <input class="btn btn-warning waves-effect waves-light" type="reset" value="Reset" />
                                </div>

                            </div>

                        </div>


                    </div>


                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Sizes</h4>
                                <p class="card-subtitle mb-4">
                                    Fancy larger or smaller buttons? Add <code>.btn-lg</code> or
                                    <code>.btn-sm</code> for additional sizes.</p>
                                <div class="button-examples">
                                    <button type="button" class="btn btn-primary btn-lg waves-effect waves-light">Large button</button>
                                    <button type="button" class="btn btn-success btn-lg waves-effect waves-light">Large button</button>
                                    <button type="button" class="btn btn-info btn-sm waves-effect waves-light">Small button</button>
                                    <button type="button" class="btn btn-danger btn-sm waves-effect waves-light">Small button</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Checkbox and Radio Buttons</h4>
                                <p class="card-subtitle mb-4">
                                    <code>.button</code> styles can be applied to other elements, such as
                                    <code>&lt;label&gt;</code>s, to provide checkbox or radio style button toggling.
                                    Add <code>data-toggle="buttons"</code> to a <code>.btn-group</code> containing
                                    those modified buttons to enable their toggling behavior via JavaScript and add
                                    <code>.btn-group-toggle</code> to style the <code>&lt;input&gt;</code>s within
                                    your buttons.
                                </p>

                                <div class="row">
                                    <div class="col-auto mt-1">
                                        <div class="btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary active waves-effect waves-light">
                                                <input type="checkbox" checked /> Checked
                                            </label>
                                        </div>
                                    </div>


                                    <div class="col mt-1">
                                        <div class="btn-group btn-group-toggle waves-effect waves-light" data-toggle="buttons">
                                            <label class="btn btn-primary active waves-effect waves-light">
                                                <input type="radio" name="options" id="option1"
                                                    checked /> Active
                                            </label>
                                            <label class="btn btn-primary waves-effect waves-light">
                                                <input type="radio" name="options" id="option2" />
                                                Radio
                                            </label>
                                            <label class="btn btn-primary waves-effect waves-light ">
                                                <input type="radio" name="options" id="option3" />
                                                Radio
                                            </label>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>


                    </div>


                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Block Level Buttons</h4>
                                <p class="card-subtitle mb-4">Create block level buttons—those that span the full
                                    width of a parent—by adding <code>.btn-block</code></p>
                                <button type="button" class="btn btn-success btn-sm btn-block waves-effect waves-light">Block level
                                    button</button>
                                <button type="button" class="btn btn-outline-info btn-lg btn-block waves-effect waves-light">Block level
                                    button</button>
                            </div>

                        </div>


                    </div>

                </div>



                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Active State</h4>
                                <p class="card-subtitle mb-4">Add the <code>active </code> class to
                                    <code>&lt;a&gt;</code> buttons.
                                </p>

                                <a href="#" class="btn btn-primary btn-lg active waves-effect" role="button"
                                    aria-pressed="true">Primary link</a>
                                <a href="#" class="btn btn-secondary btn-lg active waves-effect" role="button"
                                    aria-pressed="true">Link</a>
                            </div>

                        </div>


                    </div>


                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Disabled State</h4>
                                <p class="card-subtitle mb-4"> Add the <code>disabled</code> attribute to
                                    <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> buttons.</p>

                                <button type="button" class="btn btn-lg btn-primary waves-effect waves-light" disabled>Primary
                                    button</button>
                                <a href="#" class="btn btn-secondary btn-lg disabled waves-effect" tabindex="-1" role="button"
                                    aria-disabled="true">Link</a>
                            </div>

                        </div>


                    </div>

                </div>



                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Button toolbar</h4>
                                <p class="card-subtitle mb-4">Combine sets of button groups into button toolbars for
                                    more complex components. Use utility classes as needed to space out groups,
                                    buttons, and more.
                                </p>
                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group mr-2" role="group" aria-label="First group">
                                        <button type="button" class="btn btn-success waves-effect waves-light">1</button>
                                        <button type="button" class="btn btn-success waves-effect waves-light">2</button>
                                        <button type="button" class="btn btn-success waves-effect waves-light">3</button>
                                    </div>
                                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                                        <button type="button" class="btn btn-info waves-effect waves-light">5</button>
                                        <button type="button" class="btn btn-info waves-effect waves-light">6</button>
                                        <button type="button" class="btn btn-info waves-effect waves-light">7</button>
                                    </div>
                                    <div class="btn-group" role="group" aria-label="Third group">
                                        <button type="button" class="btn btn-primary waves-effect waves-light">8</button>

                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>


                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Rounded Button</h4>
                                <p class="card-subtitle mb-4"> Add <code>.btn-rounded</code> to default button to
                                    get rounded corners.</p>

                                <div class="button-examples">
                                    <button type="button"
                                        class="btn btn-primary btn-rounded waves-effect waves-light">Primary</button>
                                    <button type="button"
                                        class="btn btn-outline-success btn-rounded waves-effect waves-light">Success</button>
                                    <button type="button"
                                        class="btn btn-info btn-rounded waves-effect waves-light">Info</button>
                                    <button type="button"
                                        class="btn btn-warning btn-rounded waves-effect waves-light">Warning</button>
                                    <button type="button"
                                        class="btn btn-outline-danger btn-rounded waves-effect waves-light">Danger</button>
                                    <button type="button"
                                        class="btn btn-dark btn-rounded waves-effect waves-light">Dark</button>
                                    <button type="button"
                                        class="btn btn-outline-secondary btn-rounded waves-effect waves-light">Secondary</button>
                                    <button type="button" class="btn btn-light btn-rounded waves-effect">Light</button>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Button Group Sizing</h4>
                                <p class="card-subtitle mb-4">Instead of applying button sizing classes to every
                                    button in a group, just add <code>.btn-group-*</code> to each
                                    <code>.btn-group</code>, including each one when nesting multiple groups.</p>

                                <div class="button-examples">
                                    <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                                        <button type="button" class="btn btn-light waves-effect">Left</button>
                                        <button type="button" class="btn btn-light waves-effect">Middle</button>
                                        <button type="button" class="btn btn-light waves-effect">Right</button>
                                    </div>

                                    <div class="btn-group" role="group" aria-label="Default button group">
                                        <button type="button" class="btn btn-secondary waves-effect waves-light">Left</button>
                                        <button type="button" class="btn btn-secondary waves-effect waves-light">Middle</button>
                                        <button type="button" class="btn btn-secondary waves-effect waves-light">Right</button>
                                    </div>

                                    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                        <button type="button" class="btn btn-dark waves-effect waves-light">Left</button>
                                        <button type="button" class="btn btn-dark waves-effect waves-light">Middle</button>
                                        <button type="button" class="btn btn-dark waves-effect waves-light">Right</button>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>


                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Nesting Button Group</h4>
                                <p class="card-subtitle mb-4">Place a <code>.btn-group</code> within another
                                    <code>.btn-group</code> when you want dropdown menus mixed with a series of
                                    buttons.</p>

                                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                                    <button type="button" class="btn btn-outline-secondary waves-effect waves-light">1</button>
                                    <button type="button" class="btn btn-outline-secondary waves-effect waves-light">2</button>

                                    <div class="btn-group" role="group">
                                        <button id="btnGroupDrop1" type="button"
                                            class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            Dropdown <i class="mdi mdi-chevron-down"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <a class="dropdown-item" href="#">Dropdown link</a>
                                            <a class="dropdown-item" href="#">Dropdown link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Vertical Variation</h4>
                                <p class="card-subtitle mb-4">Make a set of buttons appear vertically stacked rather
                                    than horizontally. Split button dropdowns are not supported here.
                                </p>

                                <div class="row">
                                    <div class="col-auto">
                                        <div class="btn-group-vertical" role="group"
                                            aria-label="Vertical button group">
                                            <button type="button" class="btn btn-secondary waves-effect waves-light">Button</button>
                                            <button type="button" class="btn btn-secondary waves-effect waves-light">Button</button>
                                            <button type="button" class="btn btn-secondary waves-effect waves-light">Button</button>
                                            <button type="button" class="btn btn-secondary waves-effect waves-light">Button</button>
                                            <button type="button" class="btn btn-secondary waves-effect waves-light">Button</button>
                                            <button type="button" class="btn btn-secondary waves-effect waves-light">Button</button>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="btn-group-vertical" role="group"
                                            aria-label="Vertical button group">
                                            <button type="button" class="btn btn-secondary waves-effect waves-light">Button</button>
                                            <button type="button" class="btn btn-secondary waves-effect waves-light">Button</button>

                                            <div class="btn-group" role="group">
                                                <button id="btnGroupVerticalDrop1" type="button"
                                                    class="btn btn-secondary dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Dropdown <i class="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                                                    <a class="dropdown-item waves-effect waves-light" href="#">Dropdown link</a>
                                                    <a class="dropdown-item waves-effect waves-light" href="#">Dropdown link</a>
                                                </div>
                                            </div>

                                            <div class="btn-group" role="group">
                                                <button id="btnGroupVerticalDrop2" type="button"
                                                    class="btn btn-secondary dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Dropdown <i class="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
                                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                                </div>
                                            </div>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupVerticalDrop3" type="button"
                                                    class="btn btn-secondary dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Dropdown <i class="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
                                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                                </div>
                                            </div>
                                            <div class="btn-group" role="group">
                                                <button id="btnGroupVerticalDrop4" type="button"
                                                    class="btn btn-secondary dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Dropdown <i class="mdi mdi-chevron-down"></i>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
                                                    <a class="dropdown-item waves-effect waves-light" href="#">Dropdown link</a>
                                                    <a class="dropdown-item" href="#">Dropdown link</a>
                                                </div>
                                            </div>
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


Buttons.layout = (page) => <Base children={page} title={"Buttons"} />
