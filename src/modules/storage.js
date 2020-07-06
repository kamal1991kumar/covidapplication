export const storage = {
    token: {
        tokenName: '_token',
        get(){
            const value = window.localStorage.getItem( this.tokenName );
            return value;
        },
        set( value ) {
            window.localStorage.setItem( this.tokenName, value );
        },
        clear() {
            window.localStorage.removeItem( this.tokenName );
        }

    },
    userInfo: {
        tokenName: '_user',
        get(){
            const value = window.localStorage.getItem( this.tokenName );
            return JSON.parse(value);
        },
        set( value ) {
            window.localStorage.setItem( this.tokenName, JSON.stringify(value) );
        },
        clear() {
            window.localStorage.removeItem( this.tokenName );
        }

    }
};