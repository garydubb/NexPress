import { getSiteSettings } from "./getSiteSettings";

const ModuleSettings = {
    getSiteSettings: async function () {
        return await getSiteSettings();
    },
};

export default ModuleSettings;
