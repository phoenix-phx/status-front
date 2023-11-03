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
  boliviaProfiles: Profile[] = [];
  argentinaProfiles: Profile[] = [];
  slides: any = [[]];
  
  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(){
    this.profileService.getProfiles().subscribe(res => {
      console.log("response:");
      console.log(res.body);
      this.profiles = res.body as Profile[];
      this.slides = this.chunk(this.profiles, 4);
      console.log("slices: ");
      console.log(this.slides);
      this.selectByCountries(this.profiles);
      });
  }

  // carousel slides processing
  chunk(arr: any, chunkSize: any){
    let R = [];
    for(let i = 0, len = arr.length; i<len; i+=chunkSize){
      R.push(arr.slice(i, i+chunkSize));
    }
    return R;
  }

  selectByCountries(arr: Profile[]){
    for(let p of arr){
      if(p.country === "Bolivia"){
        this.boliviaProfiles.push(p);
      }
      else if(p.country === "Argentina"){
        this.argentinaProfiles.push(p);
      }
    }
  }
}
