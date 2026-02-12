define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: false,
        declineText: isTouch ? 'Refuser' : 'Refuser de répondre', 
        autoFocus:true, 
		submitText: 'Suivant'
    });


    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'false',
        required : true, 	
        errorMsg: {
            required: isTouch 
                ? 'Veuillez sélectionner une réponse.' 
                : 'Veuillez sélectionner une réponse.'
        },
        autoSubmit:'false',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
        helpText: 'Astuce : Vous pouvez double-cliquer sur votre réponse pour passer à la question suivante.',
		helpText: 'Attention, vous ne pourrez pas revenir sur votre réponse précédente.'
	});
    API.addQuestionsSet('basicSelect',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectOne'
    });

	API.addQuestionsSet('basicMulti',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectMulti'
    });
	
    API.addQuestionsSet('basicDropdown',{ //Menu déroulant 
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });

	API.addQuestionsSet('basicText',{
		inherit : 'basicQ',
		type : 'text',
	});


	
    //Specific questions
	
	//Parcours scolaire 

	API.addQuestionsSet('13',{
		inherit : 'basicSelect',
		name : 'bac',
		stem : 'Quel baccalauréat avez-vous passé ?',
		answers : [
			{text : 'Général', value:1},
			{text : 'Professionnel', value:2},
			{text : 'Technologique', value:3}
			]
	});

	API.addQuestionsSet('14', {
		inherit : 'basicSelect', 
		name : 'bac_fr',
		stem : 'S\'agit-il d\'un baccalauréat d\'un établissement français (y compris à l\'étranger)',
		answers :[
			{text : 'Oui', value:1},
			{text : 'Non', value:2}
			]
	});

	API.addQuestionsSet('15', {
		inherit : 'basicText',
		type: 'textNumber',
		name : 'bac_annee',
		stem : 'En quelle année avez-vous passé le baccalauréat ?',
		min: 2000,
		max: 2025,
		errorMsg : {
			min: 'Veuillez indiquer une année de baccalauréat valide.'
		},
		validator: {
			min: {compare: 'current.questions.annee_naissance.response', operator: 'greaterThan',
			max: 2025
			}
		}
	});

	API.addQuestionsSet('16',{
		inherit : 'basicSelect',
		name : 'bac_filiere',
		stem : 'Quelle était la série de votre baccalauréat général ?',
		answers : [
			{text : 'Série S (Scientifique)', value:1},
			{text : 'Série ES (Economique et Sociale)', value:2},
			{text : 'Série L (Littéraire)', value:3},
			{text : 'Autre', value:4}
			]
	});

	API.addQuestionsSet('17',{
		inherit : 'basicMulti',
		name : 'bac_specialité_term',
		stem : 'Avez-vous suivi les enseignements suivants en terminale ? <i>Plusieurs réponses possibles</i>',
		answers : [
			{text : 'Enseignement de spécialité Mathématiques', value:1},
			{text : 'Enseignement de spécialité Sciences économiques et sociales', value:2},
			{text : 'Option Mathématiques Expertes', value:3},
			{text : 'Option Mathématiques Complémentaires', value:4},
			{text : 'Aucun des enseignements mentionnés', value:5}
			]
	});

	API.addQuestionsSet('18',{
		inherit : 'basicSelect', 
		name : 'math_premiere', 
		stem : 'Avez-vous suivi l\'enseignement de spécialité de Mathématiques en Première ?',
		answers : [
			{text : 'Oui', value:1},
			{text : 'Non', value:2}
			]
	});

	API.addQuestionsSet('19',{
		inherit : 'basicSelect', 
		name : 'bac_mention',
		stem : 'Quelle mention avez-vous eu au baccalauréat ?',
		answers : [
			{text : 'Mention passable / Aucune mention (moyenne entre 10 et 12)', value:1},
			{text : 'Mention assez bien (moyenne entre 12 et 14)', value:2},
			{text : 'Mention bien (moyenne entre 14 et 16)', value:3},
			{text : 'Mention très bien (moyenne égale ou supérieure à 16)', value:4}
			]
	});

	//environnement d'étude 
	API.addQuestionsSet('20',{
		inherit : 'basicMulti',
		name : 'environnement', 
		stem : 'Veuillez cocher les phrases qui correspondent à votre situation. <i>Plusieurs réponses possibles</i>', 
		answers : [
			{text : 'Je dispose d\'un ordinateur portable.', value:1},
			{text : 'J\'ai un espace de travail personnel à mon domicile.', value:2},
			{text : 'Je dispose d\'un emploi de plus de 2 heures par semaine en parallèle de mes études.', value:3},
			{text : 'J\'habite chez mes parents.', value:4},
			{text : 'J\'habite chez d\'autres membres de ma famille.', value:5},
			{text : 'Je viens à l\'université en transport en commun.', value:6}
			]
	});

	API.addQuestionsSet('21',{
		inherit : 'basicSelect', 
		name : 'trajet',
		stem : 'Combien de temps en moyenne mettez-vous pour venir à l\'université ?',
		answers : [
			{text : 'Moins de 30 minutes', value:1},
			{text : 'Entre 30 et 60 minutes', value:2},
			{text : 'Plus d\'une heure', value:3}
			]
	});

	API.addQuestionsSet('22',{
		inherit : 'basicSelect', 
		name : 'suite_licence', 
		stem : 'Souhaitez-vous poursuivre vos études jusqu\'en L3 Economie et Gestion ?',
		answers : [
			{text : 'Oui', value:1},
			{text : 'Non', value:2},
			{text : 'Ne sait pas', value:3}
			]
	});

	API.addQuestionsSet('23',{
		inherit : 'basicSelect', 
		name : 'suite_etudes',
		stem : 'Qu\'envisagez-vous après votre licence ?', 
		answers : [
			{text : 'Continuer dans le même domaine (économie ou gestion)', value:1},
			{text : 'Continuer mes études dans un autre domaine', value:2},
			{text : 'Arrêter mes études', value:3},
			{text : 'Ne sait pas', value:8}
			]
	});



