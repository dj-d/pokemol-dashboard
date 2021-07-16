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
            data: ['Team A', 'Team B', 'Team C']
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
            data: ['Team A', 'Team B', 'Team C']
        },
        series: [
            {
                name: 'Team',
                type: 'bar',
                data: [0, 0, 0]
            }
        ]
    };

    public aaaa: EChartsOption = {
        title: {
            text: 'Pokemol - Statistics',
        }
    };
    public sA: number;
    public sB: number;
    public sC: number;

    public listA: Array<string>;
    public listB: Array<string>;
    public listC: Array<string>;

    constructor(private http: HttpClient) {
        this.sA = 0;
        this.sB = 0;
        this.sC = 0;

        this.listA = [];
        this.listB = [];
        this.listC = [];
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
                            name: 'Team',
                            type: 'bar',
                            data: [schif[0].totalScore, schif[1].totalScore, schif[2].totalScore]
                        }
                    }

                    this.sA = schif[0].captures.length;
                    this.sB = schif[1].captures.length;
                    this.sC = schif[2].captures.length;

                    this.listA = [];
                    const la = schif[0].captures.length -1;
                    for (let i = schif[0].captures.length -1; i>=0; i--) {
                        const a = schif[0].captures[i];
                        this.listA.push(a.score + " - " + a.pokemon.name);
                    }

                    this.listB = [];
                    const lb = schif[1].captures.length -1;
                    for (let i = schif[1].captures.length -1; i>=0; i--) {
                        const a = schif[1].captures[i];
                        this.listB.push(a.score + " - " + a.pokemon.name);
                    }

                    this.listC = [];
                    const lc = schif[2].captures.length -1;
                    for (let i = schif[2].captures.length -1; i>=0; i--) {
                        const a = schif[2].captures[i];
                        this.listC.push(a.score + " - " + a.pokemon.name);
                    }
                })
        },1000);
    }
}
