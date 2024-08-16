<template>
<h1>ADmin</h1>

</template>
<script>
export default{
    name:'Admin',
    components:{},
    data(){},
    methods:{
        Check(){
            if(localStorage.getItem('userId')){
                console.log('good')
            }
            else{
                this.$router.push('/login');

            }
        }
    },
    created(){
        this.Check()
    }
}
</script>