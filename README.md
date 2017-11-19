Ce projet est réalisé avec [Create React App](https://github.com/facebookincubator/create-react-app).

## Sommaire

- [Outils utilisés](#outils-utilisés)

## Outils utilisés
Ce projet utilise les technologies [React](https://reactjs.org/) et [Redux](https://redux.js.org/).

Pour gérer les routes (pages), react-router@3.0.5 et react-router-redux@4.0.8 sont utilisés.

Afin de faciliter le développement de l'UI, [material-ui](http://www.material-ui.com) est utilisé. 
De même, les formulaires sont gérés à l'aide de [redux-form](https://redux-form.com/) afin de les lier à redux et de gérer la validation facilement.

[Todo] explications sur les websocket


## Architecture générale du projet

- **features** - contient les features et step definitions de cucumber
- **node_modules** - contient les dépendances du projet - ne pas modifier directement
- **public** - contient certains fichiers statics (index.html) - ne pas modifier
- **src** - contient les sources du projet
    * **actions** - contient les fonctions permettant de créer les actions à dispatcher
    * **api** - contient l'API permettant d'accèder au back-end (requêtes HTTP)
    * **components** - contient tous les composants du projet
    * **configs** - contient les fichiers de configuration (middlewares, thème, config du store...)
    * **containers** - contient tous les containers du projet
    * **pages** - contient les composant représentant des pages du menu
    * **reducers** - contient les reducers (un reducer par "thème" de donnée)
    * **types** - contient les types (bean) des objets utilisés
    * **utils** - contient des fichiers utilitaires (regex de test formulaires par exemple)


![Architecture du projet](https://img4.hostingpics.net/pics/458281Archifront.png "Architecture du projet")
