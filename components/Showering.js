import React, {useState} from 'react'
import { Container, Header, Content, Form, Item, Input, Text, Button } from 'native-base';

export default function Showering() {
    let [done, doneBoolean] = useState(false)
    
    function whenClicked () {
         doneBoolean(true)
         props.navigation.replace("Leaderboard")
    }


    return (
        <Container>
            <Header />
            <Content>
                <Button large dark onPress={() => whenClicked()}>
                    <Text>Done</Text>
                </Button>
            </Content>
        </Container>
    )
}