import { Component, OnInit, ViewChild } from '@angular/core';
import { EntriesService, EntryDTO } from '../entries.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private entriesService: EntriesService) { }
  text = 'text';
  limit = 10;
  dataSource: MatTableDataSource<EntryDTO>;
  displayedColumns = ['created_at', 'title'];
  entries: EntryDTO[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  async find() {
    this.entries = await this.entriesService.findEntries(this.text, this.limit, 0);
    this.dataSource = new MatTableDataSource<EntryDTO>(this.entries);
  }

}
