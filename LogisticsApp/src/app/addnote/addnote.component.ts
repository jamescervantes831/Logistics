import { Component, Input, OnInit } from '@angular/core';
import{ Form, FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service'
@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  @Input() providerid: number
  constructor(private notesService: NotesService,
    private fb: FormBuilder) { }


  public noteForm = this.fb.group({
    title: ['', Validators.required],
    body:['', Validators.required]
  })
  ngOnInit(): void {
  }

  onSubmit(noteForm: any){
    this.notesService.postNoteForSP(noteForm, this.providerid).subscribe(
      data => {
        console.log(data['message'])
      },
      error=>{
        console.log(error.message)
      }
    )
  }

}
