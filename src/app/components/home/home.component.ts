import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { IProfileUser } from '../../model/interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchControl = new FormControl('')

  userService = inject(UsersService)

  users$ = this.userService.allUsers$

  createChat(otherUsers: IProfileUser){
    
  }

}
