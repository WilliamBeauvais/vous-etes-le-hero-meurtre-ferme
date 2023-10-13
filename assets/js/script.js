// retirer la cle des options
// trouver les images

const chapters = {
    debut: {
        titre: "Le début",
        description: "Tu travails à la ferme et tu entends un garde qui cri. Tu cours pour allez voir ce qui se passe. Quand tu arrives tu vois un garde sur le sol et tui te mets à chercher des indices. Tu trouves un médaillon d'un groupe de meurtrier connu dans la région et décides d'aller leur rendre visite. Tu dois décider quel chemin prendre.",
        image: "assets/images/hero1.jpg",
        boutons: [
            { text: "Aller à gauche", destination: 'gauche' },
            { text: "Aller à droite", destination: 'droite' }
        ]
    },
    droite: {
        titre: "L'arbre",
        description: "Tu prend la voie de la droite et un arbre s'écrase sur ta grande gueule de fachiste, tu meurs.",
        image: "assets/images/hero1.jpg",
        options: [
            debut = {
                text: "Retourner au début",
                action: "goToChapter('debut')"
            }
        ]
    }
    ,
    gauche: {
        titre: "La rencontre",
        description: "Tu rencontres ton vieil ami. Vous parlez un peu, mais tu as quelque chose à faire. Lui proposes-tu de venir avec toi",
        image: "assets/images/hero1.jpg",
        options: [
            armure = {
                text: "Proposer de venir",
                action: "goToChapter('armure')"
            },
            ennemi = {
                text: "Continuer sur le chemin",
                action: "goToChapter('ennemi')"
            }
        ]
    }
    ,
    armure: {
        titre: "Le cadeau",
        description: "Ton ami ne peut pas venir, mais il te donnes une armure.",
        image: "assets/images/hero1.jpg",
        options: [
            continuer = {
                text: "Continuer sur le chemin",
                action: "goToChapter('ennemi')"
            }
        ]
    }
    ,
    ennemi: {
        titre: "Le combat",
        description: "Tu continue d'avancer sur le chemin et tu arrives au camp du groupe. Un gars vraiment musclé te voit et décide qu'il veut se bettre avec toi parce que tu as le médaillon de son ami, il pense que tu l'as tué. comment veux-tu gérer la situation?",
        image: "assets/images/hero1.jpg",
        options: [
            fuite = {
                text: "Prendre la fuite",
                action: "goToChapter('fuite')"
            },
            combat = {
                text: "Se battre",
                action: "goToChapter('combat')"
            }
        ]
    }
    ,
    fuite: {
        titre: "La fuite",
        description: "Tu prends la fuite, donc tu ne venges pas le garde, mais tu es toujours en vie et ça c'est bien!",
        image: "assets/images/hero1.jpg",
        options: [
            debut = {
                text: "Retourner au début",
                action: "goToChapter('debut')"
            }
        ]
    }
    ,
    combat: {
        titre: "Le combat",
        description: "Tu décide de te battre avec le gros méchant. Tu manque un peu de concentration et il te frappe en plein torse. As-tu une armure?",
        image: "assets/images/hero1.jpg",
        options: [
            oui = {
                text: "Oui",
                action: "goToChapter('paix')"
            },
            non = {
                text: "Non",
                action: "goToChapter('torse')"
            }
        ]
    }
    ,
    torse: {
        titre: "Le torse fracassé",
        description: "Il te fracasse le torse et tu meurs sur le coup.",
        image: "assets/images/hero1.jpg",
        options: [
            debut = {
                text: "Retourner au début",
                action: "goToChapter('debut')"
            }
        ]
    }
    ,
    paix: {
        titre: "La paix",
        description: "Il se casse la main sur ton armure et commence à pleurer tel un nouveau née. Il te donne le meurtrier en échange de la paix.",
        image: "assets/images/hero1.jpg",
        options: [
            debut = {
                text: "Retourner au début",
                action: "goToChapter('debut')"
            }
        ]
    }
}

let twist = false;

/*

const boutons = document.querySelector('.zoneboutton');
while (boutons.firstChild) {
    boutons.removeChild(boutons.firstChild);
    for (let i = 0; i < chapitre.boutons.length; i++) {
        const nouveauBtn = document.createElement('button');
        nouveauBtn.textContent = chapitre.boutons[i].titre;
        nouveauBtn.addEventListener('click', () => {
            goToChapter(chapitre.boutons[i].destination)

        });
        boutons.appendChild(nouveauBtn);
    };
}
*/

function goToChapter(chapterName) {
    if(typeof chapterName === 'string' && chapterName in chapters){
        const chapter = chapters[chapterName];

        console.log(chapter.titre);
        console.log(chapter.description);


    }
    
}

goToChapter("debut");
