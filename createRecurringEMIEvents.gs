function createRecurringEMIEvents() 
{
  var calendarId = 'your calendar id'; //enter your calendar id
  var description = 'event name'; //enter your event name which needs to modified

  var cal = CalendarApp.getCalendarById(calendarId);

  // Specify the start date for the recurring event
  // Adjust the start date as needed
  var startDate = new Date('YYYY-MM-DD'); 

  // Fetch events in the specified date range
  var endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 60); // Assuming 60 months, adjust as needed
  
  var events = cal.getEvents(startDate, endDate, { search: description });

  Logger.log('Found events: ' + events.length);

  // Update the title for each event
  for (var i = 0; i < events.length; i++) {
    var installmentNumber = i + 1;
    var newTitle = installmentNumber + '/60 - ' + description;
    events[i].setTitle(newTitle);
  }

  Logger.log('Recurring all-day events created with incremental titles.');
}
