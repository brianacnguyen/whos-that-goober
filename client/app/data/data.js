angular.module('whosThatGoober.data', [])

.factory('PortfolioData', function () {
  var knowhere = {
    images: ['assets/KW-1.png', 'assets/KW-2.png', 'assets/KW-3.png', 'assets/KW-4.png', 'assets/KW-5.png', 'assets/KW-6.png', 'assets/KW-7.png', 'assets/KW-8.png'],
    title: 'Knowhere',
    subtitle:'A web application that helps individuals and groups organize and create an itinerary for their future travels',
    link: 'https://knowhere.herokuapp.com/',
    responsibility: ['Architected and designed the front-end architecture using Coggle, Moqups, Bootstrap, and AngularJS to provide a clear workflow that optimizes on user experience.',
      'Conducted daily stand-up meetings to develop agile development principles and implement continuous deployment.',
      'Communicated with TripExpert, TripAdvisor, and Yelp to receive access to appropriate API and created mock data to improve production from the lack of API keys.',
      'Provided support to the back-end on API routings, MongoDB database schemas, and server routings to strengthen the overall application architecture.'],
    description: 'This application helps individuals and groups plan their trips. Simply sign up, invite your friends, choose, rate, and plan the places that you want to go!',
    teamMembers: [{
      name: 'Brian Nguyen',
      linkedin: 'https://www.linkedin.com/in/brianacnguyen',
      job: 'Full-Stack Developer'
    },
    {
      name: 'Zachary Smith',
      linkedin: 'https://www.linkedin.com/in/zacharysmith4989',
      job: 'Full-Stack Developer'
    },
    {
      name: 'Maxwell Gaffney',
      linkedin: 'https://www.linkedin.com/in/maxgaff',
      job: 'Full-Stack Developer'
    },
    {
      name: 'Ryan Price',
      linkedin: 'https://www.linkedin.com/in/rsprice',
      job: 'Full-Stack Developer'
    }]
  };
  var doYourApps = {
    images: ['assets/DYA-1.png', 'assets/DYA-2.png', 'assets/DYA-3.png', 'assets/DYA-4.png'], 
    title: 'Do Your Apps!',
    subtitle: 'A web application that helps calculate the amount of money users can lose/save based on their application progress',
    link: 'http://do-your-apps.herokuapp.com/',
    responsibility: [
      'Designed the application look using AngularJS and Bootstrap to provide a simple one-page analysis application',
      'Configured the server using ExpressJS, and deployed the application with Gulp to Heroku'],
    description: 'This application helps users (especially Hack Reactor grads) be motivated to keep up with their minimum 5 applications/day pipeline. Simply input the desired minimum and maximum salary, the number of applications submitted, and the application start date. The results should help you quantify your progress and push you to move forward.',
    teamMembers: [{
      name: 'Brian Nguyen',
      job: 'Full-Stack Developer'
    }]
  };
  var recflix = {
    images: ['assets/RF-1.png', 'assets/RF-2.png', 'assets/RF-3.png'],
    title: 'Recflix',
    subtitle: 'A web application that provides users with detailed recommendations for movies based on their preferences',
    link: 'https://recflixapp.herokuapp.com/',
    responsibility: ['Integrated multiple chained asynchronous requests from external APIs using Async and Superagent to deliver a detailed data response to the client.',
      'Configured the server and API routing using ExpressJS, and implemented continuous integration using Heroku, GruntJS, and CircleCI to streamline changes from development to production.',
      'Supervised coding productions using Github issues and WaffleIO to successfully deliver the product on time.'],
    description: 'This application helps users explore different movies similar to the movies they enjoy. Simply enter the movie title in the search bar and explore different options with detailed information',
    teamMembers: [{
      name: 'Brian Nguyen',
      linkedin: 'https://www.linkedin.com/in/brianacnguyen',
      job: 'Back-end Developer'
    },
    {
      name: 'Michael Lee',
      linkedin: 'https://www.linkedin.com/in/mikelee0330',
      job: 'Front-end Developer'
    },
    {
      name: 'Jieyeng Ping',
      linkedin: 'https://www.linkedin.com/in/jieyingpeng',
      job: 'Full-Stack Developer'
    },
    {
      name: 'Omar Sial',
      linkedin: 'https://www.linkedin.com/in/omarsial',
      job: 'Front-end Developer'
    }]
  };
  var shouldWeWatchThis = {
    images: ['/assets/SWWT-1.png', '/assets/SWWT-2.png', '/assets/SWWT-3.png', '/assets/SWWT-4.png', '/assets/SWWT-5.png', '/assets/SWWT-6.png'],
    title: 'Should We Watch This',
    subtitle: 'A web application that visualizes IMDB\'s television show ratings to reveal season-long quality trends',
    link: 'https://swwt.herokuapp.com/',
    responsibility: ['Redesigned the existing chart and constructed a seasonal pie chart analysis of a show using D3.js to portray episode ratings with seasonal averages.',
      'Provided guidance and ongoing support to the back-end engineers to restructure API calls from client-side to server-side and isolate their responsibilities.'],
    description: 'This application helps users make a decision on watching a certain TV show. Simply input a TV show name and use the analysis to help you make the best decision!',
    teamMembers: [{
      name: 'Brian Nguyen',
      linkedin: 'https://www.linkedin.com/in/brianacnguyen',
      job: 'Front-end Developer'
    },
    {
      name: 'Michael Lee',
      linkedin: 'https://www.linkedin.com/in/mikelee0330',
      job: 'Back-end Developer'
    },
    {
      name: 'Jieyeng Ping',
      linkedin: 'https://www.linkedin.com/in/jieyingpeng',
      job: 'Front-end Developer'
    },
    {
      name: 'Omar Sial',
      linkedin: 'https://www.linkedin.com/in/omarsial',
      job: 'Back-end Developer'
    }]
  };
  var lol = {
    images: ['/assets/LOL-1.png', '/assets/LOL-2.png', '/assets/LOL-3.png'],
    title: 'League of Legends Team Builder',
    subtitle: 'A web application for optimizing character choices based on team lineup',
    link: 'http://lol-team-builder.herokuapp.com/',
    responsibility: ['Collected the official League of Legends data with players data, and designed the front-end architecture with AngularJS for dynamic renderings of recommendations.'],
    description: 'This application helps users pick the right champion based on the picks of their teammates. Simply choose the champions your team has and you will be able to choose the recommended champions!',
    teamMembers: [{
      name: 'Brian Nguyen',
      linkedin: 'https://www.linkedin.com/in/brianacnguyen',
      job: 'Front-end Developer'
    }]
  };
  var atsu = {
    images: ['/assets/ASU-1.png', '/assets/ASU-2.png'],
    title: 'Avoid the Sea Urchins',
    subtitle: 'A simple asteroid-style dodging game with an aquarium theme (from MapleStory)',
    link: 'http://avoid-the-sea-urchins.herokuapp.com/',
    responsibility: [''],
    description: '',
    teamMembers: [{
      name: 'Brian Nguyen',
      linkedin: 'https://www.linkedin.com/in/brianacnguyen',
      job: 'Front-end Developer'
    }, {
      name: 'Omar Sial',
      linkedin: 'https://www.linkedin.com/in/omarsial',
      job: 'Front-end Developer'
    }]
  };
  var farmHill = {
    images: ['/assets/FH-1.png', '/assets/FH-2.png'],
    title: 'FarmHill Page Design',
    subtitle: 'A simple responsive page design as part of the application process for FarmHill',
    link: 'http://soft-eggs.surge.sh/',
    responsibility: [''],
    description: '',
    teamMembers: [{
      name: 'Brian Nguyen',
      linkedin: 'https://www.linkedin.com/in/brianacnguyen',
      job: 'Front-end Developer'
    }]
  };
  return {
    lol: lol,
    shouldWeWatchThis: shouldWeWatchThis,
    knowhere: knowhere,
    recflix: recflix,
    doYourApps: doYourApps,
    atsu : atsu,
    farmHill: farmHill
  };
})

