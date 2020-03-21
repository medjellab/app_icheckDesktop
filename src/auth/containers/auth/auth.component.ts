import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/auth/models/user.model';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  users$: Observable<User[]>;

  constructor(private authService: AuthService) {}
  
  ngOnInit() {

  }

  connect(user: User) {
    console.log('Event Emitter: ', user);
    this.authService.getUser(user).subscribe(res => {
      console.log('Res: ', res);
    });
  }
}