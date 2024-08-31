# editCalEvents_google_app_scripts
# Bulk Edit Google Calendar Event Titles for Recurring EMI Payments

## Introduction
This script automates the process of updating the titles of recurring events in a Google Calendar, specifically designed for managing EMI (Equated Monthly Installment) reminders. The script renames each event title to reflect the installment number and total number of installments in a consistent format, such as "1/60 of X Bank Loan."

## Features
- **Customized Event Titles:** Automatically renames events to follow the format "X/60 of [Event Name] Bank Loan," where "X" is the installment number.
- **Bulk Editing:** Efficiently applies title updates to all matching events within a specified date range.
- **Flexible Usage:** Can be adapted to rename titles of any recurring events in a similar format.

## How It Works
1. **Specify Calendar and Event Details:** Input your Google Calendar ID and the initial event description that needs modification.
2. **Set the Date Range:** The script uses a start date and calculates the end date over a 60-month period.
3. **Update Titles:** The script loops through identified events, renaming them incrementally to reflect the payment installment number.

## Usage
- Modify the `calendarId` variable with your specific Google Calendar ID.
- Set the `description` variable to the event name you want to modify.
- Adjust the `startDate` variable to the start date of your recurring EMI.
- Run the script to automatically update event titles in your calendar.

## License
This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Acknowledgments
Thanks to the Google Apps Script community for the helpful documentation and examples.
