import { memo } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRepos } from "../redux/popular.thunk";
import { updateLanguage } from "../redux/popular.actions";
import { useSearchParams } from "react-router-dom";

const Tabs = memo((props) => {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'C++'];

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedLanguages = useSelector(state => state.popularReducer.selectedLanguages);
    
    const paramLang = searchParams.get('language');
    const stateLang = (paramLang ? paramLang : 'All' );

    useEffect(() => {
        dispatch(updateLanguage(stateLang));
        dispatch(getRepos(stateLang));
    }, []);
    

    const onUpdateLanguage = (lang) => {
        if (lang !== selectedLanguages) {
            dispatch(getRepos(lang));
            dispatch(updateLanguage(lang));
            setSearchParams({language: lang});
        }
    }

    
    return (
        <ul className="languages">
            {languages.map((language, index) => {
                return (
                    <li 
                        key={index}
                        style={language === selectedLanguages ? {color: '#d0021b'} : null}
                        onClick={() => onUpdateLanguage(language)}
                    >
                        {language}
                    </li>
                )
            })}
        </ul>
    );
})

export default Tabs;