
<template>
    <div class="navigation-menu-body">
        <div class="navigation-menu-group">
            <div id="ecommerce">
                <ul>
                    <li></li>
                    <li>
                        <router-link active-class="active" to="/">Ana Sayfa</router-link>
                    </li>
                    <li>
                        <router-link active-class="active" to="/User">Kullanıcı</router-link>
                    </li>
                    <li>
                        <a href="product-list.html">Product List</a>
                    </li>
                    <li>
                        <a href="product-grid.html">Product Grid</a>
                    </li>
                    <li>
                        <a href="product-detail.html">Product Detail</a>
                    </li>
                    <li class="navigation-divider">Summary</li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-3">
                                    <span class="avatar-title bg-warning rounded">
                                        <i class="ti-bar-chart-alt"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6>Total Orders</h6>
                                <h4 class="mb-0 font-weight-bold">$50.958</h4>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-3">
                                    <span class="avatar-title bg-success rounded">
                                        <i class="ti-trash"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6>New Products</h6>
                                <h4 class="mb-0">100</h4>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-3">
                                    <span class="avatar-title bg-danger rounded">
                                        <i class="ti-reload"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6>Refund</h6>
                                <h4 class="mb-0">5.301</h4>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="analytics">
                <ul>
                    <li class="navigation-divider d-flex align-items-center">
                        <i class="mr-2" data-feather="activity"></i> Analytics
                    </li>
                    <li>
                        <a href="analytics-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                        <a href="customers.html">Customers</a>
                    </li>
                    <li class="navigation-divider">Summary</li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-2">
                                    <span class="avatar-title bg-warning rounded-circle">
                                        <i class="ti-bar-chart-alt"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6 class="mb-0">Total Sales</h6>
                                <p class="text-muted mb-0 small">This Mounth</p>
                                <h4 class="mb-0">$50.958</h4>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-2">
                                    <span class="avatar-title bg-success rounded-circle">
                                        <i class="ti-world"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6 class="mb-0">Projects</h6>
                                <p class="text-muted mb-0 small">Today</p>
                                <h4 class="mb-0">35</h4>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-2">
                                    <span class="avatar-title bg-info rounded-circle">
                                        <i class="ti-user"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6 class="mb-0">Total Visitor</h6>
                                <p class="text-muted mb-0 small">Today</p>
                                <h4 class="mb-0">5.301</h4>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="projects">
                <ul>
                    <li class="navigation-divider d-flex align-items-center">
                        <i class="mr-2" data-feather="briefcase"></i> Projects
                    </li>
                    <li>
                        <a href="projects-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                        <a href="project-list.html">Project List</a>
                    </li>
                    <li>
                        <a href="project-grid.html">Project Grid</a>
                    </li>
                    <li>
                        <a href="project-detail.html">Project Detail</a>
                    </li>
                    <li>
                        <a href="clients.html">Clients</a>
                    </li>
                    <li class="navigation-divider">Summary</li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-2">
                                    <span class="avatar-title bg-warning rounded-circle">
                                        <i class="ti-bar-chart-alt"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6 class="mb-0">Total Sales</h6>
                                <p class="text-muted mb-0 small">This Mounth</p>
                                <h4 class="mb-0">$50.958</h4>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-2">
                                    <span class="avatar-title bg-success rounded-circle">
                                        <i class="ti-world"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6 class="mb-0">Projects</h6>
                                <p class="text-muted mb-0 small">Today</p>
                                <h4 class="mb-0">35</h4>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="d-flex align-items-start">
                            <div>
                                <figure class="avatar mr-2">
                                    <span class="avatar-title bg-info rounded-circle">
                                        <i class="ti-user"></i>
                                    </span>
                                </figure>
                            </div>
                            <div>
                                <h6 class="mb-0">Total Visitor</h6>
                                <p class="text-muted mb-0 small">Today</p>
                                <h4 class="mb-0">5.301</h4>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="apps">
                <ul>
                    <li class="navigation-divider d-flex align-items-center">
                        <i class="mr-2" data-feather="globe"></i> Apps
                    </li>
                    <li>
                        <a href="chat.html">
                            <span>Chat</span>
                            <span class="badge badge-danger">5</span>
                        </a>
                    </li>
                    <li>
                        <a href="mail.html">
                            <span>Mail</span>
                        </a>
                    </li>
                    <li>
                        <a href="todo-list.html">
                            <span>Todo List</span>
                            <span class="badge badge-warning">2</span>
                        </a>
                    </li>
                    <li>
                        <a href="file-manager.html">
                            <span>File Manager</span>
                        </a>
                    </li>
                    <li>
                        <a href="calendar.html">
                            <span>Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a href="gallery.html">
                            <span>Gallery</span>
                        </a>
                    </li>
                    <li>
                        <a href="invoice.html">Invoice</a>
                    </li>
                    <li class="navigation-divider">Recent Contacts</li>
                    <li>
                        <div class="list-group list-group-flush">
                            <a href="#" class="list-group-item d-flex align-items-center">
                                <div>
                                    <div class="avatar avatar-sm m-r-10">
                                        <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <span>Valentine Maton</span>
                            </a>
                            <a href="#" class="list-group-item d-flex align-items-center">
                                <div>
                                    <div class="avatar avatar-sm m-r-10">
                                        <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <span>Holmes Cherryman</span>
                            </a>
                            <a href="#" class="list-group-item d-flex align-items-center">
                                <div>
                                    <div class="avatar avatar-sm m-r-10">
                                        <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <span>Kenneth Hune</span>
                            </a>
                            <a href="#" class="list-group-item d-flex align-items-center">
                                <div>
                                    <div class="avatar avatar-sm m-r-10">
                                        <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <span>Holmes Cherryman</span>
                            </a>
                            <a href="#" class="list-group-item d-flex align-items-center">
                                <div>
                                    <div class="avatar avatar-sm m-r-10">
                                        <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <span>Kenneth Hune</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="user">
                <ul>
                    <li class="navigation-divider d-flex align-items-center">
                        <i class="mr-2" data-feather="users"></i> User
                    </li>
                    <li>
                        <a href="profile.html">Profile</a>
                    </li>
                    <li>
                        <a href="user-list.html">User List</a>
                    </li>
                    <li>
                        <a href="user-edit.html">User Edit</a>
                    </li>
                    <li><a href="login.html" target="_blank">Login</a></li>
                    <li><a href="register.html" target="_blank">Register</a></li>
                    <li>
                        <a href="recovery-password.html" target="_blank">Recovery Password</a>
                    </li>
                    <li><a href="lock-screen.html" target="_blank">Lock Screen</a></li>
                    <li class="navigation-divider">Followers</li>
                    <li>
                        <div class="avatar-group ml-4">
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Krisha McAlees" data-toggle="tooltip">
                                    <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="avatar">
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Rozella Baskerfield" data-toggle="tooltip">
                                    <span class="avatar-title bg-info rounded-circle">R</span>
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Hilton Dew" data-toggle="tooltip">
                                    <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="avatar">
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Mellie Smittoune" data-toggle="tooltip">
                                    <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="avatar">
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Avery Hampshire" data-toggle="tooltip">
                                    <span class="avatar-title bg-warning rounded-circle">A</span>
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Krisha McAlees" data-toggle="tooltip">
                                    <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="avatar">
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Rozella Baskerfield" data-toggle="tooltip">
                                    <span class="avatar-title bg-success rounded-circle">R</span>
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Other" data-toggle="tooltip">
                                    <span class="avatar-title bg-dark rounded-circle">+5</span>
                                </a>
                            </figure>
                        </div>
                    </li>
                    <li class="navigation-divider">Following</li>
                    <li>
                        <div class="avatar-group ml-4">
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Krisha McAlees" data-toggle="tooltip">
                                    <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="avatar">
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Darby Croci" data-toggle="tooltip">
                                    <span class="avatar-title bg-danger rounded-circle">D</span>
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Hilton Dew" data-toggle="tooltip">
                                    <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="avatar">
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Mellie Smittoune" data-toggle="tooltip">
                                    <img src="https://i.pravatar.cc/100" class="rounded-circle" alt="avatar">
                                </a>
                            </figure>
                            <figure class="avatar avatar-sm">
                                <a href="#" title="Mahalia Lemme" data-toggle="tooltip">
                                    <span class="avatar-title bg-secondary rounded-circle">M</span>
                                </a>
                            </figure>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="components">
                <ul>
                    <li class="navigation-divider d-flex align-items-center">
                        <i class="mr-2" data-feather="layers"></i> Components
                    </li>
                    <li>
                        <a href="#">Basic Components</a>
                        <ul>
                            <li>
                                <a href="alert.html">Alerts</a>
                            </li>
                            <li>
                                <a href="accordion.html">Accordion</a>
                            </li>
                            <li>
                                <a href="buttons.html">Buttons</a>
                            </li>
                            <li>
                                <a href="dropdown.html">Dropdown</a>
                            </li>
                            <li>
                                <a href="list-group.html">List Group</a>
                            </li>
                            <li>
                                <a href="pagination.html">Pagination</a>
                            </li>
                            <li>
                                <a href="typography.html">Typography</a>
                            </li>
                            <li>
                                <a href="media-object.html">Media Object</a>
                            </li>
                            <li>
                                <a href="progress.html">Progress</a>
                            </li>
                            <li>
                                <a href="modal.html">Modal</a>
                            </li>
                            <li>
                                <a href="spinners.html">Spinners</a>
                            </li>
                            <li>
                                <a href="navs.html">Navs</a>
                            </li>
                            <li>
                                <a href="tab.html">Tab</a>
                            </li>
                            <li>
                                <a href="tooltip.html">Tooltip</a>
                            </li>
                            <li>
                                <a href="popovers.html">Popovers</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Cards</a>
                        <ul>
                            <li>
                                <a href="basic-cards.html">Basic Cards </a>
                            </li>
                            <li>
                                <a href="image-cards.html">Image Cards </a>
                            </li>
                            <li>
                                <a href="scroll-cards.html">Scroll Cards </a>
                            </li>
                            <li>
                                <a href="other-cards.html">Others Cards</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Tables</a>
                        <ul>
                            <li>
                                <a href="basic-tables.html">Basic Tables</a>
                            </li>
                            <li>
                                <a href="dataTable.html">Datatable</a>
                            </li>
                            <li>
                                <a href="responsive-tables.html">Responsive Tables</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Charts</a>
                        <ul>
                            <li>
                                <a href="apexchart.html">Apex Chart</a>
                            </li>
                            <li>
                                <a href="chartjs.html">Chartjs</a>
                            </li>
                            <li>
                                <a href="justgage.html">Justgage</a>
                            </li>
                            <li>
                                <a href="morsis.html">Morsis</a>
                            </li>
                            <li>
                                <a href="peity.html">Peity</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Maps</a>
                        <ul>
                            <li>
                                <a href="google-map.html">Google Map</a>
                            </li>
                            <li>
                                <a href="vector-map.html">Vector Map</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="avatar.html">Avatar</a>
                    </li>
                    <li>
                        <a href="icons.html">Icons</a>
                    </li>
                    <li>
                        <a href="colors.html">Colors</a>
                    </li>
                </ul>
            </div>
            <div id="forms">
                <ul>
                    <li class="navigation-divider d-flex align-items-center">
                        <i class="mr-2" data-feather="edit-3"></i> Forms
                    </li>
                    <li>
                        <a href="basic-forms.html">Basic Forms</a>
                    </li>
                    <li>
                        <a href="custom-forms.html">Custom Forms</a>
                    </li>
                    <li>
                        <a href="advanced-forms.html">Advanced Forms</a>
                    </li>
                    <li>
                        <a href="form-validation.html">Form Validation</a>
                    </li>
                    <li>
                        <a href="form-wizard.html">Form Wizard</a>
                    </li>
                    <li>
                        <a href="file-upload.html">File Upload</a>
                    </li>
                    <li>
                        <a href="datepicker.html">Datepicker</a>
                    </li>
                    <li>
                        <a href="timepicker.html">Timepicker</a>
                    </li>
                    <li>
                        <a href="colorpicker.html">Colorpicker</a>
                    </li>
                </ul>
            </div>
            <div id="plugins">
                <ul>
                    <li class="navigation-divider d-flex align-items-center">
                        <i class="mr-2" data-feather="gift"></i> Plugins
                    </li>
                    <li>
                        <a href="sweet-alert.html">Sweet Alert</a>
                    </li>
                    <li>
                        <a href="lightbox.html">Lightbox</a>
                    </li>
                    <li>
                        <a href="toast.html">Toast</a>
                    </li>
                    <li>
                        <a href="tour.html">Tour</a>
                    </li>
                    <li>
                        <a href="slick-slide.html">Slick Slide</a>
                    </li>
                    <li>
                        <a href="nestable.html">Nestable</a>
                    </li>
                </ul>
            </div>
            <div id="pages">
                <ul>
                    <li class="navigation-divider d-flex align-items-center">
                        <i class="mr-2" data-feather="copy"></i> Pages
                    </li>
                    <li>
                        <a href="timeline.html">Timeline</a>
                    </li>
                    <li>
                        <a href="pricing-table.html">Pricing Table</a>
                    </li>

                    <li>
                        <a href="pricing-table-2.html">Pricing Table 2</a>
                    </li>
                    <li>
                        <a href="search-result.html">Search Result</a>
                    </li>
                    <li>
                        <a href="mailing.html">Mailing</a>
                    </li>
                    <li>
                        <a href="#">Error Pages</a>
                        <ul>
                            <li><a href="404.html" target="_blank">404</a></li>
                            <li><a href="503.html" target="_blank">503</a></li>
                            <li>
                                <a href="mean-at-work.html" target="_blank">
                                    Mean at
                                    Work
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="blank-page.html">Blank Page</a>
                    </li>
                    <li>
                        <a href="#">Menu Level</a>
                        <ul>
                            <li>
                                <a href="#">Menu Level</a>
                                <ul>
                                    <li>
                                        <a href="#">Menu Level </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>