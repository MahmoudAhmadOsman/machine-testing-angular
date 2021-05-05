import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Building } from 'src/app/model/building';
import { Component, OnInit } from '@angular/core';
import { MachinesService } from 'src/app/services/machines.service';


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {


  public errorMessage: String = "An error occurred!";

  public buildings:  any;
  public title: string = "Machine Testing";
  constructor(private machineService: MachinesService, http: HttpClient, private router: Router) {

    machineService.getMachineLists().subscribe(data => {
      console.log("All Building Data: ", data)

      this.buildings =    data.buildings;

    }, (err) => {
      console.log("An error has occured: ", err);
    })














  }



//Save method
  // saveEmployee() {
  //   this.machineService.createNewBuilding(this.employee).subscribe(data => {
  //     console.log(data)
  //     this.goToMachineList();

  //   }),
  //     error => console.log(error);
  // }

  // goToMachineList() {
  //   this.router.navigate(['/']);
    
  // }

  // onSubmit() {
  //   this.saveEmployee();

  // }


  ngOnInit(): void {
  }

}
