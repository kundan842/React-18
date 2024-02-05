interface LoginAction
{
    type: "LOGIN"
    user : string
}

interface LogoutAction
{
    type:"LOGOUT"
}

type authAction = LoginAction | LogoutAction

const authReducer = (state:string, action:authAction) =>
{
    switch(action.type)
    {
        case 'LOGIN':
            return(action.user)
        case 'LOGOUT':
             return('');
    }

}

export  default authReducer;