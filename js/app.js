const langEnglish = document.getElementById('langEnglish');
const langPortuguese = document.getElementById('langPortuguese');
const toogleLanguage = document.getElementById('toggleLanguage');
const toogleLanguageC = document.getElementById('toggleLanguageC');
const langModal = document.getElementById('langModal')

const introWelcome = document.getElementById('introWelcome');
const titleWelcome = document.getElementById('titleWelcome');
const titleAbout = document.getElementById('titleAbout');
const titleLearning = document.getElementById('titleLearning');
const titleProjects = document.getElementById('titleProjects');
const titleC = document.getElementById('titleC');

const infoAbout = document.getElementById('infoAbout');

const callMenu = document.getElementById('callMenu');

const linkWelcome = document.getElementById('linkWelcome');
const linkAbout = document.getElementById('linkAbout');
const linkLearning = document.getElementById('linkLearning');
const linkProjects = document.getElementById('linkProjects');
const linkWelcomeC = document.getElementById('linkWelcomeC');
const linkAboutC = document.getElementById('linkAboutC');
const linkLearningC = document.getElementById('linkLearningC');
const linkProjectsC = document.getElementById('linkProjectsC');


const portuguese = {
	toggleLanguage: 'Mudar Idioma',
	langEnglish: 'Inglês',
	langPortuguese: 'Português',
	introWelcome: 'Oi, meu nome é Daniel Nogueira e este é o',
	titleWelcome: 'Meu Portifólio',
	titleAbout: 'Sobre Mim',
	titleLearning: 'Meu Aprendizado Até Aqui',
	titleProjects: 'Meus Projetos',
	titleC: 'Portifólio',
	infoAbout: 'Eu esbarrei com a programação, quis ver mais e acabei me apaixonando. Agora estou trabalhando para aprender mais e me tornar um desenvolvedor Full-Stack.',
	linkWelcome: 'Bem-vindo',
	linkAbout: 'Sobre mim',
	linkLearning: 'Aprendendo',
	linkProjects: 'Projetos',
}

const english = {
	toggleLanguage: 'Change Language',
	langEnglish: 'English',
	langPortuguese: 'Portuguese',
	introWelcome: 'Hi, my name is Daniel Nogueira and this is',
	titleWelcome: 'My Portfolio',
	titleAbout: 'About Me',
	titleLearning: 'My Learnings So Far',
	titleProjects: 'My Projects',
	titleC: 'Portfolio',
	infoAbout: 'I stumbled upon programming, wanted to see more and ended up falling in love. Now I am working on learning more and becoming a Full-Stack developer.',
	linkWelcome: 'Welcome',
	linkAbout: 'About me',
	linkLearning: 'Learning',
	linkProjects: 'Projects',
}


window.addEventListener('load', firstLoad);
toogleLanguage.addEventListener('click', callModal);
toogleLanguageC.addEventListener('click', callModal);
langEnglish.addEventListener('click', toggleEnglish);
langPortuguese.addEventListener('click', togglePortuguese);
callMenu.addEventListener('click', showMenu);


function firstLoad(){
	toggleEnglish();
}

function callModal(){
	langModal.style.display = 'block';
}

function closeModal(){
	langModal.style.display = 'none';
}

function showMenu(){
	menuOptions.style.display = 'flex';
}

function closeMenu(){
	menuOptions.style.display = 'none';
}

function toggleEnglish(){
	toogleLanguage.textContent = english.toggleLanguage;
	toogleLanguageC.textContent = english.toggleLanguage;
	langPortuguese.textContent = english.langPortuguese;
	langEnglish.textContent = english.langEnglish;
	introWelcome.textContent = english.introWelcome;
	titleWelcome.textContent = english.titleWelcome;
	titleAbout.textContent = english.titleAbout;
	titleLearning.textContent = english.titleLearning;
	titleProjects.textContent = english.titleProjects;
	titleC.textContent = english.titleC;
	infoAbout.textContent = english.infoAbout;
	linkWelcome.textContent = english.linkWelcome;
	linkAbout.textContent = english.linkAbout;
	linkLearning.textContent = english.linkLearning;
	linkProjects.textContent = english.linkProjects;
	linkWelcomeC.textContent = english.linkWelcome;
	linkAboutC.textContent = english.linkAbout;
	linkLearningC.textContent = english.linkLearning;
	linkProjectsC.textContent = english.linkProjects;

	closeModal();
}

function togglePortuguese(){
	toogleLanguage.textContent = portuguese.toggleLanguage;
	toogleLanguageC.textContent = portuguese.toggleLanguage;
	langPortuguese.textContent = portuguese.langPortuguese;
	langEnglish.textContent = portuguese.langEnglish;
	introWelcome.textContent = portuguese.introWelcome;
	titleWelcome.textContent = portuguese.titleWelcome;
	titleAbout.textContent = portuguese.titleAbout;
	titleLearning.textContent = portuguese.titleLearning;
	titleProjects.textContent = portuguese.titleProjects;
	titleC.textContent = portuguese.titleC;
	infoAbout.textContent = portuguese.infoAbout;
	linkWelcome.textContent = portuguese.linkWelcome;
	linkAbout.textContent = portuguese.linkAbout;
	linkLearning.textContent = portuguese.linkLearning;
	linkProjects.textContent = portuguese.linkProjects;
	linkWelcomeC.textContent = portuguese.linkWelcome;
	linkAboutC.textContent = portuguese.linkAbout;
	linkLearningC.textContent = portuguese.linkLearning;
	linkProjectsC.textContent = portuguese.linkProjects;

	closeModal();
}