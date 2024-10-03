<template>
    <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">
                            <span>Main Menu</span>
                        </li>
                        <li class="submenu active">
                            <a href="#"><i class="feather-grid"></i> <span> Dashboard</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to="`/admin/dashboard`" class="active">Admin Dashboard</router-link></li>
<li><router-link :to="`/admin/teacher-dashboard`">Teacher Dashboard</router-link></li>
<li><router-link :to="`/admin/student-dashboard`">Student Dashboard</router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-graduation-cap"></i> <span> Students</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to="`/admin/students`">Student List</router-link></li>
<li><router-link :to="`/admin/student-details`">Student View</router-link></li>
<li><router-link :to="`/admin/add-student`">Student Add</router-link></li>
<li><router-link :to="`/admin/edit-student`">Student Edit</router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-chalkboard-teacher"></i> <span> Teachers</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to="`/admin/teachers`">Teacher List</router-link></li>
<li><router-link :to="`/admin/teacher-details`">Teacher View</router-link></li>
<li><router-link :to="`/admin/add-teacher`">Teacher Add</router-link></li>
<li><router-link :to="`/admin/edit-teacher`">Teacher Edit</router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-building"></i> <span> Departments</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to="`/admin/departments`">Department List</router-link></li>
<li><router-link :to="`/admin/add-department`">Department Add</router-link></li>
<li><router-link :to="`/admin/edit-department`">Department Edit</router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-book-reader"></i> <span> Subjects</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to="`/admin/subjects`">Subject List</router-link></li>
<li><router-link :to="`/admin/add-subject`">Subject Add</router-link></li>
<li><router-link :to="`/admin/edit-subject`">Subject Edit</router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-clipboard"></i> <span> Invoices</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to="`/admin/invoices`">Invoices List</router-link></li>
<li><router-link :to="`/admin/invoice-grid`">Invoices Grid</router-link></li>
<li><router-link :to="`/admin/add-invoice`">Add Invoices</router-link></li>
<li><router-link :to="`/admin/edit-invoice`">Edit Invoices</router-link></li>
<li><router-link :to="`/admin/view-invoice`">Invoices Details</router-link></li>
<li><router-link :to="`/admin/invoices-settings`">Invoices Settings</router-link></li>

                            </ul>
                        </li>
                        <li class="menu-title">
                            <span>Management</span>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-file-invoice-dollar"></i> <span> Accounts</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to="`/admin/fees-collections`">Fees Collection</router-link></li>
<li><router-link :to="`/admin/expenses`">Expenses</router-link></li>
<li><router-link :to="`/admin/salary`">Salary</router-link></li>
<li><router-link :to="`/admin/add-fees-collection`">Add Fees</router-link></li>
<li><router-link :to="`/admin/add-expenses`">Add Expenses</router-link></li>
<li><router-link :to="`/admin/add-salary`">Add Salary</router-link></li>

                            </ul>
                        </li>
                        <li>
    <router-link :to="`/admin/holiday`"><i class="fas fa-holly-berry"></i> <span>Holiday</span></router-link>
</li>
<li>
    <router-link :to="`/admin/fees`"><i class="fas fa-comment-dollar"></i> <span>Fees</span></router-link>
</li>
<li>
    <router-link :to="`/admin/exam`"><i class="fas fa-clipboard-list"></i> <span>Exam list</span></router-link>
</li>
<li>
    <router-link :to="`/admin/event`"><i class="fas fa-calendar-day"></i> <span>Events</span></router-link>
</li>
<li>
    <router-link :to="`/admin/time-table`"><i class="fas fa-table"></i> <span>Time Table</span></router-link>
</li>
<li>
    <router-link :to="`/admin/library`"><i class="fas fa-book"></i> <span>Library</span></router-link>
</li>

                        <li class="submenu">
                            <a href="#"><i class="fa fa-newspaper"></i> <span> Blogs</span>
                                <span class="menu-arrow"></span>
                            </a>
                            <ul>
                                <li><router-link :to="`/admin/blog`">All Blogs</router-link></li>
<li><router-link :to="`/admin/add-blog`">Add Blog</router-link></li>
<li><router-link :to="`/admin/edit-blog`">Edit Blog</router-link></li>

                            </ul>
                        </li>
                        <li>
                            <router-link :to='`/admin/register`'><a ><i class="fas fa-cog"></i> <span>Settings</span></a></router-link>
                        </li>
                        <li class="menu-title">
                            <span>Pages</span>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-shield-alt"></i> <span> Authentication </span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to='`/admin/login`'><a >Login</a></router-link></li>
<li><router-link :to='`/admin/register`'><a >Register</a></router-link></li>
<li><router-link :to='`/admin/forgot-password`'><a >Forgot Password</a></router-link></li>
<li><router-link :to='`/admin/error-404`'><a >Error Page</a></router-link></li>

                            </ul>
                        </li>
                        <li>
                            <roter-link :to='`/admin/blank-page`'><a><i class="fas fa-file"></i> <span>Blank Page</span></a></roter-link>
                        </li>
                        <li class="menu-title">
                            <span>Others</span>
                        </li>
                        <li>
    <router-link :to='`/admin/sports`'><i class="fas fa-baseball-ball"></i> <span>Sports</span></router-link>
</li>
<li>
    <router-link :to='`/admin/hostel`'><i class="fas fa-hotel"></i> <span>Hostel</span></router-link>
</li>
<li>
    <router-link :to='`/admin/transport`'><i class="fas fa-bus"></i> <span>Transport</span></router-link>
</li>

                        <li class="menu-title">
                            <span>UI Interface</span>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fab fa-get-pocket"></i> <span>Base UI </span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to='`/admin/alerts`'><a >Alerts</a></router-link></li>
