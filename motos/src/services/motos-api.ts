import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Motorcycle } from '../Interfaces/moto.interface';
@Injectable({
  providedIn: 'root',
})
export class MotosApi {
  
  private motos: Motorcycle[] =[
  {
    "id": 1,
    "marca": "Honda",
    "modelo": "CBR 600RR",
    "precio": 12100,
    "descripcion": "Motocicleta deportiva de alto rendimiento, ideal para pista y ruta.",
    "imagen": "/fotos/Honda-CBR-600RR.webp",
    "fechaLanzamiento": "2021-03-15"
  },
  {
    "id": 2,
    "marca": "Honda",
    "modelo": "CB 500X",
    "precio": 7300,
    "descripcion": "Moto versátil tipo adventure para ciudad y viajes largos.",
    "imagen": "/fotos/honda-cb500-2.png",
    "fechaLanzamiento": "2020-07-10"
  },
  {
    "id": 3,
    "marca": "Honda",
    "modelo": "Africa Twin 1100",
    "precio": 14500,
    "descripcion": "Adventure touring diseñada para largas travesías y terrenos difíciles.",
    "imagen": "/fotos/honda-at.jpg",
    "fechaLanzamiento": "2022-01-20"
  },
  {
    "id": 4,
    "marca": "Honda",
    "modelo": "CB 300R",
    "precio": 5100,
    "descripcion": "Naked liviana, ágil y eficiente para uso urbano.",
    "imagen": "/fotos/honda cb-300r.jpg",
    "fechaLanzamiento": "2019-09-05"
  },
  {
    "id": 5,
    "marca": "Yamaha",
    "modelo": "MT-07",
    "precio": 7800,
    "descripcion": "Naked deportiva con gran torque y manejo ágil.",
    "imagen": "/fotos/Yamaha_MT_07.jpg",
    "fechaLanzamiento": "2021-05-12"
  },
  {
    "id": 6,
    "marca": "Yamaha",
    "modelo": "R6",
    "precio": 12400,
    "descripcion": "Supersport enfocada en alto rendimiento y conducción deportiva.",
    "imagen": "/fotos/yamaha r6.jpg",
    "fechaLanzamiento": "2020-02-18"
  },
  {
    "id": 7,
    "marca": "Yamaha",
    "modelo": "Tenere 700",
    "precio": 10200,
    "descripcion": "Adventure ligera y robusta para off-road y viajes largos.",
    "imagen": "/fotos/yamaha-tenere700.jpg",
    "fechaLanzamiento": "2021-11-01"
  },
  {
    "id": 8,
    "marca": "Yamaha",
    "modelo": "FZ 25",
    "precio": 4600,
    "descripcion": "Moto urbana con diseño moderno y buen rendimiento.",
    "imagen": "/fotos/yamaha-fz25.jpg",
    "fechaLanzamiento": "2019-04-22"
  },
  {
    "id": 9,
    "marca": "Kawasaki",
    "modelo": "Ninja 400",
    "precio": 5600,
    "descripcion": "Deportiva ligera ideal para iniciarse en motos sport.",
    "imagen": "/fotos/kawasaki-ninja-400-.jpg",
    "fechaLanzamiento": "2020-08-30"
  },
  {
    "id": 10,
    "marca": "Kawasaki",
    "modelo": "Z650",
    "precio": 8100,
    "descripcion": "Naked potente con excelente balance entre confort y rendimiento.",
    "imagen": "/fotos/kawasaki-z650.webp",
    "fechaLanzamiento": "2021-06-14"
  },
  {
    "id": 11,
    "marca": "Kawasaki",
    "modelo": "Versys 650",
    "precio": 9200,
    "descripcion": "Sport touring pensada para viajes cómodos y largos.",
    "imagen": "/fotos/kawasaki-versys-650-2024-estudio-rojo-01.jpg",
    "fechaLanzamiento": "2022-02-10"
  },
  {
    "id": 12,
    "marca": "Kawasaki",
    "modelo": "Ninja ZX-10R",
    "precio": 16700,
    "descripcion": "Superbike de alto nivel usada en competencias.",
    "imagen": "/fotos/kawasaki-ninja-zx-10r-2026-estudio-verde-01.jpg",
    "fechaLanzamiento": "2023-01-05"
  },
  {
    "id": 13,
    "marca": "Ducati",
    "modelo": "Monster 937",
    "precio": 11500,
    "descripcion": "Naked icónica con diseño agresivo y gran potencia.",
    "imagen": "/fotos/Ducati_MONSTER_RED_SPIN_16.webp",
    "fechaLanzamiento": "2021-09-01"
  },
  {
    "id": 14,
    "marca": "Ducati",
    "modelo": "Panigale V2",
    "precio": 16900,
    "descripcion": "Deportiva italiana con tecnología de competición.",
    "imagen": "/fotos/Ducati-panigale-v2-and-v2s.jpg",
    "fechaLanzamiento": "2022-04-18"
  },
  {
    "id": 15,
    "marca": "Ducati",
    "modelo": "Multistrada V4",
    "precio": 18900,
    "descripcion": "Adventure premium con electrónica avanzada.",
    "imagen": "/fotos/Ducati-Multistrada-V4-RS.jpg",
    "fechaLanzamiento": "2021-12-03"
  },
  {
    "id": 16,
    "marca": "Ducati",
    "modelo": "Scrambler Icon",
    "precio": 9800,
    "descripcion": "Estilo retro con tecnología moderna y manejo relajado.",
    "imagen": "/fotos/Scrambler-Ducati.png",
    "fechaLanzamiento": "2020-06-20"
  },
  {
    "id": 17,
    "marca": "BMW",
    "modelo": "G 310R",
    "precio": 5300,
    "descripcion": "Naked compacta con diseño premium y uso urbano.",
    "imagen": "/fotos/bmw-g-310-r.jpg",
    "fechaLanzamiento": "2019-10-11"
  },
  {
    "id": 18,
    "marca": "BMW",
    "modelo": "F 750 GS",
    "precio": 10400,
    "descripcion": "Adventure equilibrada para ruta y caminos mixtos.",
    "imagen": "/fotos/bmw-f-750-gs.jpg",
    "fechaLanzamiento": "2020-03-27"
  },
  {
    "id": 19,
    "marca": "BMW",
    "modelo": "S 1000 RR",
    "precio": 18300,
    "descripcion": "Superbike alemana con tecnología de punta.",
    "imagen": "/fotos/bmw-s-1000-rr.jpg",
    "fechaLanzamiento": "2022-07-19"
  },
  {
    "id": 20,
    "marca": "BMW",
    "modelo": "R 1250 GS",
    "precio": 19900,
    "descripcion": "Moto adventure líder para viajes de larga distancia.",
    "imagen": "/fotos/bmw-r-1250-gs.jpg",
    "fechaLanzamiento": "2021-02-08"
  }
]



 getMotos(): Observable<Motorcycle[]>{

  return of (this.motos)

 }

 getMotoByMarca(marca:string): Observable<Motorcycle[]>{

  const motosFiltradas = this.motos.filter(moto => moto.marca === marca);
  return of (motosFiltradas)
}

}
