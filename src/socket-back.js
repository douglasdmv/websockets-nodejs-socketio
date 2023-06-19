import io from "./servidor.js"

io.on("connection", (socket) => {
    console.log(`Usuário conectado: ${socket.id}`)
    socket.on("texto_editor", (texto) => {
        console.log(texto)
    })
})