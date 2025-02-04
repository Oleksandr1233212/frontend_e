<template>
    <div class="col-12 col-lg-12 col-xl-4 d-flex">
        <div class="card flex-fill comman-shadow">
            <div class="card-body">
                <div class="calendar-container">
                    <div class="calendar-header">
                        <h2>{{ monthName }} {{ year }}</h2>
                    </div>
                    <div class="calendar-grid">
                        <div v-for="(day, index) in daysOfWeek" :key="index" class="calendar-day-header">
                            {{ day }}
                        </div>
                        <div v-for="day in blankDays" :key="day" class="calendar-day blank-day"></div>
                        <div v-for="day in daysInMonth" :key="day" class="calendar-day"
                            :class="{ today: isToday(day) }">
                            {{ day }}
                        </div>
                    </div>
                </div>
                <div class="calendar-info calendar-info1">
                    <div class="up-come-header">
                        <h2>Upcoming Events</h2>
                        <span><a href="javascript:;"><i class="feather-plus"></i></a></span>
                    </div>
                    <div class="upcome-event-date">
                        <h3>10 Jan</h3>
                        <span><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                    <div class="calendar-details">
                        <p>08:00 am</p>
                        <div class="calendar-box normal-bg">
                            <div class="calandar-event-name">
                                <h4>Botony</h4>
                                <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>08:00 - 09:00 am</span>
                        </div>
                    </div>
                    <div class="calendar-details">
                        <p>09:00 am</p>
                        <div class="calendar-box normal-bg">
                            <div class="calandar-event-name">
                                <h4>Botony</h4>
                                <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>09:00 - 10:00 am</span>
                        </div>
                    </div>
                    <div class="calendar-details">
                        <p>10:00 am</p>
                        <div class="calendar-box normal-bg">
                            <div class="calandar-event-name">
                                <h4>Botony</h4>
                                <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>10:00 - 11:00 am</span>
                        </div>
                    </div>
                    <div class="upcome-event-date">
                        <h3>10 Jan</h3>
                        <span><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                    <div class="calendar-details">
                        <p>08:00 am</p>
                        <div class="calendar-box normal-bg">
                            <div class="calandar-event-name">
                                <h4>English</h4>
                                <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>08:00 - 09:00 am</span>
                        </div>
                    </div>
                    <div class="calendar-details">
                        <p>09:00 am</p>
                        <div class="calendar-box normal-bg">
                            <div class="calandar-event-name">
                                <h4>Mathematics </h4>
                                <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>09:00 - 10:00 am</span>
                        </div>
                    </div>
                    <div class="calendar-details">
                        <p>10:00 am</p>
                        <div class="calendar-box normal-bg">
                            <div class="calandar-event-name">
                                <h4>History</h4>
                                <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>10:00 - 11:00 am</span>
                        </div>
                    </div>
                    <div class="calendar-details">
                        <p>11:00 am</p>
                        <div class="calendar-box break-bg">
                            <div class="calandar-event-name">
                                <h4>Break</h4>
                                <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>11:00 - 12:00 am</span>
                        </div>
                    </div>
                    <div class="calendar-details">
                        <p>11:30 am</p>
                        <div class="calendar-box normal-bg">
                            <div class="calandar-event-name">
                                <h4>History</h4>
                                <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>11:30 - 12:00 am</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Calendar',
  data() {
    return {
      today: new Date(),
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  computed: {
    monthName() {
      return new Date(this.year, this.month).toLocaleString("en-US", { month: "long" });
    },
    daysInMonth() {
      const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
      return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    },
    blankDays() {
      return Array.from({ length: new Date(this.year, this.month, 1).getDay() });
    },
  },
  methods: {
    isToday(day) {
      return (
        day === this.today.getDate() &&
        this.month === this.today.getMonth() &&
        this.year === this.today.getFullYear()
      );
    },
    prevMonth() {
      if (this.month === 0) {
        this.month = 11;
        this.year -= 1;
      } else {
        this.month -= 1;
      }
    },
    nextMonth() {
      if (this.month === 11) {
        this.month = 0;
        this.year += 1;
      } else {
        this.month += 1;
      }
    },
  },
};
</script>

<style scoped>
.calendar-container {
  max-width: 350px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-title {
  text-align: center;
}

.calendar-title h2 {
  font-size: 24px;
  margin: 0;
}

.calendar-title p {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.nav-button {
  font-size: 24px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease;
}

.nav-button:hover {
  color: #007bff;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-top: 10px;
}

.calendar-day-header {
  font-weight: bold;
  text-align: center;
  color: #555;
  padding-bottom: 10px;
}

.calendar-day {
  text-align: center;
  padding: 10px;
  border-radius: 50%;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.calendar-day:hover {
  background-color: #e0f7fa;
  cursor: pointer;
}

.today {
  background-color: #007bff;
  color: #ffffff;
  font-weight: bold;
}
</style>