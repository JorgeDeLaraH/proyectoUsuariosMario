import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  datos_clima=[{humedad:'',temperatura:''}]
  users:any
  admin:any
  key:any
  constructor(private router:Router, private servicio:AuthService){}
  ngOnInit(): void {
    /*this.servicio.wheatherApi().subscribe((res)=>{
      this.datos_clima[0].humedad=res.current.humidity;
      this.datos_clima[0].temperatura=res.current.temp_c;
    })*/
   this.servicio.getUsers().subscribe((res)=>{
    this.users=res;
   })
   this.key=window.localStorage.getItem('key');
   console.log(this.key)
  }

}
