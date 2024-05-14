import Bannner from './Bannner';
import Featured from './Featured';
import FAQ from './FAQ';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Group Guru | Home</title>
            </Helmet>
            <Bannner/>
            <Featured/>
            <FAQ/>
        </div>
    );
};

export default Home;