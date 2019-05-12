### Projet Visualisation de Données 

Adrien Lestuzzi - M46

- Où vous avez trouvé les données

Les données sont tirées d'[opendata.swiss](https://opendata.swiss/fr/dataset/solarenergiepotenziale-der-schweizer-gemeinden) , un jeu de données fourni par la confédération. Ces données m'ont semblées intéressantes car l'énérgie solaire et le développement durable sont des sujet importants pour moi.

- Comment vous les avez transformées)

Pour obtenir les données que je voulais à partir du fichier json de base, j'ai d'abord simplement utilisé le fichier de base en récupérant les lignes qui m'interressaient dans le ficher Json. Le professeur m'a fourni un script pour transformer les coordonnées en chiffres interprétable par Leaflet. 

Le professeur m'a conseillé de traiter les données dans un fichier séparé, et m'a fourni un script très performant qui génére un nouveau fichier json nettoyé. Cela m'a permis d'avoir un fichier Json avec seulement les lignes qui m'interressent.

- Quels choix vous avez faits et pourquoi

J'ai choisi leaflet pour visualiser les communes car c'est une librairie facile à utiliser que nous avons vu en cours. J'ai utilisé bootstrap pour le petit menu car c'est une libraire que je connais assez bien. J'ai utilisé node.js, webpack car nous avons travaillé avec ces technologies durant le cours.

Après avoir testé mon script de visualisation, j'ai remarqué que leaflet refuse de générer les marqueurs avec les données de toute la suisse. J'ai donc décidé de ne prendre en compte que les cantons romands. Ce choix s'est fait car l'application est en français. Inclure les autres cantons demanderait de remanier la manière de visualiser les données, car leaflet ne permet pas la technique que j'utilise.

- Comment vous avez visualisé les données

Les données sont repésentées par les communes avec des points à l'emplacement des lieux. j'ai ensuite assigné un marqueur modifié de leaflet (avec une icone personalisée) qui affiche un popUp quand on clique dessus. Le popUp contient le nom du lieu et l'information de potentiel énérgétique dépendant du bouton de menu sur lequel on à cliqué. Cela permet à l'utilisateur de comparer les différentes prédictions du jeu de données directement sur la carte avec des explications à coté du menu.

- Une explication sur le choix du type de représentation

J'ai choisi le mode cartographique car c'est plus visuel et ludique qu'un graphe de type "camembert". Les utilisateurs peuvent regarder les communes qui les interressent de manière bien plus ludique qu'avec une liste 

L'idéal aurait été de réaliser une "heatmap" avec les zones colorées pour chaque communes mais j'ai manqué de temps à la fin du projet. J'ai essayé de suivre le [tutoriel](https://leafletjs.com/examples/choropleth/) sur le site de leaflet, mais la carte du site mapbox me refusait la connexion. Je me suis donc rabattu sur la solution précédente avec les marqueurs Leaflet.

- Ce que vous souhaitez démontrer

J'aimerais démontrer que les communes romandes ont un potentiel énérgétique certain en matière d'énérgie solaire. En visualisant les différents types de scénarii, L'utilisateur peut se rendre compte du potentiel de sa commune. Peut être ira-il se renseigner sur la pose de panneaux sur son toit ? Ce serait une bonne avancée dans la direction d'une consomation d'énérgie durable.

Je me suis rendu compte que ces données étaient utilisées par une [application sur le  marché](https://www.uvek-gis.admin.ch/BFE/sonnendach/index.html?featureId=6858919&lang=fr). Application bien plus aboutie que la mienne mais qui est bien au delà de mes compétences pour l'instant.

- Le public cible

Le public visé par ce travail est les habitant de romandie qui ont potentiellement l'envie et les moyens de faire poser des panneaux solaires chez eux. On parle donc de personnes entre 25 et 60 ans rédisant en suisse romande. Le but final est de leur faire prendre conscience du potentiel énérgétique de leur commune et pourquoi pas les amener à réaliser des travaux sur leur toit.