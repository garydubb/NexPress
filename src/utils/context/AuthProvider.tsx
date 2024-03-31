import React, { useContext, useEffect, useState } from "react";

export interface AppContextProviderInterface {
    children: React.ReactNode;
    value: any;
}

interface AuthContextProps {
    isLoggedIn: boolean;
    menus: any;
    setMenus: any;
    seo: any;
    setSeo: any;
    settings: any;
    setSettings: any;
    content: any;
    setContent: any;
}

const AppContext = React.createContext<AuthContextProps>({
    isLoggedIn: false,
    menus: null,
    setMenus: null,
    seo: null,
    setSeo: null,
    settings: null,
    setSettings: null,
    content: null,
    setContent: null,
});

const AppContextProvider: React.FC<AppContextProviderInterface> = ({
    children,
    value,
}) => {
    const [isLoggedIn] = useState(false);
    const [menus, setMenus] = useState(null);
    const [seo, setSeo] = useState(null);
    const [settings, setSettings] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        const { page } = value;

        if (value && page) {
            setMenus(page.menus);
            setSeo(page.seo);
            setSettings(page.settings);
            setContent(page.content);
        }
    }, [value]);
    return (
        <AppContext.Provider
            value={{
                isLoggedIn,
                menus,
                setMenus,
                seo,
                setSeo,
                settings,
                setSettings,
                content,
                setContent,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

/**
 * Export useContext Hook.
 *
 * @return {Function} WordPress Context
 */
export function useAppContext() {
    return useContext(AppContext);
}

export { AppContext, AppContextProvider };
