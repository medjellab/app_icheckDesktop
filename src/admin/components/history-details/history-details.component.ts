import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from "@angular/core";
import { Observable } from 'rxjs';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
    selector: 'app-history-details',
    templateUrl: 'history-details.component.html',
    styleUrls: ['./history-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryDetailsComponent implements OnInit {
    @Input() history: Observable<any[]>;

    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    displayedColumns: string[] = ['site', 'date', 'conducteur', 'vehicule', 'engin', 'etat', 'action', 'details'];
    dataSource = new MatTableDataSource();
    dateEntree = new FormControl(moment());
    dateSortie = new FormControl(moment());

    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit() {
        // console.log('History: ', this.history);
        this.history.subscribe(data => {
            console.log('Input: ', data);
            this.dataSource.data = data;
            this.dataSource.paginator = this.paginator;
            this.cd.markForCheck();
        });
    }
}