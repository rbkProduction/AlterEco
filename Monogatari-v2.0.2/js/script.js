/* global monogatari */
const point = monogatari.storage('stats').point;


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'wrongAnswer1': {
		title: 'Râté !',
		body: 'La bonne réponse était 500 grammes.',
	},
	'rightAnswer1': {
		title: 'Bravo, c\'est correct.',
		body: 'La réponse était effectivement 500 grammes.',
	},
	'solution1': {
		title: 'L\'alternative',
		body: 'Figures-toi qu\'il est facile de remédier à cela en utilisant des capsules à café réutilisables ! Tu peux facilement te les procurer sur <a href=https://www.mycoffeestar.com/fr/ target="_blank">My Coffee Star</a>. De cette manière, la seule chose dont tu devras te débarasser, c\'est le marc à café dans la capsule. Mais, savais-tu aussi que le marc à café est un très bon engrais, ou peut aussi faire office de cendrier. Donc, même cela, tu peux le réutiliser pour le bénéfice de tes petites plantes ou de tes poumons encrassés.',
	},
	'wrongAnswer2': {
		title: 'Aïe, faux.',
		body: 'Non, la réponse était 1,7 milliards de tonnes. Tu auras plus de chance la prochaine fois.',
	},
	'rightAnswer2': {
		title: 'Tu as tout capté !',
		body: 'Bien joué, c\'est la bonne réponse.',
	},
	'solution2': {
		title: 'L\'alternative',
		body: 'Certaines marques proposent des solutions pour contrebalancer cette production de CO2, telle que <a href=https://fr.nikin.ch target="_blank">Nikin</a>. Cette entreprise suisse s\'engage, pour chaque vêtement acheté, à planter un arbre. Moins de culpabilité à acheter de nouveaux habits !',
	},
	'wrongAnswer3': {
		title: 'Dommage, mauvaise réponse.',
		body: 'C\'était en fait 8% de la population, soit environ 560\'000 étudiants.',
	},
	'rightAnswer3': {
		title: 'C\'est exact !',
		body: 'C\'était bien 8% de la population, soit environ 560\'000 étudiants.',
	},
	'solution3': {
		title: 'L\'alternative',
		body: 'Toutes ces personnes sont sujettes à des problèmes de temps en temps, comme un pneu crevé, un problème de frein, ou un dérèglement de la selle. Si c\'est le cas, il existe des organisations qui sont là pour donner leur soutien. Tu peux alors t\'arrêter à <a href=http://www.larustine.bike/ target="_blank">La Rustine</a> ou chez <a href="http://www.recyclo.bike/" target="_blank">Recyclo</a> pour réparer ton vélo et/ou en louer un autre. Le plus chouette c\'est que tu peux aussi apprendre à te débrouiller tout seul en utilisant les outils mis à disposition !',
	},
	'wrongAnswer4': {
		title: 'Non, ce n\'est pas ça.',
		body: 'La réponse correcte était 2,8 millions de tonnes. Et sur ce montant, 12% sont issus du domaine de la restauration, et 40% sont issus du consommateur final. La preuve que le changement se commence chez soi.',
	},
	'rightAnswer4': {
		title: 'Correct.',
		body: 'C\'est bien 2,8 millions de tonnes. Et sur ce montant, 12% sont issus du domaine de la restauration, et 40% sont issus du consommateur final. La preuve que le changement se commence chez soi.',
	},
	'solution4': {
		title: 'L\'alternative',
		body: 'Pour palier à cela, <a href="https://toogoodtogo.ch/fr-ch" target="_blank">Too Good to Go</a> est une application d\'origine allemande qui propose l\'achat d\'invendus à des prix réduits.',
	},
	'wrongAnswer5': {
		title: 'Râté.',
		body: 'Le taux d\'emballage plastique s\'élève à 44% pour les emballages de fruits et légumes conventionnels, mais ce montant grimpe drastiquement à 84% pour les produits bio ! Contradictoire ?',
	},
	'rightAnswer5': {
		title: 'Tu as trouvé, bravo !',
		body: 'Le taux d\'emballage plastique s\'élève à 44% pour les emballages de fruits et légumes conventionnels, mais ce montant grimpe drastiquement à 84% pour les produits bio ! Contradictoire ?',
	},
	'solution5': {
		title: 'L\'alternative',
		body: 'Certains magasins proposent leurs produits en vrac afin de limiter la consommation d\'emballage, comme <a href="https://chez-mamie-grocery-store.business.site/" target="_blank">Chez Mamie</a>, <a href="https://labrouette.ch/" target="_blank">La Brouette</a>, ou encore <a href="https://www.saveursenvrac.ch/" target="_blank">Saveur en vrac</a>.',
	},
	'ecosia': {
		title: 'Ecosia',
		body: 'Quand tu veux faire une rechercher sur Internet, prend l’habitude d’utiliser <a href="https://www.ecosia.org/" target="_blank">Ecosia</a> plutôt qu’un autre navigateur. Ecosia s’engage à planter des arbres pour chaque recherche émise par un utilisateur.',
	},
	'happyTurtle': {
		title: 'Happy Turtle',
		body: 'Les pailles ont certes évolué ces derniers temps. On les trouve le plus souvent sous forme de papier (qui s\'effrite après quelques minutes), plutôt que du plastique de nos jours. Mais <a href="https://www.thehappyturtlestraw.com/?lang=fr" target="_blank">Happy Turtle</a> propose des pailles en farine de blé, ce qui permet ET de sauver les tortues, ET de tout de même apprécier sa boisson.',
	},
	'vomFass': {
		title: 'Vom Fass',
		body: 'Au lieu de rembourrer les poches de grandes entreprises nationales, tu peux te procurer toutes sortes d’huiles et de liqueur chez <a href="https://www.vomfass.ch/" target="_blank">Vom Fass</a> dans le but de soutenir ce commerce local et de profiter d’un rapport qualité/prix inégalable.',
	},
	'shopping': {
		title: 'Procures-toi des pièces uniques',
		body: 'Si tu cherches à te procurer des pièces uniques tout en soutenant les commerces locaux, tu peux privilégier des établissements comme <a href= "https://www.aokas.ch/" target="_blank">Aokas</a>,<a href="https://deuxiemevie.ch/" target="_blank"> Deuxième vie</a>, ou encore <a href="https://www.freitag.ch/fr" target="_blank">Freitag</a> qui soutiennent de belles causes, tout en offrant des designs que tu ne trouveras nul part ailleurs.',
	},
	'potager': {
		title: 'Potager commun',
		body: 'Si tu as un peu la main verte, tu peux aussi t’inscrire pour un <a href="https://www.nyon.ch/participer/demarches-participatives/jardiner-a-nyon-890/diner-a-nyon-890" target="_blank">potager commun</a>, dans lequel tu peux y faire pousser tes propres fruits et légumes et renouer un lien avec la nature. ',
	},
});


// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this game
monogatari.configuration ('credits', {
	'Développement': {
		'Équipe': [
			'Rebecca Kneubuehler',
		],
		'GitHub':[
			'<a href="https://github.com/rbkProduction/Alter-Eco">Code source</a>',
		],
	},
	'Contributeur-trices-s':{
		'Images des décors': '<a href="https://www.pexels.com/fr-fr/">Pexels</a>',
		'Musiques': '<p>YouTube Audio Library</p>',
	},
});


// Define the music used in the game.
monogatari.assets ('music', {
	'music_home': 'music_home_vespersOnTheShore.mp3',
	'music_game': 'music_game_vaqueroPerdido.mp3',
	'music_end': 'music_end_toLoomIsToLove.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'sound_rightAnswer': 'sound_right_beepShort.mp3',
	'sound_wrongAnswer': 'sound_wrong_glassDropAndRoll.mp3',
	'sound_transition': 'sound_transition_rakeSwingWhooshClose.mp3',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'img1_home' : 'img1_home.jpg',
	'img2_scene1': 'img2_scene1.jpg',
	'img3_scene1': 'img3_scene1.jpg',
	'img4_scene2': 'img4_scene2.jpg',
	'img5_scene3': 'img5_scene3.jpg',
	'img6_scene3': 'img6_scene3.jpg',
	'img7_scene4': 'img7_scene4.jpg',
	'img8_scene5': 'img8_scene5.jpg',
	'img9_scene6': 'img9_scene6.jpg',
	'img10_end': 'img10_end.jpg',
});

