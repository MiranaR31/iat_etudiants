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
        progressBar:  'Page <%= pagesMeta.number %> sur 12'
    });


    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser\'' 
                : 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser de répondre\''
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
	
    API.addQuestionsSet('likert5',{ //Likert
        inherit: 'basicSelect',
        answers: [
            {text:'Tout à fait d\'accord', value:5},
			{text:'Plutôt d\'accord', value:4},
			{text:'Ni d\'accord ni pas d\'accord', value:3},
			{text:'Plutôt pas d\'accord', value:2},
			{text:'Pas du tout d\'accord', value:1}
        ]
    });

	
    /**
	*Specific questions
	*/	
	//Carctéristiques démographiques
	API.addQuestionsSet('1',{
		inherit : 'basicSelect',
		name : 'licence',
		decline : false,
		stem : 'Vous êtes actuellement en :', 
		answers : [
			{text : 'L1', value: 1},
			{text : 'L2', value : 2},
			{text : 'L3', value : 3}
			]
	});
	
	API.addQuestionsSet('2',{
		inherit : 'basicSelect',
		name : 'genre',
		decline : false,
		stem : 'Quel est votre sexe à l\'état-civil ?',
		answers : [
			{text : 'Homme'},
			{text : 'Femme'},
				]
	});

	API.addQuestionsSet('3',{
	    inherit : 'basicDropdown',
	    name: 'nationalité',
		decline : false, 
	    stem: 'Quelle est votre nationalité ?',
	    answers: [
	        {text:'Afghanistan', value:1},
	        {text:'Afrique du Sud', value:2},
	        {text:'Albanie', value:3},
	        {text:'Algérie', value:4},
	        {text:'Allemagne', value:5},
	        {text:'Andorre', value:6},
	        {text:'Angola', value:7},
	        {text:'Arabie Saoudite', value:8},
	        {text:'Argentine', value:9},
	        {text:'Arménie', value:10},
	        {text:'Australie', value:11},
	        {text:'Autriche', value:12},
	        {text:'Azerbaïdjan', value:13},
	        {text:'Bahamas', value:14},
	        {text:'Bahreïn', value:15},
	        {text:'Bangladesh', value:16},
	        {text:'Belgique', value:17},
	        {text:'Bénin', value:18},
	        {text:'Biélorussie', value:19},
	        {text:'Bolivie', value:20},
	        {text:'Bosnie-Herzégovine', value:21},
	        {text:'Brésil', value:22},
	        {text:'Bulgarie', value:23},
	        {text:'Burkina Faso', value:24},
	        {text:'Burundi', value:25},
	        {text:'Cambodge', value:26},
	        {text:'Cameroun', value:27},
	        {text:'Canada', value:28},
	        {text:'Cap-Vert', value:29},
	        {text:'Chili', value:30},
	        {text:'Chine', value:31},
	        {text:'Chypre', value:32},
	        {text:'Colombie', value:33},
	        {text:'Comores', value:34},
	        {text:'Congo', value:35},
	        {text:'Corée du Nord', value:36},
	        {text:'Corée du Sud', value:37},
	        {text:'Costa Rica', value:38},
	        {text:'Côte d\'Ivoire', value:39},
	        {text:'Croatie', value:40},
	        {text:'Cuba', value:41},
	        {text:'Danemark', value:42},
	        {text:'Djibouti', value:43},
	        {text:'Égypte', value:44},
	        {text:'Émirats Arabes Unis', value:45},
	        {text:'Équateur', value:46},
	        {text:'Espagne', value:47},
	        {text:'Estonie', value:48},
	        {text:'États-Unis', value:49},
	        {text:'Éthiopie', value:50},
	        {text:'Finlande', value:51},
	        {text:'France', value:52},
	        {text:'Gabon', value:53},
	        {text:'Gambie', value:54},
	        {text:'Géorgie', value:55},
	        {text:'Ghana', value:56},
	        {text:'Grèce', value:57},
	        {text:'Guatemala', value:58},
	        {text:'Guinée', value:59},
	        {text:'Guinée équatoriale', value:60},
	        {text:'Guinée-Bissau', value:61},
	        {text:'Haïti', value:62},
	        {text:'Honduras', value:63},
	        {text:'Hongrie', value:64},
	        {text:'Inde', value:65},
	        {text:'Indonésie', value:66},
	        {text:'Irak', value:67},
	        {text:'Iran', value:68},
	        {text:'Irlande', value:69},
	        {text:'Islande', value:70},
	        {text:'Israël', value:71},
	        {text:'Italie', value:72},
	        {text:'Jamaïque', value:73},
	        {text:'Japon', value:74},
	        {text:'Jordanie', value:75},
	        {text:'Kazakhstan', value:76},
	        {text:'Kenya', value:77},
	        {text:'Koweït', value:78},
	        {text:'Laos', value:79},
	        {text:'Lettonie', value:80},
	        {text:'Liban', value:81},
	        {text:'Libéria', value:82},
	        {text:'Libye', value:83},
	        {text:'Lituanie', value:84},
	        {text:'Luxembourg', value:85},
	        {text:'Macédoine du Nord', value:86},
	        {text:'Madagascar', value:87},
	        {text:'Malaisie', value:88},
	        {text:'Malawi', value:89},
	        {text:'Mali', value:90},
	        {text:'Malte', value:91},
	        {text:'Maroc', value:92},
	        {text:'Maurice', value:93},
	        {text:'Mauritanie', value:94},
	        {text:'Mexique', value:95},
	        {text:'Moldavie', value:96},
	        {text:'Monaco', value:97},
	        {text:'Mongolie', value:98},
	        {text:'Monténégro', value:99},
	        {text:'Mozambique', value:100},
	        {text:'Namibie', value:101},
	        {text:'Népal', value:102},
	        {text:'Nicaragua', value:103},
	        {text:'Niger', value:104},
	        {text:'Nigéria', value:105},
	        {text:'Norvège', value:106},
	        {text:'Nouvelle-Zélande', value:107},
	        {text:'Oman', value:108},
	        {text:'Ouganda', value:109},
	        {text:'Pakistan', value:110},
	        {text:'Palestine', value:111},
	        {text:'Panama', value:112},
	        {text:'Paraguay', value:113},
	        {text:'Pays-Bas', value:114},
	        {text:'Pérou', value:115},
	        {text:'Philippines', value:116},
	        {text:'Pologne', value:117},
	        {text:'Portugal', value:118},
	        {text:'Qatar', value:119},
	        {text:'République Centrafricaine', value:120},
	        {text:'République Démocratique du Congo', value:121},
	        {text:'République Dominicaine', value:122},
	        {text:'République Tchèque', value:123},
	        {text:'Roumanie', value:124},
	        {text:'Royaume-Uni', value:125},
	        {text:'Russie', value:126},
	        {text:'Rwanda', value:127},
	        {text:'Sénégal', value:128},
	        {text:'Serbie', value:129},
	        {text:'Seychelles', value:130},
	        {text:'Sierra Leone', value:131},
	        {text:'Singapour', value:132},
	        {text:'Slovaquie', value:133},
	        {text:'Slovénie', value:134},
	        {text:'Somalie', value:135},
	        {text:'Soudan', value:136},
	        {text:'Soudan du Sud', value:137},
	        {text:'Sri Lanka', value:138},
	        {text:'Suède', value:139},
	        {text:'Suisse', value:140},
	        {text:'Suriname', value:141},
	        {text:'Syrie', value:142},
	        {text:'Taïwan', value:143},
	        {text:'Tanzanie', value:144},
	        {text:'Tchad', value:145},
	        {text:'Thaïlande', value:146},
	        {text:'Togo', value:147},
	        {text:'Trinité-et-Tobago', value:148},
	        {text:'Tunisie', value:149},
	        {text:'Turkménistan', value:150},
	        {text:'Turquie', value:151},
	        {text:'Ukraine', value:152},
	        {text:'Uruguay', value:153},
	        {text:'Venezuela', value:154},
	        {text:'Viêt Nam', value:155},
	        {text:'Yémen', value:156},
	        {text:'Zambie', value:157},
	        {text:'Zimbabwe', value:158},
	        {text:'Autre', value:999}
	    ]
	});
	
	API.addQuestionsSet('4',{
		inherit : 'basicText', 
		name : 'annee_naissance',
		stem : 'Quelle est votre année de naissance ?',
		decline : false,
		validator : 'number', 
		errorMsg : {
			required : 'Veuillez indiquer votre âge.',
			number : 'Veuillez entrer un nombre valide'
		}
	});

	API.addQuestionsSet('5',{
		inherit : 'basicSelect',
		name : 'lieu_naissance',
		decline: false, 
		stem : 'Où êtes-vous né ?',
		answers : [
			{text : 'En France', value:1},
			{text : 'A l\'étranger', value : 2}
			]
	});
	
	API.addQuestionsSet('6',{
		inherit : 'basicDropdown',
		name : 'annee_france_1',
		decline : false, 
		stem : 'A quel âge vous êtes-vous installés en France ? <br><i> Il s\'agit de votre installation en France même si elle est temporaire pour vos études </i>',
		answers : [
			{text : '0', value : 0},
			{text : '1', value : 1},
			{text : '2', value : 2},
			{text : '3', value : 3},
			{text : '4', value : 4},
			{text : '5', value : 5},
			{text : '6', value : 6},
			{text : '7', value : 7},
			{text : '8', value : 8},
			{text : '9', value : 9},
			{text : '10', value : 10},
			{text : '11', value : 11},
			{text : '12', value : 12},
			{text : '13', value : 13},
			{text : '14', value : 14},
			{text : '15', value : 15},
			{text : '16', value : 16},
			{text : '17', value : 17},
			{text : '18', value : 18},
			{text : '19', value : 19},
			{text : '20', value : 20},
			{text : '21', value : 21},
			{text : '22', value : 22},
			{text : '23', value : 23},
			{text : '24', value : 24},
			{text : '25', value : 25},
			{text : '26', value : 26},
			{text : '27', value : 27},
			{text : '28', value : 28},
			{text : '29', value : 29},
			{text : '30', value : 30},
			{text : 'Ne sait pas', value : 999}
			]
	});

	API.addQuestionsSet('7',{
		inherit : 'basicSelect', 
		name: 'annee_france_2',
		decline: false, 
		stem : 'A quel âge vous êtes-vous installés en France ? <br><i> Il s\'agit de votre installation en France même si elle est temporaire pour vos études </i>',
		answers : [
			{text : 'Avant 5 ans', value: 1},
			{text : 'Entre 5 et 10 ans', value: 2},
			{text : 'Entre 11 et 15 ans', value: 3},
			{text : 'Entre 15 et 18 ans', value: 4},
			{text : 'Après 18 ans', value: 5}
			]
	});

	API.addQuestionsSet('8',{
		inherit : 'basicSelect',
		name : 'langue_fr',
		decline : false, 
		stem : 'Parliez-vous français au sein de votre famille durant votre enfance ?',
		answers : [
			{text : 'Oui', value: 1},
			{text : 'Non', value: 2}
			]
	});

	API.addQuestionsSet('9',{
		inherit : 'basicSelect',
		name : 'diplome_pere',
		decline : false, 
		stem : 'Quel est le plus haut diplôme détenu par votre père ?',
		answers : [
			{text : 'Aucun diplôme', value : 1},
			{text : 'Diplôme inférieur au Baccalauréat (brevet des collèges, BEPC, CAP, BEP ou diplôme étranger de niveau équivalent)',value: 2},
			{text : 'Baccalauréat général, technologique ou professionnel ou diplôme étranger de niveau équivalent',value:3},
			{text : 'Diplôme de niveau BAC+2 (DEUG,BTS ou équivalent)', value: 4},
			{text : 'Diplôme de niveau BAC+3 ou 4 (Licence, Maîtrise, Master 1 ou équivalent)', value:5},
			{text : 'Diplôme de niveau BAC+5 et plus (DEA, DESS, Master 2, Diplôme d\'une grande école, Doctorat', value : 6},
			{text : 'Ne sait pas', value: 8}
			]
	});

	API.addQuestionsSet('10',{
		inherit : 'basicSelect',
		name : 'diplome_mere',
		decline : false, 
		stem : 'Quel est le plus haut diplôme détenu par votre mère ?',
		answers : [
			{text : 'Aucun diplôme', value : 1},
			{text : 'Diplôme inférieur au Baccalauréat (brevet des collèges, BEPC, CAP, BEP ou diplôme étranger de niveau équivalent)',value: 2},
			{text : 'Baccalauréat général, technologique ou professionnel ou diplôme étranger de niveau équivalent',value:3},
			{text : 'Diplôme de niveau BAC+2 (DEUG,BTS ou équivalent)', value: 4},
			{text : 'Diplôme de niveau BAC+3 ou 4 (Licence, Maîtrise, Master 1 ou équivalent)', value:5},
			{text : 'Diplôme de niveau BAC+5 et plus (DEA, DESS, Master 2, Diplôme d\'une grande école, Doctorat', value : 6},
			{text : 'Ne sait pas', value: 8}
			]
	});

	API.addQuestionsSet('11',{
		inherit : 'basicSelect',
		name : 'travail_pere',
		decline : false, 
		stem : 'Quelle est la situation actuelle ou la dernière situation de votre père ?',
		answers : [
			{text : 'Salarié', value : 1},
			{text : 'A son compte ou indépendant', value : 2},
			{text : 'Au chômage (inscrit ou non à France Travail', value : 3},
			{text : 'Homme au foyer', value : 4},
			{text : 'Retraité ou retiré des affaires ou en préretraite', value : 5},
			{text : 'Autre', value : 8}
			]
	});

	API.addQuestionsSet('12',{
		inherit : 'basicSelect',
		name : 'travail_mere',
		decline : false, 
		stem : 'Quelle est la situation actuelle ou la dernière situation de votre mère ?',
		answers : [
			{text : 'Salariée', value : 1},
			{text : 'A son compte ou indépendant', value : 2},
			{text : 'Au chômage (inscrit ou non à France Travail', value : 3},
			{text : 'Femme au foyer', value : 4},
			{text : 'Retraitée ou retirée des affaires ou en préretraite', value : 5},
			{text : 'Autre', value : 8}
			]
	});
			
	//Parcours scolaire 

	API.addQuestionsSet('13',{
		inherit : 'basicSelect',
		name : 'bac',
		decline : false, 
		stem : 'Quel baccalauréat avez-vous passé ?',
		answers : [
			{text : 'Général', value : 1},
			{text : 'Professionnel', value : 2},
			{text : 'Technologique', value : 3}
			]
	});

	API.addQuestionsSet('14', {
		inherit : 'basicSelect', 
		name : 'bac_fr',
		decline : false, 
		stem : 'S\'agit-il d\'un baccalauréat d\'un établissement français (y compris à l\'étranger)',
		answers :[
			{text : 'Oui', value : 1},
			{text : 'Non', value : 2}
			]
	});

	API.addQuestionsSet('15', {
		inherit : 'basicText',
		name : 'bac_annee',
		decline : false, 
		stem : 'En quelle année avez-vous passé le baccalauréat ?',
		validator: 'number'
	});

	API.addQuestionsSet('16',{
		inherit : 'basicSelect',
		name : 'bac_filiere',
		decline: false, 
		stem : 'Quelle était la série de votre baccalauréat général ?',
		answers : [
			{text : 'Série S (Scientifique)', value : 1},
			{text : 'Série ES (Economique et Sociale)', value : 2},
			{text : 'Série L (Littéraire)', value : 3},
			{text : 'Autre', value : 4}
			]
	});

	API.addQuestionsSet('17',{
		inherit : 'basicMulti',
		name : 'bac_specialité_term',
		decline : false, 
		stem : 'Avez-vous suivi les enseignements suivants en terminale ? <i>Plusieurs réponses possibles</i>',
		answers : [
			{text : 'Enseignement de spécialité Mathématiques', value : 1},
			{text : 'Enseignement de spécialité Sciences économiques et sociales', value : 2},
			{text : 'Option Mathématiques Expertes', value : 3},
			{text : 'Option Mathématiques Complémentaires', value : 4},
			{text : 'Aucun des enseignements mentionnés', value : 5}
			]
	});

	API.addQuestionsSet('18',{
		inherit : 'basicSelect', 
		name : 'math_premiere', 
		decline : false, 
		stem : 'Avez-vous suivi l\'enseignement de spécialité de Mathématiques en Première ?',
		answers : [
			{text : 'Oui', value : 1},
			{text : 'Non', value : 2}
			]
	});

	API.addQuestionsSet('19',{
		inherit : 'basicSelect', 
		name : 'bac_mention',
		decline : false, 
		stem : 'Quelle mention avez-vous eu au baccalauréat ?',
		answers : [
			{text : 'Mention passable / Aucune mention (moyenne entre 10 et 12)', value : 1},
			{text : 'Mention assez bien (moyenne entre 12 et 14)', value : 2},
			{text : 'Mention bien (moyenne entre 14 et 16)', value : 3},
			{text : 'Mention très bien (moyenne entre 16 et 18)', value : 4}
			]
	});

	//environnement d'étude 
	API.addQuestionsSet('20',{
		inherit : 'basicMulti',
		name : 'environnement', 
		decline : false, 
		stem : 'Veuillez cocher les phrases qui correspondent à votre situation', 
		answers : [
			{text : 'Je dispose d\'un ordinateur portable.', value : 1},
			{text : 'J\'ai un espace de travail personnel à mon domicile.', value : 2},
			{text : 'Je dispose d\'un emploi de plus de 2 heures par semaine en parallèle de mes études.', value : 3},
			{text : 'J\'habite chez mes parents.', value : 4},
			{text : 'J\'habite chez d\'autres membres de ma famille.', value : 5},
			{text : 'Je viens à l\'université en transport en commun.', value : 6}
			]
	});

	API.addQuestionsSet('21',{
		inherit : 'basicSelect', 
		name : 'trajet',
		stem : 'Combien de temps en moyenne mettez-vous pour venir à l\'université ?',
		answers : [
			{text : 'Moins de 30 minutes', value : 1},
			{text : 'Entre 30 et 60 minutes', value : 2},
			{text : 'Plus d\'une heure', value : 3}
			]
	});

	API.addQuestionsSet('22',{
		inherit : 'basicSelect', 
		name : 'suite_licence', 
		stem : 'Souhaitez-vous poursuivre vos études jusqu\'en L3 Economie et Gestion ?',
		answers : [
			{text : 'Oui', value : 1},
			{text : 'Non', value : 2},
			{text : 'Ne sait pas', value : 3}
			]
	});

	API.addQuestionsSet('23',{
		inherit : 'basicSelect', 
		name : 'suite_etudes',
		stem : 'Qu\'envisagez-vous après votre licence ?', 
		answers : [
			{text : 'Continuer dans le même domaine (économie ou gestion)', value : 1},
			{text : 'Continuer mes études dans un autre domaine', value : 2},
			{text : 'Arrêter mes études', value : 3},
			{text : 'Ne sait pas', value : 8}
			]
	});

	//stéréotypes

	API.addQuestionsSet('24',{
		inherit : 'basicSelect', 
		name : 'stereotypes', 
		stem : 'Pensez-vous appartenir à un groupe envers lequel certains enseignants ont des stéréotypes ?',
		answers : [
			{text : 'Oui', value : 1}, 
			{text : 'Non', value : 2},
			{text : 'Ne sait pas', value : 8}
			]
	});

	


    API.addSequence([
		//demographie
		{inherit:'basicPage',questions:{inherit:'0'}},
		{inherit:'basicPage',questions:{inherit:'1'}},
		{inherit:'basicPage',questions:{inherit:'2'}},
		{inherit:'basicPage',questions:{inherit:'3'}},
		{inherit:'basicPage',questions:{inherit:'4'}},
		{inherit:'basicPage',
		 condition : '<%= current.questions.lieu_naissance == 1 %>',
		 questions:{inherit:'6'}},
		{inherit:'basicPage',
		 condition : '<%= current.questions.lieu_naissance == 2) %>',
		 questions:{inherit:'5.1'}},
		{inherit:'basicPage',
		 condition : '<%= current.questions.annee_france_1 == 1) %>',
		 questions:{inherit:'5.3'}},
		{inherit:'basicPage',
		 condition : '<%= current.questions.annee_france_1 == 2) %>',
		 questions:{inherit:'5.2'}},
		{inherit:'basicPage',questions:{inherit:'5.3'}},
		{inherit:'basicPage',questions:{inherit:'6'}},
		{inherit:'basicPage',questions:{inherit:'7'}},
		{inherit:'basicPage',questions:{inherit:'8'}},
		{inherit:'basicPage',questions:{inherit:'9'}},
		{inherit:'basicPage',questions:{inherit:'10'}},
		{inherit:'basicPage',questions:{inherit:'11'}},
		{inherit:'basicPage',questions:{inherit:'12'}},
		{inherit:'basicPage',
		 condition:'<%= parseInt(current.questions.bac_annee) < 2021 %>',
		 questions:{inherit:
    ]);


    return API.script;
});
