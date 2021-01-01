import { Col, Row, Image, Card, Button } from 'react-bootstrap'
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

/**
 * 
 * @param props 
 */
export function Tweet(props: Props) {
	const { users } = useSelector((state: DefaultRootState) => state.users)

	const {
		tweet: {
			author,
			text,
			timestamp,
			likes,
			replyingTo,
		}
	} = props

	/**
	 * 
	 * @param e 
	 * @todo Implement the dispatch for toggling a like on click
	 */
	const handleLike = (e: Event) => {
		e.preventDefault()
		console.log(props.tweet);

	}

	const constructTweet = () => {
		return Object
			.values(users)
			.filter(user => user.id === author)
			.map(user =>
				<Card.Body key={user.id} className="d.flex p-4">
					<Date timestamp={timestamp} />
					<Col>
						<Avatar avatarUrl={user.avatarURL} />
						<Username name={user.name} />
						<ReplyingTo replyingTo={replyingTo} />
						<Text text={text} />
						<Icons handleLike={handleLike} likes={likes} />
					</Col>
				</Card.Body>
			)
	}

	return (
		<Card style={{ width: "50%" }} className="my-4" >
			{constructTweet()}
		</Card >
	)
}

interface AvatarProps { avatarUrl: string }
interface UsernameProps { name: string }
interface TextTweetProps { text: string }
interface ReplyingToProps { replyingTo: string | null }
interface DateProps { timestamp: number }
interface IconsProps { handleLike: any, likes: string[] }

/**
 * 
 * @param props 
 */
const Avatar = (props: AvatarProps) => <Row><Image width={75} height={75} src={props.avatarUrl} roundedCircle /></Row>

/**
 * 
 * @param props 
 */
const Username = (props: UsernameProps) => <Row><Card.Title> {props.name} </Card.Title></Row>

/**
 * 
 * @param props 
 */
const Text = (props: TextTweetProps) => <Row className="my-4"><Card.Text> {props.text} </Card.Text></Row>

/**
 * 
 * @param props 
 */
const ReplyingTo = (props: ReplyingToProps) => (
	<> {
		props.replyingTo && <Card.Subtitle className="blockquote-footer mb-4">
			<cite> Replying to @{props.replyingTo}</cite></Card.Subtitle>
	}</>
)

/**
 * 
 * @param props 
 */
const Date = (props: DateProps) => <Row className="d.flex justify-content-end">{formatDate(props.timestamp)}</Row>

/**
 * 
 * @param props 
 */
const Icons = (props: IconsProps) => (
	<Row className="d.flex flex-row justify-content-end">
		<Button variant="light"> <Reply size={24} /> </Button>
		<Button onClick={props.handleLike} variant="light" >{props.likes.length}<Heart size={18} /> </Button>
	</Row>
)