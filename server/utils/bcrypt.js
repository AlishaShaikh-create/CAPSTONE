import bcrypt from 'bcrypt';

const pwd = '1234';

async function hashPwd(){
    try {
        let hash = await bcrypt.hash(pwd,12);
        console.log(hash);
    } catch (error) {
        console.log(error);
    }
}

async function verify(){
    let hash = '$2b$12$QRQYZs9dJvFJ3sb5w8oxt.uKQXqD2LXYr7Vqdydj0V8iCmue5Rj9u';
    const result = await bcrypt.compare(pwd, hash);
    console.log(result);
}

hashPwd();
verify();