Ce projet est réalisé avec [Create React App](https://github.com/facebookincubator/create-react-app).

## Sommaire

- [Outils utilisés](#outils-utilisés)

## Outils utilisés
Ce projet utilise les technologies [React](https://reactjs.org/) et [Redux](https://redux.js.org/).

Pour gérer les routes (pages), react-router@3.0.5 et react-router-redux@4.0.8 sont utilisés.

Afin de faciliter le développement de l'UI, [material-ui](http://www.material-ui.com) est utilisé. 
De même, les formulaires sont gérés à l'aide de [redux-form](https://redux-form.com/) afin de les lier à redux et de gérer la validation facilement.

Le typage statique est ajouté à l'aide de [flow](https://flow.org/)

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


### Les composants (components)

Les composants permettent de générer le html à afficher selon les paramètres internes.
Le HTML affiché est celui renvoyé par la fonction "render" du composant.


``` jsx
// @flow - permet de spécifier à flow que le typage est activé sur ce fichier.

// On importe react et toutes les dépendances (autres composants, utilitaires...)
import React, {Component} from "react";
import CreateClassForm from "./CreateClassForm";
import Dialog from "material-ui/Dialog";
import * as ReducerUtils from "../../reducers/ReducerUtils";
import type {Classroom} from "../../types/Classroom";
import AddButton from "../Common/AddButton";

// On défini le typage des propriétés du composant.
// Les propriétés sont les "attributs" passés lors de l'instanciation du composant. Par exemple : 
// <CreateClass postStatus={/* variable du status*/} onPostClass={(attr) => {console.log(attr)}}
type Props = {
    postStatus: ReducerUtils.PostStatus,
    onPostClass: (Classroom) => Promise<Classroom>
};

// On défini le typage de l'état du composant.
// L'état du composant permet de le manipuler en interne. 
// Par exemple, le boolean "open" permet de gérer l'affichage ou non du dialog contenant le formulaire.
// Pour modifier un état, il faut utiliser la fonction this.setState({variableAModifier: nouvelleValeur});
// Cela permet de mofifier l'état du composant tout en actualisant l'affichage du composant.
type State = {
    open: boolean,
    serverErrors: Array<string>
}

// On défini le composant (extends Component) et on le type <Props, State>
class CreateClass extends Component<Props, State> {

    // on défini l'état initial du composant
    state = {
        open: false,
        serverErrors: []
    };
    
    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    onSubmit(form: Object) {
        let classroom: Classroom = {
            className: form.className
        };

        this.props.onPostClass(classroom).then(() => {
            this.handleClose();
        }, (errors) => {
            this.setState({
                serverErrors: errors
            });
        });
    }

    // La fonction render est appelé par React pour récupérer l'affichage du composant (le html).
    // Cette fonction est appelée à chaque fois qu'une variable du state ou des props est modifiée.
    // Les fonctions "render" des composants instanciés à l'interieur de cette fonction sont appelés. (provoque un render recursive)
    // Ici, les fonctions des composants "AddButton", "Dialog" sont appelés aussi. 
    render() {
        return (
            <div>
                <AddButton onClick={this.handleOpen.bind(this)}/>
                <Dialog
                    title="Créer une classe"
                    modal={true}
                    open={this.state.open}
                    className="dialog-title"
                >
                    <CreateClassForm onSubmit={this.onSubmit.bind(this)} onCancel={this.handleClose.bind(this)}/>
                    {this.state.serverErrors.map(error => <p>{error}</p>)}
                </Dialog>
            </div>
        );
    }
}

export default CreateClass;

```

### Containers
Les containers sont des composant qui par convention servent uniquement à "mapper" les 
propriétés d'un composant avec les données du store ou les actions.

Les données du store sont récupérés par les "Selecteurs" dans le reducer. Ces selecteurs sont des fonctions ayant pour
role de récupérer la partie nécessaire dans le store. Cela permet d'abstraire l'organisation du store pour les containers. 

Les actions servent de callback à donner aux composants pour réagir à une action de l'utilisateur sur l'interface.
Ces actions peuvent par exemple effectuer un appel REST au backend et modifier le store avec le résultat de la requête.

```jsx
// @flow 

// On importe les actions, selecteurs
import {connect} from 'react-redux';
import CreateClass from "../../components/CreateClass/CreateClass"

// Un import de cette forme permet de récupérer toutes les fonctions présentent dans le fichier ClassReducer.js
// et de les stocker dans un objet appelé ClassSelectors.
import * as ClassSelectors from "../../reducers/ClassReducer";
import * as ClassActions from "../../actions/ClassActions";

// Cette fonction permet de mapper les données dans le state (store) avec les propriétés du composant.
const mapStateToProps = (store: Object) => { // Le store global est récupéré en paramètre
    return {
        // On utilise un selecteur pour récupérer uniquement le PostStatus (représente l'état de la requête POST)
        postStatus: ClassSelectors.getPostStatus(store) 
    };
};

// Cette fonction permet de mapper les actions à envoyer au reducer avec les propriétés du composant.
const mapDispatchToProps = {
    // Ici, lors de l'appel de this.props.onPostClass dans CreateClass, l'action postClass sera envoyé au reducer.
    onPostClass: ClassActions.postClass
};

// Applique les mapping sur le composant CreateClass
export default connect(mapStateToProps, mapDispatchToProps)(CreateClass)

```