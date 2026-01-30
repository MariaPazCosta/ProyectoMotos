import { Component, inject, NgModule, OnInit } from '@angular/core';
import { MotosApi } from '../../../services/motos-api';
import { Motorcycle } from '../../../Interfaces/moto.interface';
import { error } from 'console';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  
  motosApi = inject(MotosApi)

  marcas: string[] =["Honda", "Yamaha", "Kawasaki", "Ducati", "BMW"]
  marcaFiltro:string =""

  productos:Motorcycle[] = []
  productOriginal:Motorcycle[] = []
  
  ngOnInit(): void {
    this.getProductos();
  }
  
  getProductos(){
 
    this.motosApi.getMotos().subscribe((res)=>{
      this.productos=res,
      this.productOriginal=res
    }
    
    
    )}

  getProdutByMarca(){
    if(this.marcaFiltro===""){
      this.productos=this
      .productOriginal
      return
    }
   this.motosApi.getMotoByMarca(this.marcaFiltro).subscribe((res)=>{
    this.productos = res
   })
    

  }


}
