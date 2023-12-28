import { Component, Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    @Output() public Myevent=new EventEmitter();
    @Input()  public bowl:any;
    public data:any;
    public Send()
    {
      this.data="hello from child";
      this.Myevent.emit(this.data);
    }
}
