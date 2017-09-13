# Getting Started With Node, Express and Postgres (using Sequelize)

This repo houses code for the blog ["Getting Started with Node, Express and Postgres (using Sequelize)"](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)

Code for various sections is separated into branches, so if you're working through the tutorial and you get stuck, you can always checkout the corresponding branch and refer.

Have fun! 😄


#Setear el ambiente
`
$ set NODE_ENV=<ambiente>  
`
#Correr el servidor
`
$ node .
`
#Correr el servidor en modo auto-refresh
`
$ yarn start:dev
`
#Actualizar la version de la BD
`
$ cd server
`

`
 $ ../node_modules/.bin/sequelize db:migrate 
`

# Agregar un modelo
`
$ cd server
`

`
 $ ../node_modules/.bin/sequelize model:create --name Todo --attributes title:string
`