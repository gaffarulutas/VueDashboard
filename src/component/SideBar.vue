<template>
    <div class="sidebar-group">
        <div class="sidebar" id="user-menu">
            <div class="py-4 text-center" data-backround-image="assets/media/image/image1.jpg">
                <figure class="avatar avatar-lg mb-3 border-0">
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" class="rounded-circle" alt="image">""
                </figure>
                <h5 class="d-flex align-items-center justify-content-center">Roxana Roussell</h5>
                <div>
                    Balance: <strong>$500</strong>
                </div>
            </div>
            <div class="card mb-0 card-body shadow-none">
                <div class="mb-4">
                    <div class="list-group list-group-flush">
                        <a href="profile.html" class="list-group-item p-l-r-0">Profile</a>
                        <a href="#" class="list-group-item p-l-r-0 d-flex">Followers</a>
                        <a href="mail.html" class="list-group-item p-l-r-0 d-flex">
                            Inbox <span class="badge badge-danger ml-auto">2</span>
                        </a>
                        <a href="#" class="list-group-item p-l-r-0">Billing</a>
                        <a href="#" class="list-group-item p-l-r-0" data-sidebar-target="#settings">Settings</a>
                        <a href="login.html" class="list-group-item p-l-r-0 text-danger"
                            data-sidebar-target="#settings">Sign Out!</a>
                    </div>
                </div>
                <div class="mb-4">
                    <h6 class="d-flex justify-content-between">
                        Completed Tasks
                        <span class="float-right">%68</span>
                    </h6>
                    <div class="progress" style="height:5px;">
                        <div class="progress-bar bg-secondary" role="progressbar" style="width: 68%;" aria-valuenow="68"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="mb-4">
                    <h6 class="d-flex justify-content-between">
                        Storage
                        <span>%25</span>
                    </h6>
                    <div class="progress" style="height: 5px;">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 40%;" aria-valuenow="40"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="mb-4">
                    <h6>About</h6>
                    <p class="text-muted mb-0">
                        I love reading, traveling and discovering new things. You need to be happy in
                        life.
                    </p>
                </div>
                <div class="mb-4">
                    <h6>City</h6>
                    <p class="text-muted mb-0">Germany / Berlin</p>
                </div>
                <div class="mb-4">
                    <h6>Social Links</h6>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="#" class="btn btn-sm btn-floating btn-facebook">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="btn btn-sm btn-floating btn-twitter">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="btn btn-sm btn-floating btn-dribbble">
                                <i class="fa fa-dribbble"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="btn btn-sm btn-floating btn-whatsapp">
                                <i class="fa fa-whatsapp"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="btn btn-sm btn-floating btn-linkedin">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- END: User Menu -->
        <!-- BEGIN: Settings -->
        <div class="sidebar" id="settings">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Settings</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item pl-0 pr-0">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch1" checked>
                                <label class="custom-control-label" for="customSwitch1">Allow notifications.</label>
                            </div>
                        </li>
                        <li class="list-group-item pl-0 pr-0">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch2">
                                <label class="custom-control-label" for="customSwitch2">Hide user requests</label>
                            </div>
                        </li>
                        <li class="list-group-item pl-0 pr-0">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch3" checked>
                                <label class="custom-control-label" for="customSwitch3">Speed up demands</label>
                            </div>
                        </li>
                        <li class="list-group-item pl-0 pr-0">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch4" checked>
                                <label class="custom-control-label" for="customSwitch4">Hide menus</label>
                            </div>
                        </li>
                        <li class="list-group-item pl-0 pr-0">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch5">
                                <label class="custom-control-label" for="customSwitch5">Remember next visits</label>
                            </div>
                        </li>
                        <li class="list-group-item pl-0 pr-0">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="customSwitch6">
                                <label class="custom-control-label" for="customSwitch6">
                                    Enable report
                                    generation.
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>