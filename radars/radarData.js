//This is the title for your window tab, and your Radar
document.title = "PI Competency Radar (April 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':150,'name':'Core'}
                  ,{'r':300,'name':'Explore'}
                  ,{'r':450,'name':'Deprecate'}
                  //,{'r':600,'name':'Hold'}
                 // ,{'r':750,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            { name: 'Git flow / Pull Requests ^', pc: { r: 230, t: 133 }, movement: 'c' },
            {"name":"Incremental data warehousing", "pc":{"r":250,"t":165},"movement":"c"},    
            {"name":"Events for messages - CQRS", "pc":{"r":225,"t":120},"movement":"c"},
            {"name":"Measure Pipeline disruptions", "pc":{"r":280,"t":110},"movement":"c"}, 
            {"name":"Continuous Experimentation", "pc":{"r":230,"t":110},"movement":"c"},
            { name: 'Reduce iRules dependence ^', pc: { r: 280, t: 133 }, movement: 'c' },
            {"name":"SaaS for non-core systems", "pc":{"r":170,"t":150},"movement":"c"},   
            {"name":"Pair Programming", "pc":{"r":130,"t":170},"movement":"c"}, 
            {"name":"iOS Accessibility", "pc":{"r":170,"t":110},"movement":"c"},
            {"name":"Single Page App", "pc":{"r":150,"t":95},"movement":"c", "url":"http://www.google.com"},
            {"name":"iOS Adaptivity", "pc":{"r":180,"t":105},"movement":"c"},   
            {"name":"Build Pipelines", "pc":{"r":180,"t":100},"movement":"c"},   
            {"name":"Data Informed Decion Making", "pc":{"r":130,"t":110},"movement":"c"},
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

{ name: 'Docker', pc: { r: 170, t: 19 }, movement: 't' },
  { name: 'bind',    pc: { r: 150, t: 69 },    movement: 'c' },
  { name: 'Appium',    pc: { r: 110, t: 70 },    movement: 'c',    domain: 'mobile, front-end' }, 
 { name: 'Android Studio',    pc: { r: 180, t: 66 },    movement: 'c',    domain: 'mobile, dev' },
  { name: 'Responsive Android',    pc: { r: 150, t: 14 },    movement: 'c' },
  { name: 'AutoLayout - iOS',    pc: { r: 180, t: 55 },    movement: 'c',    domain: '' },
  { name: 'Kiwi - iOS unit test',    pc: { r: 120, t: 14 },    movement: 'c',    domain: '' },
  { name: 'Kafka',    pc: { r: 12, t: 25 },    movement: 'c',    domain: 'back-end' },
  { name: 'ELK',    pc: { r: 30, t: 72 },    movement: 'c',    domain: 'back-end' },
  { name: 'Liquibase',    pc: { r: 80, t: 76 },    movement: 'c' },
  { name: 'haproxy',    pc: { r: 80, t: 46 },    movement: 'c' },
  { name: 'mongoDB',    pc: { r: 330, t: 5 },    movement: 'c' }, 
  { name: 'Subversion',    pc: { r: 330, t: 18 },    movement: 'c' }
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"Azure", "pc":{"r":290,"t":265},"movement":"c"},   
            { name: 'Mesos',              pc: { r: 260, t: 265 },              movement: 't' },
            { name: 'Marathon',              pc: { r: 240, t: 268 },              movement: 't' },
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            { name: 'Mustache/Handlebars template',   pc: { r: 50, t: 298 },              movement: 'c',              domain: 'template' },
            { name: 'Spring ^', pc: { r: 360, t: 330 },  movement: 'c' },
            {"name":"Web Objects", "pc":{"r":390,"t":290},"movement":"c"},
            {"name":"ASP Classic", "pc":{"r":375,"t":330},"movement":"c"},
            {"name":"Java 6 and earlier", "pc":{"r":390,"t":350},"movement":"c"}
        ]
    }
];
