import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { SpService } from '../services/sp.service';
import { Provider } from '../module/provider'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() providerid: number;
  @Input() spDetail: {}
  public notes = []
  public oneNote = {}
  public editmode:boolean = false
  constructor(private spService: SpService,
    private notesService: NotesService) { }

  ngOnInit(): void {
    let dataRows;
    this.notesService.getNoteByProviderID(this.providerid).subscribe(
      data => {
        dataRows = data['data']['rows']
      },
      error => console.log(error),
      () => {
        this.notes = dataRows
      }
    )
    console.log("NOTES AFTER GET REQUEST" +this.notes)
  }

  editMode(){
    if(!this.editmode){
      this.editmode = true
    }else{
      this.editmode = false
    }
  }
  sendNote(note: {}){
    this.oneNote = note;
  }
}