//séquence
	API.addSequence([
		//parcours scolaire 
		
		{inherit: 'basicPage', questions: 
			{type: 'info',
			stem: 'Nous allons maintenant vous poser des questions sur votre parcours scolaire, à commencer par votre baccalauréat.'
			}
		},
		{inherit:'basicPage', progressBar: '1/9', questions:{inherit:'13'}},
		
		{mixer: 'branch',
			conditions: [
				{compare: 'current.questions.bac.response', to: 1}
			],
			data: [
				{inherit: 'basicPage', progressBar: '2/9', questions: {inherit: '14'}},
				{mixer: 'branch',
					conditions: [
						{compare: 'current.questions.bac_fr.response', to: 1}
					],
					data: [
						{inherit: 'basicPage', progressBar: '3/9', questions: {inherit: '15'}},
						{mixer: 'branch', 
							conditions: [
								{compare: 'current.questions.bac_annee.response', to: 2021, operator: 'lesserThan'}
							],
							data: [
								{inherit: 'basicPage', progressBar: '4/9', questions: {inherit: '16'}},
							],
							elseData: [
								{inherit: 'basicPage', progressBar: '4/9', questions: {inherit: '17'}},
								{mixer: 'branch',
									conditions: [
										{compare: 'current.questions.bac_specialité_term.response', to: 1, negate: false}
									],
									data: [
										{inherit: 'basicPage', progressBar: '5/9', questions: {inherit: '18'}}
									]
								}
							],
						}
					],
					elseData: [
						{inherit: 'basicPage', progressBar: '3/9', questions: {inherit: '16'}}
					]
				}
			],
			elseData: [
				{inherit: 'basicPage', progressBar: '2/9', questions:{inherit: '14'}}
			]
		},
	
		{inherit:'basicPage', progressBar: '6/9', questions:{inherit:'19'}},
		{inherit: 'basicPage', type: 'info', description: 'Nous allons maintenant vous poser des questions sur votre environnement d’étude actuellement à votre domicile'},
		{inherit: 'basicPage',progressBar: '7/9', questions:{inherit:'20'}},
		{inherit: 'basicPage', progressBar: '8/9', questions:{inherit:'21'}},
		{mixer: 'branch',
			conditions: [{compare: 'current.questions.licence.response', to:1}],
			data: [{inherit: 'basicPage', progressBar: '9/9', questions:{inherit:'22'}}],
			elseData: [{inherit: 'basicPage', progressBar: '9/9', questions:{inherit:'23'}}]
		},
		
	]);
	
	return API.script;
});
		