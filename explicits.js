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
        decline: 'false',
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

	API.addQuestionsSet('ressenti1',{
		inherit: 'basicSelect', 
		stem: 'En arrivant au CC2 de cette matière, vous sentiez-vous en confiance pour réussir ? <br><i>Les réponses sont données sur une échelle allant de 1 (très peu en confiance) à 5 (tout à fait en confiance). Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>',
		answers: [
			{text: '1 - Très peu en confiance', value:1},
			{text: '2', value:2},
			{text: '3 - Moyennement en confiance', value:3},
			{text: '4', value:4},
			{text: '5 - Tout à fait en confiance', value:5},
			{text: 'Non concerné', value:8}
			]
	});

	API.addQuestionsSet('ressenti2',{
		inherit: 'basicSelect', 
		stem: 'Comment avez-vous perçu la façon dont le chargé de TD de cette matière s\'adressait à vous et répondait à vos questions ? <br><i>Les réponses sont données sur une échelle de 1 (désagréable et dévalorisante) à 5 (très agréable et valorisante). Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>', 
		answers: [
			{text: '1 - Désagréable et dévalorisante', value:1},
			{text: '2', value:2},
			{text: '3', value:3},
			{text: '4', value:4},
			{text: '5 - Très agréable et valorisante', value:5},
			{text: 'Non concerné', value:8}
			]
	});

	API.addQuestionsSet('ressenti3',{
		inherit: 'basicSelect', 
		stem: 'Personnellement, pensez-vous avoir été traité différemment des autres étudiants dans cette matière, par exemple dans la façon dont l\'enseignant s\'adressait à vous, interagissait avec vous ou répondait à vos questions ? <br><i>Si vous n\'avez pas suivi cette matière ou ce TD, cochez "Non concerné".</i>',
		answers: [
			{text: '1 - Mieux traité', value:1},
			{text: '2 - Pareil', value:2},
			{text: '3 - Moins bien trainté', value:3},
			{text: 'Non concerné', value:8}
			]
	});

	API.addQuestionsSet('ressenti4',{
		inherit: 'basicMulti', 
		stem: 'D\'après vous, ces traitements différents dans ce TD pouvaient-ils être liés à ces différents éléments ?',
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
			{text : 'L1', value:1},
			{text : 'L2', value:2},
			{text : 'L3 Economie', value:3},
			{text : 'L3 Gestion des entreprises', value:4}
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

	API.addQuestionsSet('3',{
	    inherit : 'basicDropdown',
	    name: 'nationalité',
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
			{text : 'Diplôme inférieur au Baccalauréat (brevet des collèges, BEPC, CAP, BEP ou diplôme étranger de licence équivalent)',value:2},
			{text : 'Baccalauréat général, technologique ou professionnel ou diplôme étranger de licence équivalent',value:3},
			{text : 'Diplôme de licence BAC+2 (DEUG,BTS ou équivalent)', value:4},
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
			{text : 'Au chômage (inscrit ou non à France Travail', value:3},
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
			{text : 'Au chômage (inscrit ou non à France Travail', value:3},
			{text : 'Femme au foyer', value:4},
			{text : 'Retraitée ou retirée des affaires ou en préretraite', value:5},
			{text : 'Autre', value:8}
			]
	});
			
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
		name : 'bac_annee',
		stem : 'En quelle année avez-vous passé le baccalauréat ?',
		validator: 'number'
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
			{text : 'Mention très bien (moyenne entre 16 et 18)', value:4}
			]
	});

	//environnement d'étude 
	API.addQuestionsSet('20',{
		inherit : 'basicMulti',
		name : 'environnement', 
		stem : 'Veuillez cocher les phrases qui correspondent à votre situation', 
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

	//stéréotypes

	API.addQuestionsSet('24',{
		inherit : 'basicSelect', 
		name : 'stereotypes', 
		stem : 'Pensez-vous appartenir à un groupe envers lequel certains enseignants ont des stéréotypes ?',
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
		header: 'Introduction à l\'éonomie 1 (S1)'
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
		header: 'Etudes marketing (S1)'
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
		header: 'Macroéconomie 4 (S2)'
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

	//L3 eco

	API.addQuestionsSet('l3croissance1',{
		inherit: 'ressenti1', 
		name: 'l3croissance1',
		header: 'Croissance (S1)'
	});

	API.addQuestionsSet('l3croissance2',{
		inherit: 'ressenti2', 
		name: 'l3croissance2',
		header: 'Croissance 2 (S1)'
	});

	API.addQuestionsSet('l3croissance3',{
		inherit: 'ressenti3', 
		name: 'l3croissance3',
		header: 'Croissance 3 (S1)'
	});

	API.addQuestionsSet('l3croissance4',{
		inherit: 'ressenti4', 
		name: 'l3croissance4',
		header: 'Croissance 4 (S1)'
	});

	API.addQuestionsSet('l3eco_pub1',{
		inherit: 'ressenti1', 
		name: 'l3eco_pub1',
		header: 'Economie publique (S1)'
	});

	API.addQuestionsSet('l3eco_pub2',{
		inherit: 'ressenti2', 
		name: 'l3eco_pub2',
		header: 'Economie publique (S1)'
	});

	API.addQuestionsSet('l3eco_pub3',{
		inherit: 'ressenti3', 
		name: 'l3eco_pub3',
		header: 'Economie publique 3 (S1)'
	});

	API.addQuestionsSet('l3eco_pub4',{
		inherit: 'ressenti4', 
		name: 'l3eco_pub4',
		header: 'Economie publique 4 (S1)'
	});

	API.addQuestionsSet('l3eco_inter1',{
		inherit: 'ressenti1', 
		name: 'l3eco_inter1',
		header: 'Economie internationale (S1)'
	});

	API.addQuestionsSet('l3eco_inter2',{
		inherit: 'ressenti2', 
		name: 'l3eco_inter2',
		header: 'Economie internationale (S1)'
	});

	API.addQuestionsSet('l3eco_inter3',{
		inherit: 'ressenti3', 
		name: 'l3eco_inter3',
		header: 'Economie internationale (S1)'
	});

	API.addQuestionsSet('l3eco_inter4',{
		inherit: 'ressenti4', 
		name: 'l3eco_inter4',
		header: 'Economie internationale (S1)'
	});

	API.addQuestionsSet('l3eco_trav1',{
		inherit: 'ressenti1', 
		name: 'l3eco_trav1',
		header: 'Economie du travail (S1)'
	});

	API.addQuestionsSet('l3eco_trav2',{
		inherit: 'ressenti2', 
		name: 'l3eco_trav2',
		header: 'Economie du travail (S1)'
	});

	API.addQuestionsSet('l3eco_trav3',{
		inherit: 'ressenti3', 
		name: 'l3eco_trav3',
		header: 'Economie du travail (S1)'
	});

	API.addQuestionsSet('l3eco_trav4',{
		inherit: 'ressenti4', 
		name: 'l3eco_trav4',
		header: 'Economie du travail (S1)'
	});

	API.addQuestionsSet('l3econometrie1',{
		inherit: 'ressenti1', 
		name: 'l3econometrie1',
		header: 'Econométrie (S1)'
	});

	API.addQuestionsSet('l3econometrie2',{
		inherit: 'ressenti2', 
		name: 'l3econometrie2',
		header: 'Econométrie (S1)'
	});

	API.addQuestionsSet('l3econometrie3',{
		inherit: 'ressenti3', 
		name: 'l3econometrie3',
		header: 'Econométrie (S1)'
	});

	API.addQuestionsSet('l3econometrie4',{
		inherit: 'ressenti4', 
		name: 'l3econometrie4',
		header: 'Econométrie (S1)'
	});

	API.addQuestionsSet('l3app_r1_1',{
		inherit: 'ressenti1', 
		name: 'l3app_r1_1',
		header: 'Application sous R (S1)'
	});

	API.addQuestionsSet('l3app_r1_2',{
		inherit: 'ressenti2', 
		name: 'l3app_r1_2',
		header: 'Application sous R (S1)'
	});

	API.addQuestionsSet('l3app_r1_3',{
		inherit: 'ressenti3', 
		name: 'l3app_r1_3',
		header: 'Application sous R (S1)'
	});

	API.addQuestionsSet('l3app_r1_4',{
		inherit: 'ressenti4', 
		name: 'l3app_r1_4',
		header: 'Application sous R (S1)'
	});

	API.addQuestionsSet('l3anglais5e_1',{
		inherit: 'ressenti1', 
		name: 'l3anglais5e_1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais5e_2',{
		inherit: 'ressenti2', 
		name: 'l3anglais5e_2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais5e_3',{
		inherit: 'ressenti3', 
		name: 'l3anglais5e_3',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais5e_4',{
		inherit: 'ressenti4', 
		name: 'l3anglais5e_4',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3app_r2_1',{
		inherit: 'ressenti1', 
		name: 'l3app_r2_1',
		header: 'Application sous R (S2)'
	});

	API.addQuestionsSet('l3app_r2_2',{
		inherit: 'ressenti2', 
		name: 'l3app_r2_2',
		header: 'Application sous R (S2)'
	});

	API.addQuestionsSet('l3app_r2_3',{
		inherit: 'ressenti3', 
		name: 'l3app_r2_3',
		header: 'Application sous R (S2)'
	});

	API.addQuestionsSet('l3app_r2_4',{
		inherit: 'ressenti4', 
		name: 'l3app_r2_4',
		header: 'Application sous R (S2)'
	});

	API.addQuestionsSet('l3excel1',{
		inherit: 'ressenti1', 
		name: 'l3excel1',
		header: 'Excel/VBA (S2)'
	});

	API.addQuestionsSet('l3excel2',{
		inherit: 'ressenti2', 
		name: 'l3excel2',
		header: 'Excel/VBA (S2)'
	});

	API.addQuestionsSet('l3excel3',{
		inherit: 'ressenti3', 
		name: 'l3excel3',
		header: 'Excel/VBA (S2)'
	});

	API.addQuestionsSet('l3excel4',{
		inherit: 'ressenti4', 
		name: 'l3excel4',
		header: 'Excel/VBA (S2)'
	});

	API.addQuestionsSet('l3anglais6e_1',{
		inherit: 'ressenti1', 
		name: 'l3anglais6e_1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais6e_2',{
		inherit: 'ressenti2', 
		name: 'l3anglais6e_2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais6e_3',{
		inherit: 'ressenti3', 
		name: 'l3anglais6e_3',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais6e_4',{
		inherit: 'ressenti4', 
		name: 'l3anglais6e_4',
		header: 'Anglais (S1)'
	});

	//L3 gestion

	API.addQuestionsSet('l3hpm1',{
		inherit: 'ressenti1',
		name: 'l3hpm1',
		header: 'HPM et théorie des organisations (S1)'
	});
	
	API.addQuestionsSet('l3hpm2',{
		inherit: 'ressenti2',
		name: 'l3hpm2',
		header: 'HPM et théorie des organisations (S1)'
	});

	API.addQuestionsSet('l3hpm3',{
		inherit: 'ressenti3',
		name: 'l3hpm3',
		header: 'HPM et théorie des organisations (S1)'
	});

	API.addQuestionsSet('l3hpm4',{
		inherit: 'ressenti4',
		name: 'l3hpm4',
		header: 'HPM et théorie des organisations (S1)'
	});

	API.addQuestionsSet('l3controle_ges1',{
		inherit: 'ressenti1',
		name: 'l3controle_ges1',
		header: 'Contrôle de gestion (S1)'
	});
	
	API.addQuestionsSet('l3controle_ges2',{
		inherit: 'ressenti2',
		name: 'l3controle_ges2',
		header: 'Contrôle de gestion (S1)'
	});

	API.addQuestionsSet('l3controle_ges3',{
		inherit: 'ressenti3',
		name: 'l3controle_ges3',
		header: 'Contrôle de gestion (S1)'
	});

	API.addQuestionsSet('l3controle_ges4',{
		inherit: 'ressenti4',
		name: 'l3controle_ges4',
		header: 'Contrôle de gestion (S1)'
	});

	API.addQuestionsSet('l3etude_march1',{
		inherit: 'ressenti1',
		name: 'l3etude_march1',
		header: 'Etude de marché (S1)'
	});
	
	API.addQuestionsSet('l3etude_march2',{
		inherit: 'ressenti2',
		name: 'l3etude_march2',
		header: 'Etude de marché (S1)'
	});

	API.addQuestionsSet('l3etude_march3',{
		inherit: 'ressenti3',
		name: 'l3etude_march3',
		header: 'Etude de marché (S1)'
	});

	API.addQuestionsSet('l3etude_march4',{
		inherit: 'ressenti4',
		name: 'l3etude_march4',
		header: 'Ressources humaines et diagnostic opérationnel (S1)'
	});

	API.addQuestionsSet('l3rh1',{
		inherit: 'ressenti1',
		name: 'l3rh1',
		header: 'Ressources humaines et diagnostic opérationnel (S1)'
	});
	
	API.addQuestionsSet('l3rh2',{
		inherit: 'ressenti2',
		name: 'l3rh2',
		header: 'Ressources humaines et diagnostic opérationnel (S1)'
	});

	API.addQuestionsSet('l3rh3',{
		inherit: 'ressenti3',
		name: 'l3rh3',
		header: 'Ressources humaines et diagnostic opérationnel (S1)'
	});

	API.addQuestionsSet('l3rh4',{
		inherit: 'ressenti4',
		name: 'l3rh4',
		header: 'Ressources humaines et diagnostic opérationnel (S1)'
	});

	API.addQuestionsSet('l3commerce1',{
		inherit: 'ressenti1',
		name: 'l3commerce1',
		header: 'Commerce et négociation (S1)'
	});
	
	API.addQuestionsSet('l3commerce2',{
		inherit: 'ressenti2',
		name: 'l3commerce2',
		header: 'Commerce et négociation (S1)'
	});

	API.addQuestionsSet('l3commerce3',{
		inherit: 'ressenti3',
		name: 'l3commerce3',
		header: 'Commerce et négociation (S1)'
	});

	API.addQuestionsSet('l3commerce4',{
		inherit: 'ressenti4',
		name: 'l3commerce4',
		header: 'Commerce et négociation (S1)'
	});

	API.addQuestionsSet('l3init_mark1',{
		inherit: 'ressenti1',
		name: 'l3init_mark1',
		header: 'Initiation au marketing (S1)'
	});
	
	API.addQuestionsSet('l3init_mark2',{
		inherit: 'ressenti2',
		name: 'l3init_mark2',
		header: 'Initiation au marketing (S1)'
	});

	API.addQuestionsSet('l3init_mark3',{
		inherit: 'ressenti3',
		name: 'l3init_mark3',
		header: 'Initiation au marketing (S1)'
	});

	API.addQuestionsSet('l3init_mark4',{
		inherit: 'ressenti4',
		name: 'l3init_mark4',
		header: 'Initiation au marketing (S1)'
	});

	API.addQuestionsSet('l3stats3_1',{
		inherit: 'ressenti1',
		name: 'l3stats3_1',
		header: 'Statistiques descriptives (S1)'
	});
	
	API.addQuestionsSet('l3stats3_2',{
		inherit: 'ressenti2',
		name: 'l3stats3_2',
		header: 'Statistiques descriptives (S1)'
	});

	API.addQuestionsSet('l3stats3_3',{
		inherit: 'ressenti3',
		name: 'l3stats3_3',
		header: 'Statistiques descriptives (S1)'
	});

	API.addQuestionsSet('l3stats3_4',{
		inherit: 'ressenti4',
		name: 'l3stats3_4',
		header: 'Statistiques descriptives (S1)'
	});

	API.addQuestionsSet('l3anglais5g_1',{
		inherit: 'ressenti1', 
		name: 'l3anglais5g_1',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais5g_2',{
		inherit: 'ressenti2', 
		name: 'l3anglais5g_2',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais5g_3',{
		inherit: 'ressenti3', 
		name: 'l3anglais5g_3',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3anglais5g_4',{
		inherit: 'ressenti4', 
		name: 'l3anglais5g_4',
		header: 'Anglais (S1)'
	});

	API.addQuestionsSet('l3c2i1',{
		inherit: 'ressenti1', 
		name: 'l3c2i1',
		header: 'C2i (S1)'
	});

	API.addQuestionsSet('l3c2i2',{
		inherit: 'ressenti2', 
		name: 'l3c2i2',
		header: 'C2i (S1)'
	});

	API.addQuestionsSet('l3c2i3',{
		inherit: 'ressenti3', 
		name: 'l3c2i3',
		header: 'C2i (S1)'
	});

	API.addQuestionsSet('l3c2i4',{
		inherit: 'ressenti4', 
		name: 'l3c2i4',
		header: 'C2i (S1)'
	});

	API.addQuestionsSet('l3diag_org1',{
		inherit: 'ressenti1', 
		name: 'l3diag_org1',
		header: 'Diagnostic organisationnel (S2)'
	});

	API.addQuestionsSet('l3diag_org2',{
		inherit: 'ressenti2', 
		name: 'l3diag_org2',
		header: 'Diagnostic organisationnel (S2)'
	});

	API.addQuestionsSet('l3diag_org3',{
		inherit: 'ressenti3', 
		name: 'l3diag_org3',
		header: 'Diagnostic organisationnel (S2)'
	});

	API.addQuestionsSet('l3diag_org4',{
		inherit: 'ressenti4', 
		name: 'l3diag_org4',
		header: 'Diagnostic organisationnel (S2)'
	});

	API.addQuestionsSet('l3fi_entreprise1',{
		inherit: 'ressenti1', 
		name: 'l3fi_entreprise1',
		header: 'Finance d\'entreprise (S2)'
	});

	API.addQuestionsSet('l3fi_entreprise2',{
		inherit: 'ressenti2', 
		name: 'l3fi_entreprise2',
		header: 'Finance d\'entreprise (S2)'
	});

	API.addQuestionsSet('l3fi_entreprise3',{
		inherit: 'ressenti3', 
		name: 'l3fi_entreprise3',
		header: 'Finance d\'entreprise (S2)'
	});

	API.addQuestionsSet('l3fi_entreprise4',{
		inherit: 'ressenti4', 
		name: 'l3fi_entreprise4',
		header: 'Finance d\'entreprise (S2)'
	});

	API.addQuestionsSet('l3etude1',{
		inherit: 'ressenti1', 
		name: 'l3etude1',
		header: 'Etude de cas (S2)'
	});

	API.addQuestionsSet('l3etude1',{
		inherit: 'ressenti2', 
		name: 'l3etude1',
		header: 'Etude de cas (S2)'
	});

	API.addQuestionsSet('l3etude1',{
		inherit: 'ressenti3', 
		name: 'l3etude1',
		header: 'Etude de cas (S2)'
	});

	API.addQuestionsSet('l3etude1',{
		inherit: 'ressenti4', 
		name: 'l3etude1',
		header: 'Etude de cas (S2)'
	});
	
	API.addQuestionsSet('l3anglais6g_1',{
		inherit: 'ressenti1', 
		name: 'l3anglais6g_1',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l3anglais6g_2',{
		inherit: 'ressenti2', 
		name: 'l3anglais6g_2',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l3anglais6g_3',{
		inherit: 'ressenti3', 
		name: 'l3anglais6g_3',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l3anglais6g_4',{
		inherit: 'ressenti4', 
		name: 'l3anglais5g_4',
		header: 'Anglais (S2)'
	});

	API.addQuestionsSet('l3com1',{
		inherit: 'ressenti1', 
		name: 'l3com1',
		header: 'Communication orale et écrite (S2)'
	});

	API.addQuestionsSet('l3com2',{
		inherit: 'ressenti2', 
		name: 'l3com2',
		header: 'Communication orale et écrite (S2)'
	});

	API.addQuestionsSet('l3com3',{
		inherit: 'ressenti3', 
		name: 'l3com3',
		header: 'Communication orale et écrite (S2)'
	});

	API.addQuestionsSet('l3com4',{
		inherit: 'ressenti4', 
		name: 'l3com4',
		header: 'Communication orale et écrite (S2)'
	});

	
//séquence
    API.addSequence([
		//demographie
		
		{inherit:'basicPage',questions:{inherit:'1'}},
		{inherit:'basicPage',questions:{inherit:'2'}},
		{inherit:'basicPage',questions:{inherit:'3'}},
		{inherit:'basicPage',questions:{inherit:'4'}},
		{inherit:'basicPage',questions:{inherit:'5'}},
		 					
		{inherit:'basicPage',      //si question 5 = 2, alors question 6
		  condition : '<%= current.questions.lieu_naissance.response == 2 %>',
		 questions:{inherit:'6'}},
		
		{inherit:'basicPage',      //si question 6 = 999, alors question 7
		  condition : '<%=  current.questions.lieu_naissance.response == 2 && current.questions.annee_france_1.response == 999 %>',
		 questions:{inherit:'7'}},
		
		{inherit:'basicPage',questions:{inherit:'8'}}, //tt le monde se rejoint ici
		
		{inherit:'basicPage',questions:{inherit:'9'}},
		{inherit:'basicPage',questions:{inherit:'10'}},
		{inherit:'basicPage',questions:{inherit:'11'}},
		{inherit:'basicPage',questions:{inherit:'12'}},

		//parcours scolaire 
		
		{inherit:'basicPage',questions:{inherit:'13'}},
		{inherit:'basicPage',questions:{inherit:'14'}},
		{inherit:'basicPage',questions:{inherit:'15'}},
		
		{inherit:'basicPage', //si <2021 & 13.response == 1, donc 16
		  condition:'<%= parseInt(current.questions.bac_annee) < 2021 && current.questions.bac.response == 1 %>',
		 questions:{inherit:'16'}},
		{inherit:'basicPage', //si ≥ 2021 & 13.response == 1 & 14.response == 2, donc 16
		  condition:'<%= parseInt(current.questions.bac_annee) >= 2021 && current.questions.bac.response == 1 && current.questions.bac_fr.response == 2 %>',
		 questions:{inherit:'16'}},
		{inherit:'basicPage', //si ≥ 2021 & 13.response == 1 & 14.response == 1, donc 17
		  condition:'<%= parseInt(current.questions.bac_annee) >= 2021 && current.questions.bac.response == 1 && current.questions.bac_fr.response == 1 %>',
		 questions:{inherit:'17'}},
		{inherit:'basicPAge', //si 17.response == 1, alors 19, sinon 18
		  condition:'<%= <%= parseInt(current.questions.bac_annee) >= 2021 && current.questions.bac.response == 1 && current.questions.bac_fr.response == 1 && current.questions.bac_specialité_term != 1 %>',
		 questions:{inherit: '18'}},

		{inherit: 'basicPage',questions:{inherit:'19'}},
		{inherit: 'basicPage',questions:{inherit:'20'}},
		{inherit: 'basicPage',questions:{inherit:'21'}},
		{inherit: 'basicPage',
		  condition:'<%= current.questions.licence.response == 1 %>',
		 questions: {inherit:'22'}},
		{inherit: 'basicPage',
		  condition:'<%= current.questions.licence != 2 %>',
		 questions: {inherit:'23'}},
		
		{inherit: 'basicPage',questions:{inherit:'24'}},

		//L1

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1anglais1_1'},
			 {inherit:'l1anglais1_2'},
			 {inherit:'l1anglais1_3'},
			 {inherit:'l1anglais1_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1renfo_maths1'},
			 {inherit:'l1renfo_maths2'},
			 {inherit:'l1renfo_maths3'},
			 {inherit:'l1renfo_maths4'}
			 ]
		},
		
		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1maths1_1'},
			 {inherit:'l1maths1_2'},
			 {inherit:'l1maths1_3'},
			 {inherit:'l1maths1_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1stats1_1'},
			 {inherit:'l1stats1_2'},
			 {inherit:'l1stats1_3'},
			 {inherit:'l1stats1_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1intro_eco1'},
			 {inherit:'l1intro_eco2'},
			 {inherit:'l1intro_eco3'},
			 {inherit:'l1intro_eco4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1intro_gest1'},
			 {inherit:'l1intro_gest2'},
			 {inherit:'l1intro_gest3'},
			 {inherit:'l1intro_gest4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1micro1_1'},
			 {inherit:'l1micro1_2'},
			 {inherit:'l1micro1_3'},
			 {inherit:'l1micro1_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1macro1_1'},
			 {inherit:'l1macro1_2'},
			 {inherit:'l1macro1_3'},
			 {inherit:'l1macro1_4'}
			 ]
		},
		
		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1enjeux_manag1'},
			 {inherit:'l1enjeux_manag2'},
			 {inherit:'l1enjeux_manag3'},
			 {inherit:'l1enjeux_manag4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1compta1_1'},
			 {inherit:'l1compta1_2'},
			 {inherit:'l1compta1_3'},
			 {inherit:'l1compta1_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1anglais2_1'},
			 {inherit:'l1anglais2_2'},
			 {inherit:'l1anglais2_3'},
			 {inherit:'l1anglais2_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1maths2_1'},
			 {inherit:'l1maths2_2'},
			 {inherit:'l1maths2_3'},
			 {inherit:'l1maths2_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 1 %>',
		 questions:[
			 {inherit:'l1stats2_1'},
			 {inherit:'l1stats2_2'},
			 {inherit:'l1stats2_3'},
			 {inherit:'l1stats2_4'}
			 ]
		},

		//L2

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2micro2_1'},
			 {inherit:'l2micro2_2'},
			 {inherit:'l2micro2_3'},
			 {inherit:'l2micro2_4'}
			 ]
		},
		
		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2macro2_1'},
			 {inherit:'l2macro2_2'},
			 {inherit:'l2macro2_3'},
			 {inherit:'l2macro2_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2compta2_1'},
			 {inherit:'l2compta2_2'},
			 {inherit:'l2compta2_3'},
			 {inherit:'l2compta2_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2intro_rh1'},
			 {inherit:'l2intro_rh2'},
			 {inherit:'l2intro_rh3'},
			 {inherit:'l2intro_rh4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2etudes_mark1'},
			 {inherit:'l2etudes_mark2'},
			 {inherit:'l2etudes_mark3'},
			 {inherit:'l2etudes_mark4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2maths3_1'},
			 {inherit:'l2maths3_2'},
			 {inherit:'l2maths3_3'},
			 {inherit:'l2maths3_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2proba1_1'},
			 {inherit:'l2proba1_2'},
			 {inherit:'l2proba1_3'},
			 {inherit:'l2proba1_4'}
			 ]
		},
		
		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2anglais3_1'},
			 {inherit:'l2anglais3_2'},
			 {inherit:'l2anglais3_3'},
			 {inherit:'l2anglais3_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2macro3_1'},
			 {inherit:'l2macro3_2'},
			 {inherit:'l2macro3_3'},
			 {inherit:'l2macro3_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2pol_eco_soc1'},
			 {inherit:'l2pol_eco_soc2'},
			 {inherit:'l2pol_eco_soc3'},
			 {inherit:'l2pol_eco_soc4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2mon_fi1'},
			 {inherit:'l2mon_fi2'},
			 {inherit:'l2mon_fi3'},
			 {inherit:'l2mon_fi4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2analyse_fi1'},
			 {inherit:'l2analyse_fi2'},
			 {inherit:'l2analyse_fi3'},
			 {inherit:'l2analyse_fi4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2gest_prod1'},
			 {inherit:'l2gest_prod2'},
			 {inherit:'l2gest_prod3'},
			 {inherit:'l2gest_prod4'}
			 ]
		},
		
		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2analyse_don1'},
			 {inherit:'l2analyse_don2'},
			 {inherit:'l2analyse_don3'},
			 {inherit:'l2analyse_don4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 2 %>',
		 questions:[
			 {inherit:'l2anglais4_1'},
			 {inherit:'l2anglais4_2'},
			 {inherit:'l2anglais4_3'},
			 {inherit:'l2anglais4_4'}
			 ]
		},

		//L3 eco

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3croissance1'},
			 {inherit:'l3croissance2'},
			 {inherit:'l3croissance3'},
			 {inherit:'l3croissance4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3eco_pub1'},
			 {inherit:'l3eco_pub2'},
			 {inherit:'l3eco_pub3'},
			 {inherit:'l3eco_pub4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3eco_inter1'},
			 {inherit:'l3eco_inter2'},
			 {inherit:'l3eco_inter3'},
			 {inherit:'l3eco_inter4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3eco_trav1'},
			 {inherit:'l3eco_trav2'},
			 {inherit:'l3eco_trav3'},
			 {inherit:'l3eco_trav4'}
			 ]
		},
		
		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3econometrie1'},
			 {inherit:'l3econometrie2'},
			 {inherit:'l3econometrie3'},
			 {inherit:'l3econometrie4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3app_r1_1'},
			 {inherit:'l3app_r1_2'},
			 {inherit:'l3app_r1_3'},
			 {inherit:'l3app_r1_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3anglais5e_1'},
			 {inherit:'l3anglais5e_2'},
			 {inherit:'l3anglais5e_3'},
			 {inherit:'l3anglais5e_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3app_r2_1'},
			 {inherit:'l3app_r2_2'},
			 {inherit:'l3app_r2_3'},
			 {inherit:'l3app_r2_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3excel1'},
			 {inherit:'l3excel2'},
			 {inherit:'l3excel3'},
			 {inherit:'l3excel4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 3 %>',
		 questions:[
			 {inherit:'l3anglais6e_1'},
			 {inherit:'l3anglais6e_2'},
			 {inherit:'l3anglais6e_3'},
			 {inherit:'l3anglais6e_4'}
			 ]
		},

		//L3 gestion 
		
		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3hpm1'},
			 {inherit:'l3hpm2'},
			 {inherit:'l3hpm3'},
			 {inherit:'l3hpm4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3controle_ges1'},
			 {inherit:'l3controle_ges2'},
			 {inherit:'l3controle_ges3'},
			 {inherit:'l3controle_ges4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3etude_march1'},
			 {inherit:'l3etude_march2'},
			 {inherit:'l3etude_march3'},
			 {inherit:'l3etude_march4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3rh1'},
			 {inherit:'l3rh2'},
			 {inherit:'l3rh3'},
			 {inherit:'l3rh4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3commerce1'},
			 {inherit:'l3commerce2'},
			 {inherit:'l3commerce3'},
			 {inherit:'l3commerce4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3init_mark1'},
			 {inherit:'l3init_mark2'},
			 {inherit:'l3init_mark3'},
			 {inherit:'l3init_mark4'}
			 ]
		},
		
		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3stats3_1'},
			 {inherit:'l3stats3_2'},
			 {inherit:'l3stats3_3'},
			 {inherit:'l3stats3_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3anglais5g_1'},
			 {inherit:'l3anglais5g_2'},
			 {inherit:'l3anglais5g_3'},
			 {inherit:'l3anglais5g_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3diag_org1'},
			 {inherit:'l3diag_org2'},
			 {inherit:'l3diag_org3'},
			 {inherit:'l3diag_org4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3fi_entreprise1'},
			 {inherit:'l3fi_entreprise2'},
			 {inherit:'l3fi_entreprise3'},
			 {inherit:'l3fi_entreprise4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3etude1'},
			 {inherit:'l3etude2'},
			 {inherit:'l3etude3'},
			 {inherit:'l3etude4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3anglais6g_1'},
			 {inherit:'l3anglais6g_2'},
			 {inherit:'l3anglais6g_3'},
			 {inherit:'l3anglais6g_4'}
			 ]
		},

		{inherit: 'basicPage', 
		  condition: '<%= current.questions.licence.response == 4 %>',
		 questions:[
			 {inherit:'l3com1'},
			 {inherit:'l3com2'},
			 {inherit:'l3com3'},
			 {inherit:'l3com4'}
			 ]
		},
		
    ]);


    return API.script;
});
