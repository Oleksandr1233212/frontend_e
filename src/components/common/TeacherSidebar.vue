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
                            <li><router-link :to="`/admin/teacher-dashboard`" class="active">Teacher Dashboard</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="`/admin/event`"><i class="fas fa-calendar-day"></i> <span>Events</span></router-link>
                    </li>
                    <li class="submenu">
                        <a href="#"><i class="fas fa-book-reader"></i> <span> Subjects</span> <span
                                class="menu-arrow"></span></a>
                        <ul>
                            <li><router-link :to="`/admin/subjects`">Subject List</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="`/admin/exam`"><i class="fas fa-clipboard-list"></i> <span>Exam list</span></router-link>
                    </li>
                    <li>
                        <router-link :to="`/admin/library`"><i class="fas fa-book"></i> <span>Library</span></router-link>
                    </li>
                    <li class="submenu">
                        <a href="#"><i class="fas fa-graduation-cap"></i> <span> Students</span> <span
                                class="menu-arrow"></span></a>
                        <ul>
                            <li><router-link :to="`/admin/students`">Student List</router-link></li>
                            <li><router-link :to="`/admin/student-details`">Student View</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link :to="`/admin/holiday`"><i class="fas fa-holly-berry"></i> <span>Holiday</span></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>