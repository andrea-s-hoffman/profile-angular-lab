import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userToEdit!: UserProfile

  constructor(private editService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.userToEdit = this.editService.getUserProfile()
  }

  formSubmission = (form: NgForm):void => {
    let updatedProfile: UserProfile = {
        name: form.form.value.name,
        contact: form.form.value.contact,
        bio: form.form.value.bio
    }
    this.editService.updateUserProfile(updatedProfile)
    this.router.navigate(["profile"])
  }

}
