import { Link } from 'react-router-dom';

export interface HomeProps {
    text: string;
}

const Home: React.FC<HomeProps> = ({ text }) => {
    return (
        <div>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Home;