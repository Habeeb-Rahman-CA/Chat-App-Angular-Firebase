import { Injectable } from '@angular/core';
import { IProfileUser } from '../model/interface';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { collection } from 'firebase/firestore';
import { firestore } from '../firebase/firebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private userService: UsersService) { }


}
