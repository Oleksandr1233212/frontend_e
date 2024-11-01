<template>
    <div class="col-xl-6 d-flex">
              <div class="card flex-fill comman-shadow">
                <div class="card-header d-flex align-items-center">
                  <h5 class="card-title">Student Activity</h5>
                  <ul class="chart-list-out student-ellips">
                    <li class="star-menus"><a href="#"><i class="fas fa-ellipsis-v"></i></a></li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="activity-groups">
                    <!-- Проходимося по масиву активностей та відображаємо їх -->
                    <div class="activity-awards" v-for="(activity, index) in activities" :key="index">
                      <div class="award-boxs">
                        <!-- Відображаємо відповідну іконку для активності -->
                        <img :src="activity.icon" alt="Award">
                      </div>
                      <div class="award-list-outs">
                        <h4>{{ activity.title }}</h4>
                        <h5>{{ activity.description }}</h5>
                      </div>
                      <div class="award-time-list">
                        <span>{{ activity.timeAgo }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
import awardIcon01 from '@/img/award-icon-01.svg';
  import awardIcon02 from '@/img/award-icon-02.svg';
  import awardIcon03 from '@/img/award-icon-03.svg';
  import awardIcon04 from '@/img/award-icon-04.svg';
  export default {
    name:'activity',
    data(){
        return{
            awardIcons: [awardIcon01, awardIcon02, awardIcon03, awardIcon04],
            activities: [],

        }
        
    },
    created() {
     
      this.generateActivities();
    },
    methods:{
        generateActivities() {
        // Створюємо масив можливих активностей
        const activityTemplates = [
          {
            title: 'Won 1st place in "Math Olympiad"',
            description: 'John Doe won 1st place in "Math Olympiad"',
          },
          {
            title: 'Participated in "Science Fair"',
            description: 'Jane Smith participated in "Science Fair"',
          },
          {
            title: 'Attended conference at "Tech University"',
            description: 'Mike Johnson attended conference at "Tech University"',
          },
          {
            title: 'Won 2nd place in "Art Competition"',
            description: 'Emily Davis won 2nd place in "Art Competition"',
          },
        ];
        // Генеруємо активності з випадковими іконками та часом
        this.activities = activityTemplates.map((activity, index) => {
            // Оператор розпакування: Три крапки ...
          return {
            ...activity,
            icon: this.awardIcons[index % this.awardIcons.length],
            timeAgo: this.randomTimeAgo(),
          };
        });
      },
      randomTimeAgo() {
        const times = ['Just now', '1 hour ago', '2 hours ago', 'Yesterday', '2 days ago'];
        return times[Math.floor(Math.random() * times.length)];
      },
    }
  }
</script>