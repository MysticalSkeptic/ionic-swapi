import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PlanetResponseNames {
  next: string;
  results: { name: string; }[];
}

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  loadPlanets = () => {
    const p1 = this.httpSvc.get<PlanetResponseNames>("https://swapi.dev/api/planets");
    return p1;
  };
}
