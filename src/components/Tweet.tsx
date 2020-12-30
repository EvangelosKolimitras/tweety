import { Jumbotron, Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { TID } from '../redux/actions/authUser'
import { ITweet, IUsers } from '../services/interface'
import { formatDate } from '../utils/utils'
import { Reply, Heart } from 'react-bootstrap-icons'
interface DefaultRootState {
	users: IUsers, authUser: TID
}
interface Props {
	key: string, tweet: ITweet
}
export function Tweet(props: Props) {
	const { users } = useSelector((state: DefaultRootState) => state.users)
	// const authUser = useSelector((state: DefaultRootState) => state.authUser)
	const {
		tweet: {
			author,
			text,
			timestamp,
			likes,
			replyingTo
		}
	} = props

	const constructTweet = () => {
		return Object
			.values(users)
			.filter(user => user.id === author)
			.map(user =>
				<Container>
					<Avatar avatarUrl={user.avatarURL} />
					<Username name={user.name} />
					<ReplyingTo replyingTo={replyingTo} />
					<Text text={text} />
					<Date timestamp={timestamp} />
					<Icons likes={likes} />
				</Container>
			)
	}

	return (
		<Container>
			<Jumbotron>
				{constructTweet()}
			</Jumbotron>
		</Container>
	)
}

interface AvatarProps { avatarUrl: string }
interface UsernameProps { name: string }
interface TextTweetProps { text: string }
interface ReplyingToProps { replyingTo: string | null }
interface DateProps { timestamp: number }
interface IconsProps { likes: string[] }

const Avatar = (props: AvatarProps) => <Image width={100} height={100} src={props.avatarUrl} roundedCircle />
const Username = (props: UsernameProps) => <h2> {props.name} </h2>
const Text = (props: TextTweetProps) => <p> {props.text} </p>
const ReplyingTo = (props: ReplyingToProps) => (<>  { props.replyingTo && <h6>Replying to @{props.replyingTo}</h6>} </>)
const Date = (props: DateProps) => <span>{formatDate(props.timestamp)}</span>
const Icons = (props: IconsProps) => (<><p><Reply /></p> <p> {props.likes.length}  <Heart /> </p></>)