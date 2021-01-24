import { environment } from 'src/environments/environment'

import { AuthMode } from './auth.enum'
import { InMemoryAuthService } from './auth.inmemory.service'

export function authFactory() {
  // afAuth: AngularFireAuth
  switch (environment.authMode) {
    case AuthMode.InMemory:
      return new InMemoryAuthService()
    case AuthMode.Firebase:
    // return new FirebaseAuthService(afAuth)
    case AuthMode.CustomServer:
      throw new Error('Not yet implemented')
  }
}
