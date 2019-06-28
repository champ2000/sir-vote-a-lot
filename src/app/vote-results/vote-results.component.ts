import { Component, OnInit, Input, Inject} from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { VoteDataService } from '../services/vote-data.service';
import countBy from 'lodash/countBy';
import entries from 'lodash/entries'

@Component({
  selector: 'app-vote-results',
  templateUrl: './vote-results.component.html',
  styleUrls: ['./vote-results.component.scss']
})
export class VoteResultsComponent implements OnInit {
  public _votedAnswers = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{ticks: {
      beginAtZero: true
    }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  constructor(@Inject(VoteDataService) private voteDataService: VoteDataService) { 
    this.voteDataService = voteDataService;
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.voteDataService.results.subscribe(votes => {
      console.log(votes);
      this._votedAnswers = votes;
      this.provideCount();
    });
  }

  provideCount(): void {
    const result = entries(countBy(this._votedAnswers)).map(([name, count]) => ({ name, count }));
    const keys = [];
    const values = [];
    for( let v of result) {
      keys.push(v.name);
      values.push(v.count);
    }
    this.updateGraph(keys, values);
  }

  updateGraph(keys:string[], values:any): void {
    this.resetResults();
    this.barChartLabels = keys;
    this.barChartData = [{ data: values, label: '' }];
  }

  resetResults():void {
    this.barChartLabels = [];
    this.barChartData = [{ data: [], label: '' }];
  }
   
}
