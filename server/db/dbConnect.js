import { MongoClient } from "mongodb"

const cliente = new MongoClient("mongodb://alura:123@ac-zuijanp-shard-00-00.ocgqvoa.mongodb.net:27017,ac-zuijanp-shard-00-01.ocgqvoa.mongodb.net:27017,ac-zuijanp-shard-00-02.ocgqvoa.mongodb.net:27017/?ssl=true&replicaSet=atlas-5amxkb-shard-0&authSource=admin&retryWrites=true&w=majority")

let documentosColecao, usuariosColecao

try {
    await cliente.connect()
    const db = cliente.db("alura-websockets")
    documentosColecao = db.collection("documentos")
    usuariosColecao = db.collection("usuarios")
    console.log("Conectado ao banco de dados com sucesso!")
} catch (erro) {
    console.log(erro)
}

export { documentosColecao, usuariosColecao }