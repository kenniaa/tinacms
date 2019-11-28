/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import { Application } from 'express'
import jwtDecode from 'jwt-decode'

exports.onCreateDevServer = ({ app }: { app: Application }) => {
  console.log('Add Thingy')
  app.use('/___tina', async (req, res, next) => {
    // TODO: Get from request
    const encodedToken = ''

    const user: TinaTeamsUser = jwtDecode(encodedToken)

    await validateUser(user)

    // @ts-ignore
    req.user = {
      name: user.name,
      email: user.email,
    }
    next()
  })
}

interface TinaTeamsUser {
  iss: string
  sub: string
  aud: string
  exp: number
  iat: number
  at_hash: string
  email: string
  email_verified: boolean
  name: string
  federated_claims: {
    connector_id: string
    user_id: string
  }
}

async function validateUser(user: TinaTeamsUser) {
  // TODO: throw if not valid
}
