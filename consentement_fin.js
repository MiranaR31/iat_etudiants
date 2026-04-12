define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
		submitText: 'Fin',
        header: 'Fin du questionnaire',
        decline: false,
        declineText: isTouch ? 'Refuser' : 'Refuser de répondre', 
        autoFocus:true, 
		prev: true,
		prevText: 'Précédent'
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
        numericValues:'true'
	});
    API.addQuestionsSet('basicSelect',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectOne'
    });

    API.addSequence([
        {inherit: 'basicPage', 
            columnStemHide: false, 
            rowStemHide: false,
            questions: [
            {type: 'info',
            description: '<span style="font-size:1.2em">Nous vous remercions sincèrement d’avoir pris le temps de répondre à ce questionnaire. <br><br> Conformément au protocole décrit dans le document d’information, vos données sont pseudonymisées après appariement des bases et les identifiants directs (notamment nom et prénom) sont supprimés.  Aucun résultat individuel ne fera l’objet d’une diffusion publique. Seuls les membres de l’équipe de recherche ont accès aux données dans le cadre strict du projet scientifique.'
            },
            {inherit: 'basicSelect',
                name: 'consentement_fin',
                type: 'grid',
                cellLabels: false,
                checkboxType: 'colorMark',
                textalign: 'left',
                columns: [
                    {stem: ' ', css: {width: '7%'}},
                    {type: 'text', textProperty: 'right', css: {width: '93%'}}
                ],
                rows: [
                    {right: 'J\'ai compris les informations ci-dessus et j\'accepte que mes données soient utilisées dans le cadre de cette étude.', value :1}, 
                ] 
            },
            {type: 'info',
            description: '<span style="font-size:1.2em">Pour toute question relative à cette recherche, à vos droits RGPD ou à l\'interprétation du test, vous pouvez vous nous contacter aux adresses suivantes : <u>mirana.ranerison@univ-eiffel.fr</u> ou <u>marine.de-talance@univ-eiffel.fr</u>.'
            }

            ]   
        }

    ])




	return API.script;






});