import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FooterService } from '../services/footer-service.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  resultOnSumbit: boolean | null = null;
  loading: boolean = false;

  constructor(private footerService: FooterService){}

  emailForm: FormGroup = new FormGroup({
    email: new FormControl<String>('', [Validators.required, Validators.email], )
  });

  onSubmit(){
    let email = this.emailForm.value.email;
    
    this.loading = true;

    this.footerService.submitForm(email).subscribe((res: any) => {
      console.log(res);
      res.ok ? this.resultOnSumbit = true : this.resultOnSumbit = false;
      this.loading = false;
    });

  };

  closeModal(){
    this.resultOnSumbit = null;
    this.emailForm.reset()
  }
}