// Define the Characters
monogatari.characters ({
	'a': {
		name: 'Ta conscience...',
		color: 'rgb(1, 179, 255)',
		border: 'black',
		sprites: {
			angry: 'angry.png',
			ashamed: 'ashamed.png',
			bored: 'bored.png',
			convinced: 'convinced.png',
			doubting: 'doubting.png',
			happy: 'happy.png',
			surprised: 'surprised.png',
		}
	},
	'b': {
		name:'{{player.name}} (Toi)',
		color: 'aliceBlue',
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'play music music_home with loop',
		'show scene img1_home',
		{
			'Input': {
				'Text': 'Comment t\'appelles-tu ?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				// Saves the name of the player in storage.js
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						},
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: '',
						}
					});
				},
				'Warning': 'Tu dois bien avoir un prénom tout de même !'
			}
		},
		'a Salut {{player.name}}. Je te souhaite la bienvenue dans cette expérience Alter\'Eco ! (Cliques pour passer à la suite.)',
		{
			'Choice': {
				'Dialog': 'a Es-tu prêt à garder l\'esprit ouvert quant aux alternatives écologiques qui te seront présentées ?',
				'Yes': {
					'Text': 'Oui, je me réjouis de découvrir tout cela !',
					'Do': 'jump Yes',
				},
				'No': {
					'Text': 'Non.',
					'Do': 'jump No',
				}
			}
		}
	],

	'Yes': [
		'a Fantastique !',
		'a Voici comment va se dérouler la suite. Des questions sur la surconsommation et sur la production des déchets te seront posées.',
		'a Après avoir répondu à la question, la réponse te sera donnée à titre informatif. Puis, afin de t\'aider à modifier tes mauvaises habitudes, une alternative plus écologique te sera proposée.',
		'jump Scene1',
	],
	'No': [
		'a Bien essayé. Mais je vais quand même te les montrer.',
		'a Voici comment va se dérouler la suite. Des questions sur la surconsommation et sur la production des déchets te seront posées.',
		'a Après avoir répondu à la question, la réponse te sera donnée à titre informatif. Puis, afin de t\'aider à modifier tes mauvaises habitudes, une alternative plus écologique te sera proposée.',
		'jump Scene1',
	],

	'Scene1': [
		'play sound sound_transition',
		'stop music music_home',
		'show scene img2_scene1 with fadeIn',
		'play music music_game with loop',
		'a Première question.',
			{
				'Choice': {
					'Dialog': 'a Quelle est la quantité des déchets de capsules à café par personne et par année dans le canton de Vaud en 2019 ?',
					'50 grammes': {
						'Text': '50 grammes',
						'Do':'jump wrongAnswer1',
					},
					'500 grammes': {
						'Text': '500 grammes',
						'Do':'jump rightAnswer1',
						'onChosen': function(){
							monogatari.storage().stats.point += 1;
							return true;
						},
					},
					'5000 grammes': {
						'Text': '5000 grammes',
						'Do':'jump wrongAnswer1',
					},
				}
			}
	],

	'wrongAnswer1': [
		'play sound sound_wrongAnswer',
		'show message wrongAnswer1',
		'show message solution1',
		'jump Scene2',
	],
	'rightAnswer1': [
		'play sound sound_rightAnswer',
		'show message rightAnswer1',
		'show message solution1',
		'jump Scene2',
	],

	'Scene2': [
		'play sound sound_transition',
		'show scene img4_scene2 with fadeIn',
		'a Allez continuons.',
			{
				'Choice': {
					'Dialog': 'a L\'industrie textile produit des émissions de gaz carbonique importantes. Quelle quantité de gaz carbonique est globalement relâché dans l\'atmosphère par an ?',
					'1,7 milliers de tonnes': {
						'Text': '1,7 milliers de tonnes',
						'Do': 'jump wrongAnswer2',
						
					},
					'1,7 millions de tonnes': {
						'Text': '1,7 millions de tonnes',
						'Do': 'jump wrongAnswer2',
					},
					'1,7 milliards de tonnes': {
						'Text': '1,7 milliards de tonnes',
						'Do': 'jump rightAnswer2',
						'onChosen': function(){
							monogatari.storage().stats.point += 1;
							return true;
						},
					},
				},
			},
	],

	'wrongAnswer2': [
		'play sound sound_wrongAnswer',
		'show message wrongAnswer2',
		'show message solution2',
		'jump Scene3',
	],
	'rightAnswer2': [
		'play sound sound_rightAnswer',
		'show message rightAnswer2',
		'show message solution2',
		'jump Scene3',
	],

	'Scene3': [
		'play sound sound_transition',
		'show scene img5_scene3 with fadeIn',
		'a Prochaine question.',
			{
				'Choice': {
					'Dialog': 'a Quel est le pourcentage d\'étudiants qui se rendent à vélo sur leur lieu d\'étude (apprentis et étudiants de 15 ans et plus) en Suisse en 2020 ?',
					'8%': {
						'Text': '8%',
						'Do': 'jump rightAnswer3',
						'onChosen': function(){
							monogatari.storage().stats.point += 1;
							return true;
						},
					},
					'12%': {
						'Text': '12%',
						'Do': 'jump wrongAnswer3',
					},
					'15%': {
						'Text': '15%',
						'Do': 'jump wrongAnswer3',
					},
				},
			},
	],

	'wrongAnswer3': [
		'play sound sound_wrongAnswer',
		'show message wrongAnswer3',
		'show message solution3',
		'jump Scene4',
	],
	'rightAnswer3': [
		'play sound sound_rightAnswer',
		'show message rightAnswer3',
		'show message solution3',
		'jump Scene4',
	],

	'Scene4': [
		'play sound sound_transition',
		'show scene img7_scene4 with fadeIn',
		'a Poursuivons.',
			{
				'Choice': {
					'Dialog': 'a Combien de tonnes de denrées alimentaires sont gaspillées chaque année en Suisse ?',
					'2,8 milliers': {
						'Text': '2,8 milliers',
						'Do': 'jump wrongAnswer4',
					},
					'2,8 millions': {
						'Text': '2,8 millions de tonnes',
						'Do': 'jump rightAnswer4',
						'onChosen': function(){
							monogatari.storage().stats.point += 1;
							return true;
						},
					},
					'2,8 milliards': {
						'Text': '2,8 milliards de tonnes',
						'Do': 'jump wrongAnswer4',
					},
				},
			},
	],
	'wrongAnswer4': [
		'play sound sound_wrongAnswer',
		'show message wrongAnswer4',
		'show message solution4',
		'jump Scene5',
	],
	'rightAnswer4': [
		'play sound sound_rightAnswer',
		'show message rightAnswer4',
		'show message solution4',
		'jump Scene5',
	],

	'Scene5': [
		'play sound sound_transition',
		'show scene img8_scene5 with fadeIn',
		'a Encore quelques questions...',
			{
				'Choice': {
					'Dialog': 'a Une quantité collosale de plastique est utilisée dans l\'emballage des fruits et légumes aux supermarchés. À combien s\'élève cette valeur ?',
					'44%': {
						'Text': '44%',
						'Do': 'jump rightAnswer5',
						'onChosen': function(){
							monogatari.storage().stats.point += 1;
							return true;
						},
					},
					'32%': {
						'Text': '32%',
						'Do': 'jump wrongAnswer5',
					},
					'23%': {
						'Text': '23%',
						'Do': 'jump wrongAnswer5',
					},
				},
			},
	],

	'wrongAnswer5': [
		'play sound sound_wrongAnswer',
		'show message wrongAnswer5',
		'show message solution5',
		'jump Scene6',
	],
	'rightAnswer5': [
		'play sound sound_rightAnswer',
		'show message rightAnswer5',
		'show message solution5',
		'jump Scene6',
	],

	'Scene6': [
		'play sound sound_transition',
		'show scene img9_scene6 with fadeIn',
		'a Voilà quelques exemples de micro-solutions qui peuvent faire une macro-différence sur la façon dont nous prenons soin de notre Terre.',
		'a Certes, il s\'agit d\'intégrer de nouvelles habitudes, mais cela reste amplement possible si le coeur y est. Qu\'en penses-tu ? Es-tu intéressé-e à apprendre d\'autres manières de faire un geste ?',
			{
				'Choice': {
					'Dialog': 'a Montre-moi d\'autres alternatives !',
					'Oh oui': {
						'Text': 'Oh oui !',
						'Do': 'stop music music_game',
						'Do': 'jump moreOptions',
					},
					'Oh non, cela ne m\'intéresse pas, merci.': {
						'Text': 'Oh non, cela ne m\'intéresse pas, merci.',
						'Do': 'stop music music_game',
						'Do': 'jump notJustYet',
					},
				},
			},
	],

	'moreOptions': [
		'stop music music_game',
		'play sound sound_transition',
		'play music music_end with loop',
		'show scene img10_end',
			{
				'Choice': {
					'ecosia': {
						'Text': 'Si tu fais beaucoup de recherches sur le Web...',
						'Do': 'show message ecosia',
					},
				},
			},
			{
				'Choice': {
					'happyTurtle': {
						'Text': 'Si tu souhaites aider les tortues...',
						'Do': 'show message happyTurtle',
					},
				},
			},
			{
				'Choice': {
					'vomFass': {
						'Text': 'Si tu aimes soutenir les commerces locaux...',
						'Do': 'show message vomFass',
					},
				},
			},
			{
				'Choice': {
					'shopping': {
						'Text': 'Si tu aimes te procurer des objets uniques...',
						'Do': 'show message shopping',
					},
				},
			},
			{
				'Choice': {
					'potager': {
						'Text': 'Si tu as la main verte...',
						'Do': 'show message potager',
					},
				},
			},
			{
				'Choice': {
					'ending': {
						'Text': 'Le mot de la fin',
						'Do': 'jump ending',
					},
				},
			},
	],

	'notJustYet': [
		'a Hep hep hep. Tu es sûr-e de vouloir t\'en aller sans consulter les autres options ? C\'est maintenant ou jamais ta dernière chance !',
			{
				'Choice': {
					'Oups': {
						'Text': 'Oups, tu as raison, je me suis trompé-e de bouton.',
						'Do': 'jump moreOptions',
					},
					'Sure': {
						'Text': 'Oui, je sais ce que je fais.',
						'Do': 'end',
					},
				},
			},
	],

	'ending': [
		'a Voilà, je pense que ces quelques minutes passées en ma compagnie ont permis de te rendre attentif sur les alternatives existantes pour développer des habitudes plus saines et écologiques.',
		'a J\'espère que tu solliciteras les initiatives qui t\'ont été suggérées.',
		'end',
	],
});