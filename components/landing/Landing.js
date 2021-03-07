// components
import Description from './Description.js';
import StartButton from './StartButton.js';
import Title from './Title.js';


export default function Landing(props) {
    return <div className={'colums is-multiline'} style={{
        marginTop: '50px'
    }}>
        <div className={'column is-full'}>
            <Title />
            <Description />
        </div>
        <div className={'column'} style={{margin: '20px 0'}}>
        </div>
        <div className={'column'}>
            <div className={'buttons is-centered'}>
                <StartButton action={() => {props.start && props.start()}} />
            </div>
        </div>
    </div>;
}