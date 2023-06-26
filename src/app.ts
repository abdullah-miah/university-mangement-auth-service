import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

// parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//application route 

app.use('/api/v1/users/',usersRouter  )
// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('working successfully')
})

export default app