.factory('AboutMe', function() {
  var strong = [
    {skill: 'Javascript',
    icon: '/assets/icons/javascript.png'},
    {skill: 'AngularJS',
    icon: '/assets/icons/angular.png'},
    {skill: 'Bootstrap',
    icon: '/assets/icons/bootstrap.png'},
    {skill: 'Node.js',
    icon: '/assets/icons/nodejs.png'},
    {skill: 'Express.js',
    icon: '/assets/icons/expressjs.png'},
    {skill: 'D3.js',
    icon: '/assets/icons/d3js.png'},
    {skill: 'MongoDB',
    icon: '/assets/icons/mongodb.png'},
    {skill: 'GruntJS',
    icon: '/assets/icons/gruntjs.png'},
    {skill: 'jQuery',
    icon: '/assets/icons/jquery.png'},
    {skill: 'Superagent.js',
    icon: '/assets/icons/noicon.png'},
    {skill: 'Async.js',
    icon: '/assets/icons/noicon.png'},
    {skill: 'Underscore.js',
    icon: '/assets/icons/underscore.png'},
    {skill: 'Adobe Creative Suite',
    icon: '/assets/icons/adobe.png'}
  ];
  var experienced = [
    {skill: 'HTML',
    icon: '/assets/icons/html.png'},
    {skill: 'CSS',
    icon: '/assets/icons/css.png'},
    {skill: 'Backbone.js',
    icon: '/assets/icons/backbone.png'},
    {skill: 'ReactJS',
    icon: '/assets/icons/reactjs.png'},
    {skill: 'Git',
    icon: '/assets/icons/git.png'},
    {skill: 'Gulp',
    icon: '/assets/icons/gulp.png'},
    {skill: 'MySQL',
    icon: '/assets/icons/mysql.png'},
    {skill: 'Q.js',
    icon: '/assets/icons/noicon.png'},
    {skill: 'Chai',
    icon: '/assets/icons/chai.png'},
    {skill: 'Jasmine',
    icon: '/assets/icons/jasmine.png'},
    {skill: 'Oauth 2.0',
    icon: '/assets/icons/oauth2.png'}
  ];
  return {
    strong: strong,
    experienced: experienced
  }
})