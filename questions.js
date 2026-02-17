define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
	API.addPagesSet('basicPage',{
		noSubmit:false, //Change to true if you don't want to show the submit button.
		header: 'Questionnaire',
		autoFocus:true, 
		submitText: 'Suivant',
		decline: true,
		declineText: 'Ne pas répondre',
		prev: true,
		prevText: 'Précédent'
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
        numericValues:'true'
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

	API.addQuestionsSet('basicGrid',{
		inherit: 'basicQ',
		type: 'grid',
		rowStemHide: true,
		checkboxType : 'colorMark',
		helpText: false,
		columns: [
			{type:'text', textProperty: 'left', css: {width:'15%'}},
			{stem: '1', css: {width: '10%'}},
			{stem: '2', css: {width: '10%'}},
			{stem: '3', css: {width: '10%'}},
			{stem: '4', css: {width: '10%'}},
			{stem: '5', css: {width: '10%'}},
			{type:'text', textProperty: 'right', css: {width:'15%'}},
			{stem: 'Non concerné', value: 8, css: {width: '10%'}}
		]
	}),

	API.addQuestionsSet('ressenti1',{
		inherit: 'basicGrid', 
		required: true,
		stem:'<b>1 - En arrivant au CC2 de cette matière, vous sentiez-vous en confiance pour réussir ?</b> <br><i>Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>', name:'ressenti1',
		rows: [{left: 'Très peu en confiance', right: 'Tout à fait en confiance'}
		]
		}
	);


	API.addQuestionsSet('ressenti2',{
		inherit: 'basicGrid',
		required: true,
		stem: '<b>2 - Comment avez-vous perçu la façon dont le chargé de TD de cette matière s\'adressait à vous et répondait à vos questions ?</b> <br><i>Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>', name:'ressenti2',
		rows: [{left: 'Désagréable et dévalorisante', right: 'Très agréable et valorisante'}
		]
	});

	API.addQuestionsSet('ressenti3',{	
		inherit: 'basicGrid', 
		required: true,
		stem: '<b>3 - Personnellement, pensez-vous avoir été traité différemment des autres étudiants dans cette matière, par exemple dans la façon dont l\'enseignant s\'adressait à vous, interagissait avec vous ou répondait à vos questions ?</b> <br><i>Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>', name:'ressenti3',
		rows: [{left: 'Moins bien traité', right: 'Mieux traité'}]
		}
	);

	API.addQuestionsSet('ressenti4',{
		inherit: 'basicMulti', 
		decline: false,
		stem: '<b>4 - D\'après vous, ces traitements différents dans ce TD pouvaient-ils être liés à ces différents éléments ?</b><br><i>Plusieurs réponses possibles.</i>',
		answers: [
			{text: 'Votre sexe (le fait que vous soyez un homme ou une femme)', value:1},
			{text: 'Votre état de santé ou un handicap', value:2},
			{text: 'Votre couleur de peau', value:3},
			{text: 'Vos origines ou votre nationalité', value:4},
			{text: 'Votre religion', value:5},
			{text: 'Votre âge', value:6},
			{text: 'Autre', value:7},
			{text: 'Ne souhaite pas répondre / Ne sait pas', value:8},
			{text: 'Non concerné', value:9}
			]
	});


    //Socio-demo

    API.addQuestionsSet('intro1',{
        inherit: 'basicText',
        name: 'student_nom',
        stem: '<b>Veuillez indiquer :</b> <br> <br> Votre nom',
    })

    API.addQuestionsSet('intro2',{
        inherit: 'basicText',
        name: 'student_prenom',
        stem: 'Votre prénom',
    })

    API.addQuestionsSet('intro3',{
        inherit: 'basicText',
        type : 'textNumber',
        name: 'student_ID',
		minlength: 6,
		maxlength: 8,
        stem: 'Votre numéro étudiant'
    })

    API.addQuestionsSet('1',{
		inherit : 'basicSelect',
		name : 'licence',
		decline : false,
		stem : 'Vous êtes actuellement en :', 
		answers : [
			{text : 'L1', value:1},
			{text : 'L2', value:2},
			{text : 'L3', value:3}
			]
	});
	
	API.addQuestionsSet('2',{
		inherit : 'basicSelect',
		name : 'genre',
		stem : 'Quel est votre sexe à l\'état-civil ?',
		answers : [
			{text : 'Homme', value:1},
			{text : 'Femme', value:2},
				]
	});

	API.addQuestionsSet('3',{ //ajouter plusieurs nationalités possibles 
	    inherit : 'basicDropdown',
	    name: 'nationalité1',
	    stem: '<b>Quelle est votre nationalité ?</b> <i>Si vous avez plusieurs nationalités, sélectionnez plusieurs réponses.</i> <br> <br> Nationalité 1',
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

    API.addQuestionsSet('3bis',{ //ajouter plusieurs nationalités possibles 
	    inherit : '3',
	    name: 'nationalité2',
	    stem: 'Nationalité 2',
        required : false
	});

    API.addQuestionsSet('3ter',{ //ajouter plusieurs nationalités possibles 
	    inherit : '3',
	    name: 'nationalité3',
	    stem: 'Nationalité 3',
        required : false
	});
	
	API.addQuestionsSet('4',{
		inherit : 'basicText', 
        type: 'textNumber',
		name : 'annee_naissance',
		stem : 'Quelle est votre année de naissance ?',
        min: 1900,
        max: 2015,
		errorMsg : {
            min: 'Veuillez indiquer une année de naissance valide.',
            max: 'Veuillez indiquer une année de naissance valide.',
            number: 'Veuillez indiquer une année de naissance valide.'
        },
        validator: {
            min: 1900,
            max: 2015
		}
	});

	API.addQuestionsSet('5',{
		inherit : 'basicSelect',
		name : 'lieu_naissance',
		stem : 'Où êtes-vous né(e) ?',
		answers : [
			{text : 'En France', value:1},
			{text : 'A l\'étranger', value:2}
			]
	});
	
	API.addQuestionsSet('6',{
		inherit : 'basicDropdown',
		name : 'annee_france_1',
		stem : 'A quel âge vous êtes-vous installé(e) en France ? <br><i> Il s\'agit de votre installation en France même si elle est temporaire pour vos études. </i>',
		answers : [
			{text : '0', value:0},
			{text : '1', value:1},
			{text : '2', value:2},
			{text : '3', value:3},
			{text : '4', value:4},
			{text : '5', value:5},
			{text : '6', value:6},
			{text : '7', value:7},
			{text : '8', value:8},
			{text : '9', value:9},
			{text : '10', value:10},
			{text : '11', value:11},
			{text : '12', value:12},
			{text : '13', value:13},
			{text : '14', value:14},
			{text : '15', value:15},
			{text : '16', value:16},
			{text : '17', value:17},
			{text : '18', value:18},
			{text : '19', value:19},
			{text : '20', value:20},
			{text : '21', value:21},
			{text : '22', value:22},
			{text : '23', value:23},
			{text : '24', value:24},
			{text : '25', value:25},
			{text : '26', value:26},
			{text : '27', value:27},
			{text : '28', value:28},
			{text : '29', value:29},
			{text : '30', value:30},
			{text : 'Ne sait pas', value:999}
			]
	});

	API.addQuestionsSet('7',{
		inherit : 'basicSelect', 
		name: 'annee_france_2',
		stem : 'A quel âge vous êtes-vous installés en France ? <br><i> Il s\'agit de votre installation en France même si elle est temporaire pour vos études </i>',
		answers : [
			{text : 'Avant 5 ans', value:1},
			{text : 'Entre 5 et 10 ans', value:2},
			{text : 'Entre 11 et 15 ans', value:3},
			{text : 'Entre 15 et 18 ans', value:4},
			{text : 'Après 18 ans', value:5}
			]
	});

	API.addQuestionsSet('8',{
		inherit : 'basicSelect',
		name : 'langue_fr',
		stem : 'Parliez-vous français au sein de votre famille durant votre enfance ?',
		answers : [
			{text : 'Oui', value:1},
			{text : 'Non', value:2}
			]
	});

	API.addQuestionsSet('9',{
		inherit : 'basicSelect',
		name : 'diplome_pere',
		stem : 'Quel est le plus haut diplôme détenu par votre père ?',
		answers : [
			{text : 'Aucun diplôme', value:1},
			{text : 'Diplôme inférieur au Baccalauréat (brevet des collèges, BEPC, CAP, BEP ou diplôme étranger de licence équivalent)',value:2},
			{text : 'Baccalauréat général, technologique ou professionnel ou diplôme étranger de licence équivalent',value:3},
			{text : 'Diplôme de licence BAC+2 (DEUG,BTS ou équivalent)', value:4},
			{text : 'Diplôme de licence BAC+3 ou 4 (Licence, Maîtrise, Master 1 ou équivalent)', value:5},
			{text : 'Diplôme de licence BAC+5 et plus (DEA, DESS, Master 2, Diplôme d\'une grande école, Doctorat', value:6},
			{text : 'Ne sait pas', value:8}
			]
	});

	API.addQuestionsSet('10',{
		inherit : 'basicSelect',
		name : 'diplome_mere',
		stem : 'Quel est le plus haut diplôme détenu par votre mère ?',
		answers : [
			{text : 'Aucun diplôme', value:1},
			{text : 'Diplôme inférieur au Baccalauréat (brevet des collèges, BEPC, CAP, BEP ou diplôme étranger de même niveau)',value:2},
			{text : 'Baccalauréat général, technologique ou professionnel (ou diplôme étranger de même niveau)',value:3},
			{text : 'Diplôme de licence BAC+2 (DEUG, BTS ou équivalent)', value:4},
			{text : 'Diplôme de licence BAC+3 ou 4 (Licence, Maîtrise, Master 1 ou équivalent)', value:5},
			{text : 'Diplôme de licence BAC+5 et plus (DEA, DESS, Master 2, Diplôme d\'une grande école, Doctorat', value:6},
			{text : 'Ne sait pas', value:8}
			]
	});

	API.addQuestionsSet('11',{
		inherit : 'basicSelect',
		name : 'travail_pere',
		stem : 'Quelle est la situation actuelle ou la dernière situation de votre père ?',
		answers : [
			{text : 'Salarié', value:1},
			{text : 'A son compte ou indépendant', value:2},
			{text : 'Au chômage (inscrit ou non à France Travail)', value:3},
			{text : 'Homme au foyer', value:4},
			{text : 'Retraité ou retiré des affaires ou en préretraite', value:5},
			{text : 'Autre', value:8}
			]
	});

	API.addQuestionsSet('12',{
		inherit : 'basicSelect',
		name : 'travail_mere',
		stem : 'Quelle est la situation actuelle ou la dernière situation de votre mère ?',
		answers : [
			{text : 'Salariée', value:1},
			{text : 'A son compte ou indépendant', value:2},
			{text : 'Au chômage (inscrite ou non à France Travail)', value:3},
			{text : 'Femme au foyer', value:4},
			{text : 'Retraitée ou retirée des affaires ou en préretraite', value:5},
			{text : 'Autre', value:8}
			]
	});

//parcours scolaire

	API.addQuestionsSet('13',{
		inherit : 'basicSelect',
		name : 'bac',
		stem : 'Quel baccalauréat avez-vous passé ?',
		answers : [
			{text : 'Général', value:1},
			{text : 'Technologique', value:2},
			{text : 'Professionnel', value:3}
			]
	});

	API.addQuestionsSet('14', {
		inherit : 'basicSelect', 
		name : 'bac_fr',
		stem : 'S\'agit-il d\'un baccalauréat d\'un établissement français (y compris à l\'étranger) ?',
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
			{text : 'Série S (Scientifique ou équivalent)', value:1},
			{text : 'Série ES (Economique et Sociale ou équivalent)', value:2},
			{text : 'Série L (Littéraire ou équivalent)', value:3},
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


	API.addQuestionsSet('24',{
		inherit : 'basicSelect', 
		name : 'stereotypes', 
		stem : 'Au-delà de votre expéricence personnelle, pensez-vous appartenir à un groupe envers lequel certains enseignants ont des stéréotypes ?',
		answers : [
			{text : 'Oui', value:1}, 
			{text : 'Non', value:2},
			{text : 'Ne sait pas', value:8}
			]
	});

	//L1
	
	API.addQuestionsSet('l1anglais1_1',{
		inherit: 'ressenti1', 
		name: 'l1anglais1_1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l1anglais1_2',{
		inherit: 'ressenti2', 
		name: 'l1anglais1_2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l1anglais1_3',{
		inherit: 'ressenti3', 
		name: 'l1anglais1_3',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l1anglais1_4',{
		inherit: 'ressenti4', 
		name: 'l1anglais1_4',
		header: 'Anglais (S1)'
	});


	API.addQuestionsSet('l1renfo_maths1',{
		inherit: 'ressenti1', 
		name: 'l1renfo_maths1',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1renfo_maths2',{
		inherit: 'ressenti2', 
		name: 'l1renfo_maths2',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1renfo_maths3',{
		inherit: 'ressenti3', 
		name: 'l1renfo_maths3',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1renfo_maths4',{
		inherit: 'ressenti4', 
		name: 'l1renfo_maths4',
		header: 'Renforcement en mathématiques (S1)'
	});

	API.addQuestionsSet('l1maths1_1',{
		inherit: 'ressenti1', 
		name: 'l1maths1_1',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1maths1_2',{
		inherit: 'ressenti2', 
		name: 'l1maths1_2',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1maths1_3',{
		inherit: 'ressenti3', 
		name: 'l1maths1_3',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1maths1_4',{
		inherit: 'ressenti4', 
		name: 'l1maths1_4',
		header: 'Mathématiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_1',{
		inherit: 'ressenti1', 
		name: 'l1stats1_1',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_2',{
		inherit: 'ressenti2', 
		name: 'l1stats1_2',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_3',{
		inherit: 'ressenti3', 
		name: 'l1stats1_3',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1stats1_4',{
		inherit: 'ressenti4', 
		name: 'l1stats1_4',
		header: 'Statistiques 1 (S1)'
	});

	API.addQuestionsSet('l1intro_eco1',{
		inherit: 'ressenti1', 
		name: 'l1intro_eco1',
		header: 'Introduction à l\'éonomie (S1)'
	});

	API.addQuestionsSet('l1intro_eco2',{
		inherit: 'ressenti2', 
		name: 'l1intro_eco2',
		header: 'Introduction à l\'éonomie 1 (S1)'
	});

	API.addQuestionsSet('l1intro_eco3',{
		inherit: 'ressenti3', 
		name: 'l1intro_eco3',
		header: 'Introduction à l\'éonomie (S1)'
	});

	API.addQuestionsSet('l1intro_eco4',{
		inherit: 'ressenti4', 
		name: 'l1intro_eco4',
		header: 'Introduction à l\'éonomie 1 (S1)'
	});

	API.addQuestionsSet('l1intro_gest1',{
		inherit: 'ressenti1', 
		name: 'l1intro_gest1',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1intro_gest2',{
		inherit: 'ressenti2', 
		name: 'l1intro_gest2',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1intro_gest3',{
		inherit: 'ressenti3', 
		name: 'l1intro_gest3',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1intro_gest4',{
		inherit: 'ressenti4', 
		name: 'l1intro_gest4',
		header: 'Introduction à la gestion et au management (S1)'
	});

	API.addQuestionsSet('l1micro1_1',{
		inherit: 'ressenti1', 
		name: 'l1micro1_1',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1micro1_2',{
		inherit: 'ressenti2', 
		name: 'l1micro1_2',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1micro1_3',{
		inherit: 'ressenti3', 
		name: 'l1micro1_3',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1micro1_4',{
		inherit: 'ressenti4', 
		name: 'l1micro1_4',
		header: 'Microéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_1',{
		inherit: 'ressenti1', 
		name: 'l1macro1_1',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_2',{
		inherit: 'ressenti2', 
		name: 'l1macro1_2',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_3',{
		inherit: 'ressenti3', 
		name: 'l1macro1_3',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1macro1_4',{
		inherit: 'ressenti4', 
		name: 'l1macro1_4',
		header: 'Macroéconomie 1 (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag1',{
		inherit: 'ressenti1', 
		name: 'l1enjeux_manag1',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag2',{
		inherit: 'ressenti2', 
		name: 'l1enjeux_manag2',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag3',{
		inherit: 'ressenti3', 
		name: 'l1enjeux_manag3',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1enjeux_manag4',{
		inherit: 'ressenti4', 
		name: 'l1enjeux_manag4',
		header: 'Enjeux du management des organisations (S2)'
	});

	API.addQuestionsSet('l1compta1_1',{
		inherit: 'ressenti1', 
		name: 'l1compta1_1',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1compta1_2',{
		inherit: 'ressenti2', 
		name: 'l1compta1_2',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1compta1_3',{
		inherit: 'ressenti3', 
		name: 'l1compta1_3',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1compta1_4',{
		inherit: 'ressenti4', 
		name: 'l1compta1_4',
		header: 'Comptabilité générale (S2)'
	});

	API.addQuestionsSet('l1anglais2_1',{
		inherit: 'ressenti1', 
		name: 'l1anglais2_1',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1anglais2_2',{
		inherit: 'ressenti2', 
		name: 'l1anglais2_2',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1anglais2_3',{
		inherit: 'ressenti3', 
		name: 'l1anglais2_3',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1anglais2_4',{
		inherit: 'ressenti4', 
		name: 'l1anglais2_4',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l1maths2_1',{
		inherit: 'ressenti1', 
		name: 'l1maths2_1',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1maths2_2',{
		inherit: 'ressenti2', 
		name: 'l1maths2_2',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1maths2_3',{
		inherit: 'ressenti3', 
		name: 'l1maths2_3',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1maths2_4',{
		inherit: 'ressenti4', 
		name: 'l1maths2_4',
		header: 'Mathématiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_1',{
		inherit: 'ressenti1', 
		name: 'l1stats2_1',
		header: 'Statistiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_2',{
		inherit: 'ressenti2', 
		name: 'l1stats2_2',
		header: 'Statistiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_3',{
		inherit: 'ressenti3', 
		name: 'l1stats2_3',
		header: 'Statistiques 2 (S2)'
	});

	API.addQuestionsSet('l1stats2_4',{
		inherit: 'ressenti4', 
		name: 'l1stats2_4',
		header: 'Statistiques 2 (S2)'
	});


	//L2

	API.addQuestionsSet('l2micro2_1',{
		inherit: 'ressenti1', 
		name: 'l2micro2_1',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2micro2_2',{
		inherit: 'ressenti2', 
		name: 'l2micro2_2',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2micro2_3',{
		inherit: 'ressenti3', 
		name: 'l2micro2_3',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2micro2_4',{
		inherit: 'ressenti4', 
		name: 'l2micro2_4',
		header: 'Microéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_1',{
		inherit: 'ressenti1', 
		name: 'l2macro2_1',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_2',{
		inherit: 'ressenti2', 
		name: 'l2macro2_2',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_3',{
		inherit: 'ressenti3', 
		name: 'l2macro2_3',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2macro2_4',{
		inherit: 'ressenti4', 
		name: 'l2macro2_4',
		header: 'Macroéconomie 2 (S1)'
	});

	API.addQuestionsSet('l2compta2_1',{
		inherit: 'ressenti1', 
		name: 'l2compta2_1',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2compta2_2',{
		inherit: 'ressenti2', 
		name: 'l2compta2_2',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2compta2_3',{
		inherit: 'ressenti3', 
		name: 'l2compta2_3',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2compta2_4',{
		inherit: 'ressenti4', 
		name: 'l2compta2_4',
		header: 'Comptabilité générale (S1)'
	});

	API.addQuestionsSet('l2intro_rh1',{
		inherit: 'ressenti1', 
		name: 'l2intro_rh1',
		header: 'Introduction aux ressources humaines (S1)'
	});

	API.addQuestionsSet('l2intro_rh2',{
		inherit: 'ressenti2', 
		name: 'l2intro_rh2',
		header: 'Introduction aux ressources humaines (S1)'
	});

	API.addQuestionsSet('l2intro_rh3',{
		inherit: 'ressenti3', 
		name: 'l2intro_rh3',
		header: 'Introduction aux ressources humaines (S1)'
	});

	API.addQuestionsSet('l2intro_rh4',{
		inherit: 'ressenti4', 
		name: 'l2intro_rh4',
		header: 'Introduction aux ressources humaines (S1)'
	});


	API.addQuestionsSet('l2etudes_mark1',{
		inherit: 'ressenti1', 
		name: 'l2etudes_mark1',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2etudes_mark2',{
		inherit: 'ressenti2', 
		name: 'l2etudes_mark2',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2etudes_mark3',{
		inherit: 'ressenti3', 
		name: 'l2etudes_mark3',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2etudes_mark4',{
		inherit: 'ressenti4', 
		name: 'l2etudes_mark4',
		header: 'Etudes marketing (S1)'
	});

	API.addQuestionsSet('l2maths3_1',{
		inherit: 'ressenti1', 
		name: 'l2maths3_1',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2maths3_2',{
		inherit: 'ressenti2', 
		name: 'l2maths3_2',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2maths3_3',{
		inherit: 'ressenti3', 
		name: 'l2maths3_3',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2maths3_4',{
		inherit: 'ressenti4', 
		name: 'l2maths3_4',
		header: 'Mathématiques 3 (S1)'
	});

	API.addQuestionsSet('l2proba1_1',{
		inherit: 'ressenti1', 
		name: 'l2proba1_1',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2proba1_2',{
		inherit: 'ressenti2', 
		name: 'l2proba1_2',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2proba1_3',{
		inherit: 'ressenti3', 
		name: 'l2proba1_3',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2proba1_4',{
		inherit: 'ressenti4', 
		name: 'l2proba1_4',
		header: 'Probabilités (S1)'
	});

	API.addQuestionsSet('l2anglais3_1',{
		inherit: 'ressenti1', 
		name: 'l2anglais3_1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2anglais3_2',{
		inherit: 'ressenti2', 
		name: 'l2anglais3_2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2anglais3_3',{
		inherit: 'ressenti3', 
		name: 'l2anglais3_3',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2anglais3_4',{
		inherit: 'ressenti4', 
		name: 'l2anglais3_4',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l2macro3_1',{
		inherit: 'ressenti1', 
		name: 'l2macro3_1',
		header: 'Macroéconomie 3 (S2)'
	});

	API.addQuestionsSet('l2macro3_2',{
		inherit: 'ressenti2', 
		name: 'l2macro3_2',
		header: 'Macroéconomie 2 (S2)'
	});

	API.addQuestionsSet('l2macro3_3',{
		inherit: 'ressenti3', 
		name: 'l2macro3_3',
		header: 'Macroéconomie 3 (S2)'
	});

	API.addQuestionsSet('l2macro3_4',{
		inherit: 'ressenti4', 
		name: 'l2macro3_4',
		header: 'Macroéconomie 2 (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc1',{
		inherit: 'ressenti1', 
		name: 'l2pol_eco_soc1',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc2',{
		inherit: 'ressenti2', 
		name: 'l2pol_eco_soc2',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc3',{
		inherit: 'ressenti3', 
		name: 'l2pol_eco_soc3',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2pol_eco_soc4',{
		inherit: 'ressenti4', 
		name: 'l2pol_eco_soc4',
		header: 'Politiques économiques et sociales (S2)'
	});

	API.addQuestionsSet('l2mon_fi1',{
		inherit: 'ressenti1', 
		name: 'l2mon_fi1',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2mon_fi2',{
		inherit: 'ressenti2', 
		name: 'l2mon_fi2',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2mon_fi3',{
		inherit: 'ressenti3', 
		name: 'l2mon_fi3',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2mon_fi4',{
		inherit: 'ressenti4', 
		name: 'l2mon_fi4',
		header: 'Monnaie et finance (S2)'
	});

	API.addQuestionsSet('l2analyse_fi1',{
		inherit: 'ressenti1', 
		name: 'l2analyse_fi1',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2analyse_fi2',{
		inherit: 'ressenti2', 
		name: 'l2analyse_fi2',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2analyse_fi3',{
		inherit: 'ressenti3', 
		name: 'l2analyse_fi3',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2analyse_fi4',{
		inherit: 'ressenti4', 
		name: 'l2analyse_fi4',
		header: 'Analyse financière (S2)'
	});

	API.addQuestionsSet('l2gest_prod1',{
		inherit: 'ressenti1', 
		name: 'l2gest_prod1',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2gest_prod2',{
		inherit: 'ressenti2', 
		name: 'l2gest_prod2',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2gest_prod3',{
		inherit: 'ressenti3', 
		name: 'l2gest_prod3',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2gest_prod4',{
		inherit: 'ressenti4', 
		name: 'l2gest_prod4',
		header: 'Gestion de production (S2)'
	});

	API.addQuestionsSet('l2analyse_don1',{
		inherit: 'ressenti1', 
		name: 'l2analyse_don1',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2analyse_don2',{
		inherit: 'ressenti2', 
		name: 'l2analyse_don2',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2analyse_don3',{
		inherit: 'ressenti3', 
		name: 'l2analyse_don3',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2analyse_don4',{
		inherit: 'ressenti4', 
		name: 'l2analyse_don4',
		header: 'Analyse des données (S2)'
	});

	API.addQuestionsSet('l2anglais4_1',{
		inherit: 'ressenti1', 
		name: 'l2anglais4_1',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l2anglais4_2',{
		inherit: 'ressenti2', 
		name: 'l2anglais4_2',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l2anglais4_3',{
		inherit: 'ressenti3', 
		name: 'l2anglais4_3',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l2anglais4_4',{
		inherit: 'ressenti4', 
		name: 'l2anglais4_4',
		header: 'Anglais (S2)'
	});


	//L3 gestion

	API.addQuestionsSet('l3marketing1',{
		inherit: 'ressenti1',
		name: 'l3marketing',
		header: 'Marketing durable (S5)'
	});

    API.addQuestionsSet('l3marketing2',{
		inherit: 'ressenti2',
		name: 'l3marketing2',
		header: 'Marketing durable (S5)'
	});

	API.addQuestionsSet('l3marketing3',{
		inherit: 'ressenti3',
		name: 'l3marketing3',
		header: 'Marketing durable (S5)'
	});

    API.addQuestionsSet('l3marketing4',{
		inherit: 'ressenti4',
		name: 'l3marketing4',
		header: 'Marketing durable (S5)'
	});

    API.addQuestionsSet('l3anglais5_1',{
		inherit: 'ressenti1',
		name: 'l3anglais5_1',
		header: 'Anglais (S5)'
	});

    API.addQuestionsSet('l3anglais5_2',{
		inherit: 'ressenti2',
		name: 'l3anglais5_2',
		header: 'Anglais (S5)'
	});

	API.addQuestionsSet('l3anglais5_3',{
		inherit: 'ressenti3',
		name: 'l3anglais5_3',
		header: 'Anglais (S5)'
	});

    API.addQuestionsSet('l3anglais5_4',{
		inherit: 'ressenti4',
		name: 'l3anglais5_4',
		header: 'Anglais (S5)'
	});

	API.addQuestionsSet('l3strat1',{
		inherit: 'ressenti1',
		name: 'l3strat1',
		header: 'Fondamentaux de la stratégie (S6)'
	});

    API.addQuestionsSet('l3strat2',{
		inherit: 'ressenti2',
		name: 'l3strat2',
		header: 'Fondamentaux de la stratégie (S6)'
	});

	API.addQuestionsSet('l3strat3',{
		inherit: 'ressenti3',
		name: 'l3strat3',
		header: 'Fondamentaux de la stratégie (S6)'
	});

    API.addQuestionsSet('l3strat4',{
		inherit: 'ressenti4',
		name: 'l3strat4',
		header: 'Fondamentaux de la stratégie (S6)'
	});
	
    API.addQuestionsSet('l3anglais6_1',{
		inherit: 'ressenti1',
		name: 'l3anglais6_1',
		header: 'Anglais (S6)'
	});

    API.addQuestionsSet('l3anglais6_2',{
		inherit: 'ressenti2',
		name: 'l3anglais6_2',
		header: 'Anglais (S6)'
	});

	API.addQuestionsSet('l3anglais6_3',{
		inherit: 'ressenti3',
		name: 'l3anglais6_3',
		header: 'Anglais (S6)'
	});

    API.addQuestionsSet('l3anglais6_4',{
		inherit: 'ressenti4',
		name: 'l3anglais6_4',
		header: 'Anglais (S6)'
	});

    API.addQuestionsSet('l3stats1',{
		inherit: 'ressenti1',
		name: 'l3stats1',
		header: 'Statistiques descriptives (S6)'
	});

    API.addQuestionsSet('l3stats2',{
		inherit: 'ressenti2',
		name: 'l3stats2',
		header: 'Statistiques descriptives (S6)'
	});

	API.addQuestionsSet('l3stats3',{
		inherit: 'ressenti3',
		name: 'l3stats3',
		header: 'Statistiques descriptives (S6)'
	});

    API.addQuestionsSet('l3stats4',{
		inherit: 'ressenti4',
		name: 'l3stats4'
	});



    //sequence
    
    API.addSequence([
        {inherit: 'basicPage', progressBar: '1/13', questions:[
            {inherit: 'intro1', helpText: false},
            {inherit: 'intro2', helpText: false},
            {inherit: 'intro3'}]},
        
        {inherit:'basicPage', progressBar: '2/13', questions:{inherit:'1'}},
		{inherit:'basicPage', progressBar: '3/13', questions:{inherit:'2'}},
		{inherit:'basicPage', progressBar: '4/13',questions: [
            {inherit:'3', helpText: false},
            {inherit:'3bis', helpText: false},
            {inherit:'3ter'}
        ]},
		{inherit:'basicPage', progressBar: '5/13', questions:{inherit:'4'}},
		{inherit:'basicPage', progressBar: '6/13', questions:{inherit:'5'}},

		{mixer: 'branch',  //si question 5 = 1, alors question 8
		conditions : [
			{compare: 'current.questions.lieu_naissance.response', to: 2}
		],
		data: [
			{inherit: 'basicPage', progressBar: '7/13', questions: {inherit: '6'},}
		]},

		{mixer: 'branch',
			conditions: [
				{compare: 'current.questions.annee_france_1.response', to: 999}
			],
			data: [
				{inherit: 'basicPage', progressBar: '8/13', questions: {inherit: '7'}}
		]},
		 
		
		{inherit:'basicPage', progressBar: '9/13', questions:{inherit:'8'}}, //tt le monde se rejoint ici
		
		{inherit:'basicPage', progressBar: '10/13', questions:{inherit:'9'}},
		{inherit:'basicPage', progressBar: '11/13', questions:{inherit:'10'}},
		{inherit:'basicPage', progressBar: '12/13', questions:{inherit:'11'}},
		{inherit:'basicPage', progressBar: '13/13', questions:{inherit:'12'}},

		//parcours scolaire 
		
		{inherit: 'basicPage', questions: 
			{type: 'info',
			stem: 'Nous allons maintenant vous poser des questions sur votre parcours scolaire, à commencer par votre baccalauréat.'
			}
		},
		{inherit:'basicPage', progressBar: '1/6', questions:{inherit:'13'}},
		
		{mixer: 'branch',
			conditions: [
				{compare: 'current.questions.bac.response', to: 1}
			],
			data: [
				{inherit: 'basicPage', progressBar: '2/6', questions: {inherit: '14'}},
				{mixer: 'branch',
					conditions: [
						{compare: 'current.questions.bac_fr.response', to: 1}
					],
					data: [
						{inherit: 'basicPage', progressBar: '3/6', questions: {inherit: '15'}},
						{mixer: 'branch', 
							conditions: [
								{compare: 'current.questions.bac_annee.response', to: 2021, operator: 'lesserThan'}
							],
							data: [
								{inherit: 'basicPage', progressBar: '4/6', questions: {inherit: '16'}},
							],
							elseData: [
								{inherit: 'basicPage', progressBar: '4/6', questions: {inherit: '17'}},
								{inherit: 'basicPage', progressBar: '5/6', questions: {inherit: '18'}}
							]
						}
					],
					elseData: [
						{inherit: 'basicPage', progressBar: '3/6', questions: {inherit: '16'}}
					]
				}
			],
			elseData: [
				{inherit: 'basicPage', progressBar: '2/6', questions:{inherit: '14'}},
				{inherit: 'basicPage', progressBar: '3/6', questions: {inherit: '15'}}
			]
		},
	
		{inherit:'basicPage', progressBar: '6/6', questions:{inherit:'19'}},
		{inherit:'basicPage', questions: 
			{type: 'info', stem: 'Nous allons maintenant vous poser des questions sur votre environnement d’étude actuellement à votre domicile.'}},
		{inherit: 'basicPage',progressBar: '1/5', questions:{inherit:'20'}},
		{inherit: 'basicPage', progressBar: '2/5', questions:{inherit:'21'}},
		{mixer: 'branch',
			conditions: [{compare: 'current.questions.licence.response', to:1}],
			data: [{inherit: 'basicPage', progressBar: '3/5', questions:{inherit:'22'}}],
			elseData: [{inherit: 'basicPage', progressBar: '4/5', questions:{inherit:'23'}}]
		},

	{inherit: 'basicPage', progressBar: '5/5', questions: {inherit: '24'}},

	{inherit: 'basicPage', questions: 
		{type: 'info',
		stem: 'Nous allons maintenant vous poser des questions sur votre année à l\'université et sur chacun des enseignements que vous avez reçus en TD cette année.'
		}
	},

	{mixer: 'multiBranch',
		branches: [
			{
				conditions: [
					{compare: 'current.questions.licence.response', to :1}
				],
				data: [
					{inherit: 'basicPage',
					progressBar: '1/13', 
					header: 'Anglais (S1)',
					required: true, 
					questions:[
						{inherit:'l1anglais1_1'},
						{inherit:'l1anglais1_2'},
						{inherit:'l1anglais1_3'},
						{inherit:'l1anglais1_4'}]
					},
					{inherit: 'basicPage', 
						progressBar: '2/13',
					header: 'Renforcement en mathématiques (S1)',
					questions:[
						{inherit:'l1renfo_maths1'},
						{inherit:'l1renfo_maths2'},
						{inherit:'l1renfo_maths3'},
						{inherit:'l1renfo_maths4'}
					]},
					{inherit: 'basicPage', 
						progressBar: '3/13',
					header: 'Mathématiques 1 (S1)',
					questions:[
						{inherit:'l1maths1_1'},
						{inherit:'l1maths1_2'},
						{inherit:'l1maths1_3'},
						{inherit:'l1maths1_4'}
					]},
					{inherit: 'basicPage', 
						progressBar: '4/13',
					header: 'Statistiques 1 (S1)',
					questions:[
						{inherit:'l1stats1_1'},
						{inherit:'l1stats1_2'},
						{inherit:'l1stats1_3'},
						{inherit:'l1stats1_4'}
						]
					},
					{inherit: 'basicPage', 
						progressBar: '5/13',
					header: 'Introduction à l\'économie (S1)',
					questions:[
						{inherit:'l1intro_eco1'},
						{inherit:'l1intro_eco2'},
						{inherit:'l1intro_eco3'},
						{inherit:'l1intro_eco4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '6/13',
					header: 'Introduction à la gestion et au management (S1)',
					questions:[
						{inherit:'l1intro_gest1'},
						{inherit:'l1intro_gest2'},
						{inherit:'l1intro_gest3'},
						{inherit:'l1intro_gest4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '7/13',
					header: 'Microéconomie 1 (S2)',
					questions:[
						{inherit:'l1micro1_1'},
						{inherit:'l1micro1_2'},
						{inherit:'l1micro1_3'},
						{inherit:'l1micro1_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '8/13',
					header: 'Macroéconomie 1 (S2)',
					questions:[
						{inherit:'l1macro1_1'},
						{inherit:'l1macro1_2'},
						{inherit:'l1macro1_3'},
						{inherit:'l1macro1_4'}
						]
					},
					
					{inherit: 'basicPage', 
						progressBar: '9/13',
					header: 'Enjeux du management des organisations (S2)',
					questions:[
						{inherit:'l1enjeux_manag1'},
						{inherit:'l1enjeux_manag2'},
						{inherit:'l1enjeux_manag3'},
						{inherit:'l1enjeux_manag4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '10/13',
					header: 'Comptabilité générale (S2)',
					questions:[
						{inherit:'l1compta1_1'},
						{inherit:'l1compta1_2'},
						{inherit:'l1compta1_3'},
						{inherit:'l1compta1_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '11/13',
					header: 'Anglais (S2)',
					questions:[
						{inherit:'l1anglais2_1'},
						{inherit:'l1anglais2_2'},
						{inherit:'l1anglais2_3'},
						{inherit:'l1anglais2_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '12/13',
					header: 'Mathématiques 2 (S2)',
					questions:[
						{inherit:'l1maths2_1'},
						{inherit:'l1maths2_2'},
						{inherit:'l1maths2_3'},
						{inherit:'l1maths2_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '13/13',
					header: 'Statistiques 2 (S2)',
					questions:[
						{inherit:'l1stats2_1'},
						{inherit:'l1stats2_2'},
						{inherit:'l1stats2_3'},
						{inherit:'l1stats2_4'}
						]
					},
				]
			},
			{
				conditions: [
					{compare: 'current.questions.licence.response', to :2}
				],
				data: [
					{inherit: 'basicPage', 
						progressBar: '1/15',
					header: 'Microéconomie 2 (S1)',
					questions:[
						{inherit:'l2micro2_1'},
						{inherit:'l2micro2_2'},
						{inherit:'l2micro2_3'},
						{inherit:'l2micro2_4'}
						]
					},
				
					{inherit: 'basicPage', 
						progressBar: '2/15',
					header: 'Macroéconomie 2 (S1)',
					questions:[
						{inherit:'l2macro2_1'},
						{inherit:'l2macro2_2'},
						{inherit:'l2macro2_3'},
						{inherit:'l2macro2_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '3/15',
					header: 'Comptabilité générale (S1)',
					questions:[
						{inherit:'l2compta2_1'},
						{inherit:'l2compta2_2'},
						{inherit:'l2compta2_3'},
						{inherit:'l2compta2_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '4/15',
					header: 'Introduction aux ressources humaines (S1)',
					questions:[
						{inherit:'l2intro_rh1'},
						{inherit:'l2intro_rh2'},
						{inherit:'l2intro_rh3'},
						{inherit:'l2intro_rh4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '5/15',
					header: 'Etudes marketing (S1)',
					questions:[
						{inherit:'l2etudes_mark1'},
						{inherit:'l2etudes_mark2'},
						{inherit:'l2etudes_mark3'},
						{inherit:'l2etudes_mark4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '6/15',
					header: 'Mathématiques 3 (S1)',
					questions:[
						{inherit:'l2maths3_1'},
						{inherit:'l2maths3_2'},
						{inherit:'l2maths3_3'},
						{inherit:'l2maths3_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '7/15',
					header: 'Probabilités (S1)',
					questions:[
						{inherit:'l2proba1_1'},
						{inherit:'l2proba1_2'},
						{inherit:'l2proba1_3'},
						{inherit:'l2proba1_4'}
						]
					},
					
					{inherit: 'basicPage',
						progressBar: '8/15', 
					header: 'Anglais (S1)',
					questions:[
						{inherit:'l2anglais3_1'},
						{inherit:'l2anglais3_2'},
						{inherit:'l2anglais3_3'},
						{inherit:'l2anglais3_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '9/15',
					header: 'Anglais (S1)',
					questions:[
						{inherit:'l2macro3_1'},
						{inherit:'l2macro3_2'},
						{inherit:'l2macro3_3'},
						{inherit:'l2macro3_4'}
						]
					},

					{inherit: 'basicPage',
						progressBar: '10/15', 
					header: 'Politiques économiques et sociales (S2)',
					questions:[
						{inherit:'l2pol_eco_soc1'},
						{inherit:'l2pol_eco_soc2'},
						{inherit:'l2pol_eco_soc3'},
						{inherit:'l2pol_eco_soc4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '11/15',
					header: 'Monnaie et finance (S2)',
					questions:[
						{inherit:'l2mon_fi1'},
						{inherit:'l2mon_fi2'},
						{inherit:'l2mon_fi3'},
						{inherit:'l2mon_fi4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '12/15',
					header: 'Analyse financière (S2)',
					questions:[
						{inherit:'l2analyse_fi1'},
						{inherit:'l2analyse_fi2'},
						{inherit:'l2analyse_fi3'},
						{inherit:'l2analyse_fi4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '13/15',
					header: 'Gestion de production (S2)',
					questions:[
						{inherit:'l2gest_prod1'},
						{inherit:'l2gest_prod2'},
						{inherit:'l2gest_prod3'},
						{inherit:'l2gest_prod4'}
						]
					},
					
					{inherit: 'basicPage', 
						progressBar: '14/15',
					header: 'Analyse des données (S2)',
					questions:[
						{inherit:'l2analyse_don1'},
						{inherit:'l2analyse_don2'},
						{inherit:'l2analyse_don3'},
						{inherit:'l2analyse_don4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '15/15',
					header: 'Anglais (S2)',
					questions:[
						{inherit:'l2anglais4_1'},
						{inherit:'l2anglais4_2'},
						{inherit:'l2anglais4_3'},
						{inherit:'l2anglais4_4'}
						]
					},
				]
			},
			{
				conditions: [
					{compare: 'current.questions.licence.response', to:3}
				],
				data: [
					{inherit: 'basicPage', 
						progressBar: '1/5',
					header: 'Marketing durable (S5)',
					questions: [
						{inherit:'l3marketing1'},
						{inherit:'l3marketing2'},
						{inherit:'l3marketing3'},
						{inherit:'l3marketing4'}
						]
					},

					{inherit: 'basicPage', 
					header: 'Anglais (S5)',
					progressBar: '2/5',
					questions: [
						{inherit:'l3anglais5_1'},
						{inherit:'l3anglais5_2'},
						{inherit:'l3anglais5_3'},
						{inherit:'l3anglais5_4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '3/5',
					header: 'Fondamentaux de la stratégie (S6)',
					questions: [
						{inherit:'l3strat1'},
						{inherit:'l3strat2'},
						{inherit:'l3strat3'},
						{inherit:'l3strat4'}
						]
					},

					{inherit: 'basicPage', 
						progressBar: '4/5',
					header: 'Anglais (S6)',
					conditions: 'current.questions.licence.response == 3',
					questions: [
						{inherit:'l3anglais6_1'},
						{inherit:'l3anglais6_2'},
						{inherit:'l3anglais6_3'},
						{inherit:'l3anglais6_4'}
						]
					},	

					{inherit: 'basicPage', 
						progressBar: '5/5',
					header: 'Statistiques descriptives (S6)',
					conditions: 'current.questions.licence.response == 3',
					questions: [
						{inherit:'l3stats1'},
						{inherit:'l3stats2'},
						{inherit:'l3stats3'},
						{inherit:'l3stats4'}
						]
					}
				]
			}
		]
	}

		
	]);
	

    return API.script;
});
