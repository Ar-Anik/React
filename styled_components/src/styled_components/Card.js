import Button from '../components/Button';
import image from '../Image/anik.png';

import { Buttons, CardContainer, Content } from '../styles/Components.styles';
import { H1, Image, P, Tag } from '../styles/Elements.styles';


function Card() {
    return (
        <CardContainer>
            <Content>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1>
                    <stylesTitle text="Aubdur Rob Anik" color="white" />
                </H1>

                <P>
                    My Name is Aubdur Rob Anik. Here i provide two link first link is my Blogspot link and second one is my github repository.
                </P>

                <Buttons>
                    <Button link="http://aranik43.blogspot.com/" text="Blog Link" />
                    <Button link="https://github.com/Ar-Anik" text="Github repo" />
                </Buttons> 
            </Content>
 
            <Image src={image} alt="NotFound" width="300px" />
        </CardContainer>
    );
}

export default Card;
