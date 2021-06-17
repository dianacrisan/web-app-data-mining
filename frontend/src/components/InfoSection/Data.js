export const homeAboutObject = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    darkText: true,
    topLine: 'Explore Data Science',
    headline: 'Web Application for Data Mining',
    description: 'For my bachelor project, I have decided to integrate data mining steps' 
        + ' and techniques into a beautiful web application.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/about.svg').default,
    alt: 'About',
    dark: true,
    primary: true,
    path: '/signup'
}

export const homeDiscoverObject = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    darkText: false,
    topLine: 'Dicover Analysis Techniques',
    headline: 'Explore Data Mining Steps',
    description: 'Find out more about the steps involved in data mining and' 
        + ' implement them on your own.',
    buttonLabel: 'Sign In',
    imgStart: true,
    img: require('../../images/data.svg').default,
    alt: 'discover',
    dark: true,
    primary: true,
    path: '/signin'
}

export const homeLearnObject = {
    id: 'learn',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    darkText: true,
    topLine: 'Learn Through Practice',
    headline: 'Grasp The Concepts',
    description: 'Understand the notions by implementating' 
        + ' data analysis procedures inside your projects.',
    buttonLabel: 'Join Now',
    imgStart: false,
    img: require('../../images/learn.svg').default,
    alt: 'learn',
    dark: true,
    primary: true,
    path: '/signin'
}

export const mainAcquiringStep = {
    id: 'acquireStep',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    darkText: false,
    topLine: 'Data mining steps',
    headline: 'Data Acquiring',
    description: 'There are several ways in which data can be acquired. Individuals may collect new data by creating surveys or specialized forms, '
     +'they may use previously collected data or data collected by someone else, they can purchase data, or they can acquire data from the Internet. '
     + 'For this application implementation, data was acquired through web scraping.',
    buttonLabel: 'See how the scraped data is used for this application',
    imgStart: true,
    img: require('../../images/data_acquiring.svg').default,
    alt: 'acquireStep',
    dark: true,
    primary: true,
    path: '/data-analysis'
}

export const mainPreprocessingStep = {
    id: 'learn',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    darkText: true,
    topLine: 'Data mining steps',
    headline: 'Data Preprocessing',
    description: 'Data preprocessing refers to the set of actions taken before the data analysis process begins. After data is acquired, '
               +' it usually contains certain problems that must be dealt with before the data mining process continues, '
                +' like the possibility of having too much, too little, or corrupt data.',
    buttonLabel: 'See how data was used for this project',
    imgStart: false,
    img: require('../../images/data_processing.svg').default,
    alt: 'dataPreprocessing',
    dark: true,
    primary: true,
    path: '/data-analysis'
}

export const mainAnalysisStept = {
    id: 'analysisStep',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    darkText: false,
    topLine: 'Data mining steps',
    headline: 'Data Analysis',
    description: 'The process of data analysis refers to the process of applying different algorithms to data in order to generate insights and patterns from it.',
    buttonLabel: 'See how data analysis was implemented in this project',
    imgStart: true,
    img: require('../../images/data_analysis.svg').default,
    alt: 'analysisStep',
    dark: true,
    primary: true,
    path: '/data-analysis'
}

export const mainVisualizationStep = {
    id: 'visualizeStep',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    darkText: true,
    topLine: 'Data mining steps',
    headline: 'Data Visualization',
    description: 'Data visualization is very important because it helps individuals with grasping the meaning of the computed values from a specific scientific procedure. '
                + 'The graphs and plots used for visualizing data are usually a mapping between the original data, which is most frequently numerical, and graphical features such as points and lines.',
    buttonLabel: 'See how data can be visualized in this application',
    imgStart: false,
    img: require('../../images/data_visualization.svg').default,
    alt: 'visualizeStep',
    dark: true,
    primary: true,
    path: '/data-analysis'
}