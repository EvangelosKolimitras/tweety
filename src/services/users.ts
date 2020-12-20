import { IUsers, IUser } from './interface';
// Temporary data

class User implements IUser {
	public id: string;
	public name: string;
	public avatarURL: string;
	public tweets: string[]

	constructor(user: IUser) {
		this.id = user.id;
		this.name = user.name;
		this.avatarURL = user.avatarURL;
		this.tweets = user.tweets;
	}
}

const john_wick = new User({
	id: "john_wick",
	name: "John Wick",
	avatarURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/keanu-reeves-john-wick.jpeg?bqJ7FYWj8mR1tOe0EheXFKrVWL51TGwP&size=770:433",
	tweets: [
		'8xf0y6ziyjabvozdd253nd',
		'hbsc73kzqi75rg7v1e0i6a',
		'2mb6re13q842wu8n106bhk',
		'6h5ims9iks66d4m7kqizmv',
		'3sklxkf9yyfowrf0o1ftbb'
	],
})

const evan_kol: IUser = new User({
	id: "evan_kol",
	name: "Evan Kol",
	avatarURL: "https://i.stack.imgur.com/AQEIt.jpg?s=136&g=1",
	tweets: [
		'5c9qojr2d1738zlx09afby',
		'f4xzgapq7mu783k9t02ghx',
		'nnvkjqoevs8t02lzcc0ky',
		'4pt0px8l0l9g6y69ylivti',
		'fap8sdxppna8oabnxljzcv',
		'leqp4lzfox7cqvsgdj0e7',
		'26p5pskqi88i58qmza2gid',
		'xi3ca2jcfvpa0i3t4m7ag'
	],
})

const json_stathan: IUser = new User({
	id: "json_stathan",
	name: "Jason Stethan",
	avatarURL: "https://www.gstatic.com/tv/thumb/persons/165127/165127_v9_bb.jpg",
	tweets: [
		'5w6k1n34dkp1x29cuzn2zn',
		'czpa59mg577x1oo45cup0d',
		'omdbjl68fxact38hk7ypy6',
		'3km0v4hf1ps92ajf4z2ytg',
		'njv20mq7jsxa6bgsqc97',
		'sfljgka8pfddbcer8nuxv',
		'r0xu2v1qrxa6ygtvf2rkjw'
	],
})

export const users: IUsers = {
	'evan_kol': evan_kol,
	'john_wick': john_wick,
	'json_stathan': json_stathan
}

