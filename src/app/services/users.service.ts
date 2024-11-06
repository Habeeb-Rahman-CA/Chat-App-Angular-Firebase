import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { IProfileUser } from '../model/interface';
import { collection, getDocs, query,  } from 'firebase/firestore';
import { firestore } from '../firebase/firebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  get allUsers$(): Observable<IProfileUser[]>{
    const ref = collection(firestore, 'users')
    const queryAll = query(ref)
    return from(getDocs(queryAll)).pipe(
      map((snapshot) => 
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }) as IProfileUser)
      )
    );
  }

  constructor() { }
}
