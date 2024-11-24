<template>
<div class="tab-pane fade show active" id="per_details_tab">

    <div class="row">
        <div class="col-lg-9">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-between">
                        <span>Personal Details</span>
                        <a class="edit-link" data-bs-toggle="modal"
                            href="#edit_personal_details"><i
                                class="far fa-edit me-1"></i>Edit</a>
                    </h5>
                    <div class="row">
                        <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Name</p>
                        <p class="col-sm-9">John Doe</p>
                    </div>
                    <div class="row">
                        <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Date of
                            Birth</p>
                        <p class="col-sm-9">24 Jul 1983</p>
                    </div>
                    <div class="row">
                        <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Email ID
                        </p>
                        <p class="col-sm-9"><a href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="a1cbcec9cfc5cec4e1c4d9c0ccd1cdc48fc2cecc">[email&#160;protected]</a>
                        </p>
                    </div>
                    <div class="row">
                        <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Mobile
                        </p>
                        <p class="col-sm-9">305-310-5857</p>
                    </div>
                    <div class="row">
                        <p class="col-sm-3 text-muted text-sm-end mb-0">Address</p>
                        <p class="col-sm-9 mb-0">4663 Agriculture Lane,<br>
                            Miami,<br>
                            Florida - 33165,<br>
                            United States.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-between">
                        <span>Account Status</span>
                        <a class="edit-link" href="#"><i class="far fa-edit me-1"></i>
                            Edit</a>
                    </h5>
                    <button class="btn btn-success" type="button"><i
                            class="fe fe-check-verified"></i> Active</button>
                </div>
            </div>


            <div class="card">
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-between">
                        <span>Skills </span>
                        <a class="edit-link" href="#"><i class="far fa-edit me-1"></i>
                            Edit</a>
                    </h5>
                    <div class="skill-tags">
                        <span>Html5</span>
                        <span>CSS3</span>
                        <span>WordPress</span>
                        <span>Javascript</span>
                        <span>Android</span>
                        <span>iOS</span>
                        <span>Angular</span>
                        <span>PHP</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
</template>