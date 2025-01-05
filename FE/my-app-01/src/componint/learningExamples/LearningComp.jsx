import FirstComponent from './FirstComp';
import LearningJavaScript from './LearningJavaScript';
import SecComponent from './SecComp';
import TiredComponent from './ThirdComp';

export default function LearningComp() {
    return (
        <div className="App">
            <FirstComponent/>
            <SecComponent/>
            <TiredComponent/>
            <LearningJavaScript/>
        </div>
    );
}