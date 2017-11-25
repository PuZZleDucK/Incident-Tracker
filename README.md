
# Incident Tracker

Displays incident data on a map

- Source: https://github.com/PuZZleDucK/Incident-Tracker.git
- Deployment:
- CI/CD: https://semaphoreci.com/puzzleduck/incident-tracker

# The Technology

Uses the React JS library
Responsive layout
GitHub Pages for hosting


# The Plan

- [ ] Analyse problem description
- [ ] Document approach
- [ ] Review wave digital source code
- [ ] Add contrib/license/coc/contact-wiki
- [ ] Setup project infrastructure and pipelines
- [ ] Prototype layouts
- [ ] Input/Parse data
- [ ] Display live data
- [ ] Develop additional functionality
- [ ] Review submission


# The Specification

- [ ] local traffic authority needs a solution to display traffic incidents on a map.
- [ ] simple browser based interface required to display incident locations and information each about each incident.
- [ ] incidents are published in a JSON feed which contains data about the incident type, description, location details etc.
- [ ] live data
- [ ] usually contains 300-400 items.(maximum number of items your solution needs to support).

- [ ] https://victraffic-api.wd.com.au/api/v3/incidents
- [ ] Build a small single page JS application that has the following features:

- [ ] Displays the incidents on an interactive map
- [ ] Each incident in the feed should be displayed on the map with a marker
- [ ] must be able to pan and zoom the map to explore incidents in a particular area
- [ ] You can choose which map library to use
- [ ] When a user clicks an incident marker some basic information is shown
- [ ] The following incident details are required to be displayed: alert_type, title, description
- [ ] This information should be presented in a pop-up element that can be dismissed

- [ ] Displays incidents in a list
- [ ] As the user pans and zooms the map interface the incident list needs to be updated to show only the incidents currently visible on the map
- [ ] Each list element needs to display the alert_type and title of the incident.

- [ ] UI Requirements
- [ ] implement a responsive layout to support both desktop and mobile devices.
- [ ] When in desktop mode the list and map should be both on-screen
- [ ] When in mobile mode the map should be on-screen and the list is accessible by a button or similar element.
- [ ] When in mobile mode the button to access the list should display the number of list elements in the button label

- [ ] We require the application code and any build instructions
- [ ] There are no time limits on the test
- [ ] indicate approximately how long you spent on it
- [ ] You are not expected to apply any specific styling but please apply some basic CSS to ensure the interface elements are pleasantly presented.
- [ ] You may use any frontend framework & build tool or just plain JS.
