define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.3/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : 'Immigrant People', //Will appear in the data.
            title : {
                media : {word : 'Immigrant People'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Youssef'},
                {word: 'Mohamed'},
                {word: 'Gheorghe'},
                {word: 'Alejandro'},
                {word: 'Li Yi'},                 
                {word: 'Pascual'}     
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : 'Native People', //Will appear in the data.
            title : {
                media : {word : 'Native People'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Marco'},
                {word: 'Simone'},
                {word: 'Daniele'},
                {word: 'Francesco'},
                {word: 'Lorenzo'},                 
                {word: 'Mattia'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Bad words',
            title : {
                media : {word : 'Bad words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word : 'Disrespectful'},
                {word : 'Slow'},
                {word : 'Incapable'},
                {word : 'Boisterous'},
                {word : 'Lazy'},
                {word : 'Distracted'},
                {word : 'Demotivated'},
                {word : 'Insufficient'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good words',
            title : {
                media : {word : 'Good words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word : 'Prepared'},
                {word : 'Intelligent'},
                {word : 'Capable'},
                {word : 'Studious'},
                {word : 'Able'},
                {word : 'Precise'},
                {word : 'Willing'},
                {word : 'Respectful'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },

        isTouch : global.$isTouch
    });
});

