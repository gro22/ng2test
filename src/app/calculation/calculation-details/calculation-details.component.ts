import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { CalculationService } from '../../shared/calculation.service';
import { Logger } from '../../shared/calculation.service';

@Component({
  selector: 'app-calculation-details',
  templateUrl: './calculation-details.component.html',
  styleUrls: ['./calculation-details.component.css'],
  providers: [
    CalculationService,
    Logger],
})
export class CalculationDetailsComponent implements OnInit {

  age:number;
  constructor(private route: ActivatedRoute, private calculationService: CalculationService, private logger: Logger) {    
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id']);
    
    this.logger.log("id:" + id);

    this.calculationService.addItems(id, id).then(_ => {
      this.age = _;
    });
  }
}
