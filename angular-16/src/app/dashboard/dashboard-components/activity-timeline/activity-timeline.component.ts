import { Component, OnInit, ViewChild } from '@angular/core';
import { Activity, activities } from './activity-timeline-data';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { NgFor, NgIf } from '@angular/common';
import { Plant } from 'src/app/plant';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlantServiceService } from 'src/app/plant-service.service';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-activity-timeline',
  standalone: true,
  imports: [DemoMaterialModule, NgIf, NgFor, FormsModule],
  templateUrl: './activity-timeline.component.html'
})
export class ActivityTimelineComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  plants: Plant[];
  activityData: Activity[] | undefined;
  plant : Plant


  constructor(private plantService: PlantServiceService, private route: ActivatedRoute, private router: Router) {
  var P =   new Plant("h","n",0,0,0,0,"d");
  this.plant = new Plant("","",0,0,0,0,"");
  this.plants = [P];

}  ngOnInit(): void {
  this.plantService.findAll().subscribe((data: Plant[]) => {
    this.plants = data;
  });
  }

  onSubmit() {
    this.plantService.save(this.plant);
    this.tabGroup.selectedIndex = 0; // Index of the tab you want to switch to (e.g., 0 for the first tab)
  }

  gotoUserList() {
    this.router.navigate(['../dashboard']);
  }

}