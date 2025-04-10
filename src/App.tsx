import React, { useState } from 'react';
import './App.css';

// Типы данных
type Skill = {
  name: string;
  level: number;
};

type Experience = {
  position: { ru: string; en: string };
  company: { ru: string; en: string };
  period: string;
  description: { ru: string; en: string };
};

type Project = {
  name: { ru: string; en: string };
  description: { ru: string; en: string };
  link?: string;
  linkPages?: string;
};

type Language = {
  name: { ru: string; en: string };
  level: { ru: string; en: string };
};

type Certificate = {
  name: { ru: string; en: string };
  issuer: { ru: string; en: string };
  date: string;
};

type Education = {
  institution: { ru: string; en: string };
  specialty: { ru: string; en: string };
  period: string;
};

// Переводы
const translations = {
  about: {
    ru: "Привет! Меня зовут Юрий, я из Москвы. Давно интересуюсь IT, но раньше не решался сделать первый шаг. Сейчас я активно изучаю React + TypeScript, углубляясь в эти технологии. Также у меня есть опыт разработки на Python, Node.js и PHP. Мой путь в веб-разработку начался в 2020 году с курсов, после которых я продолжил учиться самостоятельно, параллельно работая приемщиком товаров из Китая и арабских стран. Теперь я готов полностью погрузиться в IT и начать карьеру в этой сфере. Спасибо за внимание! Хорошего дня!",
    en: "Hello! My name is Yuri, I'm from Moscow. I've been interested in IT for a long time but didn't dare to take the first step. Now I'm actively learning React + TypeScript, diving deep into these technologies. I also have experience with Python, Node.js and PHP. My journey into web development started in 2020 with courses, after which I continued to learn on my own while working as a goods receiver from China and Arab countries. Now I'm ready to fully immerse myself in IT and start my career in this field. Thank you for your attention! Have a nice day!"
  },
  sections: {
    about: { ru: "Обо мне", en: "About Me" },
    skills: { ru: "Навыки", en: "Skills" },
    additional: { ru: "Дополнительно", en: "Additional" },
    languages: { ru: "Владение языками", en: "Languages" },
    certificates: { ru: "Сертификаты", en: "Certificates" },
    hobbies: { ru: "Хобби и интересы", en: "Hobbies & Interests" },
    experience: { ru: "Опыт работы", en: "Work Experience" },
    projects: { ru: "Проекты", en: "Projects" },
    education: { ru: "Образование", en: "Education" }
  },
  profile: {
    name: "Юрий Сергеев | Yuri Sergeev",
    position: { ru: "Frontend Developer", en: "Frontend Developer" },
    contacts: {
      email: "sitops@mail.ru",
      phone: "+7 (995) 905-85-75",
      github: "github.com/yuser97",
      telegram: "@yorksergeev"
    }
  },
  nativeLanguage: { ru: "Родной", en: "Native" },
  hobbyList: {
    ru: [
      "Программирование",
      "Изучение новых технологий",
      "Путешествия",
    ],
    en: [
      "Programming",
      "Learning new technologies",
      "Traveling",
    ]
  }
};

