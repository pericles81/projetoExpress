import app from "./app.js"

const port = 8081

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})