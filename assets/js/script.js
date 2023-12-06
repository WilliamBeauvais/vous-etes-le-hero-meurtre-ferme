const chapters = {
    debut: {
        titre: "Le début",
        description: "Tu travails à la ferme et tu entends un garde qui cri. Tu cours pour allez voir ce qui se passe. Quand tu arrives tu vois un garde sur le sol et tu te mets à chercher des indices. Tu trouves un médaillon d'un groupe de meurtrier connu dans la région et décides d'aller leur rendre visite. Tu dois décider quel chemin prendre.",
        image: "assets/images/hero1.jpg",
        video: "assets/video/foin.mp4",
        boutons: [
            { text: "Aller à gauche", destination: 'gauche' },
            { text: "Aller à droite", destination: 'droite' }
        ]
    },
    droite: {
        titre: "L'arbre'",
        description: "Tu prend la voie de la droite et un arbre s'écrase sur ta grande gueule de fachiste, tu meurs.",
        image: "assets/images/droite.jpg",
        boutons: [
            { text: "Retourner au début", destination: 'debut' }
        ]
    },
    gauche: {
        titre: "La rencontre",
        description: "Tu rencontres ton vieil ami. Vous parlez un peu, mais tu as quelque chose à faire. Lui proposes-tu de venir avec toi",
        image: "assets/images/ami.jpg",
        boutons: [
            { text: "Proposer de venir", destination: 'armure' },
            { text: "Continuer sur le chemin", destination: 'ennemi' }
        ]
    },
    armure: {
        titre: "Le cadeau",
        description: "Ton ami ne peut pas venir, mais il te donnes une armure.",
        image: "assets/images/armure.jpg",
        boutons: [
            { text: "Continuer sur le chemin", destination: 'ennemi' }
        ]
    },
    ennemi: {
        titre: "Le combat",
        description: "Tu continue d'avancer sur le chemin et tu arrives au camp du groupe. Un gars vraiment musclé te voit et décide qu'il veut se bettre avec toi parce que tu as le médaillon de son ami, il pense que tu l'as tué. comment veux-tu gérer la situation?",
        image: "assets/images/ennemi.jpg",
        boutons: [
            { text: "Prendre la fuite", destination: 'fuite' },
            { text: "Se battre", destination: 'combat' }
        ]
    },
    fuite: {
        titre: "La fuite",
        description: "Tu prends la fuite, donc tu ne venges pas le garde, mais tu es toujours en vie et ça c'est bien!",
        image: "assets/images/fuite.jpg",
        boutons: [
            { text: "Retourner au début", destination: 'debut' }
        ]
    },
    combat: {
        titre: "Le combat",
        description: "Tu décide de te battre avec le gros méchant. Tu manque un peu de concentration et il te frappe en plein torse. As-tu une armure?",
        image: "assets/images/combat.jpg",
        boutons: [
            { text: "Oui", destination: 'paix' },
            { text: "Non", destination: 'torse' }
        ]
    },
    torse: {
        titre: "Le torse fracassé",
        description: "Il te fracasse le torse et tu meurs sur le coup.",
        image: "assets/images/mort.jpg",
        boutons: [
            { text: "Retourner au début", destination: 'debut' }
        ]
    },
    paix: {
        titre: "La paix",
        description: "Il se casse la main sur ton armure et commence à pleurer tel un nouveau née. Il te donne le meurtrier en échange de la paix.",
        image: "assets/images/paix.jpg",
        video: "assets/video/fleur.mp4",
        boutons: [
            { text: "Retourner au début", destination: 'debut' }
        ]
    }
}

function goToChapter(chapterName) {

    localStorage.setItem("chapitre", chapterName);

    let chapTitre = chapters[chapterName]["titre"];
    let chapDescription = chapters[chapterName]["description"];
    let chapImage = chapters[chapterName]["image"];
    let chapVideo = chapters[chapterName]["video"];

    let HTMLtitre = document.querySelector(".titre");
    let HTMLdescription = document.querySelector(".description");
    let HTMLimage = document.querySelector(".image");
    let HTMLvideo = document.querySelector(".video");
    let HTMLaudio = document.querySelector(".audio");

    HTMLtitre.innerHTML = chapTitre;
    HTMLdescription.innerHTML = chapDescription;
    HTMLimage.src = chapImage;
    HTMLvideo.src = chapVideo;

    if (chapVideo != undefined) {
        HTMLvideo.classList.remove("rien");
        HTMLimage.classList.add("rien");
    } else {
        HTMLvideo.classList.add("rien");
        HTMLimage.classList.remove("rien");
    }

    let silence = document.querySelector(".silence");

    if (silence = false) {
        HTMLaudio.play();
        localStorage.setItem("silence", false);
    } else {
        localStorage.setItem("silence", true);
    }

    if (typeof chapterName === 'string' && chapterName in chapters) {
        const chapter = chapters[chapterName];

        console.log(chapter.titre);
        console.log(chapter.description);

        if (chapter.boutons.length) {
            console.log('Options : ');
            for (let i = 0; i < chapter.boutons.length; i++) {
                const btn = chapter.boutons[i];
                const boutons = document.querySelector('.zoneboutton');
                while (boutons.firstChild) {
                    boutons.removeChild(boutons.firstChild);
                    for (let i = 0; i < chapter.boutons.length; i++) {
                        const nouveauBtn = document.createElement('button');
                        nouveauBtn.textContent = chapter.boutons[i].titre;
                        nouveauBtn.addEventListener('click', () => {
                            goToChapter(chapter.boutons[i].destination)

                        });
                        boutons.appendChild(nouveauBtn);
                    };
                }
                console.log(`${btn.text}\n Tapez goToChapter('${btn.destination}')`);
            }
            let btnReset = document.querySelector(".reset");
            btnReset.addEventListener('click', () => {
                localStorage.clear();
            });

        } else {
            return 'Fin';
        }

    }

}

if (chapterName = "armure") {
    localStorage.setItem("twist", true);
}

localStorage.getItem("chapitre")

localStorage.getItem("twist")

localStorage.getItem("silence")

goToChapter("debut");
