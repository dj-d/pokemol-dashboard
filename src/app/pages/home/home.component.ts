import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import {EChartsOption} from "echarts";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public optionBar: EChartsOption = {
        title: {
            text: 'PokéMOL'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['SquadraA', 'SquadraB', 'SquadraC']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['SquadraA', 'SquadraB', 'SquadraC']
        },
        series: [
            {
                name: 'Squadre',
                type: 'bar',
                data: [0, 0, 0]
            }
        ]
    };

    public aaaa: EChartsOption = {
        title: {
            text: 'aaa',
        }
    };

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.fetch();
    }

    public fetch() {
        setInterval(() => {
            this.http.get('http://193.205.108.4:3000/api/dashboard/teams')
                .subscribe((a) => {
                    let schif = a as Array<any>;
                    this.aaaa = {
                        series: {
                            name: 'Squadre',
                            type: 'bar',
                            data: [schif[0].totalScore, schif[1].totalScore, schif[2].totalScore]
                        }
                    }
                })
        },1000);
    }
}