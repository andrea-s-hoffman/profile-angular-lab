import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: UserProfile = {
    name: "Gustopher",
    contact: "i.chase.squirrels@woofmail.com",
    bio: "I will eat anything—absolutely anything; I have no dignity."
  }

  constructor() { }

  getUserProfile = (): UserProfile => {
    return this.user;
  };

  updateUserProfile = (updatedUserProfile: UserProfile) => {
    this.user = updatedUserProfile;
  }
}
