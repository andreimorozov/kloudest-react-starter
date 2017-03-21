let login = (username: string, password: string) => {
    if(username !== 'admin' || password !== 'chlen'){
        console.log('incorrect password');
    }
};

// login('admin','chlen');

export {login};