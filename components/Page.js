// components
import LeftSide from './LeftSide.js';
import RightSide from './RightSide.js';

// services
import AnimalsService from '../services/animals.js';
import AnimalsProvisioningService from '../services/provisioning/animals.js';
import Engine from '../services/engine.js';
import QuestionsService from '../services/questions.js';
import QuestionsProvisioningService from '../services/provisioning/questions.js';

const columnStyle = {
    height: '100vh'
};

const sectionStyle = {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(/assets/background.jpg)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};


export default function Page() {

    const animals = new AnimalsService();
    const animalsProvisioning = new AnimalsProvisioningService(animals);

    const questions = new QuestionsService();
    const questionsProvisioning = new QuestionsProvisioningService(questions);

    const game = new Engine(animals, questions);

    return <div style={sectionStyle}>
        <div className={'columns'}>
            <div className={'column'} style={columnStyle}>
                <LeftSide game={game} />
            </div>
            <div className={'column'} style={columnStyle}>
                <RightSide items={animals.find()}/>
            </div>
        </div> 
    </div>;
}