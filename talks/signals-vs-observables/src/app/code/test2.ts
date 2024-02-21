type Link = {
  target: string;
  href: string;
}

@Component({
  selector: "app-link",
  template: `<a [href]='link().href' [target]='link().target' />`
})
export class AppLinkComponent {
  protected link = input<Link>({href: "", target: "_blank"});

  effect(() => {
    console.log(`side effect for link: ${link()}`);
  });
}
