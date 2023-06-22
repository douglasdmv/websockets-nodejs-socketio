import { randomBytes, scryptSync } from "crypto";

function criaHashESalSenha(senhaDigitada) {
    var salSenha = randomBytes(16).toString("hex");
    var hashSenha = scryptSync(senhaDigitada, salSenha, 64).toString("hex");
    return { salSenha, hashSenha };
}

export default criaHashESalSenha;