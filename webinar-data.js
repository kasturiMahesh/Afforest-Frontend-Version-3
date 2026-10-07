(function(root){
  var webinarDate = new Date(2026, 9, 13, 18, 30, 0, 0);
  var weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  root.DIYWebinarData = {
    title: "Monthly Webinar",
    date: webinarDate,
    price: 149,
    format: "Live Online",
    formatDateTime: function(date){
      var time = date.toLocaleTimeString("en-US", {hour:"numeric",minute:"2-digit"});
      return weekdays[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " · " + time;
    },
    countdown: function(now){
      var remaining = Math.max(0, webinarDate.getTime() - now.getTime());
      var seconds = Math.floor(remaining / 1000);
      return {
        days: Math.floor(seconds / 86400),
        hours: Math.floor((seconds % 86400) / 3600),
        minutes: Math.floor((seconds % 3600) / 60),
        seconds: seconds % 60,
        complete: remaining === 0
      };
    }
  };
})(window);
