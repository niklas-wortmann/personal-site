

type Link = {
  target: string;
  href: string;
}

@Component({
  selector: "app-link",
  template: `<a [href]='link.href' [target]='link.target' />`
})
export class AppLinkComponent {

  _link: Link;

  get link(){
    return this._link;
  }

  @Input() set link(value: Link){
      this._link = value;
      console.log('some side effect');
  }
}
