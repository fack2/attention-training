const app = require('./app')

app.listen(app.get('port'), () => {
  console.log(`App running on http://localhost:${app.get('port')}`)
})
