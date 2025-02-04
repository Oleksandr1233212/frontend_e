<template>
    <div class="profile-header">
                                <div class="row align-items-center">
                                    <div class="col-auto profile-image">
                                        <a href="#">
                                            <img class="rounded-circle" alt="User Image"
                                                :src="photo">
                                        </a>
                                    </div>
                                    <div class="col ms-md-n2 profile-user-info">
                                        <h4 class="user-name mb-0">John Doe</h4>
                                        <h6 class="text-muted">UI/UX Design Team</h6>
                                        <div class="user-Location"><i class="fas fa-map-marker-alt"></i> Florida, United
                                            States</div>
                                        <div class="about-text">Lorem ipsum dolor sit amet.</div>
                                    </div>
                                    <div class="col-auto profile-btn">
                                        <a href="" class="btn btn-primary">
                                            Edit
                                        </a>
                                    </div>
                                </div>
                            </div>
</template>
<script>
import photo from '@/assets/img/avatar-02.jpg'
export default {
    data(){
        return{
            photo
        }
    }
}
</script>