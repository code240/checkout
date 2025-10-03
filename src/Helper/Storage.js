
export function GetData(key) {
    try {
        let data = localStorage.getItem(key);
        if(data) {
            data = atob(data);
            return data;
        }
        return "";
    } catch (error) {
        console.log(error);
        return "";
    }
}


export function GetToken() {
    try {
        let flow = localStorage.getItem("flow");
        if (flow && flow == 2) {
            let token = GetData("auth_token");
            return token;
        }
        let token = GetData("auth_token");
        return token;
    } catch (error) {
        console.log(error);
        return "";
    }
}

export function SetToken(token) {
    try {
        let flow = localStorage.getItem("flow");
        if (flow && flow == 2) {
            SetData("auth_token2", token);
            return true;
        }
        SetData("auth_token",token);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export function SetData(key, data) {
    try {
        localStorage.setItem(key, btoa(data));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export function GetJsonData(key) {
    try {
        let data = localStorage.getItem(key);
        if(data) {
            data = JSON.parse(atob(data));
            return data;
        }
        return "";
    } catch (error) {
        console.log(error);
        return "";
    }
}
export function SetJsonData(key, data) {
    try {
        data = btoa(JSON.stringify(data));
        localStorage.setItem(key, data);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

