import act1 from '../assets/img/ripening.png'
import act2 from '../assets/img/wool.png'
import act3 from '../assets/img/pexels-timur.png'
import act4 from '../assets/img/pexels.png'
import act5 from '../assets/img/automation.png'
import act6 from '../assets/img/wood.png'
import town1 from '../assets/img/Douala.png'
import town2 from '../assets/img/mosque.png'
import town3 from '../assets/img/open-uri.png'
import proj1 from '../assets/img/proj1.png';
import proj2 from '../assets/img/proj2.png';
import proj3 from '../assets/img/proj3.png';
import news1 from '../assets/img/news1.png';
import news2 from '../assets/img/news2.png';

const newsData = [
    {
        titleP: "Titre du projet",
        title: 'Titre de la publication',
        date: '21-08-2021',
        hour: '12h00',
        image: news1,
        like: 5,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ", 
    },
    {
        titleP: "Titre du projet",
        title: 'Titre de la publication',
        date: '21-08-2021',
        hour: '12h00',
        image: news2,
        like: 2,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ", 
    }
]

const investData = [
    {
        titleP: "Titre du projet",
        category: "Agriculture",
        location: 'Douala, Cameroun',
        rentability: '20%',
        ca: '50M FCFA',
        rsi: '10ans'
    },
    {
        titleP: "Titre du projet",
        category: "Agriculture",
        location: 'Douala, Cameroun',
        rentability: '20%',
        ca: '50M FCFA',
        rsi: '10ans'
    },
    {
        titleP: "Titre du projet",
        category: "Agriculture",
        location: 'Douala, Cameroun',
        rentability: '20%',
        ca: '50M FCFA',
        rsi: '10ans'
    },
    {
        titleP: "Titre du projet",
        category: "Agriculture",
        location: 'Douala, Cameroun',
        rentability: '20%',
        ca: '50M FCFA',
        rsi: '10ans'
    }
]


const sectionAct = [
    {
        name: "Industrie de l'energie",
        image: act4,
        projects: [
            {
                country: "Cameroun",
                image: town1,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Senegal",
                image: town2,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Nigeria",
                image: town3,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: "Agro-industrie",
        image: act1,
        projects: [
            {
                country: "Cameroun",
                image: town1,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Senegal",
                image: town2,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Nigeria",
                image: town3,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: "Numerique",
        image: act5,
        projects: [
            {
                country: "Cameroun",
                image: town1,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Senegal",
                image: town2,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Nigeria",
                image: town3,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]                
            },
        ]
    },
    {
        name: "Forets-bois",
        image: act6,
        projects: [
            {
                country: "Cameroun",
                image: town1,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Senegal",
                image: town2,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Nigeria",
                image: town3,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]                
            },
        ]
    },
    {
        name: "Textiles confectio-cuir",
        image: act2,
        projects: [
            {
                country: "Cameroun",
                image: town1,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Senegal",
                image: town2,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Nigeria",
                image: town3,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]                
            },
        ]
    },
    {
        name: "Immobilier",
        image: act3,
        projects: [
            {
                country: "Cameroun",
                image: town1,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Senegal",
                image: town2,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]
            },
            {
                country: "Nigeria",
                image: town3,
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
                towns: [
                    {
                        name: "Yaounde",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Douala",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Nkongsamba",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    },
                    {
                        name: "Buea",
                        projects: [
                            {
                                image: proj1,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 100,
                                contribution: 30,
                            },
                            {
                                image: proj2,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "10",
                                like: 250,
                                contribution: 20,  
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 200,
                                contribution: 25,
                            },
                            {
                                image: proj3,
                                title: "TITRE DU PROJET",
                                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                                cash: "500",
                                like: 150,
                                contribution: 10,

                            },
                        ]
                    }
                ]                
            },
        ]
    },
]

export {sectionAct, newsData, investData}