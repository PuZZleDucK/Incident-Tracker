
# Incident Tracker

Displays traffic and roadwork incident data on a dynamic map.

Unfortunately my submission is far from 100% complete with a few issues still remaining regarding the information popups and the incident list not being filtered by visibility on the map. I have only been able to spend a couple of days on the project and intend to complete the last couple of features over the next few days. I have not used React before this project and the learning curve was as steep as I'd heard. Unfortunately this unfamiliarity has resulted in some confusion in the state handling logic and resulted in the issues mentioned above.

### The Design

I started my project with a few sketches of how I wanted the page to look:
![](https://github.com/PuZZleDucK/Incident-Tracker/blob/master/design/02-paper-prototype.jpg?raw=true)

### The Technology

- Uses the React JS library with a responsive layout
- I've utilised GitHub Pages for hosting and Travis.org or remote builds and sutomated deployments.
- No storage requirements... so no back end was required
- Jasmine & Karma were the testing frameworks but few tests have been written so far
- Google Maps API and react-google-maps were used for the mapping components
- Many components were extracted into their own moduls

- Source: https://github.com/PuZZleDucK/Incident-Tracker.git
- Deployment: https://puzzleduck.github.io/Incident-Tracker/
- CI/CD: [![Build Status](https://travis-ci.org/PuZZleDucK/Incident-Tracker.svg?branch=master)](https://travis-ci.org/PuZZleDucK/Incident-Tracker)


### Want More?

There are always plenty of ways to help out or find out more:

- Raise an issue on Github: https://github.com/PuZZleDucK/Incident-Tracker/issues/new
- Fork the repository, branch, code and send us a pull request: https://github.com/PuZZleDucK/Incident-Tracker/compare
- Read more in the developer guide: https://github.com/PuZZleDucK/Incident-Tracker/blob/master/CONTRIBUTING.md
- or get in contact on the wiki: https://github.com/PuZZleDucK/Incident-Tracker/wiki


# Behind the scenes

Below is information and notes I've used to drive development of the project and would not normally be included with a release. However it is included here for your consideration in the application process and to demonstrate how the project was developed.

### Notes

- Known values for incident_type: tow_allocation, alert, emergency, roadworks and event (may be open ended?)

### The Plan

- [x] Analyse problem description
- [x] Document approach
- [x] Review wave digital source code
- [x] Add contrib/license/coc/contact-wiki/templates
- [x] Setup project infrastructure and pipelines
- [x] Example data
- [x] Sketch app design
- [x] Prototype layouts
- [x] Input/Parse data
- [x] Display markers
- [x] Display popoup data
- [x] mobile list toggle
- [ ] limit list to currently visible
- [ ] Display live data (check "last_modified" in json)
- [ ] Make popups independant (make property a hash lookup on marker key)
- [x] Cleanup packages
- [x] ssl (optional)
- [ ] live user location (compass mode)
- [x] Cluster map (optional)
- [ ] Blog
- [ ] Review submission


### The Specification

- [x] local traffic authority needs a solution to display traffic incidents on a map.
- [x] simple browser based interface required to display incident locations and information each about each incident.
- [x] incidents are published in a JSON feed which contains data about the incident type, description, location details etc.
- [ ] live data
- [x] usually contains 300-400 items.(maximum number of items your solution needs to support). - 456 ok

- [x] https://victraffic-api.wd.com.au/api/v3/incidents
- [x] Build a small single page JS application that has the following features:

- [x] Displays the incidents on an interactive map
- [x] Each incident in the feed should be displayed on the map with a marker
- [x] must be able to pan and zoom the map to explore incidents in a particular area
- [x] You can choose which map library to use
- [x] When a user clicks an incident marker some basic information is shown
- [x] The following incident details are required to be displayed: alert_type, title, description
- [x] This information should be presented in a pop-up element that can be dismissed

- [x] Displays incidents in a list
- [ ] As the user pans and zooms the map interface the incident list needs to be updated to show only the incidents currently visible on the map
- [x] Each list element needs to display the alert_type and title of the incident.

- [ ] UI Requirements
- [x] implement a responsive layout to support both desktop and mobile devices.
- [x] When in desktop mode the list and map should be both on-screen
- [x] When in mobile mode the map should be on-screen and the list is accessible by a button or similar element.
- [ ] When in mobile mode the button to access the list should display the number of list elements in the button label

- [x] We require the application code and any build instructions
- [x] There are no time limits on the test
- [x] indicate approximately how long you spent on it
- [x] You are not expected to apply any specific styling but please apply some basic CSS to ensure the interface elements are pleasantly presented.
- [x] You may use any frontend framework & build tool or just plain JS.


### Review of Wave Digital on GitHub

Notes taken reviewing Wave Digital GitHub repos/blog

- 14 repos, every repo is forked from somewhere
- top languages: Ruby Objective-C JavaScript Java
- gh issues
- iOS and Android libs/utils
- cluster map
- Ruby
- REST
- branch push style
- immersive
- autogen docs
- isolated components (core/data/map/demo)
- open layers and turf
- google analytics
- twitter lib
- sparse docs
- strict js
- spec.js (Jasmine & Karma)
- blogs
