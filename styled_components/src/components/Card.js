import image from '../Image/anik.png';
import Button from './Button';
import Content from './Content';
import Image from './Image';
import Tag from './Tag';

function Card() {
    return (
        <div className="card">
            <Content>
                <Tag text="EXCLUSIVE" />
                <h1>Aubdur Rob Anik</h1>

                <p>
                    My Name is Aubdur Rob Anik. Here i provide two link first link is my Blogspot link and second one is my github repository.
                </p>

                <div className="buttons">
                    <Button link="http://aranik43.blogspot.com/" text="Blog Link" />
                    <Button link="https://github.com/Ar-Anik" text="Github repo" />
                </div> 
            </Content>
 
            <Image imgSrc={image} alter="NotFound" width="300px" />
        </div>
    );
}

export default Card;
