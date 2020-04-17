import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:firebase.User;
  constructor(public authF:AngularFireAuth) { }

  isConnected()
  {
    this.authF.authState
    .subscribe(x=>{
      this.user=x;
    });
  }

  login()
  {
    this.authF.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout()
  {
    this.authF.auth.signOut();
  }
}
