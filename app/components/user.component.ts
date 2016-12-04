import {Component} from "@angular/core";
import {PostsService} from '../services/post.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];


    constructor(private postsService:PostsService) {
        console.log('construct ran');
        this.name = 'Piotr Korlaga';
        this.email = 'john@gmail.com'
        this.address = {
            street: "12 Main St",
            city: "Boston",
            state: "MA"
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
            console.log(posts);
        })

    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }

    toggleHobbies() {
        if (this.showHobbies === false) {
            this.showHobbies = true;
        } else {
            this.showHobbies = false;
        }
    }

    deleteHobby(index: number) {
        this.hobbies.splice(index, 1);
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    body: string;
}
















