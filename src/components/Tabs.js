import { memo } from "react";

const Tabs = memo((props) => {
    console.log('TABS');
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'C++'];
    return (
        <ul className="languages">
            {languages.map((language, index) => {
                return (
                    <li 
                        key={index}
                        style={language === props.selectedLanguages ? {color: '#d0021b'} : null}
                        onClick={() => props.updateLanguage(language)}
                    >
                        {language}
                    </li>
                )
            })}
        </ul>
    );
})

export default Tabs;