const diagnostic = (user) => {
    if (user === "entrepreneur") {
        return {
            fullname: "",
            projectSector: "",
            email: "",
            phone: "",
            socialMedia: "",
            selectedOptions: []
        };
    } else {
        return {
            fullname: "",
            socialMedia: "",
            occupation: "",
            enterpriseName: "",
            enterpriseEmail: "",
            enterpriseSector: "",
            teamQuantity: 0,
            specifyOther: "",
            selectedOptions: []
        };
    }
};

const query = () => {
    return {
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
    };
};

export const initializeForm = {
    diagnostic,
    query
};
