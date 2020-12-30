import { Col, Row, Image, Card } from 'react-bootstrap'
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
				<Card.Body className="d.flex p-4">
					<Date timestamp={timestamp} />
					<Col>
						<Avatar avatarUrl={user.avatarURL} />
						<Username name={user.name} />
						<ReplyingTo replyingTo={replyingTo} />
						<Text text={text} />
						<Icons likes={likes} />
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
interface IconsProps { likes: string[] }

const Avatar = (props: AvatarProps) => <Row><Image width={75} height={75} src={props.avatarUrl} roundedCircle /></Row>
const Username = (props: UsernameProps) => <Row><Card.Title> {props.name} </Card.Title></Row>
const Text = (props: TextTweetProps) => <Row className="my-4"><Card.Text> {props.text} </Card.Text></Row>
const ReplyingTo = (props: ReplyingToProps) => (<> { props.replyingTo && <Card.Subtitle className="blockquote-footer mb-4"><cite> Replying to @{props.replyingTo}</cite></Card.Subtitle>} </>)
const Date = (props: DateProps) => <Row className="d.flex justify-content-end">{formatDate(props.timestamp)}</Row>
const Icons = (props: IconsProps) => (<Row className="d.flex flex-row justify-content-end"><p className="mr-3"><Reply size={18} /></p> <p> {props.likes.length}  <Heart size={18} /> </p></Row>)