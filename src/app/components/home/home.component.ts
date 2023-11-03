import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private profileService: ProfileService){}

  profiles: Profile[] = [];

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(){
    this.profileService.getProfiles().subscribe(res => {
      console.log(res.body);
      this.profiles = res.body as Profile[];
    });
  }
}