<li><router-link :to='`/admin/accordions`'><a >Accordions</a></router-link></li>
<li><router-link :to='`/admin/avatar`'><a >Avatar</a></router-link></li>
<li><router-link :to='`/admin/badges`'><a >Badges</a></router-link></li>
<li><router-link :to='`/admin/buttons`'><a >Buttons</a></router-link></li>
<li><router-link :to='`/admin/buttongroup`'><a >Button Group</a></router-link></li>
<li><router-link :to='`/admin/breadcrumbs`'><a >Breadcrumb</a></router-link></li>
<li><router-link :to='`/admin/cards`'><a >Cards</a></router-link></li>
<li><router-link :to='`/admin/carousel`'><a >Carousel</a></router-link></li>
<li><router-link :to='`/admin/dropdowns`'><a >Dropdowns</a></router-link></li>
<li><router-link :to='`/admin/grid`'><a >Grid</a></router-link></li>
<li><router-link :to='`/admin/images`'><a >Images</a></router-link></li>
<li><router-link :to='`/admin/lightbox`'><a >Lightbox</a></router-link></li>
<li><router-link :to='`/admin/media`'><a >Media</a></router-link></li>
<li><router-link :to='`/admin/modal`'><a >Modals</a></router-link></li>
<li><router-link :to='`/admin/offcanvas`'><a >Offcanvas</a></router-link></li>
<li><router-link :to='`/admin/pagination`'><a >Pagination</a></router-link></li>
<li><router-link :to='`/admin/popover`'><a >Popover</a></router-link></li>
<li><router-link :to='`/admin/progress`'><a >Progress Bars</a></router-link></li>
<li><router-link :to='`/admin/placeholders`'><a >Placeholders</a></router-link></li>
<li><router-link :to='`/admin/rangeslider`'><a >Range Slider</a></router-link></li>
<li><router-link :to='`/admin/spinners`'><a >Spinner</a></router-link></li>
<li><router-link :to='`/admin/sweetalerts`'><a >Sweet Alerts</a></router-link></li>
<li><router-link :to='`/admin/tab`'><a >Tabs</a></router-link></li>
<li><router-link :to='`/admin/toastr`'><a >Toasts</a></router-link></li>
<li><router-link :to='`/admin/tooltip`'><a >Tooltip</a></router-link></li>
<li><router-link :to='`/admin/typography`'><a >Typography</a></router-link></li>
<li><router-link :to='`/admin/video`'><a >Video</a></router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="box"></i> <span>Elements </span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to='`/admin/ribbon`'><a >Ribbon</a></router-link></li>
<li><router-link :to='`/admin/clipboard`'><a >Clipboard</a></router-link></li>
<li><router-link :to='`/admin/drag-drop`'><a >Drag & Drop</a></router-link></li>
<li><router-link :to='`/admin/rating`'><a >Rating</a></router-link></li>
<li><router-link :to='`/admin/text-editor`'><a >Text Editor</a></router-link></li>
<li><router-link :to='`/admin/counter`'><a >Counter</a></router-link></li>
<li><router-link :to='`/admin/scrollbar`'><a >Scrollbar</a></router-link></li>
<li><router-link :to='`/admin/notification`'><a >Notification</a></router-link></li>
<li><router-link :to='`/admin/stickynote`'><a >Sticky Note</a></router-link></li>
<li><router-link :to='`/admin/timeline`'><a >Timeline</a></router-link></li>
<li><router-link :to='`/admin/horizontal-timeline`'><a >Horizontal Timeline</a></router-link></li>
<li><router-link :to='`/admin/form-wizard`'><a >Form Wizard</a></router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="bar-chart-2"></i> <span> Charts </span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to='`/admin/chart-apex`'><a >Apex Charts</a></router-link></li>
<li><router-link :to='`/admin/chart-js`'><a >Chart Js</a></router-link></li>
<li><router-link :to='`/admin/chart-morris`'><a >Morris Charts</a></router-link></li>
<li><router-link :to='`/admin/chart-flot`'><a >Flot Charts</a></router-link></li>
<li><router-link :to='`/admin/chart-peity`'><a >Peity Charts</a></router-link></li>
<li><router-link :to='`/admin/chart-c3`'><a >C3 Charts</a></router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="award"></i> <span> Icons </span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to='`/admin/icon-fontawesome`'><a >Fontawesome Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-feather`'><a >Feather Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-ionic`'><a >Ionic Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-material`'><a >Material Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-pe7`'><a >Pe7 Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-simpleline`'><a >Simpleline Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-themify`'><a >Themify Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-weather`'><a >Weather Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-typicon`'><a >Typicon Icons</a></router-link></li>
<li><router-link :to='`/admin/icon-flag`'><a >Flag Icons</a></router-link></li>

                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-columns"></i> <span> Forms </span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to='`/admin/basic-input`'><a >Basic Inputs </a></router-link></li>
                                <li><router-link :to='`/admin/input-groups`'><a >Input Groups </a></router-link></li>
                                <li><router-link :to='`/admin/horizontal`'><a >Horizontal Form </a></router-link></li>
                                <li><router-link :to='`/admin/vertical`'><a > Vertical Form </a></router-link></li>
                                <li><router-link :to='`/admin/mask`'><a > Form Mask </a></router-link></li>
                                <li><router-link :to='`/admin/validarion`'><a > Form Validation </a></router-link></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i class="fas fa-table"></i> <span> Tables </span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><router-link :to='`/admin/basic-tables`'><a >Basic Tables </a></router-link></li>
                                <li><router-link :to='`/admin/data-tables`'><a >Data Table </a></router-link></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>



</template>