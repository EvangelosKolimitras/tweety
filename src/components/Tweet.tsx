import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { TID } from '../redux/actions/authUser'
import { ITweet, IUsers } from '../services/interface'
import { formatDate } from '../utils/utils'

interface DefaultRootState {
	users: IUsers, authUser: TID
}
interface Props {
	key: string, tweet: ITweet
}
export function Tweet(props: Props) {
	const { users } = useSelector((state: DefaultRootState) => state.users)
	const authUser = useSelector((state: DefaultRootState) => state.authUser)
	const { tweet: { id, author, timestamp, text } } = props

	const userObj = {
		id,
		author: author,
		text: text,
		timestamp: timestamp,
	}

	const constructTweet = () => {
		return Object
			.values(users)
			.filter(user => user.id === userObj.author)
			.map(user => {
				return (
					<Container className="d-flex ">
						<Row className="justify-content-center">
							<Col xs={6} md={4}>
								<Image width={100} height={100} src={user.avatarURL} roundedCircle />
							</Col>
							<Row className="justify-content-center">
								<Col xs={12} md={8} lg={6}>
									<h2> {user.name} </h2>
									<p> {text} </p>
									<span>{formatDate(timestamp)}</span>
								</Col>
							</Row>
						</Row>
					</Container>
				)
			})
	}

	return (
		<Container>
			<Jumbotron>
				{constructTweet()}
			</Jumbotron>
		</Container>
	)
}

