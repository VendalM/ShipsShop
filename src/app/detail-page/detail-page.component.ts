import {Component} from '@angular/core';
import {ShipsService} from "../ships.service";
import {PostService} from "../post.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  providers: [ShipsService],
  styleUrls: ['./home-page.scss']
})

export class HomePageComponent {

  public ships: Array<any> | undefined;
  public filter: string = '';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  types: string[] = [];
  ports: string[] = [];
  filterCheckbox: string[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(){
    this.fetchPosts();
  }

  filterByName(){
    this.page = 0;
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.ships = response;
        this.POSTS = response;
        this.getTypes();
        this.getPorts();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

  getTypes(){
    this.ships?.filter( e => {
        if (!this.types.includes(e.type)) {
          this.types.push(e.type);
        }
    })
  }

  getPorts(){
    this.ships?.filter( e => {
      if (!this.ports.includes(e.port)) {
        this.ports.push(e.port);
      }
    })
  }

  filterPoint(event: any): any{
    if(event.target.checked){
      this.POSTS = this.POSTS.filter( (ships: { port: string | any[]; }) => {
        return ships?.port?.includes(event.path[1].outerText)
      })
      this.page = event;
    } else {
      this.fetchPosts();
    }
    let el = document.querySelector('input')
  }

  filterTypes(event: any): any{
    if(event.target.checked){
      this.postService.getAllPosts().subscribe(
        (response) => {
          this.ships = response;
          this.POSTS = response.filter( (ships: { type: string | any[]; }) => {
            return ships?.type?.includes(event.path[1].outerText)
          })
          this.page = 1;
        })
    }
  }


}
