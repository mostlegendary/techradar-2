//This is the title for your window tab, and your Radar
document.title = "Organisational Design Radar June 2015";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                  //,{'r':500,'name':'Items to be placed'}
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
    { "quadrant": "Culture",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {name:"Adopt Items go here", "pc":{"r": 60,"t":135},"movement":"c"},
            {name:"Trail Items go here", "pc":{"r": 160,"t":135},"movement":"c"},
            {name:"Assess Items go here", "pc":{"r": 260,"t":135},"movement":"c"},
            {name:"All sitting here for now", "pc":{"r": 330,"t":95},"movement":"c"},
            {name:"Heaven and Hell Exercise", "pc":{"r": 330,"t":100},"movement":"c"},
            {name:"Focussing Questions", "pc":{"r": 330,"t":105},"movement":"c"},
            {name:"Guess the Purpose Activities", "pc":{"r": 330,"t":110},"movement":"c"},
            {name:"Exploration Wall, Describing the Case for Change", "pc":{"r": 330,"t":115},"movement":"c"},
            {name:"Holacracy", "pc":{"r": 330,"t":120},"movement":"c"}


            
        ]
    },
    { "quadrant": "Strategy",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

            {name:"Adopt Items go here", "pc":{"r": 60,"t":35},"movement":"c"},
            {name:"Trail Items go here", "pc":{"r": 160,"t":35},"movement":"c"},
            {name:"Assess Items go here", "pc":{"r": 260,"t":35},"movement":"c"},
            {name:"All sitting here for now", "pc":{"r": 360,"t":5},"movement":"c"},
            {name:"Culture Strategy and Practice", "pc":{"r": 360,"t":10},"movement":"c"},
            {name:"Product Ideation Workshop", "pc":{"r": 360,"t":15},"movement":"c"},
            {name:"Lean Canvas", "pc":{"r": 360,"t":20},"movement":"c"},
            {name:"Innovation Workshop", "pc":{"r": 360,"t":25},"movement":"c"}
            
  ]
    },
    { "quadrant": "Practices",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {name:"Adopt Items go here", "pc":{"r": 60,"t":230},"movement":"c"},
            {name:"Trail Items go here", "pc":{"r": 160,"t":230},"movement":"c"},
            {name:"Assess Items go here", "pc":{"r": 260,"t":230},"movement":"c"},
            {name:"All sitting here for now", "pc":{"r": 330,"t":185},"movement":"c"},
            {name:"Measure Impact of Work", "pc":{"r": 330,"t":190},"movement":"c"},
            {name:"Funding Visibility", "pc":{"r": 330,"t":195},"movement":"c"},
            {name:"Implement a Stop Work Meeting", "pc":{"r": 330,"t":200},"movement":"c"},
            {name:"WIP limits based on minimum skillset required", "pc":{"r": 330,"t":205},"movement":"c"},
            {name:"Apprentice Model", "pc":{"r": 330,"t":210},"movement":"c"},
            {name:"Feedback Loops", "pc":{"r": 330,"t":215},"movement":"c"},
            {name:"Reduce Size of Work", "pc":{"r": 330,"t":220},"movement":"c"},
            {name:"Rolling Wave Planning", "pc":{"r": 330,"t":225},"movement":"c"},
            {name:"Structure Teams to Match Flow of Work", "pc":{"r": 330,"t":230},"movement":"c"},
            {name:"Teams Run Experiments", "pc":{"r": 330,"t":235},"movement":"c"},
            {name:"Make the Work Visible", "pc":{"r": 330,"t":240},"movement":"c"},
            {name:"Identify BAU", "pc":{"r": 330,"t":245},"movement":"c"},
            {name:"Consolidated Prioritised Backlog", "pc":{"r": 330,"t":250},"movement":"c"},
            {name:"Prioritise Based on Empirical Data", "pc":{"r": 330,"t":255},"movement":"c"},
            {name:"Centralised Agile Change Teams", "pc":{"r": 330,"t":260},"movement":"c"},
            {name:"Seven Levels of Delegation", "pc":{"r": 330,"t":265},"movement":"c"},
            {name:"Starter Agile Framework", "pc":{"r": 360,"t":185},"movement":"c"},
            {name:"Estimation of Effort in Planning", "pc":{"r": 360,"t":190},"movement":"c"},
            {name:"Agile Fluency Model", "pc":{"r": 360,"t":195},"movement":"c"},
            {name:"A3 System of Work", "pc":{"r": 360,"t":200},"movement":"c"},
            {name:"Changing Norms", "pc":{"r": 360,"t":205},"movement":"c"},
            {name:"4 Grouping + Horizon Norms", "pc":{"r": 360,"t":210},"movement":"c"}
            

        ]
    },
    { "quadrant": "Tools & Techniques",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'Adopt Items Go Here', pc: { r: 60, t: 310 },  movement: 'c' },
             
            { name: 'Trail Items Go Here', pc: { r: 160, t: 310 }, movement: 'c'}, 

            { name: 'Assess Items Go Here', pc: { r: 260, t: 310 }, movement: 'c'},     
           
            { name: 'All sitting here for now', pc: { r: 330, t: 275 }, movement: 'c'}, 
            { name: 'OOBEYA', pc: { r: 330, t: 280 },  movement: 'c' },
            { name: 'Lean Canvas', pc: { r: 330, t: 285 },  movement: 'c' },
            { name: 'Value Proposition Canvas', pc: { r: 330, t: 290 },  movement: 'c' },
            { name: 'WSJF', pc: { r: 330, t: 295},              movement: 'c'}, 
            { name: 'Jobs to be done', pc :{r :330, t :300}, movement:'c' ,  domain: 'template' },
            { name: 'Portfolio Visualisation', pc: { r: 330, t: 305},              movement: 'c'}, 
            { name: 'Backlog of Outcomes', pc: { r: 330, t: 310},              movement: 'c'}, 
            { name: 'Improvement Kata', pc: { r: 330, t: 315},              movement: 'c'}, 
            { name: 'One Metric that Matters', pc: { r: 330, t: 320},              movement: 'c'}, 
            { name: 'Cone of Uncertainty', pc: { r: 330, t: 325},              movement: 'c'}, 
            { name: 'A3', pc: { r: 330, t: 330},              movement: 'c'}, 
            { name: 'Sankey Diagram', pc: { r: 330, t: 335},              movement: 'c'}, 
            { name: 'Funding Circle Diagram', pc: { r: 330, t: 340},              movement: 'c'}, 
            { name: 'MVP for Success', pc: { r: 330, t: 345},              movement: 'c'}, 
            { name: 'Value Cost Graph', pc: { r: 330, t: 350},              movement: 'c'}, 
            { name: 'ToC Thinking tools', pc: { r: 330, t: 355},              movement: 'c'}, 
            { name: 'Enterprise Portfolio Visibility', pc: { r: 360, t: 275},              movement: 'c'},
            { name: 'Wall of Work', pc: { r: 360, t: 280},              movement: 'c'}, 
            { name: '5 Disfunctions of Team Workshop', pc: { r: 360, t: 285},              movement: 'c'},
            { name: 'Value Chain Map', pc: { r: 360, t: 290},              movement: 'c'},  
            { name: 'Organisation Tree', pc: { r: 360, t: 295},              movement: 'c'},
            { name: 'SIPOC', pc: { r: 360, t: 300},              movement: 'c'},  
            { name: 'Root Cause Analysis', pc: { r: 360, t: 305},              movement: 'c'},
            { name: 'Follow the Work', pc: { r: 360, t: 310},              movement: 'c'},
            { name: 'Benefits Thesaurus', pc: { r: 360, t: 315},              movement: 'c'},
            { name: 'Purpose Workshop', pc: { r: 360, t: 320},              movement: 'c'},
            { name: 'Organisation Tree', pc: { r: 360, t: 325},              movement: 'c'},
            { name: 'Microservices', pc: { r: 360, t: 330},              movement: 'c'},
            { name: 'Continuous Deliver', pc: { r: 360, t: 335},              movement: 'c'},
            { name: 'Digital Innovation Lab', pc: { r: 360, t: 295},              movement: 'c'}

        ]
    }
];