const Resume: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'ru' | 'en'>('ru');

  // Функция для получения перевода
  const t = (key: keyof typeof translations.sections) => 
    translations.sections[key][currentLanguage];

  // Функция для получения локализованного значения
  const getLocalized = <T extends { ru: any; en: any }>(obj: T) => 
    obj[currentLanguage];

  // Данные резюме
  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 70 },
    { name: 'Vue.js', level: 60 },
    { name: 'React Native', level: 50 },
    { name: 'Python', level: 50 },
    { name: 'PHP', level: 50 },
  ];

  const languages: Language[] = [
    { name: { ru: 'Русский', en: 'Russian' }, level: { ru: 'Родной', en: 'Native' } },
    { name: { ru: 'Английский', en: 'English' }, level: { ru: 'B2 (Средне-продвинутый)', en: 'B2 (Upper Intermediate)' } },
    { name: { ru: 'Испанский', en: 'Spanish' }, level: { ru: 'C1 (Продвинутый)', en: 'C1 (Intermediate)' } },
  ];

  const certificates: Certificate[] = [
    {
      name: { ru: 'Web Developer', en: 'Web Developer' },
      issuer: { ru: 'Nordic It School', en: 'Nordic It School' },
      date: '2021'
    },

  ];

  const experiences: Experience[] = [
    {
      position: { ru: 'Frontend Developer Стажёр', en: 'Frontend Developer Intern' },
      company: { ru: 'Экосистема Альфа', en: 'Alpha Ecosystem' },
      period: '2025 - Present',
      description: {
        ru: 'Стажировка Frontend (React, TypeScript)',
        en: 'Frontend internship (React, TypeScript)'
      }
    },
  ];

  const projects: Project[] = [
    {
      name: { ru: 'SPA со списком карточек', en: 'SPA with card list' },
      description: { ru: 'Typescript / React / Redux', en: 'Typescript / React / Redux' },
      link: 'https://github.com/yuser97/yuser-test-app.io',
      linkPages: 'https://yuser97.github.io/yuser-test-app.io/'
    },
    {
      name: { ru: 'Адаптивный сайт (Проект 2020 года)', en: 'Responsive website (2020 project)' },
      description: { ru: 'Only HTML+CSS / JS / Node.js', en: 'Only HTML+CSS / JS / Node.js' },
      link: 'https://github.com/yuser97/project_2.github.io',
      linkPages: 'https://yuser97.github.io/project_2.github.io/'
    }
  ];

  const education: Education[] = [
    {
      institution: { ru: 'Российский университет дружбы народов', en: 'Peoples\' Friendship University of Russia' },
      specialty: { ru: 'Психология', en: 'Psychology' },
      period: '2015 - 2019'
    },
    {
      institution: { ru: 'Nordic It School', en: 'Nordic IT School' },
      specialty: { ru: 'Web разработчик', en: 'Web Developer' },
      period: '2020 - 2021'
    },
    {
      institution: { ru: 'Learn.Javascript.ru', en: 'Learn.Javascript.ru' },
      specialty: { ru: 'React, JavaScript, Typescript', en: 'React, JavaScript, Typescript' },
      period: '2021 - 2025'
    }
  ];

  return (
    <div className="resume-container">
      <div className="language-switcher">
        <button 
          onClick={() => setCurrentLanguage('ru')}
          className={currentLanguage === 'ru' ? 'active' : ''}
        >
          RU
        </button>
        <button 
          onClick={() => setCurrentLanguage('en')}
          className={currentLanguage === 'en' ? 'active' : ''}
        >
          EN
        </button>
      </div>

      <header className="header">
        <div className="profile-pic">
          <img src="./awQ6iyA9lok.jpg" alt="Profile" />
        </div>
        <div className="header-info">
          <h1>{translations.profile.name.split('|')[currentLanguage === 'ru' ? 0 : 1].trim()}</h1>
          <h2>{getLocalized(translations.profile.position)}</h2>
          <div className="contacts">
          <p>
    <i className="fas fa-envelope"></i>{' '}
    <a href={`mailto:${translations.profile.contacts.email}`}>
      {translations.profile.contacts.email}
    </a>
  </p>
  <p>
    <i className="fas fa-phone-alt"></i>{' '}
    <a href={`tel:${translations.profile.contacts.phone.replace(/[^0-9+]/g, '')}`}>
      {translations.profile.contacts.phone}
    </a>
  </p>
  <p>
    <i className="fab fa-github"></i>{' '}
    <a href={`https://${translations.profile.contacts.github}`} target="_blank" rel="noopener noreferrer">
      {translations.profile.contacts.github}
    </a>
  </p>
  <p>
    <i className="fab fa-telegram-plane"></i>{' '}
    <a href={`https://t.me/${translations.profile.contacts.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
      {translations.profile.contacts.telegram}
    </a>
  </p>
          </div>
        </div>
      </header>

      <section className="section">
  <h3>{t('about')}</h3>
  <p>
    {getLocalized(translations.about)
      .split('\n')
      .map((paragraph: string, i: number) => (
        <React.Fragment key={i}>
          {paragraph}
        </React.Fragment>
      ))}
  </p>
</section>

      <div className="two-columns">
        <section className="section">
          <h3>{t('skills')}</h3>
          <div className="skills">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>{t('additional')}</h3>
          <div className="tech-tags">
            <span className="tag">React Hooks</span>
            <span className="tag">Gulp</span>
            <span className="tag">jQuery</span>
            <span className="tag">Webpack</span>
            <span className="tag">REST API</span>
            <span className="tag">MySQL</span>
          </div>
        <h3>{t('hobbies')}</h3>
        <div className="hobbies">
          {translations.hobbyList[currentLanguage].map((hobby, index) => (
            <span key={index} className="hobby-tag">{hobby}</span>
          ))}
        </div>
        </section>
      </div>
      <div className="two-columns">
      <section className="section">
        <h3>{t('education')}</h3>
        {education.map((edu, index) => (
          <div key={index} className="education">
            <h4>{getLocalized(edu.institution)}</h4>
            <p>{getLocalized(edu.specialty)} • {edu.period}</p>
          </div>
        ))}
      </section>
      <section className="section">
        <h3>{t('certificates')}</h3>
        <div className="certificates">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-item">
              <h4>{getLocalized(cert.name)}</h4>
              <p>{getLocalized(cert.issuer)} • {cert.date}</p>
            </div>
          ))}
        </div>
        <h3>{t('languages')}</h3>
        <div className="languages">
          {languages.map((language, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{getLocalized(language.name)}</span>
              <span className="language-level">{getLocalized(language.level)}</span>
            </div>
          ))}
        </div>
      </section>

      </div>

      <section className="section">
        <h3>{t('experience')}</h3>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>{getLocalized(exp.position)}</h4>
                <p className="company">{getLocalized(exp.company)} • {exp.period}</p>
                <p>{getLocalized(exp.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <h3>{t('projects')}</h3>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h4>{getLocalized(project.name)}</h4>
              <p>{getLocalized(project.description)}</p>
              {project.link && (
                <>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href={project.linkPages} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub Pages
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Resume;