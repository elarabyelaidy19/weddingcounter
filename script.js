document.addEventListener('DOMContentLoaded', () => {
  // Set the wedding date - example: June 30, 2023
  const weddingDate = new Date('2025-05-25T12:00:00').getTime();
  
  // Update the countdown every second
  const countdown = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the time difference between now and the wedding date
    const distance = weddingDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    
    // If the countdown is over
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerHTML = '<h2>بارك الله لنا وبارك عليان وجمع بيننا في خير!</h2>';
    }
  }, 1000);
  
  // Format time to always have 2 digits
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}); 