import { Component } from '@angular/core';
import { Plant } from 'src/app/plant';
import { PlantServiceService } from 'src/app/plant-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  number !: number;

  constructor(private plantService: PlantServiceService) {
    this.plantService.findAll().subscribe((data) => {
      this.number = data.length;
    });
  }
}
